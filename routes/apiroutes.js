// importing package and setting up router
let express = require('express');
let router = new express.Router();

// test route. Going to change this.
router.get('/' , (req, res) => {
    res.send('Hello')
});

module.exports = router;