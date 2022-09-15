const express = require('express');
const dbu = require('./dbutils.js');
// test.Test();
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
// App
const app = express();
app.get('/', (req, res) => {
    res.json('{tutu:"toto"}');
});
dbu.SearchIndex('prod');

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("magasin");
//     var indexes = [
//         { prod_ndx: 0 },
//         { usr_ndx: 0 },
//         { ord_ndx: 0 }
//     ];
//     dbo.collection("indexes").insertMany(indexes, function (err, res) {
//         if (err) throw err;
//         console.log("Ca a marché, bien joué à tous, fin de tournage, on remercie dédé au son et josé à la prod");
//         db.close();
//     });
// });