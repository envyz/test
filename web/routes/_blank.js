var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource1');
  res.render('_blank', { title: 'Ground' });
});

module.exports = router;