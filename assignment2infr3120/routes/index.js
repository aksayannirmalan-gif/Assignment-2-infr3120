var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project' });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;

// MVC --> model view controller--> database, ejs file, router