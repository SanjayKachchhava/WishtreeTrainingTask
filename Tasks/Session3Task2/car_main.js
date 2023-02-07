const {getCar} = require('./car');
const calc = require('./calc');

const car = getCar(make='Honda', model='Civic', year=2019);

console.log(car.getFeatures());
console.log(car);

