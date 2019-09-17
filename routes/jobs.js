var express = require('express');
var router = express.Router();
var jobsService = require('../services/jobsService');

router.get('/', function(req, res, next) {
  var jobs = jobsService.getJobs();

  res.render('jobs', {title: 'Vagas', jobs: jobs});
  
});

module.exports = router;