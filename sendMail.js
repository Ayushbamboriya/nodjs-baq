const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER, // Sender Gmail address
        pass: process.env.GMAIL_PASS, // App password from Gmail account
    },
});

const sendMail = async (toEmail) => {
    const mailOptions = {
        from: {
            name: 'BAQ',
            address: process.env.GMAIL_USER,
        },
        to: toEmail, // Use the dynamic email address from the request
        subject: "New user from landing page",
        text: `landing page: ${toEmail}`, // plain text body
        html: `<b>Landing page: ${toEmail}</b>`, // html body
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent!');
    } catch (error) {
        console.error(error);
    }
};

module.exports = sendMail;
