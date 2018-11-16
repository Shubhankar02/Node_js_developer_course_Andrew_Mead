// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true},(err, client) => {
    err ? console.log('Unable to connect to mongodb server') : console.log('mongodb server connected');
    
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({ 
    //    text : 'Something to do',
    //    completed : false
    // },(err, result) =>{
    //     if(err) {
    //         console.log('Unable to insert to do', err)
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2));
    //     }
    // });

    db.collection('Users').insertOne({
        name : 'Shubhankar',
        age : 21,
        location : 'Mumbai'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert the data', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    
    client.close();
});

