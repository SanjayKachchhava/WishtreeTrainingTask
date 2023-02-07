const fs = require('fs');

fs.open('file1.txt', 'r+', (err, fd) => {
    if(err) throw err;
    console.log(fd);
    fs.close(fd, (err) => {
        if(err) throw err;
       
    });
 });

 fs.open('file1.txt', 'r+', (err, fd) => {
    if(err) throw err;

    console.log(fd);
    fs.close(fd, (err) => {if(err)throw err;});

    fs.read(fd, Buffer.alloc(1024), 0, 1024,)

 });

//  function display(fd){
//     console.log(fd);
//  }