var express = require('express');
var jobUtils = require('../utils/jobUtils');
var admin = require('firebase-admin');
var router = express.Router();
var database;

var serviceAccount = require('../../controller-configurator-firebase-adminsdk-0za72-5bf37e6d3b');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://controller-configurator.firebaseio.com"
});

database = admin.database();

// get job data
var jobs;
var actions;
var actionCategories;
database.ref('/actions').once('value').then(function (snapshot) {
  actions = snapshot.val();
});
database.ref('/actionGroups').once('value').then(function (snapshot) {
  actionCategories = snapshot.val();
});
database.ref('/jobs').once('value').then(function (snapshot) {
  jobs = snapshot.val();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jobData', function (req, res, next) {
  res.json(jobs);
});

router.get('/jobDataDetails', function (req, res, next) {
  res.json(jobs);
});

router.get('/allActions', function (req, res, next) {
  res.json(actions);
})

router.get('/getActionCategories', function (req, res, next) {
  res.json(actionCategories);
});

router.get('/getSet/:id', function (req, res, next) {
  const setRef = database.ref(`/sets/${req.params.id}`);
  setRef.on('value', (snapshot) => {
    res.json(snapshot.val());
  });
});
module.exports = router;
