// Load environment variables
require('dotenv').config();

const nodemailer = require('nodemailer');

// Create a transporter object using Hostinger's SMTP server
const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com', // Confirm this is the correct SMTP server
    port: 465, // Use 465 for SSL
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // Should be the email
        pass: process.env.EMAIL_PASS, // Should be the password
    },
    // logger: true, // Enables logging
    // debug: true,  // Output the debug info to the console
});

// Function to send mail
const sendMail = async (toEmail) => {
    const mailOptions = {
        from: {
            name: 'BAQ',
            address: process.env.EMAIL_USER, // Should match the user
        },
        to: process.env.EMAIL_USER,
        subject: "New user from landing page",
        text: `Landing page: ${toEmail}`,
        html: `<b>Landing page: ${toEmail}</b>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Export the sendMail function
module.exports = sendMail;
