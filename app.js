const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Route for POST method
app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const userId = 'john_doe_17091999'; // Example user ID
    const email = 'john@xyz.com'; // Example email
    const rollNumber = 'ABCD123'; // Example roll number
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length > 0 ? alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b) : '';

    const response = {
        is_success: true,
        user_id: userId,
        email,
        roll_number: rollNumber,
        numbers,
        alphabets,
        highest_alphabet: [highestAlphabet]
    };

    res.json(response);
});

// Route for GET method
app.get('/bfhl', (req, res) => {
    const response = {
        operation_code: 1
    };
    res.status(200).json(response);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});