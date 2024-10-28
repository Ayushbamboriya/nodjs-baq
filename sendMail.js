const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.your_email_provider.com', // e.g., Hostinger's SMTP server
    port: 465, // or 587 for TLS/STARTTLS
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendMail = async (toEmail) => {
    const mailOptions = {
        from: {
            name: 'BAQ',
            address: process.env.EMAIL_USER,
        },
        to: toEmail,
        subject: "New user from landing page",
        text: `landing page: ${toEmail}`,
        html: `<b>Landing page: ${toEmail}</b>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendMail;
