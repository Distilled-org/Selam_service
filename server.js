const express = require('express')
const app = express()
const port = 3000
const db = require('./db/index.js');

app.use(express.static('public'))

app.get('/item/:num', (req, res) => {
  var id = req.params.num;
  console.log(id);
  var result = db.itemDSTLD.find({ itemNumber: id })
  console.log(result.schema)
  res.send(result.schema)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))