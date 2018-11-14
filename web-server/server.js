const express = require('express');
const hbs = require('hbs');
const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home', {
        pageTitle : 'Home page',
        message : 'Welcome, this is home page',
        currentYear : new Date().getFullYear()
    });
});

app.get('/help', (req, res) => {
    res.sendFile(__dirname + '/public/help.html')
});

app.get('/about', (req,res) => {
    res.render('about', {
        pageTitle : 'About page',
        currentYear : new Date().getFullYear()
    });
});

app.listen(3000, ()=>{
    console.log('Server has started on PORT 3000');
});