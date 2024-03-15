const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.json({ data: false, products: [] })
});

app.listen(4000, () => {
    console.log("server chalue hai")
});