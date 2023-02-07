const fs = require('fs');

fs.appendFile('./data.txt', ' appended text ', (err) => {
    if(err) throw err;
});
