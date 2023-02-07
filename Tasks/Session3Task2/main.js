const calc = require('./calc');
const date = require('./date');

console.log(calc.add(1, 2));
console.log(calc.mul(1, 2));
console.log(calc.sub(1, 2));
console.log(calc.div(1, 2));


console.log(date.getDate());
console.log(date.getTime());
console.log(date.getDateTime());