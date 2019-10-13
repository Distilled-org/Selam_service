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
  var material = ["wool", "cotton", "leather", "silk", "cashmere", "suede"];
  var gender = ["Women's", "Men's", "Unisex"]

  var randomGender = gender[Math.floor(Math.random() * Math.floor(3))];
  var randomMaterial = material[Math.floor(Math.random() * Math.floor(6))];
  var randomClothing = clothing[Math.floor(Math.random() * Math.floor(8))]

  return `${randomGender} ${randomMaterial} ${randomClothing}`
}

var fakeItem = function (i) {
  return {
    _id: i,
    itemName: getItemName(),
    itemPrice: (((Math.floor(Math.random() * Math.floor(14))) * 25) + 25),
    afterpayImage: 'https://fec-dstld.s3-us-west-2.amazonaws.com/afterpay.jpeg',
    itemColors: getItemColors(),
    sizes: getItemSizes(),
    sizeGuideInt: [
      ["US", "00", 0, 2, 4, 4, 6, 8, 10, 12],
      ["UK", 4, 6, 8, 10, 12, 14, 16],
      ["Italy", 36, 38, 40, 42, 44, 46, 48],
      ["France", 32, 34, 36, 38, 40, 42, 44],
      ["Denmark", 30, 32, 34, 36, 38, 40, 42],
      ["Germany", 30, 32, 34, 36, 38, 40, 42],
      ["Australia", 4, 6, 8, 10, 12, 14, 16],
      ["Japan", 3, 5, 7, 9, 11, 13, 15],
      ["Jeans", "23", "24-25", "26-27", "27-28", "29-30", "31-32", "32-33"],
      ["Size", "XXS", "XXS-XS", "XS-S", "S-M", "M-L", "L-XL", "XL-XXL"]
    ],
    sizeGuideUSA: [
      ["SIZE", "XS", "S", "M", "L", "XL"],
      ["SHOULDER", 24, 25, 26, 27, 28],
      ["CHEST", "44 1/2", "46 1/2", "48 1/2", "50 1/2", "52 1/2"],
      ["SLEEVE LENGTH", "20 3/4", "21", "21 1/8", "21 1/4", "21 3/8"],
      ["LENGTH", "18 1/2", 19, "19 1/2", 20, "20 1/2"]
    ]
  }
}

var seeding = async function () {
  for (var i = 1; i < 101; i++) {
    var item = new db.itemDSTLD(fakeItem(i));
    await item.save()
  }
  process.exit();
}

seeding();