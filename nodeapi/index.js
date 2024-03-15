const express = require('express');
require('dotenv').config()
const router = require('./routes/user');
const taskRoute = require('./routes/task');
const connectDB = require('./connect');
const cookieParser = require('cookie-parser');
const { errorHandler } = require('./middleware/error');
const cors = require('cors');

const app = express();



connectDB();

// middleware for
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FORNTEND_URL],
    methods:['GET', 'POST','PUT', 'DELETE'],
    credentials:true,
}));
app.use("/user", router);
app.use("/task",taskRoute); 


app.get("/", (req, res) => {
    res.send("object")
})

app.use(errorHandler)

app.listen(process.env.PORT, () => {  
    console.log("server run on 3000 port")
})
