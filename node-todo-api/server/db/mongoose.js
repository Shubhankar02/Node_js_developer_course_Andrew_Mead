const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASEURL || 'mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
});

module.exports = {
    mongoose
}