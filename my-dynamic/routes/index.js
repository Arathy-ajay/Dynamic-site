var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var storeName="My Book Store"
  res.render('index', { storeName: storeName, books:[] });
});

router.get('/home', function(req, res, next) {
  var books=[
    {title: 'Book 1', author: 'Author'},
    {title: 'Book 2', author: 'Author'},
    {title: 'Book 3', author: 'Author'}
  ]
  res.render('index', {books:books,storeName:null});
});


module.exports = router;
