var express = require('express');
var router = express.Router();

var postsServices = require('../../services/postsServices');

router.get('/', function(req, res, next) {
  var posts = postsServices.getPosts();

  var data = {
    posts: posts
  };

  res.render('admin/posts/index', data);
});

router.get('/create', function(req, res, next) {

  res.render('admin/posts/create');
});

router.post('/create', function(req, res, next) {
  var posts = postsServices.getPosts();

  var newId = posts.length + 1;

  var newPost = {};
  newPost.id = newId;
  newPost.title = req.body.title;
  newPost.image = req.body.image;
  newPost.description = req.body.description;
  newPost.body = req.body.postBody;

  postsServices.savePost(newPost);

  res.redirect('/admin/posts');
});

module.exports = router;