const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname,'views'));

hbs.registerHelper('json',(data)=>{
    return JSON.stringify(data);
});

hbs.registerHelper('actualValue',(price,percentage)=>{
    // console.log("percentage :", percentage);

    return (price/(1-(percentage/100))).toFixed(2);
});

hbs.registerPartials(path.join(__dirname,'views/partials'));


app.get('/', (req, res) => {

    axios.get('https://dummyjson.com/products').then((response) => {
        res.render('products',{products:response.data.products});
        // console.log(response.data);
    }).catch((err)=>{
        res.status(500).send("Internal Server Error");
    });
    
})


app.listen(port, () => {
    console.log(`Server is runing at http://localhost:${port}`)
});