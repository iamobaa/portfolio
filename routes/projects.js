var express = require('express');
var router = express.Router();

/* GET all projects. */
router.get('/', function(req, res, next) {
  res.render('pages/projects', { title: 'My Projects' });
});

module.exports = router;
