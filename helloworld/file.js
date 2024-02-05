// const { error } = require("console");
const fs = require("fs");
const os = require("os");

console.log(os.platform());

// create file
// synchron blocking request 
// fs.writeFileSync('./test.txt',"he prakhar")
// console.log("1")
// const result = fs.readFileSync("test.txt","utf-8")
// console.log(result)
// console.log("2")

// asynchronous non-blocking request
// fs.writeFile('./test.js',"he prakhar dfhtjngmnh fhyj",(error)=>(console.log(error)))
// console.log("1")
//  fs.readFile("test.txt","utf-8",(error,result)=>{
//     console.log(result);
//  })

// console.log("2")
// console.log("2")
// console.log("2")
// console.log("2")
// console.log("2")

// read the file
// const result =fs.readFileSync("./new.txt","utf-8");
// console.log(result)

// fs.readFile("./new.txt","utf-8",(error,result)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(result)
//     }
// });
// console.log(result)

// fs.appendFileSync("./test.txt","shlok\n")
// fs.copyFileSync("./test.txt","copy.txt")
// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync("./test.txt").isFile())
// fs.mkdirSync("my-docs/a/d",{recursive:true})
 