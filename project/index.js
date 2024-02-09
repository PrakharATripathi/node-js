const express = require('express');
const fs = require("fs"); 
const users = require("./MOCK_DATA.json");  
const mongoose = require("mongoose");
const { type } = require('os');
const { join } = require('path');
  
const app = express();
const PORT = 3000;

// connection
mongoose.connect('mongodb://127.0.0.1:27017/prakhar-app-1')
    .then(() => console.log("connected"))
    .catch((error) => console.log(error))
 
// schema 
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    job_tittle: {
        type: String
    },
    gender: {
        type: String
    }
}, { timestamps: true })

const User = mongoose.model("user", userSchema)


// middle ware
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log("hello middleware1")
    req.myUserNmae = "Prakhar"
    next();
})
app.use((req, res, next) => {
    console.log("hello middleware2", req.myUserNmae)
    next();
})

app.get("/api/users", async (req, res) => {
    const allUsers = await User.find({})
    res.setHeader("myName", "prakhar")
    return res.json(allUsers)
})

app.get("/users", async (req, res) => {
    const allUsers = await User.find({});
    const html = `
   <ol>
   ${allUsers.map(users => `<li>${users.first_name} - ${users.email}</li>`).join("")}
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
    .get(async (req, res) => {
        // const id = Number(req.params.id);
        // const user = users.find((user) => user.id === id);
        const user = await User.findById(req.params.id)
        return res.json(user)
    }).patch(async (req, res) => {
        // const id = Number(req.params.id);
        const body = req.body;
        // const updateData = users.map((user) => user.id === id ? { ...user, ...body } : user);
        await User.findByIdAndUpdate(req.params.id, body)
        // fs.writeFile("./MOCK_DATA.json", JSON.stringify(updateData), (err, data) => {
        return res.json({ status: "success" })
        // })
    }).delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id)
        // const id = Number(req.params.id);
        // const data = users.filter((user) => user.id !== id)
        // fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, data) => {
        return res.json({ status: "success" })
        // })
    })

app.post('/api/users', async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.job_tittle || !body.gender) {
        return res.status(400).json({ msg: "All field are require" })
    }
    const result = await User.create(body)
    // console.log(result)
    return res.status(201).json({ msg: "success" })
    // users.push({ ...body, id: users.length + 1 })
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => { 
    //     return res.status(201).json({ status: "success", id: users.length })
    // })
})

app.listen(PORT, () => {
    console.log(`server start at portrt : ${PORT}`)
})
