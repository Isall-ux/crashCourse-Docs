const express = require('express');
const app = express();

const path = require('path');

// // Middleware for setting static folders
// app.use(express.static(path.join(__dirname, 'public')));

// Define routes

app.get('/', (req, res) => {
    res.send({ 
        message: 'Hello, World!',
        status: 'success'

    });
});

app.get('/hallo', (req, res) => {
    res.send({ 
        message: 'Halo fren',
        status: 'kebabs'

    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});