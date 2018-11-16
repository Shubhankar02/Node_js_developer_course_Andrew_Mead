// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    err ? console.log('Unable to connect to mongodb server') : console.log('mongodb server connected');

    const db = client.db('TodoApp');

   db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => {
       console.log('Unable to fetch todo', err);
   })

    client.close();
});
