function counter() {
    let counter1 = 0;// local scop
    fname = 'jash';
    return {
        increment:()=> {

            // console.log(counter);
            counter1++;
        },
        decrement : ()=>{
            counter1--;
        },
        getCounter : ()=>{
            return counter1;
        }
    };
}

// counter();
// console.log(fname);
// console.log(counter1);

const mycounter = counter();
mycounter.increment();
mycounter.increment();
mycounter.increment();
mycounter.increment();
console.log(mycounter.getCounter());
mycounter.decrement();
mycounter.decrement();
console.log(mycounter.getCounter());

