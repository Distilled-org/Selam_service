const express = require('express')
const app = express()
const port = 3000
const db = require('./db/index.js');

app.use(express.static('public'))

app.get('/item/:num', (req, res) => {
  var id = req.params.num;
  db.itemDSTLD.findOne({ _id: id }).exec((err, result) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send(result)
    }
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))