import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure your email provider (Gmail, custom domain, etc.)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your SMTP host
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email app password
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Receives the email in YOUR inbox
    replyTo: email,             // Hitting 'Reply' replies directly to the visitor
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

app.listen(5000, () => console.log('Server running on port 5000'));
