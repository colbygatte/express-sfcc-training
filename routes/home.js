const express = require('express');
const router = express.Router();

router.get('/show', (req, res) => {
    res.render('home/home')
});

module.exports = router;