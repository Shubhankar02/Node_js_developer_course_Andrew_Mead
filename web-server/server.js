const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    const now = new Date().toString();
    const log = `${now}, Method:${req.method}, URL:${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) console.log(err);
    })
    next();
})

app.use((req, res, next) => {
    res.render('maintainance');
})

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

app.get('/', (req, res) => {
    console.log(req.headers);
    res.render('home', {
        pageTitle : 'Home page',
        message : 'Welcome, this is home page'
    });
});

app.get('/help', (req, res) => {
    res.sendFile(__dirname + '/public/help.html')
});

app.get('/about', (req,res) => {
    res.render('about', {
        pageTitle : 'About page'
    });
});

app.listen(port, ()=>{
    console.log(`Server has started on PORT ${port}`);
});