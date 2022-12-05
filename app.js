 const express = require('express');
 const app = express() ;
 var bodyParser = require('body-parser');
 var urlencodedParser = bodyParser.urlencoded({ extended: false });
let todos =[
    {
        "text":"get some milk"
    },
    {
        "text":"get some food"
    },
    {
        "text":"go for awalk"
    }
]
 // View engine setup
 
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

 app.get('/',(req,res)=>{

   res.render('todo',{
    tododata:todos
   })

 })
 app.post('/todo',urlencodedParser , function(req, res){
console.log(req.body);
  todos.push(req.body);
  res.json(todos);
  console.log(todos,"---------")
  
  });
 app.delete('/todo/:index',(req,res)=>{
 let params=  req.params.index;
 console.log(params,"console log");
  todos = todos.filter((item)=>{
    console.log(params.replace(/-/g, ''),item.text.replace(/ /g, ''),"-------------");
   return item.text.replace(/ /g, '')!==params.replace(/-/g, '');
 })
 console.log("todos",todos)
 res.json(todos);
    //  res.send(200,"success");
 })
  app.listen(8080,()=>{
    console.log('listing port 8080/ locallhost');
  })




 // this is with http module which is availble with node //
//  var http = require('http');
//  var fs = require('fs')

// http.createServer(function (req, res) {
//     fs.appendFile('helloaman.txt',"hello aman this is your first node fs test",(err) =>{
//         if(err) throw err ;
//         console.log("file created successfully. ");
//         fs.unlink('helloaman.txt',(err)=>{
//             if (err) throw err ;
//             console.log("deleted newly created file .");

//         })
//     })
    
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);