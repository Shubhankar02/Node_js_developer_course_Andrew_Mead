const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
});

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required : true,
        minlength: 1,
        trim : true
    },
    complete: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// const newTodo = new Todo({
//     text: 'new todo 3',
//     complete : false,
//     completedAt : new Date().getDate()
// });

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
    mongoose.connection.close();
}, (e) => {
    console.log(e)
});