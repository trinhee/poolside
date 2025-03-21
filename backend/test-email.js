require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'your-email@example.com',
  from: process.env.FROM_EMAIL,
  subject: 'Test Email from SendGrid',
  text: 'This is a test email.',
  html: '<strong>This is a test email.</strong>',
};

sgMail
  .send(msg)
  .then(() => console.log('✅ Test email sent!'))
  .catch((error) => console.error('❌ Error sending test email:', error.response?.body || error.message));
