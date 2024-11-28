import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.EMAIL_PASSWORD // Use an app-specific password
  }
});

app.get('/',(req,res)=>{
  res.send("hello");
})

app.get('/vercel',(req,res)=>{
  res.send("hello vercel");
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'prasaddeepak896@gmail.com',
    subject: `Portfolio Contact from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});