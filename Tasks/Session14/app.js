const express = require('express');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3000;


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');
// hbs.registerPartial('header', './views/partials/header.hbs');

app.get('/', (req, res) => {
    res.render('index',{muser : {fname : 'sanjay',age : 20}});
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/users',(req,res)=>{
    res.render('users', {users : [
        {
            fname : 'sanjay',
            lname : 'kachchhava',
            age : 20,
            fullName : function(){
                return `${this.fname} ${this.lname} age : ${this.age}`;
            }
            
        },
        {
            fname : 'jash',
            lname : 'garala',
            age : 21,
            fullName : function(){
                return `${this.fname} ${this.lname} age : ${this.age}`;
            }
        }
    ],
    fullName2 : function(fn,ln){
        return `fullName2 : ${fn} ${ln}`;
    }
});
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/views/404.html');;
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})