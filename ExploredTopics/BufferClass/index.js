// const {Buffer} = require('buffer');
const data = 'sanjay Mali';
// const buf = Buffer.alloc(size=data.length,fill=data);
// const buf = Buffer.alloc(size=2**32+1,fill=data);   // throws error if size > 2**32
// const buf = Buffer.alloc(size=data.length,fill=7);

const arr = new Uint16Array(10);

arr.map(function(_,index){
    arr[index] = index+1;
});

const buf = Buffer.from(arr);

// const data2 = 'jash garala';
// buf.fill(data2);


// console.log(buffer);

