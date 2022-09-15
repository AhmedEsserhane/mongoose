
exports.SearchIndex = function SearchIndex(prefix) {
    let url = "mongodb://api:docker1234@mongo"

    let MongoClient = require('mongodb').MongoClient
    let mykey = prefix + "_ndx";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("magasin");
        //dbo.collection("indexes").findOne({ mykey: {'exists': 1}, function (err, result) {
        result = dbo.collection('indexes').find({[mykey] : { "$exists":1}} ).toArray(
            function (err,result) {
                console.log(result);
                if (err) throw err;
                console.log(result[0][mykey]);
                    db.close();
                });
            }
        )
        
    //});
    //  console.log ("ça marche test");
    // recup prefix
    // connect to magasin/indexes collections
    // get the prefix+_ndx document
    // return the value
    // close the db
}