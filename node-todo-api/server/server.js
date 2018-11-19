const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');


const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
const port = process.env.PORT  || 3000;

app.use(bodyParser.json());

// POST 
app.post('/todos', (req, res) => {
    const todo = new Todo({
        text : req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
})

// GET
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
});

// Getting individual note: GET /todos/:id
app.get('/todos/:id', (req,res) => {
    const id = req.params.id;
    // Validate id using isValid
    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    };
    // Find the note of given id
    Todo.findById(id).then((todo)=>{
        if (!todo) {
            return res.status(404).send()
        }
        res.send({todo})
    }).catch((e) => {
        res.status(400).send()
    })

})

app.listen(port, () => {
    console.log('Server has started on PORT' + port);
})

module.exports = {
    app
}

