var express = require('express');
var jobUtils = require('../utils/jobUtils');
var admin = require('firebase-admin');
var router = express.Router();
var offlineServer;
var database;
const OFFLINE_MODE = false;

var serviceAccount;

console.log(process.env.FIREBASE_TYPE);
if (process.env.FIREBASE_TYPE) {
  serviceAccount =
    {
      "type": process.env.FIREBASE_TYPE,
      "project_id": process.env.FIREBASE_PROJECT_ID,
      "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
      "private_key": process.env.FIREBASE_PRIVATE_KEY,
      "client_email": process.env.FIREBASE_CLIENT_EMAIL,
      "client_id": process.env.FIREBASE_CLIENT_ID,
      "auth_uri": process.env.FIREBASE_AUTH_URI,
      "token_uri": process.env.FIREBASE_TOKEN_URI,
      "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER,
      "client_x509_cert_url": process.env.FIREBASE_CLIENT_URL
    }
} else {
  serviceAccount = require('../controller-configurator-firebase-adminsdk-0za72-5bf37e6d3b.json');
}



if (!OFFLINE_MODE) {

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://controller-configurator.firebaseio.com"
  });
  database = admin.database();
}


// get job data
var jobs;
var actions;
var actionCategories;

if (!OFFLINE_MODE) {

  database.ref('/actions').once('value').then(function (snapshot) {
    actions = snapshot.val();
  });
  database.ref('/actionGroups').once('value').then(function (snapshot) {
    actionCategories = snapshot.val();
  });
  database.ref('/jobs').once('value').then(function (snapshot) {
    jobs = snapshot.val();
  });
} else {
  offlineServer = require('../controller-configurator-data.json');

  actions = offlineServer.actions;
  actionCategories = offlineServer.actionGroups;
  jobs = offlineServer.jobs;
}

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
  Object.keys(actions).filter(action => actions[action].job === job).map(action => {
    const actionObj = actions[action];
    if (action.indexOf('pvpaction') > -1) {
      actionObj.category = 'PvP Actions';
    }
    if (!jobActions[actionObj.category]) {
      jobActions[actionObj.category] = {};
    }
    actionObj.id = action;

    jobActions[actionObj.category][action] = actionObj;
  });
  res.json(jobActions);
});


router.get('/getActionCategories', function (req, res, next) {
  res.json(actionCategories);
});

router.get('/getSet/:id', function (req, res, next) {

  if (OFFLINE_MODE) {
    let kit = offlineServer.sets.setMeta[req.params.id];
    let crossBars = offlineServer.sets.setCrossBars[req.params.id];
    kit.crossBars = crossBars;
    res.json(kit);
  }

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

  if (OFFLINE_MODE) {
    // OFFLINE MODE
    let kits = Object.assign({}, offlineServer.sets.setMeta);

    if (req.params.job) {
      for (let kit in kits) {
        if (kits[kit].job !== req.params.job) {
          delete kits[kit];
        }
      }
    }
    res.json(kits);

  }

  // Live Mode
  else {
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
  }
});

router.get('/getUserInfo/:uid', function (req, res, next) {

  if (OFFLINE_MODE) {
    res.json(offlineServer.userInfo[req.params.uid]);
  }
  else {

    database.ref(`/userInfo/${req.params.uid}`).once('value').then((snapshot) => {
      res.json(snapshot.val());
    });
  }
});

// Creates a new kit
router.post('/updateUserName', (req, res, next) => {
  const uid = req.body.uid;
  const name = req.body.name;
  // Ensure that a user is authenticated

  if (!uid && !OFFLINE_MODE) {
    res.json({ error: 'User not authenticated' });
  } else {
    try {
      if (OFFLINE_MODE) {
        offlineServer.userInfo[uid].displayName = name;
      } else {
        const userInfoRef = database.ref(`userInfo/${uid}`).set({
          displayName: name
        });
      }
      res.json({ displayName: name });

    } catch (err) {
      console.log(err);
      res.json({ error: "server error" });
    }
  }
})

// Returns a user's list of sets
router.get('/userKits/:uid', (req, res, next) => {

  // TODO make this so we don't have to have a hardcoded UID. Will require front end changes
  if (OFFLINE_MODE) {
    let kits = offlineServer.sets.setMeta;
    for (let kit in kits) {
      if (kits[kit].creatorId !== req.params.uid) delete kits[kit];
    }
    res.json(kits)
  } else {
    const setRef = database.ref(`/sets/setMeta`);

    setRef.orderByChild('creatorId')
      .startAt(req.params.uid)
      .endAt(req.params.uid)
      .once('value', (snapshot) => {
        const sets = snapshot.val();
        res.json(sets);
      });
  }
});

// Creates a new kit
router.post('/saveKit', (req, res, next) => {
  const uid = req.body.uid;
  const kit = req.body.kit;

  // Ensure that a user is authenticated
  if (!uid && !OFFLINE_MODE) {
    res.json({ error: 'User not authenticated' });
  } else {
    try {

      const kit = req.body.kit;
      const crossBars = kit.crossBars;

      // Remove crossbars from the kit object since we only want to insert meta data
      delete kit.crossBars;

      if (OFFLINE_MODE) {
        // Write kit meta info to DB
        let kits = offlineServer.sets;
        const kitId = 'foobar';

        kit.creatorId = req.params.uid;
        kit.kitId = kitId;

        offlineServer.sets.setMeta[kitId] = kit;
        offlineServer.sets.setCrossBars[kitId] = crossBars;

        kit.crossBars = crossBars;
      } else {
        // Write kit meta info to DB
        const kitsDBRef = database.ref('sets');
        // If this kit already has an ID, that means we're updating it
        const kitId = (req.body.kit.kitId) ? req.body.kit.kitId : kitsDBRef.child('setMeta').push().key;

        kit.creatorId = uid;
        kit.kitId = kitId;

        let updates = {};
        updates[`/setMeta/${kitId}`] = kit;
        updates[`/setCrossBars/${kitId}`] = crossBars;

        kit.crossBars = crossBars;
        kitsDBRef.update(updates);
      }

      res.json(kit);
    } catch (err) {
      console.log(err);
      res.json({ error: "server error" });
    }
  }
})

module.exports = router;
