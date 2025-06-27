import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const frontend=process.env.FRONTEND
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendTestEmail = async (candidate, jobId) => {
  const testLink = `${frontend}/test/${jobId}/${candidate._id}`;
 // replace with real domain

  const mailOptions = {
    from: `"HireWise AI" <${process.env.EMAIL_USER}>`,
    to: candidate.email,
    subject: 'Your Test for Applied Job',
    html: `
      <p>Hi ${candidate.name},</p>
      <p>Thank you for applying. Please click the link below to take your test:</p>
      <a href="${testLink}">${testLink}</a>
      <p>Good luck!</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`📨 Test email sent to ${candidate.email}`);
  } catch (err) {
    console.error(`❌ Failed to send email to ${candidate.email}:`, err.message);
  }
};

export const sendResultEmail = async (candidate, score, passed) => {
  const status = passed ? 'PASSED ✅' : 'FAILED ❌';

  const mailOptions = {
    from: `"HireWise AI" <${process.env.EMAIL_USER}>`,
    to: candidate.email,
    subject: 'Your Test Result',
    html: `
      <p>Hi ${candidate.name},</p>
      <p>Your test is evaluated. Score: <b>${score.toFixed(2)}%</b></p>
      <p>Status: <b>${status}</b></p>
      <p>Thank you for applying!</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

