const express = require('express');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/home.html'));
});

const users = [{fname:'sanjay'},{fname:'jash'},{fname:'vishal'}];

app.get('/users', (req,res)=>{
    res.send(users);
})

app.get('/users/:id', (req,res)=>{
    const iid = parseInt(req.params.id);
    if(iid>=0 && iid<users.length){
        res.send(users[iid]);
    }else res.status(404).send('Not Found');;
})

app.get('*', (req, res) => {
    res.status(404).send("404 Not Found");  
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Searver running at http://localhost:${port}`);
});