import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    'https://tobzidapplication.netlify.app', // Your live Netlify domain
    'http://localhost:5173',                 // Local Vite dev server
    'http://localhost:3000'                  // Alternative local port
  ],
  methods: ['POST', 'GET'],
  credentials: true
}));

app.use(express.json());

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic sanity check to ensure fields aren't empty
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

// Dynamic port for host platforms + local 5000 fallback
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));