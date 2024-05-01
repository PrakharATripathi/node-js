require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("hello world!");
})

app.get('/x', (req, res) => {
    res.send("new name");
})

app.listen(process.env.PORT,()=>{
    console.log(`server start you can go ${port}`)
});