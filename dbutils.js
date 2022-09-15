module.exports = {
    SearchIndexes: function getindexes(callback) {
        let url = "mongodb://api:docker1234@mongo:27017";
        let MongoClient = require('mongodb').MongoClient;
        MongoClient.connect(url, function (err, db) {
            var dbo = db.db("magasin");
            if (err) {
                return console.dir(err);
            }
            var collection = dbo.collection('indexes');
            collection.find().toArray(function (err, items) {
                //console.log(items);
                return callback(items);
            });
        });
    }
};