/* express makes a web application framework*/ 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
/** this code "res.render"is connectted to an ejs file the the views folder */
  
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Project' });
});

/* GET contact me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;

// MVC --> model view controller--> database, ejs file, router