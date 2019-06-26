const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const startServer = async port => {
  app.use(fileUpload());
  app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.post('/upload', function(req, res) {
    if (Object.keys(req.files).length == 0) {
      return res.status(400).send('No files were uploaded.');
    }
    let test = req.files.test;

   
 test.mv(__dirname + '/db/files/data.txt', function(err){
    if(err)
    return res.status(500).send(err);
    res.send('File uploaded!');
  });

});



app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
})
}


module.exports = startServer;
