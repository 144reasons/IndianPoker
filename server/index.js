const express = require('express')
const app = express()
const port = 3000
const Josh = require("@joshdb/core");
const provider = require("@joshdb/sqlite");
const randomWords = require('random-words');
const utils = require('../utils/utils')

app.use(express.json())

const db = new Josh({
  name: 'db',
  provider,
});

app.post('/newgame', function (req, res) {
  var body = req.body;

  console.log(body)

  let gamename = randomWords({exactly:1, wordsPerString:2, separator:'-'})

  let pswd = utils.pswd(4)

  res.send({
    message: "Creating game...",
    settings: {
      name: gamename,
      password: pswd
    }
  })
})

app.listen(port, () => {
  db.defer.then( () => {
    console.log(`Connected to db!`);
  });
  console.log(`Example app listening at http://localhost:${port}`)
})