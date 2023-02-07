
// var car = {
//     make: 'Ford',
//     model: 'Mustang',
// }

// car.addEventListener('drive', function () {
//     console.log('driving...');
// });


// car.dispatchEvent('drive');


/** 
 * promises and promise chaining
 */

const action1 = function (isError,data) {
    return new Promise((resolve, reject) => {
        if(isError===true) resolve();
        else reject('error while exceeding action data : '+data);
    });
}

 action1(true).then(() => {
    return action1(true)
 }).then(()=>{
    return action1(true)
 }).then(()=>{
    return action1(false,3)
 }).then(()=>{
    return action1(false,4)
 }).then(()=>{
    
 }).catch((err)=>{
    console.log(err);
 });

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.nationality = "English";
//     this.sayHello = ()=> {return `Hello, my name is ${this.firstName} ${this.lastName}`;};
// };



// // Person('sanjay', 'kachchhava', 20, 'blue');
// console.log(new Person('sanjay', 'Mali', 20, 'blue'));
// // console.log(this);

 