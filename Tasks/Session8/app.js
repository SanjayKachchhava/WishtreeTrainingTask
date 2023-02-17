const axios = require('axios');

const url = "https://jsonplaceholder.typicode.com/albums";

axios.get(url).then(res=>{
    res.data.forEach(album=>console.log(`${album.id}\t${album.title}`));
}).catch(console.error);    