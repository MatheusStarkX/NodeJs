const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
        'mongodb+srv://matheus:w82wFpPtQBa116XZ@cluster0.kiejtwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        )
        .then(client => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => {
            console.log(err)
        });
};

module.exports = mongoConnect;