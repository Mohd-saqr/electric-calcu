const express = require(`express`)
const cors = require(`cors`)
const server = express()
server.use(cors())
const path = require('path');
require(`dotenv`).config()
const port =process.env.PORT


server.listen(port,()=>{
    console.log(`server is working now port  ${port}`);
})



server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });
  server.get('/style', function(req, res) {
    res.sendFile(path.join(__dirname, './style.css'));
  });
  server.get('/operator', function(req, res) {
    res.sendFile(path.join(__dirname, './operator.js'));
  });
  server.get('/aboutUs', function(req, res) {
    res.sendFile(path.join(__dirname, './about.html'));
  });
  server.get(`*`,handelError);
 

 function handelError(req,res,error,){
     const erro={
         status:500,
         messgae:error
     }
     res.status(500).send(erro);
 }
