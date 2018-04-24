// importing package and setting up router
const express = require('express');
const router = new express.Router();

// test route. Going to change this.
router.get('/' , (req, res) => {
    res.send('Hello')
});

module.exports = router;