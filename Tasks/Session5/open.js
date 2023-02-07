const fs = require('fs');


fs.open('./data.txt', 'r+', (err, fd) => {
    if(err) throw err;

    
    /**
     * read example
     */
    fs.read(fd,(err,bytesRead,buffer)=>{
        if(err) throw err;

        console.log('read called');
        console.log(bytesRead,buffer.toString());
    })

    /**
     * read example with predifed buffer object of fixed size
     */
    // const buffer = Buffer.alloc(1024);
    // fs.read(fd,buffer,0,buffer.length,0,(err,bytesRead,dbuf)=>{
    //     if(err) throw err;
    //     console.log(bytesRead,dbuf.toString());
    // });

    

    /**
     * readSync example
     */
    // const buffer = Buffer.alloc(1024);
    // fs.readSync(fd,buffer);
    // console.log(buffer.toString());
    
    /**
     * write example
     */
    // fs.write(fd, 'Hello World! 2nd time', (err, byteWritten, buffer) => {
    //     if(err) throw err;
    //     console.log(byteWritten,buffer);
    // });

    /**
     * writeSync example
     */
    // fs.writeSync(fd,"hello world 3rd time");


    // we should close the file
    fs.close(fd, (err) => {
        if(err) throw err;
    });
});


