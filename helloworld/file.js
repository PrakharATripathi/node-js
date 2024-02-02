const { error } = require("console");
const fs = require("fs");

// create file
// synchron 
// fs.writeFileSync('./test.txt',"he prakhar")
// fs.writeFile('./test.js',"he prakhar dfhtjngmnh fhyj",(error)=>(console.log(error)))

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

fs.open("./test.txt",(erro)=>{console.log(erro)})