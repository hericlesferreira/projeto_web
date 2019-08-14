var express = require('express');
var router = express.Router();
var postsService = require('../services/postsServices');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts();

  res.render('index', { title: 'Brog', posts: posts });
});

module.exports = router;
