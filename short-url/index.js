const express = require("express");
const path = require("path");
const { conectToMongoDB } = require("./connect")
const URL = require("./models/url")
const urlRoute = require("./routes/url")
const app = express();
const staticRouter = require("./routes/staticrouter")

const PORT = 8001;

conectToMongoDB("mongodb://127.0.0.1:27017/short1-url")
    .then(() => console.log("db connected"))
    .catch(() => console.log("something wrong to connect db"))

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extends:false}))
app.use('/url', urlRoute);
app.use('/',staticRouter);


// app.get("/test",async(req,res)=>{
//     const allUser = await URL.find({});
//     return res.render("home" ,{urls:allUser})
// })

app.get('url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: { timestamp: Date.now() }
            }
        }
    );
    res.redirect(entry.redirectURL)
})

app.listen(PORT, () => console.log(`Server Started at port ${PORT}`))