const express = require('express');



const app = express();


app.get('/', (req, res)=>{
    res.send('Hello World!');
});

app.get('/users', function(req,res){
    res.send([{
        name: 'Shubhankar',
        age : 21
    }, {
        name : 'Umang',
        age : 15
    }]);
});


app.listen(3000, ()=>{
    console.log('Server has started on PORT 3000');
});

module.exports.app = app;

