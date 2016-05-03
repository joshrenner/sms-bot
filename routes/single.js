var express = require('express');
var router = express.Router();

router.get('/single', function(req, res, next) {
  res.render('single', { title: 'Single User SMS Bot' });
});

module.exports = router;
