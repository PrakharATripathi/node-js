const express = require('express');
const http = require('http');

const app = express();

app.get('/',(req,res)=>{
    return res.send("hello from home page ")
})
app.get('/about',(req,res)=>{
    return res.send("hello from About page " + "hey" + "  " + req.query.name + req.query.age)
})
 

app.listen(1000,()=>console.log("server started"))
// const myServer = http.createServer(app);
    
// myServer.listen(1000,()=>console.log("server started"))
  