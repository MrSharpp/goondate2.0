const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', function (req, res) {
   res.send('Home Page!');
});

module.exports = router;