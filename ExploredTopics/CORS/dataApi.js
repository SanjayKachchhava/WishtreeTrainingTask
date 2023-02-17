const express = require('express');

const app = express();

app.get('/user/all', (req, res) => {
    console.log('user all called');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.send({
        users : [
            {
                name : 'sanjay',
                age : 20
            },
            {
                name : 'jash',
                age : 21
            }
        
        ]
       
    });
});

app.listen(3000,()=>console.log('server is running on port 3000'));