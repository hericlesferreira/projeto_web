var express = require('express');
var router = express.Router();
var postsService = require('../services/postsServices');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts();

  res.render('index', { title: 'Aniblogando', posts: posts });
});

router.get('/posts', function(req, res, next) {
  var posts = postsService.getPosts();

  res.render('posts', {title: 'Aniblogando - Posts', posts: posts});
  
});

router.get('/posts/:postId', function(req, res, next) {
  var postId = req.params.postId;

  var posts = postsService.getPosts();

//exemplo com for  for(var i=0; i<posts.length; i++) {
//exemplo com for    if(posts[i].id == postId) {
//exemplo com for      var post = posts[i];
//exemplo com for    }
//exemplo com for  }

  var post = posts.filter((post) => post.id == postId)[0];

  res.render('post', {title: post.title, post: post });

});

module.exports = router;
