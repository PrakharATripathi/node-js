const shortid = require("shortid");
const URL = require("../models/url")

async function handleGenrateShortURL (req,res ){
    const body  = req.body;
    if(!body.url) return res.status(404).json({error:'url is required'})
    const shortID = shortid();
    await URL.create({
        shortId : shortID,
        redirectURL:body.url,
        visitHistory:[],
    }) 
    return res.render('home',{id:shortID});
}

async function handleDetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result= await URL.findOne({shortId})
    return res.json({totalClicks:result.visitHistory.length,analytics:result.visitHistory})
}

module.exports = {handleGenrateShortURL,handleDetAnalytics}