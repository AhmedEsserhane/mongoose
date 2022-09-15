const express = require('express');
const dbu = require('./dbutils.js');
const mongoose = require('mongoose');

// test.Test();
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';


// App
const app = express();

//mongoose.connect('mongodb://api:docker1234@mongo:27017/magasin');

const Connect = async () => {
  let url = `mongodb://mongo:27017/magasin`;
  try {
      let client = await mongoose.connect( url, {
          authSource: "admin",
          user: 'api',
          pass: 'docker1234', 
          useNewUrlParser: true,
          useUnifiedTopology: true
      } );
      console.log( "Database is connected!" );
  } catch ( error ) {
      console.log( error.stack );
      process.exit( 1 );
  }
}
Connect();


dbu.SearchIndexes(function(items) {
    console.log(items);
});

const productSchema = new mongoose.Schema({
    ref:  String, // String is shorthand for {type: String}
    price: Number,
    name:   String,
    desc: String,
    date: { type: Date, default: Date.now },
    stock: Number,
    img: String,
    vat: Number
  });

  const Product = mongoose.model('Product', productSchema, 'products');

  let myProduct = new Product;

  myProduct.ref = "ABC999"
  myProduct.price = 122 ;
  myProduct.name = "Arrosoir"
  myProduct.desc = "super produit trop bien"
  myProduct.stock = 200
  myProduct.img = "/pub/img/myproduct.jpg"
  myProduct.tva = 5.5 ;


  myProduct.save();
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

