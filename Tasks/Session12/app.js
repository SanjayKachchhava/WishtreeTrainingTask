const express = require('express');
const about = require('./routes/about.js');

const app = express();
const path = require('path');

app.use('/about',about);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
});

// app.get('/about', (req, res) => {
//     res.send('Welcome to About Page');
// });

app.get('/contact', (req, res) => {
    res.send('Welcome to Contact Page');
});

app.get('*', (req, res) => {
    res.status(404).send('404 Page Not Found');
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

