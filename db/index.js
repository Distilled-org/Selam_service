const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/DSTLD', { useNewUrlParser: true, useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({
  _id: Number,
  itemName: String,
  itemPrice: Number,
  afterpayImage: String,
  itemColors: [{
    colorName: String,
    colorImage: String,
  }],
  sizes: [String],
  sizeGuideUSA: [Array],
  sizeGuideInt: [Array],
});

const itemDSTLD = mongoose.model('Item', itemSchema);

// create database, set up model
// export model

module.exports.db = db;
module.exports.ItemDSTLD = itemDSTLD;
module.exports.close = mongoose.disconnect;
