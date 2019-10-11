const db = require('./index.js')
// use model to run for loop here

var getItemColors = function (max = 2 + (Math.floor(Math.random() * Math.floor(4)))) { // 2-6
  var alreadyUsedIndices = [];
  var result = [];
  var colorsObjects = [{
    colorName: "heather grey",
    colorImage: "https://fec-dstld.s3-us-west-2.amazonaws.com/heathergrey.jpeg"
  }, {
    colorName: "soft black",
    colorImage: "https://fec-dstld.s3-us-west-2.amazonaws.com/softblack.jpeg",
  }, {
    colorName: "light grey",
    colorImage: "https://fec-dstld.s3-us-west-2.amazonaws.com/lightgrey.jpeg"
  }, {
    colorName: "navy blue",
    colorImage: "https://fec-dstld.s3-us-west-2.amazonaws.com/navyblue.jpeg"
  }, {
    colorName: "grey white",
    colorImage: "https://fec-dstld.s3-us-west-2.amazonaws.com/greywhite.jpeg"
  }, {
    colorName: "oat",
    colorImage: "https://fec-dstld.s3-us-west-2.amazonaws.com/oat.jpeg"
  }, {
    colorName: "oxblood",
    colorImage: "https://fec-dstld.s3-us-west-2.amazonaws.com/oxblood.jpeg"
  }, {
    colorName: "steel blue",
    colorImage: "https://fec-dstld.s3-us-west-2.amazonaws.com/steelblue.jpeg"
  }, {
    colorName: "weathered black",
    colorImage: "https://fec-dstld.s3-us-west-2.amazonaws.com/weatheredblack.jpeg"
  }, {
    colorName: "tan suede",
    colorImage: "https://fec-dstld.s3-us-west-2.amazonaws.com/tansuede.jpeg"
  }]

  for (var i = 0; i < max; i++) {
    var randomIndex = Math.floor(Math.random() * Math.floor(max));
    if (!(alreadyUsedIndices.includes(randomIndex))) {
      result.push(colorsObjects[randomIndex])
      alreadyUsedIndices.push(randomIndex);
    }
  }

  return result;

}

var getItemSizes = function (cut = Math.floor(Math.random() * Math.floor(4))) { // 0-3
  var sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl']

  for (var i = 0; i < cut; i++) {
    var randomIndex = Math.floor(Math.random() * Math.floor(sizes.length - 1));
    sizes.splice(randomIndex, 1);
  }
  return sizes;
}

var getItemName = function () {
  var clothing = ["jacket", "pant", "sweater", "sweatshirt", "t-shirt", "joggers", "puffer", "coat"];
  var material = ["wool", "cotton", "leather", "down"];
  var gender = ["Women's", "Men's", "Unisex"]

  var randomGender = gender[Math.floor(Math.random() * Math.floor(3))];
  var randomMaterial = material[Math.floor(Math.random() * Math.floor(4))];
  var randomClothing = clothing[Math.floor(Math.random() * Math.floor(8))]

  var result = `${randomGender} ${randomMaterial} ${randomClothing}`

  return result;
}

var fakeItem = function (i) {
  return {
    itemNumber: i,
    itemName: getItemName(),
    itemPrice: ((Math.floor(Math.random() * Math.floor(14))) * 25),
    afterpayImage: 'test',
    itemColors: getItemColors(),
    sizes: getItemSizes(),
    sizeGuideUSA: [["Width", 2, 4, 6, 8]],
    sizeGuideInt: ["Width", 2, 4, 6, 8]
  }
}

for (var i = 1; i < 101; i++) {
  var item = new db.itemDSTLD(fakeItem(i));
  item.save(function (err) {
    if (err) { console.log(err) }
    // saved!
  })
}
