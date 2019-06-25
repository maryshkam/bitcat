const express = require('express');
const fileUpload = require('express-fileupload');
// const bodyParser = require('body-parser'); // bodyParser - модуль для Express
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const startServer = port => {
  app.use(fileUpload());
  // app.use(bodyParser.json());
  // app.get('/', (req, res) => res.send('<input type="file" accept="text/*" name="testFile">'));
  app.post('/upload', function(req, res) {
    if (Object.keys(req.files).length == 0) {
      return res.status(400).send('No files were uploaded.');
    }
    let test = req.files.test;
  test.mv(__dirname + '/src/db/users/data.txt', function(err){
    if(err)
    return res.status(500).send(err);
    res.send('File uploaded!');
  });
    
  console.log(req.files.test);
});





app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
})
}


module.exports = startServer;
