var express = require('express');
var jobUtils = require('../utils/jobUtils');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jobData', function(req, res, next) {
  const jobData = jobUtils.getJobData();
  res.json(jobData);
})

module.exports = router;
