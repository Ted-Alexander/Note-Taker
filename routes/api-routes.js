const router = require("express").Router();
const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
console.log(data);
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

router.post('/', (req, res) => {
    console.log(req.body);
  
    const { username, topic, tip } = req.body;
  
    if (req.body) {
      const newTip = {
        username,
        tip,
        topic,
        tip_id: uuidv4(),
      };
  
      readAndAppend(newNote, '../db/db.json');
      res.json(`Tip added successfully 🚀`);
    } else {
      res.error('Error in adding tip');
    }
  });


  router.get('/notes', function(req, res){
    console.log("route hit")
    res.json(data);
  });


module.exports = router