const { createServer } = require('http');
const path = require('path');

const fs = require('fs');

createServer((req,res)=>{
    // res.end('<h1>Hello world!!</h1>');
    fs.readFile(path.join(__dirname,'registration.html'), 'utf8', (err, data)=>{
        res.write(data);
        res.end();
    });
}).listen(3000);


