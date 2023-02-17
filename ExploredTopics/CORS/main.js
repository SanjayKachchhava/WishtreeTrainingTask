const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {

    fs.readFile('./index.html', 'utf8', (err, data) => {
        if(err) res.send(err);
        else res.send(data);
    });
});

app.get('/user/all',(req, res) => {
    res.send({
        data : "data is required"
    })
})

app.listen(5000,()=> console.log('Server is running on port 5000'));