const express = require('express');
const db = require('./db/index.js');

const app = express();
const port = 7000;

app.use(express.static('public'));

app.get('/item/:num', (req, res) => {
  const id = req.params.num;
  db.ItemDSTLD.findOne({ _id: id }).exec((err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
