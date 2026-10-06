import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

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

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Root endpoint for health checks
app.get('/', (req, res) => {
  res.send('Server is running and healthy!');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.EMAIL_USER || 'tobzid2013@gmail.com',
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    console.log('Email sent successfully via Resend:', data);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending mail via Resend:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));