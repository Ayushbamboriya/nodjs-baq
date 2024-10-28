const express = require('express');
const cors = require('cors');
const path = require('path');
const sendMail = require('./sendMail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Email sending route
app.post('/send-email', async (req, res) => {
    const { email } = req.body;
    try {
        await sendMail(email);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        res.status(500).send('Error sending email: ' + error.message);
    }
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
