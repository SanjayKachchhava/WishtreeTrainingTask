const fs = require('fs');
const users = require('./user.json');

users.push(
    {
        username : 'hasmukh',
        age : 20,
        email : 'hasmukh@gmail.com'
    },
    {
        username : 'dashrath',
        age : 20,
        email : 'dashrath@gmail.com'
    }
);

console.log(users);


fs.writeFile('user.json', JSON.stringify(users),{flag:'w',encoding:'utf-8'}, (err) => {
    if(err) {
        throw err;
    }
});