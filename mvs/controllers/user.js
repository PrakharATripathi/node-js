const User = require("../models/User");

async function getAllUsers(req, res) {
    const allUsers = await User.find({})
    res.setHeader("myName", "prakhar")
    return res.json(allUsers)
}

async function getUserById(req, res) {
    const user = await User.findById(req.params.id)
    return res.json(user)
}

async function updateUserById(req, res) {
    // const id = Number(req.params.id);
    const body = req.body;
    // const updateData = users.map((user) => user.id === id ? { ...user, ...body } : user);
    await User.findByIdAndUpdate(req.params.id, body)
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(updateData), (err, data) => {
    return res.json({ status: "success" })
    // })
}
async function deleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    // const id = Number(req.params.id);
    // const data = users.filter((user) => user.id !== id)
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(data), (err, data) => {
    return res.json({ status: "success" })
    // })
}
async function createNewUser(req, res) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.job_tittle || !body.gender) {
        return res.status(400).json({ msg: "All field are require" })
    }
    const result = await User.create(body)
    // console.log(result)
    return res.status(201).json({ msg: "success" ,id:result._id})
    // users.push({ ...body, id: users.length + 1 })
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => { 
    //     return res.status(201).json({ status: "success", id: users.length })
    // })
}

module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById,createNewUser }