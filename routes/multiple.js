var express = require('express');
var router = express.Router();

router.get('/multiple', function(req, res, next) {
  res.render('multiple', { title: 'Multiple User SMS Bot' });
});

module.exports = router;
