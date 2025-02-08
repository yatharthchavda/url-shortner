const express = require('express');
const { handleGenerateNewShortUrl , handleRedirectToUrl, handleGetAnalytics } = require('../controllers/url');
const router = express.Router();

router.post('/', handleGenerateNewShortUrl);
router.get('/:shortId', handleRedirectToUrl)

router.get('/analytics/:shortId', handleGetAnalytics);
module.exports = router;