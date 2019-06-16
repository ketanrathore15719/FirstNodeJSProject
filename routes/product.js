var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/about', function(req, res, next) {
    res.send('I am About us from Product');
  });


module.exports = router;
