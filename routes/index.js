var express = require('express');
var jobUtils = require('../utils/jobUtils');
var admin = require('firebase-admin');
var router = express.Router();
var database;

var serviceAccount = require('../../controller-configurator-firebase-adminsdk-0za72-5bf37e6d3b.json');

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
});

router.get('/actions/:job', function (req, res, next) {
  let jobActions = {};
  const job = req.params.job;
  let relatedGroupIds = jobs[job].relatedActionGroupIds;

  relatedGroupIds.forEach((group) => {
    let groupActions = [];
    for (let action in actions) {
      if (actions[action].jobName === group) {
        groupActions.push(actions[action]);
      }
    };
    groupActions.sort((a, b) => {
      return parseInt(a.level) - parseInt(b.level);
    });
    jobActions[group] = groupActions;
  });

  res.json(jobActions);
});

router.get('/getActionCategories', function (req, res, next) {
  res.json(actionCategories);
});

router.get('/getSet/:id', function (req, res, next) {
  const ref = database.ref(`/sets`);

  ref.child(`setMeta/${req.params.id}`).once('value', (setMeta) => {
    let kit = setMeta.val();
    ref.child(`setCrossBars/${req.params.id}`).once('value', (crossBars) => {
      kit.crossBars = crossBars.val();
      res.json(kit);
    });
  });
});

router.get('/getActionsFromFileStructure', function (req, res, next) {
  let actions = jobUtils.getActionData();
  res.json(actions);
});
/**
 * :job corresponds to optional job filter
 */
router.get('/getSetsDetails/:job?', function (req, res, next) {
  const setRef = database.ref(`/sets/setMeta`);
  if (req.params.job) {
    setRef.orderByChild('job')
      .startAt(req.params.job)
      .endAt(req.params.job)
      .once('value', (snapshot) => {
        const sets = snapshot.val();
        res.json(sets.filter(set => set !== null));
      });
  } else {
    setRef
      .once('value', (snapshot) => {
        const sets = snapshot.val();
        res.json(sets);
      });
  }
});

router.get('/getUserInfo/:uid', function (req, res, next) {
  database.ref(`/userInfo/${req.params.uid}`).once('value').then((snapshot) => {
    res.json(snapshot.val());
  });
});

// Returns a user's list of sets
router.get('/userKits/:uid', (req, res, next) => {
  const setRef = database.ref(`/sets/setMeta`);

  setRef.orderByChild('creatorId')
    .startAt(req.params.uid)
    .endAt(req.params.uid)
    .once('value', (snapshot) => {
      const sets = snapshot.val();
      res.json(sets);
    });

})

// Creates a new kit
router.post('/saveKit', (req, res, next) => {
  const uid = req.body.uid;
  const kit = req.body.kit;

  // Ensure that a user is authenticated
  if (!uid) {
    console.log(req.body);
    res.json({ error: 'User not authenticated' });
  } else {
    try {

      const kit = req.body.kit;
      const crossBars = kit.crossBars;

      // Remove crossbars from the kit object since we only want to insert meta data
      delete kit.crossBars;

      // Write kit meta info to DB
      const kitsDBRef = database.ref('sets');
      // If this kit already has an ID, that means we're updating it
      const kitId = (req.body.kit.kitId) ? req.body.kit.kitId : kitsDBRef.child('setMeta').push().key;

      kit.creatorId = uid;
      kit.kitId = kitId;

      let updates = {};
      updates[`/setMeta/${kitId}`] = kit;
      updates[`/setCrossBars/${kitId}`] = crossBars;

      console.log(updates);
      kit.crossBars = crossBars;
      kitsDBRef.update(updates);

      res.json(kit);
    } catch (err) {
      console.log(err);
      res.json({ error: "server error" });
    }
  }
})

module.exports = router;
