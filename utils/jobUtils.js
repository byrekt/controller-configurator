const fs = require('fs');
const path = require('path');
const buildActionObject = (action, index, level, jobName) => {
  let actionName = action.split('.')[0];
  let displayedActionName = actionName.replace(/_/g, ' ').toUpperCase();
  return {
    name: displayedActionName,
    id: actionName,
    level: level,
    iconPath: `images/jobs/action/${jobName}/${level}/${action}`
  }
}

const jobAdditionalGroupMap = {
  bard: {
    class: 'archer'
  },
  black_mage: { 
    class: 'thaumaturge' 
  },
  dragoon: {
    class: 'lancer'
  },
  monk: {
    class: 'pugilist'
  },
  ninja: {
    class: 'rogue'
  },
  paladin: {
    class: 'gladiator'
  },
  scholar: {
    class: 'arcanist',
    pets: [
      'eos',
      'selene'
    ]
  },
  summoner: {
    class: 'arcanist',
    pets: [
      'garuda-egi',
      'titan-egi',
      'ifrit-egi'
    ]
  },
  warrior: {
    class: 'marauder'
  },
  white_mage: {
    class: 'conjurer'
  }
};
module.exports = {
  getJobData: () => {
    let jobsObject = {};
    let folderName = 'public/images/jobs/action';
    let jobs = fs.readdirSync(folderName);

    jobs.forEach((jobName, index) => {
      let job = { id: jobName, name: jobName, actions: [] };
      let jobFolder = `${folderName}/${jobName}`;
      let jobLevels = fs.readdirSync(jobFolder);

      jobLevels.forEach((level, index) => {
        let levelFolder = `${jobFolder}/${level}`;
        let isDirectory = fs.lstatSync(levelFolder).isDirectory();
        // If this is an action without a level requirement, build it.
        if (!isDirectory) {
          //job.actions.push(buildActionObject(level, index, '00'));
        } else {
          // Go down one more level
          let actions = fs.readdirSync(levelFolder);
          actions.forEach((action) => {
            job.actions.push(buildActionObject(action, index, level, jobName));
          });
        }
      });
      jobsObject[jobName] = job;
    });
    return { jobs: jobsObject, jobMappings: jobAdditionalGroupMap };
  },
  getActionData: () => {
    let actionsObject = {};
    let folderName = 'public/images/jobs/action';
    let jobs = fs.readdirSync(folderName);
    jobs.forEach((jobName, index) => {
      let jobFolder = `${folderName}/${jobName}`;
      let jobLevels = fs.readdirSync(jobFolder);
      jobLevels.forEach((level, index) => {
        let levelFolder = `${jobFolder}/${level}`;
        let isDirectory = fs.lstatSync(levelFolder).isDirectory();
        // If this is an action without a level requirement, build it.
        if (isDirectory) {
          // Go down one more level
          let actions = fs.readdirSync(levelFolder);
          actions.forEach((action) => {
            let actionName = action.split('.')[0];
            let displayedActionName = actionName.replace(/_/g, ' ').toUpperCase();
            console.log(actionName, displayedActionName);
            actionsObject[actionName] = {
              iconPath: `images/jobs/action/${jobName}/${level}/${action}`,
              jobName: jobName,
              name: displayedActionName,
              level: level,
              id: actionName
            }
          });
        }
      });
    });
    return { actions: actionsObject };
  }
}