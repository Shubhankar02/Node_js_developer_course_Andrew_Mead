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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bee8ffc28cd892b800519ff')
    // }, {
    //     $set : {
    //         completed : true
    //     }
    // }, {
    //     returnOriginal : false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bee91d2f8aa9f1138190df8')
    }, {
        $inc : {
            age : 5
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    client.close();
});
