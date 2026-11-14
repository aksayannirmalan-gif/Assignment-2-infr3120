var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Page' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Project Page' });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Page' });
});

module.exports = router;

// MVC --> model view controller--> database, ejs file, router