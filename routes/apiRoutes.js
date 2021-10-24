const router = require('express').Router();
const fs = require("fs")
const { v4: uuidv4 } = require('uuid');
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
// console.log(data);
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');


router.get('/notes', function (req, res) {
  console.log("route hit")
  res.json(data);
});


router.post('/notes', (req, res) => {
  // console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    const newData = data.push(newNote)
    readAndAppend(newNote, './db/db.json');
    res.json(newData);
  } else {
    res.error('Error in adding Note');
  }
});





module.exports = router;