const express = require("express");
const url = require("../models/url");

const router = express.Router();

router.get('/', async (req, res) => {
    const allUrls = await url.find({})
    return res.render('home', { urls: allUrls });
});
module.exports = router;