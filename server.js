const express = require('express');
const cors = require('cors');
const path = require('path');
const sendMail = require('./sendMail'); // Import the sendMail function
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
<<<<<<< HEAD



=======
>>>>>>> 698136a (new changes today)


// Serve your HTML file on the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Update the path to your HTML file
});


app.post('/send-email', async (req, res) => {
    const { email } = req.body;
    try {
        await sendMail(email); // Send email using the provided address
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        res.status(500).send('Error sending email: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
