const AstrologianSet = {
  id: 1,
  name: 'The Astrologian',
  description: 'My favorite job',
  crossBars: [
    {
      name: 'Set 1 - Heals',
      description: 'Primarily used for healing',
      crosses: [
        {
          topIcon: {
            "id": 3590,
            "name": "Draw",
            "icon": 3101,
            "classjob": 33,
            "is_trait": 0
          },
          leftIcon: {
            "id": 3592,
            "name": "Spread",
            "icon": 3104,
            "classjob": 33,
            "is_trait": 0
          },
          rightIcon: {
            "id": 3593,
            "name": "Redraw",
            "icon": 3105,
            "classjob": 33,
            "is_trait": 0
          },
          bottomIcon: {
            "id": 3591,
            "name": "Royal Road",
            "icon": 3103,
            "classjob": 33,
            "is_trait": 0
          },
        },
        {
          topIcon: {
            "id": 3614,
            "name": "Essential Dignity",
            "icon": 3141,
            "classjob": 33,
            "is_trait": 0
          },
          rightIcon: {
            "id": 3610,
            "name": "Benefic II",
            "icon": 3128,
            "classjob": 33,
            "is_trait": 0
          },
          bottomIcon: {
            "id": 3594,
            "name": "Benefic",
            "icon": 3126,
            "classjob": 33,
            "is_trait": 0
          },
          leftIcon: {
            "id": 3595,
            "name": "Aspected Benefic",
            "icon": 3127,
            "classjob": 33,
            "is_trait": 0
          },
        },
        {
          topIcon: {
            "id": 3609,
            "name": "Disable",
            "icon": 3137,
            "classjob": 33,
            "macroInfo": {
              "name": "Disable Target's Target",
              "macroSteps": [
                '/macroicon "Disable"',
                '/ac "Disable" <t>',
                '/ac "Disable" <tt>'
              ]
            }
          },
          rightIcon: {
            "id": 3611,
            "name": "Time Dilation",
            "icon": 3138,
            "classjob": 33
          },
          bottomIcon: {
            "id": 150,
            "name": "Swiftcast",
            "icon": 461,
            "classjob": 7,
            "is_trait": 0
          },
          leftIcon: {
            "id": 3602,
            "name": "Exalted Detriment",
            "icon": 3131,
            "classjob": 33,
            "is_trait": 0
          },
        },
        {
          topIcon: {
            "id": 122,
            "name": "Cleric Stance",
            "icon": 413,
            "classjob": 6,
            "is_trait": 0,
            "macroInfo": {
              "name": "Switch to Cleric Stance",
              macroSteps: [
                '/macroicon "Cleric Stance"',
                '/ac "Cleric Stance" <me>',
                '/chotbar change 2'
              ]
            }
          },
          rightIcon: {
            "id": 3612,
            "name": "Synastry",
            "icon": 3139,
            "classjob": 33,
            "is_trait": 0
          },
          bottomIcon: {
            "id": 3600,
            "name": "Helios",
            "icon": 3129,
            "classjob": 33,
            "is_trait": 0
          },
          leftIcon: {
            "id": 3601,
            "name": "Aspected Helios",
            "icon": 3130,
            "classjob": 33,
            "is_trait": 0
          }
        }
      ]
    },
    {
      name: 'Set 2 - Offense',
      crosses: [
        {
          topIcon: {
            "id": 3590,
            "name": "Draw",
            "icon": 3101,
            "classjob": 33,
            "is_trait": 0
          },
          leftIcon: {
            "id": 3592,
            "name": "Spread",
            "icon": 3104,
            "classjob": 33,
            "is_trait": 0
          },
          rightIcon: {
            "id": 3593,
            "name": "Redraw",
            "icon": 3105,
            "classjob": 33,
            "is_trait": 0
          },
          bottomIcon: {
            "id": 3591,
            "name": "Royal Road",
            "icon": 3103,
            "classjob": 33,
            "is_trait": 0
          },
        },
        {
          topIcon: {
            "id": 3614,
            "name": "Essential Dignity",
            "icon": 3141,
            "classjob": 33,
            "is_trait": 0
          },
          rightIcon: {
            "id": 3596,
            "name": "Malefic",
            "icon": 3120,
            "classjob": 33,
            "is_trait": 0
          },
          bottomIcon: {
            "id": 3615,
            "name": "Gravity",
            "icon": 3123,
            "classjob": 33,
            "is_trait": 0
          },
          leftIcon: {
            "id": 3597,
            "name": "Stella",
            "icon": 3121,
            "classjob": 33,
            "is_trait": 0
          },
        },
        {
          topIcon: {
            "id": 3609,
            "name": "Disable",
            "icon": 3137,
            "classjob": 33,
            "macroInfo": {
              "name": "Disable Target's Target",
              "macroSteps": [
                '/macroicon "Disable"',
                '/ac "Disable" <t>',
                '/ac "Disable" <tt>'
              ]
            }
          },
          rightIcon: {
            "id": 3611,
            "name": "Time Dilation",
            "icon": 3138,
            "classjob": 33
          },
          bottomIcon: {
            "id": 150,
            "name": "Swiftcast",
            "icon": 461,
            "classjob": 7,
            "is_trait": 0
          },
          leftIcon: {
            "id": 3602,
            "name": "Exalted Detriment",
            "icon": 3131,
            "classjob": 33,
            "is_trait": 0
          }
        },
        {
          topIcon: {
            "id": 122,
            "name": "Cleric Stance",
            "icon": 413,
            "classjob": 6,
            "is_trait": 0,
            "macroInfo": {
              "name": "From Cleric Stance",
              macroSteps: [
                '/macroicon "Cleric Stance"',
                '/ac "Cleric Stance" <me>',
                '/chotbar change 1'
              ]
            }
          },
          rightIcon: {
            "id": 3598,
            "name": "Malefic II",
            "icon": 3122,
            "classjob": 33,
            "is_trait": 0
          },
          bottomIcon: {
            "id": 3608,
            "name": "Combust II",
            "icon": 3125,
            "classjob": 33,
            "is_trait": 0
          },
          leftIcon: {
            "id": 3599,
            "name": "Combust",
            "icon": 3124,
            "classjob": 33,
            "is_trait": 0
          }
        }
      ]
    },
    {
      name: 'LR Set - Utilities and Stances',
      crosses: [
        {
          topIcon: {
            "id": 3605,
            "name": "Nocturnal Sect",
            "icon": 3134,
            "classjob": 33
          },
          leftIcon: {
            "id": 3604,
            "name": "Diurnal Sect",
            "icon": 3133,
            "classjob": 33
          },
          rightIcon: {
            "id": 123,
            "name": "Protect",
            "icon": 410,
            "classjob": 6
          },
          bottomIcon: {
            "id": 3603,
            "name": "Ascend",
            "icon": 3132,
            "classjob": 33,
            "macroInfo": {
              "name": "Swift Ascend",
              "macroSteps": [
                '/macroicon "Ascend"',
                '/ac "Swiftcast"',
                '/wait',
                '/ac "Ascend" <t>',
                '/p Ascend, <t>.'
              ]
            }
          },
        },
        {
          topIcon: {
            "id": 3,
            "name": "Sprint",
            "icon": 405,
            "classjob": 0
          },
          rightIcon: {
            "id": 129,
            "name": "Stoneskin",
            "icon": 412,
            "classjob": 6
          },
          bottomIcon: {
            "id": 3616,
            "name": "Celestial Opposition",
            "icon": 3142,
            "classjob": 33
          },
          leftIcon: {
            "id": 3613,
            "name": "Collective Unconscious",
            "icon": 3140,
            "classjob": 33
          }
        }
      ]
    },
    {
      name: 'RL Set - More Buffs and PVP Actions',
      crosses: [
        {
          topIcon: {
            "id": 1578,
            "name": "Focalization",
            "icon": 4821,
            "classjob": -1
          },
          leftIcon: {
            "id": 1584,
            "name": "Purify",
            "icon": 4827,
            "classjob": -1
          },
          rightIcon: {
            "id": 1582,
            "name": "Equanimity",
            "icon": 4825,
            "classjob": -1
          },
          bottomIcon: {
            "id": 1572,
            "name": "Divine Breath",
            "icon": 4815,
            "classjob": -1
          }
        },
        {
          topIcon: {
            "id": 209,
            "name": "Limit Break",
            "icon": 405,
            "classjob": -1
          },
          rightIcon: {
            "id": 3607,
            "name": "Luminiferous Aether",
            "icon": 3136,
            "classjob": 33
          },
          bottomIcon: {
            "id": 3606,
            "name": "Lightspeed",
            "icon": 3135,
            "classjob": 33
          },
          leftIcon: {
            "id": 143,
            "name": "Surecast",
            "icon": 460,
            "classjob": 7
          }
        }
      ]
    }
  ]
}

export default AstrologianSet;