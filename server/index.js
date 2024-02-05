const http = require('http');
fs = require('fs');
const url = require('url');

// const myServer  = http.createServer((req,res)=>{
//     const log = `${Date.now()}: ${req.u}New Req Recevied\n`
//     fs.appendFile("log.txt",log,(err,data)=>{
//         res.end("hello from the server")
//     })
//     // console.log(req)
//     console.log("new request");
// });

// myServer.listen(4000,()=>console.log("server started"))

// const myServer = http.createServer((req, res) => {
//     const log = `${Date.now()}: = ${req.method} =  ${req.url}=New Req Recevied\n`
//     const myUrl = url.parse(req.url,true);
//     // console.log(myUrl);
//     if (req.url === "/favicon.ico") return res.end()
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (myUrl.pathname) {
//             case '/': res.end("this is home page ");
//                 break;
//             case "/login": res.end("login page ")
//                 break;
//             case "/data": res.end("hello from the server")
//                 break;
//             default:
//                 res.end("404 not found route")
//         }

//     })
//     // console.log(req)
//     console.log("new request");
// });

// myServer.listen(4000, () => console.log("server started"))


const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: = ${req.method} =  ${req.url}=New Req Recevied\n`
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);
    if (req.url === "/favicon.ico") return res.end()
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/':
                if (req.method === "GET") res.end("home page")
                else if (req.method === "POST") {
                    res.end("success")
                }
                ;
                break;
            case "/login": res.end("login page ")
                break;
            case "/data": res.end("hello from the server")
                break;
            default:
                res.end("404 not found route")
        }

    })
    // console.log(req)
    console.log("new request");
});

myServer.listen(4000, () => console.log("server started"))
