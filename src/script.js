const fs = require('fs');

const change = () => {
  fs.readFile(__dirname+'/db/files/data.txt', (err,data) => {
    if(err) throw err;
      console.log(data);
    });
    
    const contentData = fs.readFileSync(__dirname+'/db/files/data.txt', 'utf8');
    console.log('content:', contentData);
    
    
    const arrSplitInputData = contentData.split("# ").slice(1);
    // console.log(arrSplitInputData);
    
    function editElement (el) {
      const arrElement = el.split("\n");
      const obj ={};
      obj.title = arrElement[0];
      obj.content = arrElement.slice(1).join("\n");
      obj.id = `f${(~~(Math.random()*1e8)).toString(16)}`;
      return obj;
    }
    
    let outputData = arrSplitInputData.map(el=> (editElement(el)));
    
    
    // console.log(outputData);
    
    outputData.forEach(el => {
      const data = JSON.stringify(el);
      fs.writeFileSync(__dirname+`/db/files/folder/${el.id}.txt`, data)
    });
    
}
// const dataPath = __dirname+'/db/users/data.json';


module.exports = change;
