const http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type': 'application/json'});
}).listen(3000);