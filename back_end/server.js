var express = require('express');
var bigram = require('./algorithm/bigram');
var formidable = require('formidable');
var fs = require('fs');
var bigram = require('./algorithm/bigram');
const port = 11022;

var app = express();

const path = '../front_end';

// about us website
app.use(express.static(path + '/newbot'));

app.listen(port,() => {
  console.log('Listening on port:',port);
});

app.post('/ask',(req,res)=>{
  console.log('asking')
  var form = new formidable.IncomingForm();
  form.parse(req,(err,fields,files)=>{
      var question = fields['userQ'];
      var obj = JSON.parse(fs.readFileSync(__dirname+'/uploaded/jsonFile/QA.json','utf8'));
      bigram.evalQuery(question,obj,(err,max_index)=>{
        if(err) return res.send(err);
          res.send(obj.conversations[max_index].A);
      });
  });
});

app.post('/server',(req,res)=>{
  var form = new formidable.IncomingForm();
  form.uploadDir = __dirname;
  form.parse(req,(err,fields,files)=>{
    var oldPath = files.fileUpload.path;
    var newPath = __dirname + '/uploaded/txtFile/'+files.fileUpload.name;
    fs.rename(oldPath,newPath,(err)=>{
      if(err)throw err;
      res.status(200).send(files.fileUpload.name);
      res.end();
      console.log(`${files.fileUpload.name} file uploaed into uploaded dir`);

      var bigramObj;
      bigram.txtToJson(newPath,(obj)=>{
          bigram.schemaFormation(obj,(obj)=>{
              var json = JSON.stringify(obj);
              var n =
              fs.writeFile(__dirname+'/uploaded/jsonFile/QA.json',json,(err)=>{
                console.log('The file has been saved!');
              });
          });
      });
    });
  });
});
