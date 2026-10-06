import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from 'dns';

// Force DNS resolution to prefer IPv4 globally
dns.setDefaultResultOrder('ipv4first');

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'https://tobzidapplication.netlify.app',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running and healthy!');
});

// Transporter configured with explicit IPv4 family and socket forcing
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // STARTTLS for port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4, // Explicitly enforce IPv4 on connection
  connectionTimeout: 10000, // Prevent hanging requests (10 seconds timeout)
  greetingTimeout: 5000,
  socketTimeout: 10000
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, 
    replyTo: email, 
    subject: `New Portfolio Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));