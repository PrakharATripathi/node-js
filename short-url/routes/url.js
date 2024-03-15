const express = require('express');
const {handleGenrateShortURL,handleDetAnalytics} = require("../controllers/url")

const router = express.Router();

router.post("/",handleGenrateShortURL)
router.get("/ana/:shortId",handleDetAnalytics)

module.exports = router;