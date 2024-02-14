const express = require('express');


const {connectMogoDb} = require("./conections")

const userRouter =  require('./routes/user')

const {logReqRes} = require('./middleware')
  
const app = express();
const PORT = 4000;

// connection
connectMogoDb('mongodb://127.0.0.1:27017/prakhar-app-1')
.then(() => console.log("Mongodb connected")) 

// middle ware
app.use(express.urlencoded({ extended: false })) 

// middleware
app.use(logReqRes())

// routes 
app.use('/user',userRouter);

app.listen(PORT, () => {
    console.log(`server start at portrt : ${PORT}`)
})
