const express = require('express');
const router = express.Router();

router.get('/show', (req, res) => {
    res.render('login/login');
});

module.exports = router;
