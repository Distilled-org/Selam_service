var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/DSTLD', { useNewUrlParser: true });

var itemSchema = new mongoose.Schema({
  itemNumber: Number,
  itemName: String,
  itemPrice: Number,
  afterpayImage: String,
  itemColors: [{
    colorName: String,
    colorImage: String
  }],
  sizes: [String],
  sizeGuideUSA: [Array],
  sizeGuideInt: [Array]
});

var itemDSTLD = mongoose.model('Item', itemSchema);


// create database, set up model
// export model

module.exports.db = db;
module.exports.itemDSTLD = itemDSTLD;