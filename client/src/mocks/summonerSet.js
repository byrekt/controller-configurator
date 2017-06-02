const SummonerSet = {
  id: 3,
  name: 'The Summoner',
  description: 'My favorite caster DPS',
  crossBars: [
    {
      name: 'Set 1 - Main Crossbar',
      description: 'You\'ll never have to switch',
      crosses: [
        {
          topIcon: {
            "id": 166,
            "name": "Aetherflow",
            "icon": 510,
            "classjob": 26
          },
          leftIcon: {
            "id": 181,
            "name": "Fester",
            "icon": 2676,
            "classjob": 27
          },
          rightIcon: {
            "id": 174,
            "name": "Bane",
            "icon": 507,
            "classjob": 26
          },
          bottomIcon: {
            "id": 3578,
            "name": "Painflare",
            "icon": 2681,
            "classjob": 27
          },
        },
        {
          topIcon: {
            "id": 179,
            "name": "Shadow Flare",
            "icon": 515,
            "classjob": 26,
            "macroInfo": {
              "name": "SC Shadowflare",
              "macroSteps": [
                '/macroicon "Shadow Flare',
                '/ac "Swiftcast"',
                '/ac "Shadow Flare" <t>',
                '/ac "Shadow Flare'
              ]
            }
          },
          rightIcon: {
            "id": 3579,
            "name": "Ruin III",
            "icon": 2682,
            "classjob": 27
          },
          bottomIcon: {
            "id": 163,
            "name": "Ruin",
            "icon": 501,
            "classjob": 26
          },
          leftIcon: {
            "id": 172,
            "name": "Ruin II",
            "icon": 502,
            "classjob": 26
          },
        },
        {
          topIcon: {
            "id": 3582,
            "name": "Deathflare",
            "icon": 2685,
            "classjob": 27
          },
          rightIcon: {
            "id": 176,
            "name": "Rouse",
            "icon": 509,
            "classjob": 26,
            "macroInfo": {
              "name": "Rouse and Spur",
              "macroSteps": [
                '/macroicon "Rouse"',
                '/ac "Rouse"',
                '/ac "Spur"',
                '/ac "Enkindle" <t>'
              ]
            }
          },
          bottomIcon: {
            "id": 101,
            "name": "Raging Strikes",
            "icon": 352,
            "classjob": 5
          },
          leftIcon: {
            "id": 169,
            "name": "Virus",
            "icon": 513,
            "classjob": 26,
            "macroInfo": {
              "name": "Pink Eye",
              "macroSteps": [
                '/macroicon "Virus"',
                '/ac "Eye for an Eye" <t>',
                '/ac "Eye for an Eye" <tt>',
                '/wait',
                '/ac "Virus" <t>',
                '/ac "Virus" <tt>'
              ]
            },
          },
        },
        {
          topIcon: {
            "id": 3581,
            "name": "Dreadwyrm Trance",
            "icon": 2684,
            "classjob": 27,
            "macroInfo": {
              "name": "DWT, TD, Contagion",
              macroSteps: [
                '/macroicon "Dreadwyrm Trance"',
                '/ac "Dreadwyrm Trance" <me>',
                '/wait',
                '/ac "Tri-Disaster" <t>',
                '/pac "Contagion" <t>'
              ]
            }
          },
          rightIcon: {
            "id": 164,
            "name": "Bio",
            "icon": 503,
            "classjob": 26
          },
          bottomIcon: {
            "id": 178,
            "name": "Bio II",
            "icon": 504,
            "classjob": 26
          },
          leftIcon: {
            "id": 168,
            "name": "Miasma",
            "icon": 505,
            "classjob": 26
          }
        }
      ]
    }
  ]
}

export default SummonerSet;