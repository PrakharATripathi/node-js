const express = require('express');  
const fs = require("fs")
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 3000;
// middle ware
app.use(express.urlencoded({ extended: false }))

app.use((req,res,next)=>{
    console.log("hello middleware1")
    req.myUserNmae = "Prakhar"
    next();
})
app.use((req,res,next)=>{
    console.log("hello middleware2",req.myUserNmae )
    next();
})

app.get("/api/users", (req, res) => {
    res.setHeader("myName","prakhar")
    return res.json(users)
})

app.get("/users", (req, res) => {
    const html = `
   <ol>
   ${users.map(users => `<li>${users.first_name}</li>`).join("")}
   </ol>
   `
    return res.send(html)
})

// dynamic path peremeter
// app.get("/api/users/:id", (req, res) => {
//     const id =Number( req.params.id);
//     const user = users.find((user)=> user.id === id);
//     return res.json(user)
// })


// app.patch('/api/users/:id',(req,res)=>{
//    return res.json({status:"pending"})
// })
// app.delete('/api/users/:id',(req,res)=>{
//    return res.json({status:"pending"})
// })

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user)
    }).patch((req, res) => {
        const id = Number(req.params.id);
        const body = req.body;
        const updateData = users.map((user) => user.id === id ? { ...user, ...body } : user);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(updateData), (err, data) => {
            return res.json({ status: "success", id })
        })
    }).delete((req, res) => {
        const id = Number(req.params.id);
        const data = users.filter((user) => user.id !== id)
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, data) => {
            return res.json({ status: "success", id })
        })
    })

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length })
    })

})

app.listen(PORT, () => {
    console.log(`server start at portrt : ${PORT}`)
})