const { createTransport } = require('nodemailer');
require('dotenv').config();
const ejs = require('ejs');

const email_config = require('../config/emailConfig');
const transporter = createTransport(email_config);

async function sendMail() {
  try {
    const htmlContent = await ejs.renderFile('./src/views/content.ejs', {
      name: 'Benson Macharia',
      weekNumber: 8,
    });

    const message_options = {
      from: process.env.EMAIL_USER,
      to: 'jonathan.mwaniki@thejitu.com',
      subject: 'BENSON MACHARIA WEEKLY REPORT WEEK 8',
      html: htmlContent,
      attachments: [
        {
          filename: 'BENSON MACHARIA WEEKLY REPORT WEEK 8.docx',
          path: './src/assets/BENSON MACHARIA WEEKLY REPORT 6.docx',
        }
      ]
    };

    const info = await transporter.sendMail(message_options);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendMail;

