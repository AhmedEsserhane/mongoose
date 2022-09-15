const express = require('express');
const dbu = require('./dbutils.js');
// test.Test();
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
// App
const app = express();

dbu.SearchIndexes(function(items) {
    console.log(items);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

