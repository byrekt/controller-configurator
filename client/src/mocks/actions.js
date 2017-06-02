//https://api.xivdb.com/action?columns=id,name,icon,classjob
const ActionList = [
{
"id": 1,
"name": "Key Item",
"icon": 405,
"classjob": 0
},
{
"id": 2,
"name": "Interaction",
"icon": 405,
"classjob": 0
},
{
"id": 3,
"name": "Sprint",
"icon": 405,
"classjob": 0
},
{
"id": 4,
"name": "Mount",
"icon": 405,
"classjob": 0
},
{
"id": 5,
"name": "Teleport",
"icon": 111,
"classjob": 0
},
{
"id": 6,
"name": "Return",
"icon": 112,
"classjob": 0
},
{
"id": 7,
"name": "Attack",
"icon": 405,
"classjob": 0
},
{
"id": 8,
"name": "Shot",
"icon": 405,
"classjob": 0
},
{
"id": 9,
"name": "Fast Blade",
"icon": 158,
"classjob": 1
},
{
"id": 10,
"name": "Rampart",
"icon": 152,
"classjob": 1
},
{
"id": 11,
"name": "Savage Blade",
"icon": 157,
"classjob": 1
},
{
"id": 12,
"name": "Convalescence",
"icon": 162,
"classjob": 1
},
{
"id": 13,
"name": "Awareness",
"icon": 163,
"classjob": 1
},
{
"id": 14,
"name": "Flash",
"icon": 159,
"classjob": 1
},
{
"id": 15,
"name": "Riot Blade",
"icon": 156,
"classjob": 1
},
{
"id": 16,
"name": "Shield Bash",
"icon": 154,
"classjob": 1
},
{
"id": 17,
"name": "Sentinel",
"icon": 151,
"classjob": 1
},
{
"id": 18,
"name": "Provoke",
"icon": 165,
"classjob": 1
},
{
"id": 19,
"name": "Tempered Will",
"icon": 153,
"classjob": 1
},
{
"id": 20,
"name": "Fight Or Flight",
"icon": 166,
"classjob": 1
},
{
"id": 21,
"name": "Rage Of Halone",
"icon": 155,
"classjob": 1
},
{
"id": 22,
"name": "Bulwark",
"icon": 167,
"classjob": 1
},
{
"id": 23,
"name": "Circle Of Scorn",
"icon": 161,
"classjob": 1
},
{
"id": 24,
"name": "Shield Lob",
"icon": 164,
"classjob": 1
},
{
"id": 25,
"name": "Shield Swipe",
"icon": 160,
"classjob": 1
},
{
"id": 26,
"name": "Sword Oath",
"icon": 2504,
"classjob": 19
},
{
"id": 27,
"name": "Cover",
"icon": 2501,
"classjob": 19
},
{
"id": 28,
"name": "Shield Oath",
"icon": 2505,
"classjob": 19
},
{
"id": 29,
"name": "Spirits Within",
"icon": 2503,
"classjob": 19
},
{
"id": 30,
"name": "Hallowed Ground",
"icon": 2502,
"classjob": 19
},
{
"id": 31,
"name": "Heavy Swing",
"icon": 260,
"classjob": 3
},
{
"id": 32,
"name": "Foresight",
"icon": 252,
"classjob": 3
},
{
"id": 33,
"name": "Fracture",
"icon": 256,
"classjob": 3
},
{
"id": 34,
"name": "Bloodbath",
"icon": 251,
"classjob": 3
},
{
"id": 35,
"name": "Skull Sunder",
"icon": 257,
"classjob": 3
},
{
"id": 36,
"name": "Mercy Stroke",
"icon": 265,
"classjob": 3
},
{
"id": 37,
"name": "Maim",
"icon": 255,
"classjob": 3
},
{
"id": 38,
"name": "Berserk",
"icon": 259,
"classjob": 3
},
{
"id": 39,
"name": "Brutal Swing",
"icon": 253,
"classjob": 3
},
{
"id": 40,
"name": "Thrill Of Battle",
"icon": 263,
"classjob": 3
},
{
"id": 41,
"name": "Overpower",
"icon": 254,
"classjob": 3
},
{
"id": 42,
"name": "Storm's Path",
"icon": 258,
"classjob": 3
},
{
"id": 43,
"name": "Holmgang",
"icon": 266,
"classjob": 3
},
{
"id": 44,
"name": "Vengeance",
"icon": 267,
"classjob": 3
},
{
"id": 45,
"name": "Storm's Eye",
"icon": 264,
"classjob": 3
},
{
"id": 46,
"name": "Tomahawk",
"icon": 261,
"classjob": 3
},
{
"id": 47,
"name": "Butcher's Block",
"icon": 262,
"classjob": 3
},
{
"id": 48,
"name": "Defiance",
"icon": 2551,
"classjob": 21
},
{
"id": 49,
"name": "Inner Beast",
"icon": 2553,
"classjob": 21
},
{
"id": 50,
"name": "Unchained",
"icon": 2554,
"classjob": 21
},
{
"id": 51,
"name": "Steel Cyclone",
"icon": 2552,
"classjob": 21
},
{
"id": 52,
"name": "Infuriate",
"icon": 2555,
"classjob": 21
},
{
"id": 53,
"name": "Bootshine",
"icon": 208,
"classjob": 2
},
{
"id": 54,
"name": "True Strike",
"icon": 209,
"classjob": 2
},
{
"id": 55,
"name": "Featherfoot",
"icon": 202,
"classjob": 2
},
{
"id": 56,
"name": "Snap Punch",
"icon": 210,
"classjob": 2
},
{
"id": 57,
"name": "Second Wind",
"icon": 201,
"classjob": 2
},
{
"id": 58,
"name": "Haymaker",
"icon": 203,
"classjob": 2
},
{
"id": 59,
"name": "Internal Release",
"icon": 212,
"classjob": 2
},
{
"id": 60,
"name": "Fists Of Earth",
"icon": 206,
"classjob": 2
},
{
"id": 61,
"name": "Twin Snakes",
"icon": 213,
"classjob": 2
},
{
"id": 62,
"name": "Arm Of The Destroyer",
"icon": 215,
"classjob": 2
},
{
"id": 63,
"name": "Fists Of Fire",
"icon": 205,
"classjob": 20
},
{
"id": 64,
"name": "Steel Peak",
"icon": 2530,
"classjob": 2
},
{
"id": 65,
"name": "Mantra",
"icon": 216,
"classjob": 2
},
{
"id": 66,
"name": "Demolish",
"icon": 204,
"classjob": 2
},
{
"id": 67,
"name": "Howling Fist",
"icon": 207,
"classjob": 2
},
{
"id": 68,
"name": "Touch Of Death",
"icon": 211,
"classjob": 2
},
{
"id": 69,
"name": "Perfect Balance",
"icon": 217,
"classjob": 2
},
{
"id": 70,
"name": "Rockbreaker",
"icon": 2529,
"classjob": 20
},
{
"id": 71,
"name": "Shoulder Tackle",
"icon": 2526,
"classjob": 20
},
{
"id": 72,
"name": "One Ilm Punch",
"icon": 214,
"classjob": 20
},
{
"id": 73,
"name": "Fists Of Wind",
"icon": 2527,
"classjob": 2
},
{
"id": 74,
"name": "Dragon Kick",
"icon": 2528,
"classjob": 20
},
{
"id": 75,
"name": "True Thrust",
"icon": 310,
"classjob": 4
},
{
"id": 76,
"name": "Feint",
"icon": 307,
"classjob": 4
},
{
"id": 77,
"name": "Keen Flurry",
"icon": 301,
"classjob": 4
},
{
"id": 78,
"name": "Vorpal Thrust",
"icon": 312,
"classjob": 4
},
{
"id": 79,
"name": "Heavy Thrust",
"icon": 311,
"classjob": 4
},
{
"id": 80,
"name": "Invigorate",
"icon": 302,
"classjob": 4
},
{
"id": 81,
"name": "Impulse Drive",
"icon": 313,
"classjob": 4
},
{
"id": 82,
"name": "Leg Sweep",
"icon": 305,
"classjob": 4
},
{
"id": 83,
"name": "Life Surge",
"icon": 304,
"classjob": 4
},
{
"id": 84,
"name": "Full Thrust",
"icon": 314,
"classjob": 4
},
{
"id": 85,
"name": "Blood For Blood",
"icon": 309,
"classjob": 4
},
{
"id": 86,
"name": "Doom Spike",
"icon": 306,
"classjob": 4
},
{
"id": 87,
"name": "Disembowel",
"icon": 317,
"classjob": 4
},
{
"id": 88,
"name": "Chaos Thrust",
"icon": 308,
"classjob": 4
},
{
"id": 89,
"name": "Ring Of Thorns",
"icon": 2579,
"classjob": 4
},
{
"id": 90,
"name": "Piercing Talon",
"icon": 315,
"classjob": 4
},
{
"id": 91,
"name": "Phlebotomize",
"icon": 316,
"classjob": 4
},
{
"id": 92,
"name": "Jump",
"icon": 2576,
"classjob": 22
},
{
"id": 93,
"name": "Power Surge",
"icon": 303,
"classjob": 22
},
{
"id": 94,
"name": "Elusive Jump",
"icon": 2577,
"classjob": 22
},
{
"id": 95,
"name": "Spineshatter Dive",
"icon": 2580,
"classjob": 22
},
{
"id": 96,
"name": "Dragonfire Dive",
"icon": 2578,
"classjob": 22
},
{
"id": 97,
"name": "Heavy Shot",
"icon": 358,
"classjob": 5
},
{
"id": 98,
"name": "Straight Shot",
"icon": 359,
"classjob": 5
},
{
"id": 99,
"name": "Hawk's Eye",
"icon": 354,
"classjob": 5
},
{
"id": 100,
"name": "Venomous Bite",
"icon": 363,
"classjob": 5
},
{
"id": 101,
"name": "Raging Strikes",
"icon": 352,
"classjob": 5
},
{
"id": 102,
"name": "Flaming Arrow",
"icon": 368,
"classjob": 5
},
{
"id": 103,
"name": "Misery's End",
"icon": 364,
"classjob": 5
},
{
"id": 104,
"name": "Quelling Strikes",
"icon": 351,
"classjob": 5
},
{
"id": 105,
"name": "Swiftsong",
"icon": 362,
"classjob": 5
},
{
"id": 106,
"name": "Quick Nock",
"icon": 360,
"classjob": 5
},
{
"id": 107,
"name": "Barrage",
"icon": 353,
"classjob": 5
},
{
"id": 108,
"name": "Shadowbind",
"icon": 356,
"classjob": 5
},
{
"id": 109,
"name": "Blunt Arrow",
"icon": 369,
"classjob": 5
},
{
"id": 110,
"name": "Bloodletter",
"icon": 361,
"classjob": 5
},
{
"id": 111,
"name": "Wide Volley",
"icon": 357,
"classjob": 5
},
{
"id": 112,
"name": "Repelling Shot",
"icon": 366,
"classjob": 5
},
{
"id": 113,
"name": "Windbite",
"icon": 367,
"classjob": 5
},
{
"id": 114,
"name": "Mage's Ballad",
"icon": 2602,
"classjob": 23
},
{
"id": 115,
"name": "Foe Requiem",
"icon": 2604,
"classjob": 23
},
{
"id": 116,
"name": "Army's Paeon",
"icon": 2603,
"classjob": 23
},
{
"id": 117,
"name": "Rain Of Death",
"icon": 2605,
"classjob": 23
},
{
"id": 118,
"name": "Battle Voice",
"icon": 2601,
"classjob": 23
},
{
"id": 119,
"name": "Stone",
"icon": 403,
"classjob": 6
},
{
"id": 120,
"name": "Cure",
"icon": 405,
"classjob": 6
},
{
"id": 121,
"name": "Aero",
"icon": 401,
"classjob": 6
},
{
"id": 122,
"name": "Cleric Stance",
"icon": 413,
"classjob": 6
},
{
"id": 123,
"name": "Protect",
"icon": 410,
"classjob": 6
},
{
"id": 124,
"name": "Medica",
"icon": 408,
"classjob": 6
},
{
"id": 125,
"name": "Raise",
"icon": 411,
"classjob": 6
},
{
"id": 126,
"name": "Esuna",
"icon": 417,
"classjob": 6
},
{
"id": 127,
"name": "Stone II",
"icon": 404,
"classjob": 6
},
{
"id": 128,
"name": "Repose",
"icon": 414,
"classjob": 6
},
{
"id": 129,
"name": "Stoneskin",
"icon": 412,
"classjob": 6
},
{
"id": 130,
"name": "Shroud Of Saints",
"icon": 415,
"classjob": 6
},
{
"id": 131,
"name": "Cure III",
"icon": 407,
"classjob": 6
},
{
"id": 132,
"name": "Aero II",
"icon": 402,
"classjob": 6
},
{
"id": 133,
"name": "Medica II",
"icon": 409,
"classjob": 6
},
{
"id": 134,
"name": "Fluid Aura",
"icon": 416,
"classjob": 6
},
{
"id": 135,
"name": "Cure II",
"icon": 406,
"classjob": 6
},
{
"id": 136,
"name": "Presence Of Mind",
"icon": 2626,
"classjob": 24
},
{
"id": 137,
"name": "Regen",
"icon": 2628,
"classjob": 24
},
{
"id": 138,
"name": "Divine Seal",
"icon": 2630,
"classjob": 24
},
{
"id": 139,
"name": "Holy",
"icon": 2629,
"classjob": 24
},
{
"id": 140,
"name": "Benediction",
"icon": 2627,
"classjob": 24
},
{
"id": 141,
"name": "Fire",
"icon": 451,
"classjob": 7
},
{
"id": 142,
"name": "Blizzard",
"icon": 454,
"classjob": 7
},
{
"id": 143,
"name": "Surecast",
"icon": 460,
"classjob": 7
},
{
"id": 144,
"name": "Thunder",
"icon": 457,
"classjob": 7
},
{
"id": 145,
"name": "Sleep",
"icon": 465,
"classjob": 7
},
{
"id": 146,
"name": "Blizzard II",
"icon": 455,
"classjob": 7
},
{
"id": 147,
"name": "Fire II",
"icon": 452,
"classjob": 7
},
{
"id": 148,
"name": "Thunder II",
"icon": 458,
"classjob": 7
},
{
"id": 149,
"name": "Transpose",
"icon": 466,
"classjob": 7
},
{
"id": 150,
"name": "Swiftcast",
"icon": 461,
"classjob": 7
},
{
"id": 151,
"name": "Lethargy",
"icon": 464,
"classjob": 7
},
{
"id": 152,
"name": "Fire III",
"icon": 453,
"classjob": 7
},
{
"id": 153,
"name": "Thunder III",
"icon": 459,
"classjob": 7
},
{
"id": 154,
"name": "Blizzard III",
"icon": 456,
"classjob": 7
},
{
"id": 155,
"name": "Aetherial Manipulation",
"icon": 467,
"classjob": 7
},
{
"id": 156,
"name": "Scathe",
"icon": 462,
"classjob": 7
},
{
"id": 157,
"name": "Manaward",
"icon": 463,
"classjob": 7
},
{
"id": 158,
"name": "Convert",
"icon": 2651,
"classjob": 25
},
{
"id": 159,
"name": "Freeze",
"icon": 2653,
"classjob": 25
},
{
"id": 160,
"name": "Apocatastasis",
"icon": 2654,
"classjob": 25
},
{
"id": 161,
"name": "Manawall",
"icon": 2655,
"classjob": 25
},
{
"id": 162,
"name": "Flare",
"icon": 2652,
"classjob": 25
},
{
"id": 163,
"name": "Ruin",
"icon": 501,
"classjob": 26
},
{
"id": 164,
"name": "Bio",
"icon": 503,
"classjob": 26
},
{
"id": 165,
"name": "Summon",
"icon": 516,
"classjob": 26
},
{
"id": 166,
"name": "Aetherflow",
"icon": 510,
"classjob": 26
},
{
"id": 167,
"name": "Energy Drain",
"icon": 514,
"classjob": 26
},
{
"id": 168,
"name": "Miasma",
"icon": 505,
"classjob": 26
},
{
"id": 169,
"name": "Virus",
"icon": 513,
"classjob": 26
},
{
"id": 170,
"name": "Summon II",
"icon": 517,
"classjob": 26
},
{
"id": 171,
"name": "Sustain",
"icon": 508,
"classjob": 26
},
{
"id": 3579,
"name": "Ruin III",
"icon": 2682,
"classjob": 27
},
{
"id": 172,
"name": "Ruin II",
"icon": 502,
"classjob": 26
},
{
"id": 173,
"name": "Resurrection",
"icon": 511,
"classjob": 26
},
{
"id": 174,
"name": "Bane",
"icon": 507,
"classjob": 26
},
{
"id": 175,
"name": "Eye For An Eye",
"icon": 512,
"classjob": 26
},
{
"id": 176,
"name": "Rouse",
"icon": 509,
"classjob": 26
},
{
"id": 177,
"name": "Miasma II",
"icon": 506,
"classjob": 26
},
{
"id": 178,
"name": "Bio II",
"icon": 504,
"classjob": 26
},
{
"id": 179,
"name": "Shadow Flare",
"icon": 515,
"classjob": 26
},
{
"id": 180,
"name": "Summon III",
"icon": 2680,
"classjob": 27
},
{
"id": 181,
"name": "Fester",
"icon": 2676,
"classjob": 27
},
{
"id": 182,
"name": "Tri-bind",
"icon": 2678,
"classjob": 27
},
{
"id": 183,
"name": "Spur",
"icon": 2679,
"classjob": 27
},
{
"id": 184,
"name": "Enkindle",
"icon": 2677,
"classjob": 27
},
{
"id": 185,
"name": "Adloquium",
"icon": 2801,
"classjob": 28
},
{
"id": 186,
"name": "Succor",
"icon": 2802,
"classjob": 28
},
{
"id": 187,
"name": "Leeches",
"icon": 2803,
"classjob": 28
},
{
"id": 188,
"name": "Sacred Soil",
"icon": 2804,
"classjob": 28
},
{
"id": 189,
"name": "Lustrate",
"icon": 2805,
"classjob": 28
},
{
"id": 190,
"name": "Physick",
"icon": 518,
"classjob": 26
},
{
"id": 191,
"name": "Stoneskin II",
"icon": 418,
"classjob": 6
},
{
"id": 196,
"name": "反撃効果",
"icon": 405,
"classjob": -1
},
{
"id": 197,
"name": "Shield Wall",
"icon": 103,
"classjob": 0
},
{
"id": 198,
"name": "Mighty Guard",
"icon": 103,
"classjob": 0
},
{
"id": 199,
"name": "Last Bastion",
"icon": 103,
"classjob": 0
},
{
"id": 200,
"name": "Braver",
"icon": 103,
"classjob": 0
},
{
"id": 201,
"name": "Bladedance",
"icon": 103,
"classjob": 0
},
{
"id": 202,
"name": "Final Heaven",
"icon": 103,
"classjob": 0
},
{
"id": 203,
"name": "Skyshard",
"icon": 103,
"classjob": 0
},
{
"id": 204,
"name": "Starstorm",
"icon": 103,
"classjob": 0
},
{
"id": 205,
"name": "Meteor",
"icon": 103,
"classjob": 0
},
{
"id": 206,
"name": "Healing Wind",
"icon": 103,
"classjob": 0
},
{
"id": 207,
"name": "Breath Of The Earth",
"icon": 103,
"classjob": 0
},
{
"id": 208,
"name": "Pulse Of Life",
"icon": 103,
"classjob": 0
},
{
"id": 209,
"name": "Limit Break",
"icon": 405,
"classjob": -1
},
{
"id": 210,
"name": "Triangulate",
"icon": 1051,
"classjob": 17
},
{
"id": 211,
"name": "Arbor Call",
"icon": 1052,
"classjob": 17
},
{
"id": 212,
"name": "Stealth",
"icon": 1055,
"classjob": 17
},
{
"id": 213,
"name": "Preparation",
"icon": 1054,
"classjob": 17
},
{
"id": 214,
"name": "Toil Of The Pioneer",
"icon": 1068,
"classjob": 17
},
{
"id": 215,
"name": "Ageless Words",
"icon": 1059,
"classjob": 17
},
{
"id": 216,
"name": "Brunt Force",
"icon": 1058,
"classjob": 17
},
{
"id": 217,
"name": "Nophica's Ward",
"icon": 1060,
"classjob": 17
},
{
"id": 218,
"name": "Field Mastery",
"icon": 1065,
"classjob": 17
},
{
"id": 219,
"name": "Byregot's Ward",
"icon": 1061,
"classjob": 16
},
{
"id": 220,
"name": "Field Mastery II",
"icon": 1066,
"classjob": 17
},
{
"id": 221,
"name": "Truth Of Forests",
"icon": 1069,
"classjob": 17
},
{
"id": 222,
"name": "Blessed Harvest",
"icon": 1056,
"classjob": 17
},
{
"id": 224,
"name": "Blessed Harvest II",
"icon": 1057,
"classjob": 17
},
{
"id": 225,
"name": "Leaf Turn",
"icon": 1063,
"classjob": 17
},
{
"id": 226,
"name": "Leaf Turn II",
"icon": 1064,
"classjob": 17
},
{
"id": 227,
"name": "Prospect",
"icon": 1001,
"classjob": 16
},
{
"id": 228,
"name": "Lay Of The Land",
"icon": 1002,
"classjob": 16
},
{
"id": 229,
"name": "Stealth",
"icon": 1005,
"classjob": 16
},
{
"id": 230,
"name": "Preparation",
"icon": 1004,
"classjob": 16
},
{
"id": 231,
"name": "Toil Of The Mountaineer",
"icon": 1018,
"classjob": 16
},
{
"id": 232,
"name": "Solid Reason",
"icon": 1009,
"classjob": 16
},
{
"id": 233,
"name": "Deep Vigor",
"icon": 1008,
"classjob": 16
},
{
"id": 234,
"name": "Nald'thal's Ward",
"icon": 1010,
"classjob": 16
},
{
"id": 235,
"name": "Sharp Vision",
"icon": 1015,
"classjob": 16
},
{
"id": 236,
"name": "Menphina's Ward",
"icon": 1011,
"classjob": 17
},
{
"id": 237,
"name": "Sharp Vision II",
"icon": 1016,
"classjob": 16
},
{
"id": 238,
"name": "Truth Of Mountains",
"icon": 1019,
"classjob": 16
},
{
"id": 239,
"name": "King's Yield",
"icon": 1006,
"classjob": 16
},
{
"id": 241,
"name": "King's Yield II",
"icon": 1007,
"classjob": 16
},
{
"id": 242,
"name": "Unearth",
"icon": 1013,
"classjob": 16
},
{
"id": 243,
"name": "Unearth II",
"icon": 1014,
"classjob": 16
},
{
"id": 244,
"name": "Steady Hand",
"icon": 1514,
"classjob": 8
},
{
"id": 245,
"name": "Steady Hand",
"icon": 1564,
"classjob": 9
},
{
"id": 246,
"name": "Steady Hand",
"icon": 1614,
"classjob": 10
},
{
"id": 247,
"name": "Steady Hand",
"icon": 1663,
"classjob": 11
},
{
"id": 248,
"name": "Steady Hand",
"icon": 1763,
"classjob": 13
},
{
"id": 249,
"name": "Steady Hand",
"icon": 1714,
"classjob": 12
},
{
"id": 250,
"name": "Steady Hand",
"icon": 1814,
"classjob": 14
},
{
"id": 251,
"name": "Steady Hand",
"icon": 1863,
"classjob": 15
},
{
"id": 252,
"name": "Inner Quiet",
"icon": 1503,
"classjob": 8
},
{
"id": 253,
"name": "Inner Quiet",
"icon": 1553,
"classjob": 9
},
{
"id": 254,
"name": "Inner Quiet",
"icon": 1603,
"classjob": 10
},
{
"id": 255,
"name": "Inner Quiet",
"icon": 1653,
"classjob": 11
},
{
"id": 256,
"name": "Inner Quiet",
"icon": 1753,
"classjob": 13
},
{
"id": 257,
"name": "Inner Quiet",
"icon": 1703,
"classjob": 12
},
{
"id": 258,
"name": "Inner Quiet",
"icon": 1803,
"classjob": 14
},
{
"id": 259,
"name": "Inner Quiet",
"icon": 1853,
"classjob": 15
},
{
"id": 260,
"name": "Great Strides",
"icon": 1519,
"classjob": 8
},
{
"id": 261,
"name": "Great Strides",
"icon": 1569,
"classjob": 9
},
{
"id": 262,
"name": "Great Strides",
"icon": 1620,
"classjob": 10
},
{
"id": 263,
"name": "Great Strides",
"icon": 1669,
"classjob": 11
},
{
"id": 264,
"name": "Great Strides",
"icon": 1769,
"classjob": 13
},
{
"id": 265,
"name": "Great Strides",
"icon": 1719,
"classjob": 12
},
{
"id": 266,
"name": "Great Strides",
"icon": 1820,
"classjob": 14
},
{
"id": 267,
"name": "Great Strides",
"icon": 1869,
"classjob": 15
},
{
"id": 276,
"name": "Rumination",
"icon": 1506,
"classjob": 8
},
{
"id": 277,
"name": "Ingenuity",
"icon": 1556,
"classjob": 9
},
{
"id": 278,
"name": "Manipulation",
"icon": 1668,
"classjob": 11
},
{
"id": 279,
"name": "Waste Not",
"icon": 1706,
"classjob": 12
},
{
"id": 281,
"name": "Steady Hand II",
"icon": 1871,
"classjob": 15
},
{
"id": 283,
"name": "Ingenuity II",
"icon": 1571,
"classjob": 9
},
{
"id": 284,
"name": "Innovation",
"icon": 1672,
"classjob": 11
},
{
"id": 285,
"name": "Waste Not II",
"icon": 1721,
"classjob": 12
},
{
"id": 286,
"name": "Comfort Zone",
"icon": 1822,
"classjob": 14
},
{
"id": 287,
"name": "Reclaim",
"icon": 1872,
"classjob": 15
},
{
"id": 288,
"name": "Bait",
"icon": 1106,
"classjob": 18
},
{
"id": 289,
"name": "Cast",
"icon": 1101,
"classjob": 18
},
{
"id": 290,
"name": "Arbor Call II",
"icon": 1053,
"classjob": 17
},
{
"id": 291,
"name": "Lay Of The Land II",
"icon": 1003,
"classjob": 16
},
{
"id": 292,
"name": "Llymlaen's Ward",
"icon": 1062,
"classjob": 17
},
{
"id": 293,
"name": "Thaliak's Ward",
"icon": 1012,
"classjob": 16
},
{
"id": 294,
"name": "Field Mastery III",
"icon": 1067,
"classjob": 17
},
{
"id": 295,
"name": "Sharp Vision III",
"icon": 1017,
"classjob": 16
},
{
"id": 296,
"name": "Hook",
"icon": 1103,
"classjob": 18
},
{
"id": 297,
"name": "Mooch",
"icon": 1104,
"classjob": 18
},
{
"id": 298,
"name": "Stealth",
"icon": 1105,
"classjob": 18
},
{
"id": 299,
"name": "Quit",
"icon": 1102,
"classjob": 18
},
{
"id": 300,
"name": "Release",
"icon": 1108,
"classjob": 18
},
{
"id": 307,
"name": "Silence",
"icon": 405,
"classjob": -1
},
{
"id": 308,
"name": "Paralyze",
"icon": 405,
"classjob": -1
},
{
"id": 309,
"name": "Haste",
"icon": 405,
"classjob": -1
},
{
"id": 310,
"name": "Slow",
"icon": 405,
"classjob": -1
},
{
"id": 311,
"name": "Blaze Spikes",
"icon": 405,
"classjob": -1
},
{
"id": 312,
"name": "Ice Spikes",
"icon": 405,
"classjob": -1
},
{
"id": 313,
"name": "Shock Spikes",
"icon": 405,
"classjob": -1
},
{
"id": 314,
"name": "物理ストンスキン",
"icon": 405,
"classjob": -1
},
{
"id": 315,
"name": "魔法ストンスキン",
"icon": 405,
"classjob": -1
},
{
"id": 316,
"name": "Stoneskin",
"icon": 405,
"classjob": -1
},
{
"id": 317,
"name": "Foul Breath",
"icon": 405,
"classjob": -1
},
{
"id": 318,
"name": "Frost Breath",
"icon": 405,
"classjob": -1
},
{
"id": 319,
"name": "Hoofkick",
"icon": 405,
"classjob": -1
},
{
"id": 320,
"name": "Stampede",
"icon": 405,
"classjob": -1
},
{
"id": 321,
"name": "Big Horn",
"icon": 405,
"classjob": -1
},
{
"id": 322,
"name": "Stone Throw",
"icon": 405,
"classjob": -1
},
{
"id": 323,
"name": "Soil Smear",
"icon": 405,
"classjob": -1
},
{
"id": 324,
"name": "Greedy Grab",
"icon": 405,
"classjob": -1
},
{
"id": 325,
"name": "Thunderstrike",
"icon": 405,
"classjob": -1
},
{
"id": 326,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 327,
"name": "Sticky Web",
"icon": 405,
"classjob": -1
},
{
"id": 328,
"name": "Caustic Spray",
"icon": 405,
"classjob": -1
},
{
"id": 329,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 330,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 331,
"name": "Wing Cutter",
"icon": 405,
"classjob": -1
},
{
"id": 332,
"name": "Bloodcurdling Caw",
"icon": 405,
"classjob": -1
},
{
"id": 333,
"name": "Yolk Shower",
"icon": 405,
"classjob": -1
},
{
"id": 334,
"name": "Reckless Charge",
"icon": 405,
"classjob": -1
},
{
"id": 335,
"name": "Bristle",
"icon": 405,
"classjob": -1
},
{
"id": 336,
"name": "Bellowing Grunt",
"icon": 405,
"classjob": -1
},
{
"id": 337,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 338,
"name": "Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 339,
"name": "Deflagration",
"icon": 405,
"classjob": -1
},
{
"id": 340,
"name": "Mortify",
"icon": 405,
"classjob": -1
},
{
"id": 341,
"name": "Hell Slash",
"icon": 405,
"classjob": -1
},
{
"id": 342,
"name": "Soul Drain",
"icon": 405,
"classjob": -1
},
{
"id": 343,
"name": "Doom",
"icon": 405,
"classjob": -1
},
{
"id": 344,
"name": "Seedvolley",
"icon": 405,
"classjob": -1
},
{
"id": 345,
"name": "Sour Sough",
"icon": 405,
"classjob": -1
},
{
"id": 346,
"name": "Swift Sough",
"icon": 405,
"classjob": -1
},
{
"id": 347,
"name": "Sticky Tongue",
"icon": 405,
"classjob": -1
},
{
"id": 348,
"name": "Slimy Secretion",
"icon": 405,
"classjob": -1
},
{
"id": 349,
"name": "Languid Lap",
"icon": 405,
"classjob": -1
},
{
"id": 350,
"name": "Microblaster",
"icon": 405,
"classjob": -1
},
{
"id": 351,
"name": "Charged Whisker",
"icon": 405,
"classjob": -1
},
{
"id": 352,
"name": "Chaotic Eye",
"icon": 405,
"classjob": -1
},
{
"id": 353,
"name": "Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 354,
"name": "Curiosity",
"icon": 405,
"classjob": -1
},
{
"id": 355,
"name": "Megablaster",
"icon": 405,
"classjob": -1
},
{
"id": 356,
"name": "Iron Justice",
"icon": 405,
"classjob": -1
},
{
"id": 357,
"name": "King's Will",
"icon": 405,
"classjob": -1
},
{
"id": 358,
"name": "Blade Of Suffering",
"icon": 405,
"classjob": -1
},
{
"id": 359,
"name": "Blade Of Absolution",
"icon": 405,
"classjob": -1
},
{
"id": 360,
"name": "Blade Of Repentance",
"icon": 405,
"classjob": -1
},
{
"id": 361,
"name": "Flat Blade",
"icon": 405,
"classjob": -1
},
{
"id": 362,
"name": "Mind Blast",
"icon": 405,
"classjob": -1
},
{
"id": 363,
"name": "Drain Touch",
"icon": 405,
"classjob": -1
},
{
"id": 364,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 365,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 366,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 367,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 368,
"name": "Mudslinger",
"icon": 405,
"classjob": -1
},
{
"id": 369,
"name": "Stone Throw",
"icon": 405,
"classjob": -1
},
{
"id": 370,
"name": "Bombardier",
"icon": 405,
"classjob": -1
},
{
"id": 371,
"name": "Infestation",
"icon": 405,
"classjob": -1
},
{
"id": 372,
"name": "Spoil",
"icon": 405,
"classjob": -1
},
{
"id": 373,
"name": "Somersault Slash",
"icon": 405,
"classjob": -1
},
{
"id": 374,
"name": "Nutshell",
"icon": 405,
"classjob": -1
},
{
"id": 375,
"name": "Nutshell",
"icon": 405,
"classjob": -1
},
{
"id": 376,
"name": "Nutshell",
"icon": 405,
"classjob": -1
},
{
"id": 377,
"name": "Scamper",
"icon": 405,
"classjob": -1
},
{
"id": 378,
"name": "Blood Drain",
"icon": 405,
"classjob": -1
},
{
"id": 379,
"name": "Ultrasonics",
"icon": 405,
"classjob": -1
},
{
"id": 380,
"name": "Ultrasonics",
"icon": 405,
"classjob": -1
},
{
"id": 381,
"name": "Aqueous Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 382,
"name": "Viscous Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 383,
"name": "Mucous Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 384,
"name": "Agitation",
"icon": 405,
"classjob": -1
},
{
"id": 385,
"name": "Agitation",
"icon": 405,
"classjob": -1
},
{
"id": 386,
"name": "Agitation",
"icon": 405,
"classjob": -1
},
{
"id": 387,
"name": "Snap Jaw",
"icon": 405,
"classjob": -1
},
{
"id": 388,
"name": "Corrosive Spit",
"icon": 405,
"classjob": -1
},
{
"id": 389,
"name": "Corrosive Spit",
"icon": 405,
"classjob": -1
},
{
"id": 390,
"name": "Proboscis",
"icon": 405,
"classjob": -1
},
{
"id": 391,
"name": "Blood Drain",
"icon": 405,
"classjob": -1
},
{
"id": 392,
"name": "Blood Drain",
"icon": 405,
"classjob": -1
},
{
"id": 393,
"name": "Blinding Burst",
"icon": 405,
"classjob": -1
},
{
"id": 394,
"name": "Lulling Light",
"icon": 405,
"classjob": -1
},
{
"id": 395,
"name": "Limbs Of Lead",
"icon": 405,
"classjob": -1
},
{
"id": 396,
"name": "Hypha Whip",
"icon": 405,
"classjob": -1
},
{
"id": 397,
"name": "Queasy Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 398,
"name": "Slumber Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 399,
"name": "Romp",
"icon": 405,
"classjob": -1
},
{
"id": 400,
"name": "Jittering Jig",
"icon": 405,
"classjob": -1
},
{
"id": 401,
"name": "Frenetic Flurry",
"icon": 405,
"classjob": -1
},
{
"id": 402,
"name": "Haste",
"icon": 405,
"classjob": -1
},
{
"id": 403,
"name": "Fortis",
"icon": 405,
"classjob": -1
},
{
"id": 404,
"name": "Celeris",
"icon": 405,
"classjob": -1
},
{
"id": 405,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 406,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 407,
"name": "Firecracker Shower",
"icon": 405,
"classjob": -1
},
{
"id": 408,
"name": "Wild Rattle",
"icon": 405,
"classjob": -1
},
{
"id": 409,
"name": "Dripping Fang",
"icon": 405,
"classjob": -1
},
{
"id": 410,
"name": "Stone Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 411,
"name": "Backflip",
"icon": 405,
"classjob": -1
},
{
"id": 412,
"name": "Tail Chase",
"icon": 405,
"classjob": -1
},
{
"id": 413,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 414,
"name": "Bombination",
"icon": 405,
"classjob": -1
},
{
"id": 415,
"name": "Whipcrack",
"icon": 405,
"classjob": -1
},
{
"id": 416,
"name": "Golden Tongue",
"icon": 405,
"classjob": -1
},
{
"id": 417,
"name": "Tortoise Stomp",
"icon": 405,
"classjob": -1
},
{
"id": 418,
"name": "Harden Shell",
"icon": 405,
"classjob": -1
},
{
"id": 419,
"name": "Lateral Slash",
"icon": 405,
"classjob": -1
},
{
"id": 420,
"name": "Whetstone",
"icon": 405,
"classjob": -1
},
{
"id": 421,
"name": "Smite Of Rage",
"icon": 405,
"classjob": -1
},
{
"id": 422,
"name": "Grand Slam",
"icon": 405,
"classjob": -1
},
{
"id": 423,
"name": "Coming Storm",
"icon": 405,
"classjob": -1
},
{
"id": 424,
"name": "Swift Gust",
"icon": 405,
"classjob": -1
},
{
"id": 425,
"name": "Reflect",
"icon": 405,
"classjob": -1
},
{
"id": 426,
"name": "Enfire",
"icon": 405,
"classjob": -1
},
{
"id": 427,
"name": "Enblizzard",
"icon": 405,
"classjob": -1
},
{
"id": 428,
"name": "Enaero",
"icon": 405,
"classjob": -1
},
{
"id": 429,
"name": "Enstone",
"icon": 405,
"classjob": -1
},
{
"id": 430,
"name": "Enthunder",
"icon": 405,
"classjob": -1
},
{
"id": 431,
"name": "Enwater",
"icon": 405,
"classjob": -1
},
{
"id": 432,
"name": "Drain",
"icon": 405,
"classjob": -1
},
{
"id": 440,
"name": "Canopy",
"icon": 405,
"classjob": -1
},
{
"id": 441,
"name": "Arboreal Storm",
"icon": 405,
"classjob": -1
},
{
"id": 442,
"name": "Acorn Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 443,
"name": "Stone Skull",
"icon": 405,
"classjob": -1
},
{
"id": 444,
"name": "Boulder Clap",
"icon": 405,
"classjob": -1
},
{
"id": 445,
"name": "True Grit",
"icon": 405,
"classjob": -1
},
{
"id": 446,
"name": "The Dragon's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 447,
"name": "登場",
"icon": 405,
"classjob": -1
},
{
"id": 448,
"name": "Stagnant Spray",
"icon": 405,
"classjob": -1
},
{
"id": 449,
"name": "Eerie Light",
"icon": 405,
"classjob": -1
},
{
"id": 450,
"name": "Peculiar Light",
"icon": 405,
"classjob": -1
},
{
"id": 451,
"name": "攻撃",
"icon": 405,
"classjob": -1
},
{
"id": 452,
"name": "Sear",
"icon": 405,
"classjob": -1
},
{
"id": 453,
"name": "Incinerate",
"icon": 405,
"classjob": -1
},
{
"id": 454,
"name": "Vulcan Burst",
"icon": 405,
"classjob": -1
},
{
"id": 455,
"name": "Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 456,
"name": "Radiant Plume",
"icon": 405,
"classjob": -1
},
{
"id": 457,
"name": "Crimson Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 458,
"name": "Hellfire",
"icon": 405,
"classjob": -1
},
{
"id": 459,
"name": "イフリート：ジャンプ",
"icon": 405,
"classjob": -1
},
{
"id": 460,
"name": "イフリート：着地",
"icon": 405,
"classjob": -1
},
{
"id": 461,
"name": "イフリート：炎獄の楔召喚",
"icon": 405,
"classjob": -1
},
{
"id": 462,
"name": "イフリート：角復活",
"icon": 405,
"classjob": -1
},
{
"id": 463,
"name": "イフリート：怒りオン",
"icon": 405,
"classjob": -1
},
{
"id": 464,
"name": "炎獄の楔：出現",
"icon": 405,
"classjob": -1
},
{
"id": 465,
"name": "炎獄の楔：死亡",
"icon": 405,
"classjob": -1
},
{
"id": 474,
"name": "Barbaric Surge",
"icon": 405,
"classjob": -1
},
{
"id": 475,
"name": "Triple Threat",
"icon": 405,
"classjob": -1
},
{
"id": 476,
"name": "Footwork",
"icon": 405,
"classjob": -1
},
{
"id": 477,
"name": "Gut Rip",
"icon": 405,
"classjob": -1
},
{
"id": 478,
"name": "Backhand Blow",
"icon": 405,
"classjob": -1
},
{
"id": 479,
"name": "Rise And Fall",
"icon": 405,
"classjob": -1
},
{
"id": 480,
"name": "Photosynthesis",
"icon": 405,
"classjob": -1
},
{
"id": 481,
"name": "Photorespiration",
"icon": 405,
"classjob": -1
},
{
"id": 482,
"name": "Plaincracker",
"icon": 405,
"classjob": -1
},
{
"id": 483,
"name": "Rockslide",
"icon": 405,
"classjob": -1
},
{
"id": 484,
"name": "Calcify",
"icon": 405,
"classjob": -1
},
{
"id": 485,
"name": "汎用：詩人技：回避アップ歌",
"icon": 405,
"classjob": -1
},
{
"id": 486,
"name": "汎用：詩人技：攻撃アップ歌",
"icon": 405,
"classjob": -1
},
{
"id": 487,
"name": "汎用：詩人技：防御アップ歌",
"icon": 405,
"classjob": -1
},
{
"id": 488,
"name": "Cold Caress",
"icon": 405,
"classjob": -1
},
{
"id": 489,
"name": "Sweet Steel",
"icon": 405,
"classjob": -1
},
{
"id": 490,
"name": "Devastate",
"icon": 405,
"classjob": -1
},
{
"id": 491,
"name": "Infuriate",
"icon": 405,
"classjob": -1
},
{
"id": 492,
"name": "Piercing Arrow",
"icon": 405,
"classjob": -1
},
{
"id": 493,
"name": "汎用：巴術技：単体スロウ",
"icon": 405,
"classjob": -1
},
{
"id": 494,
"name": "汎用：巴術技：単体防御DOWN",
"icon": 405,
"classjob": -1
},
{
"id": 495,
"name": "Faze",
"icon": 405,
"classjob": -1
},
{
"id": 496,
"name": "Sandslinger",
"icon": 405,
"classjob": -1
},
{
"id": 497,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 498,
"name": "Cold Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 499,
"name": "Stone Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 500,
"name": "Run Amok",
"icon": 405,
"classjob": -1
},
{
"id": 501,
"name": "50 Needles",
"icon": 405,
"classjob": -1
},
{
"id": 502,
"name": "100 Needles",
"icon": 405,
"classjob": -1
},
{
"id": 503,
"name": "1000 Needles",
"icon": 405,
"classjob": -1
},
{
"id": 504,
"name": "Hammer Beak",
"icon": 405,
"classjob": -1
},
{
"id": 505,
"name": "Petribreath",
"icon": 405,
"classjob": -1
},
{
"id": 506,
"name": "Numbing Breath",
"icon": 405,
"classjob": -1
},
{
"id": 507,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 508,
"name": "Slumber Breath",
"icon": 405,
"classjob": -1
},
{
"id": 509,
"name": "Howl",
"icon": 405,
"classjob": -1
},
{
"id": 510,
"name": "Foul Bite",
"icon": 405,
"classjob": -1
},
{
"id": 511,
"name": "Sanguine Bite",
"icon": 405,
"classjob": -1
},
{
"id": 512,
"name": "Cursed Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 513,
"name": "Dread Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 514,
"name": "Level 5 Petrify",
"icon": 405,
"classjob": -1
},
{
"id": 515,
"name": "Vulcanize",
"icon": 405,
"classjob": -1
},
{
"id": 516,
"name": "Shatter",
"icon": 405,
"classjob": -1
},
{
"id": 517,
"name": "Burning Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 518,
"name": "Levinshower",
"icon": 405,
"classjob": -1
},
{
"id": 519,
"name": "Levinfang",
"icon": 405,
"classjob": -1
},
{
"id": 520,
"name": "Head Butt",
"icon": 405,
"classjob": -1
},
{
"id": 521,
"name": "Seismic Scream",
"icon": 405,
"classjob": -1
},
{
"id": 522,
"name": "Lanolin",
"icon": 405,
"classjob": -1
},
{
"id": 523,
"name": "Trap Jaws",
"icon": 405,
"classjob": -1
},
{
"id": 524,
"name": "Acid Spray",
"icon": 405,
"classjob": -1
},
{
"id": 525,
"name": "Drill Cannons",
"icon": 405,
"classjob": -1
},
{
"id": 526,
"name": "Cermet Drill",
"icon": 405,
"classjob": -1
},
{
"id": 527,
"name": "Overcharge",
"icon": 405,
"classjob": -1
},
{
"id": 528,
"name": "Sand Breath",
"icon": 405,
"classjob": -1
},
{
"id": 529,
"name": "Sandstorm",
"icon": 405,
"classjob": -1
},
{
"id": 530,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 531,
"name": "Earthbreak",
"icon": 405,
"classjob": -1
},
{
"id": 532,
"name": "Earthquake",
"icon": 405,
"classjob": -1
},
{
"id": 533,
"name": "Sand Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 534,
"name": "Grand Sword",
"icon": 405,
"classjob": -1
},
{
"id": 535,
"name": "Grand Strike",
"icon": 405,
"classjob": -1
},
{
"id": 536,
"name": "Disruptor",
"icon": 405,
"classjob": -1
},
{
"id": 537,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 538,
"name": "Overheat",
"icon": 405,
"classjob": -1
},
{
"id": 539,
"name": "Exhaust",
"icon": 405,
"classjob": -1
},
{
"id": 540,
"name": "Magitek Field",
"icon": 405,
"classjob": -1
},
{
"id": 541,
"name": "Gnaw",
"icon": 405,
"classjob": -1
},
{
"id": 542,
"name": "Seaspray",
"icon": 405,
"classjob": -1
},
{
"id": 543,
"name": "Sandspray",
"icon": 405,
"classjob": -1
},
{
"id": 544,
"name": "Feeding Frenzy",
"icon": 405,
"classjob": -1
},
{
"id": 545,
"name": "Pulverizing Pound",
"icon": 405,
"classjob": -1
},
{
"id": 546,
"name": "Seismic Rift",
"icon": 405,
"classjob": -1
},
{
"id": 547,
"name": "Seismic Rift",
"icon": 405,
"classjob": -1
},
{
"id": 548,
"name": "Khoomii",
"icon": 405,
"classjob": -1
},
{
"id": 549,
"name": "Sonorous Blast",
"icon": 405,
"classjob": -1
},
{
"id": 550,
"name": "Encierro",
"icon": 405,
"classjob": -1
},
{
"id": 551,
"name": "Soil Coat",
"icon": 405,
"classjob": -1
},
{
"id": 552,
"name": "Spine Stream",
"icon": 405,
"classjob": -1
},
{
"id": 553,
"name": "Titan's Boon",
"icon": 405,
"classjob": -1
},
{
"id": 554,
"name": "Titan's Anger",
"icon": 405,
"classjob": -1
},
{
"id": 555,
"name": "Water Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 556,
"name": "Hydroball",
"icon": 405,
"classjob": -1
},
{
"id": 557,
"name": "Lacerate",
"icon": 405,
"classjob": -1
},
{
"id": 558,
"name": "Salivous Snap",
"icon": 405,
"classjob": -1
},
{
"id": 559,
"name": "Dragon Breath",
"icon": 405,
"classjob": -1
},
{
"id": 560,
"name": "Granite Rain",
"icon": 405,
"classjob": -1
},
{
"id": 561,
"name": "Spinning Kick",
"icon": 405,
"classjob": -1
},
{
"id": 562,
"name": "Groundburst",
"icon": 405,
"classjob": -1
},
{
"id": 563,
"name": "Toxic Vomit",
"icon": 405,
"classjob": -1
},
{
"id": 564,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 565,
"name": "カラードラゴン：飛び立ち消滅",
"icon": 405,
"classjob": -1
},
{
"id": 566,
"name": "Bubble Shower",
"icon": 405,
"classjob": -1
},
{
"id": 567,
"name": "Big Scissors",
"icon": 405,
"classjob": -1
},
{
"id": 568,
"name": "Bubble Bath",
"icon": 405,
"classjob": -1
},
{
"id": 569,
"name": "Crab Dribble",
"icon": 405,
"classjob": -1
},
{
"id": 570,
"name": "Peck",
"icon": 405,
"classjob": -1
},
{
"id": 571,
"name": "Fowl Stench",
"icon": 405,
"classjob": -1
},
{
"id": 572,
"name": "Rancid Belch",
"icon": 405,
"classjob": -1
},
{
"id": 573,
"name": "Flying Sardine",
"icon": 405,
"classjob": -1
},
{
"id": 574,
"name": "Regurgitate",
"icon": 405,
"classjob": -1
},
{
"id": 575,
"name": "Beatdown",
"icon": 405,
"classjob": -1
},
{
"id": 576,
"name": "Inhale",
"icon": 405,
"classjob": -1
},
{
"id": 577,
"name": "Swallow",
"icon": 405,
"classjob": -1
},
{
"id": 578,
"name": "Spit",
"icon": 405,
"classjob": -1
},
{
"id": 579,
"name": "Moldy Sneeze",
"icon": 405,
"classjob": -1
},
{
"id": 580,
"name": "Sickly Sneeze",
"icon": 405,
"classjob": -1
},
{
"id": 581,
"name": "Black Hole",
"icon": 405,
"classjob": -1
},
{
"id": 582,
"name": "Worm Hole",
"icon": 405,
"classjob": -1
},
{
"id": 583,
"name": "The Look",
"icon": 405,
"classjob": -1
},
{
"id": 584,
"name": "Rotten Breath",
"icon": 405,
"classjob": -1
},
{
"id": 585,
"name": "Curse",
"icon": 405,
"classjob": -1
},
{
"id": 586,
"name": "Malice",
"icon": 405,
"classjob": -1
},
{
"id": 587,
"name": "Pervasion",
"icon": 405,
"classjob": -1
},
{
"id": 588,
"name": "Numbing Tendrils",
"icon": 405,
"classjob": -1
},
{
"id": 589,
"name": "Irritating Tendrils",
"icon": 405,
"classjob": -1
},
{
"id": 590,
"name": "Bleat",
"icon": 405,
"classjob": -1
},
{
"id": 591,
"name": "Fleece Butt",
"icon": 405,
"classjob": -1
},
{
"id": 592,
"name": "Lullaby",
"icon": 405,
"classjob": -1
},
{
"id": 593,
"name": "Floral Bouquet",
"icon": 405,
"classjob": -1
},
{
"id": 594,
"name": "Scream",
"icon": 405,
"classjob": -1
},
{
"id": 595,
"name": "Catapult",
"icon": 405,
"classjob": -1
},
{
"id": 596,
"name": "Bestial Bay",
"icon": 405,
"classjob": -1
},
{
"id": 597,
"name": "ドラゴン毒沼：発生ループ",
"icon": 405,
"classjob": -1
},
{
"id": 598,
"name": "ドラゴン毒沼：消滅",
"icon": 405,
"classjob": -1
},
{
"id": 599,
"name": "Aqua Vitae",
"icon": 405,
"classjob": -1
},
{
"id": 600,
"name": "Bone Powder",
"icon": 405,
"classjob": -1
},
{
"id": 601,
"name": "Beak Snap",
"icon": 405,
"classjob": -1
},
{
"id": 602,
"name": "Overtone Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 603,
"name": "Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 604,
"name": "Bad Breath",
"icon": 405,
"classjob": -1
},
{
"id": 605,
"name": "Sweet Breath",
"icon": 405,
"classjob": -1
},
{
"id": 606,
"name": "Vine Probe",
"icon": 405,
"classjob": -1
},
{
"id": 607,
"name": "Defensive Maneuvers",
"icon": 405,
"classjob": -1
},
{
"id": 608,
"name": "Shred",
"icon": 405,
"classjob": -1
},
{
"id": 609,
"name": "The Hand",
"icon": 405,
"classjob": -1
},
{
"id": 610,
"name": "Death Grip",
"icon": 405,
"classjob": -1
},
{
"id": 611,
"name": "デスクロー：デスクロー解除",
"icon": 405,
"classjob": -1
},
{
"id": 612,
"name": "Straight Punch",
"icon": 405,
"classjob": -1
},
{
"id": 613,
"name": "Elbow Drop",
"icon": 405,
"classjob": -1
},
{
"id": 614,
"name": "Heartburn",
"icon": 405,
"classjob": -1
},
{
"id": 615,
"name": "Absent-mindedness",
"icon": 405,
"classjob": -1
},
{
"id": 616,
"name": "Hot Hands",
"icon": 405,
"classjob": -1
},
{
"id": 617,
"name": "Hot Horns",
"icon": 405,
"classjob": -1
},
{
"id": 618,
"name": "Double Smash",
"icon": 405,
"classjob": -1
},
{
"id": 619,
"name": "Corrupted Tail",
"icon": 405,
"classjob": -1
},
{
"id": 620,
"name": "Grim Cleaver",
"icon": 405,
"classjob": -1
},
{
"id": 621,
"name": "Grim Halo",
"icon": 405,
"classjob": -1
},
{
"id": 622,
"name": "Desolation",
"icon": 405,
"classjob": -1
},
{
"id": 623,
"name": "Hellssend",
"icon": 405,
"classjob": -1
},
{
"id": 624,
"name": "Grim Fate",
"icon": 405,
"classjob": -1
},
{
"id": 625,
"name": "10-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 626,
"name": "10-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 627,
"name": "100-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 628,
"name": "100-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 629,
"name": "Glower",
"icon": 405,
"classjob": -1
},
{
"id": 630,
"name": "Animal Instinct",
"icon": 405,
"classjob": -1
},
{
"id": 631,
"name": "Eye Of The Beholder",
"icon": 405,
"classjob": -1
},
{
"id": 632,
"name": "Smoldering Scales",
"icon": 405,
"classjob": -1
},
{
"id": 633,
"name": "Gouge",
"icon": 551,
"classjob": -1
},
{
"id": 634,
"name": "Shining Topaz",
"icon": 552,
"classjob": -1
},
{
"id": 635,
"name": "Curl",
"icon": 553,
"classjob": -1
},
{
"id": 636,
"name": "Storm",
"icon": 554,
"classjob": -1
},
{
"id": 637,
"name": "Gust",
"icon": 561,
"classjob": -1
},
{
"id": 638,
"name": "Backdraft",
"icon": 563,
"classjob": -1
},
{
"id": 639,
"name": "Downburst",
"icon": 562,
"classjob": -1
},
{
"id": 640,
"name": "Shining Emerald",
"icon": 564,
"classjob": -1
},
{
"id": 641,
"name": "Rock Buster",
"icon": 405,
"classjob": -1
},
{
"id": 642,
"name": "Tumult",
"icon": 405,
"classjob": -1
},
{
"id": 643,
"name": "Mountain Buster",
"icon": 405,
"classjob": -1
},
{
"id": 644,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 645,
"name": "Rock Throw",
"icon": 405,
"classjob": -1
},
{
"id": 646,
"name": "Boulder Throw",
"icon": 405,
"classjob": -1
},
{
"id": 647,
"name": "Grim Cleaver",
"icon": 405,
"classjob": -1
},
{
"id": 648,
"name": "Grim Fate",
"icon": 405,
"classjob": -1
},
{
"id": 649,
"name": "Desolation",
"icon": 405,
"classjob": -1
},
{
"id": 650,
"name": "Landslide",
"icon": 405,
"classjob": -1
},
{
"id": 651,
"name": "Geocrush",
"icon": 405,
"classjob": -1
},
{
"id": 652,
"name": "Earthen Fury",
"icon": 405,
"classjob": -1
},
{
"id": 653,
"name": "タイタン：心臓露出",
"icon": 405,
"classjob": -1
},
{
"id": 654,
"name": "タイタン：飛ぶ",
"icon": 405,
"classjob": -1
},
{
"id": 655,
"name": "タイタン：着地する",
"icon": 405,
"classjob": -1
},
{
"id": 656,
"name": "Friction",
"icon": 405,
"classjob": -1
},
{
"id": 657,
"name": "Downburst",
"icon": 405,
"classjob": -1
},
{
"id": 658,
"name": "Wicked Wheel",
"icon": 405,
"classjob": -1
},
{
"id": 659,
"name": "Slipstream",
"icon": 405,
"classjob": -1
},
{
"id": 660,
"name": "Mistral Song",
"icon": 405,
"classjob": -1
},
{
"id": 661,
"name": "Mistral Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 662,
"name": "Aerial Blast",
"icon": 405,
"classjob": -1
},
{
"id": 663,
"name": "Great Whirlwind",
"icon": 405,
"classjob": -1
},
{
"id": 664,
"name": "Eye Of The Storm",
"icon": 405,
"classjob": -1
},
{
"id": 665,
"name": "Featherlance",
"icon": 405,
"classjob": -1
},
{
"id": 666,
"name": "Thermal Tumult",
"icon": 405,
"classjob": -1
},
{
"id": 667,
"name": "Mistral Song",
"icon": 405,
"classjob": -1
},
{
"id": 668,
"name": "Mirage",
"icon": 405,
"classjob": -1
},
{
"id": 669,
"name": "Wild Rattle",
"icon": 405,
"classjob": -1
},
{
"id": 670,
"name": "Liquid Hell",
"icon": 405,
"classjob": -1
},
{
"id": 671,
"name": "Twister",
"icon": 405,
"classjob": -1
},
{
"id": 672,
"name": "Corrupted Tail",
"icon": 405,
"classjob": -1
},
{
"id": 673,
"name": "Electromagnetism",
"icon": 405,
"classjob": -1
},
{
"id": 674,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 675,
"name": "Firestream",
"icon": 405,
"classjob": -1
},
{
"id": 676,
"name": "Flame Breath",
"icon": 405,
"classjob": -1
},
{
"id": 677,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 678,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 679,
"name": "Mana Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 680,
"name": "Obliterate",
"icon": 405,
"classjob": -1
},
{
"id": 681,
"name": "Eyes On Me",
"icon": 405,
"classjob": -1
},
{
"id": 682,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 683,
"name": "White Breath",
"icon": 405,
"classjob": -1
},
{
"id": 684,
"name": "ヒュドラ：首再生",
"icon": 405,
"classjob": -1
},
{
"id": 685,
"name": "Ball Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 686,
"name": "Ball Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 687,
"name": "Ball Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 688,
"name": "Ball Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 689,
"name": "Radiant Breath",
"icon": 405,
"classjob": -1
},
{
"id": 690,
"name": "Thrashing Star",
"icon": 405,
"classjob": -1
},
{
"id": 691,
"name": "Cannibalize",
"icon": 405,
"classjob": -1
},
{
"id": 692,
"name": "Colossal Slam",
"icon": 405,
"classjob": -1
},
{
"id": 693,
"name": "ヘカトンケイルリーダー：壁殴り",
"icon": 405,
"classjob": -1
},
{
"id": 694,
"name": "Immortalize",
"icon": 405,
"classjob": -1
},
{
"id": 695,
"name": "ヘカトンケイルメイジ：壁殴り",
"icon": 405,
"classjob": -1
},
{
"id": 696,
"name": "汎用：逃げる",
"icon": 405,
"classjob": -1
},
{
"id": 697,
"name": "Realm Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 698,
"name": "Sticky Web",
"icon": 405,
"classjob": -1
},
{
"id": 699,
"name": "蜘蛛：コチュー落下予兆",
"icon": 405,
"classjob": -1
},
{
"id": 700,
"name": "蜘蛛：コチュー落下",
"icon": 405,
"classjob": -1
},
{
"id": 701,
"name": "Silkscreen",
"icon": 405,
"classjob": -1
},
{
"id": 702,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 703,
"name": "蜘蛛：毒エリア",
"icon": 405,
"classjob": -1
},
{
"id": 704,
"name": "Tail Molt",
"icon": 405,
"classjob": -1
},
{
"id": 705,
"name": "Dark Mist",
"icon": 405,
"classjob": -1
},
{
"id": 706,
"name": "Void Lamp",
"icon": 405,
"classjob": -1
},
{
"id": 707,
"name": "Void Fire",
"icon": 405,
"classjob": -1
},
{
"id": 708,
"name": "ヒュドラ：右側首A破壊",
"icon": 405,
"classjob": -1
},
{
"id": 709,
"name": "ヒュドラ：右側首B破壊",
"icon": 405,
"classjob": -1
},
{
"id": 710,
"name": "ヒュドラ：左側首A破壊",
"icon": 405,
"classjob": -1
},
{
"id": 711,
"name": "ヒュドラ：左側首B破壊",
"icon": 405,
"classjob": -1
},
{
"id": 712,
"name": "ヒュドラ：右側首A復活",
"icon": 405,
"classjob": -1
},
{
"id": 713,
"name": "ヒュドラ：右側首B復活",
"icon": 405,
"classjob": -1
},
{
"id": 714,
"name": "ヒュドラ：左側首A復活",
"icon": 405,
"classjob": -1
},
{
"id": 715,
"name": "ヒュドラ：左側首B復活",
"icon": 405,
"classjob": -1
},
{
"id": 716,
"name": "Raging Arrow",
"icon": 405,
"classjob": -1
},
{
"id": 717,
"name": "Fast Blade",
"icon": 405,
"classjob": -1
},
{
"id": 718,
"name": "Shield Bash",
"icon": 405,
"classjob": -1
},
{
"id": 719,
"name": "Sentinel",
"icon": 405,
"classjob": -1
},
{
"id": 720,
"name": "Overpower",
"icon": 405,
"classjob": -1
},
{
"id": 721,
"name": "Featherfoot",
"icon": 405,
"classjob": -1
},
{
"id": 722,
"name": "True Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 723,
"name": "Wide Volley",
"icon": 405,
"classjob": -1
},
{
"id": 724,
"name": "Digest",
"icon": 405,
"classjob": -1
},
{
"id": 725,
"name": "Fluid Spread",
"icon": 405,
"classjob": -1
},
{
"id": 726,
"name": "Fluid Spread",
"icon": 405,
"classjob": -1
},
{
"id": 727,
"name": "Fluid Spread",
"icon": 405,
"classjob": -1
},
{
"id": 728,
"name": "Fluid Spread",
"icon": 405,
"classjob": -1
},
{
"id": 729,
"name": "汎用：詩人技：ヘヴィショット",
"icon": 405,
"classjob": -1
},
{
"id": 730,
"name": "Pod Burst",
"icon": 405,
"classjob": -1
},
{
"id": 731,
"name": "Bile Drain",
"icon": 405,
"classjob": -1
},
{
"id": 732,
"name": "Silken Fingers",
"icon": 405,
"classjob": -1
},
{
"id": 733,
"name": "Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 734,
"name": "Radiant Plume",
"icon": 405,
"classjob": -1
},
{
"id": 735,
"name": "Miasma Breath",
"icon": 405,
"classjob": -1
},
{
"id": 736,
"name": "Dark Wave",
"icon": 405,
"classjob": -1
},
{
"id": 737,
"name": "Lunge",
"icon": 405,
"classjob": -1
},
{
"id": 738,
"name": "Electric Velitation",
"icon": 405,
"classjob": -1
},
{
"id": 739,
"name": "Bloody Claw",
"icon": 405,
"classjob": -1
},
{
"id": 740,
"name": "Terror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 741,
"name": "Triumphant Roar",
"icon": 405,
"classjob": -1
},
{
"id": 742,
"name": "Black Revel",
"icon": 405,
"classjob": -1
},
{
"id": 743,
"name": "Mudslinger",
"icon": 405,
"classjob": -1
},
{
"id": 744,
"name": "Haste",
"icon": 405,
"classjob": -1
},
{
"id": 745,
"name": "Dark Thorn",
"icon": 405,
"classjob": -1
},
{
"id": 746,
"name": "Soul Douse",
"icon": 405,
"classjob": -1
},
{
"id": 749,
"name": "Apocalypse",
"icon": 405,
"classjob": -1
},
{
"id": 750,
"name": "Evil Eye",
"icon": 405,
"classjob": -1
},
{
"id": 751,
"name": "Chaos Breath",
"icon": 405,
"classjob": -1
},
{
"id": 758,
"name": "Black Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 759,
"name": "Blighted Gloom",
"icon": 405,
"classjob": -1
},
{
"id": 760,
"name": "Cloudscourge",
"icon": 405,
"classjob": -1
},
{
"id": 762,
"name": "Crepuscule Blade",
"icon": 405,
"classjob": -1
},
{
"id": 763,
"name": "Knout",
"icon": 405,
"classjob": -1
},
{
"id": 764,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 765,
"name": "Fulmination",
"icon": 405,
"classjob": -1
},
{
"id": 766,
"name": "Shock",
"icon": 405,
"classjob": -1
},
{
"id": 767,
"name": "Shock",
"icon": 405,
"classjob": -1
},
{
"id": 768,
"name": "Comet",
"icon": 405,
"classjob": -1
},
{
"id": 769,
"name": "Cosmic Shrapnel",
"icon": 405,
"classjob": -1
},
{
"id": 770,
"name": "Thunderbolt",
"icon": 405,
"classjob": -1
},
{
"id": 771,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 772,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 773,
"name": "Wild Horn",
"icon": 405,
"classjob": -1
},
{
"id": 774,
"name": "ベヒーモス：二本足",
"icon": 405,
"classjob": -1
},
{
"id": 775,
"name": "Trounce",
"icon": 405,
"classjob": -1
},
{
"id": 776,
"name": "Ecliptic Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 777,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 778,
"name": "Gungnir",
"icon": 405,
"classjob": -1
},
{
"id": 779,
"name": "Darksteel Reins",
"icon": 405,
"classjob": -1
},
{
"id": 780,
"name": "Zantetsuken",
"icon": 405,
"classjob": -1
},
{
"id": 781,
"name": "Hall Of Stone",
"icon": 405,
"classjob": -1
},
{
"id": 782,
"name": "Hall Of Sorrow",
"icon": 405,
"classjob": -1
},
{
"id": 783,
"name": "Valknut",
"icon": 405,
"classjob": -1
},
{
"id": 784,
"name": "Hall Of Lead",
"icon": 405,
"classjob": -1
},
{
"id": 785,
"name": "Einherjar",
"icon": 405,
"classjob": -1
},
{
"id": 786,
"name": "Hopelessness",
"icon": 405,
"classjob": -1
},
{
"id": 787,
"name": "Rock Buster",
"icon": 2701,
"classjob": -1
},
{
"id": 788,
"name": "Mountain Buster",
"icon": 2702,
"classjob": -1
},
{
"id": 789,
"name": "Earthen Ward",
"icon": 2703,
"classjob": -1
},
{
"id": 790,
"name": "Landslide",
"icon": 2704,
"classjob": -1
},
{
"id": 791,
"name": "Earthen Fury",
"icon": 2705,
"classjob": -1
},
{
"id": 792,
"name": "Wind Blade",
"icon": 2711,
"classjob": -1
},
{
"id": 793,
"name": "Shockwave",
"icon": 2713,
"classjob": -1
},
{
"id": 794,
"name": "Aerial Slash",
"icon": 2712,
"classjob": -1
},
{
"id": 795,
"name": "Contagion",
"icon": 2714,
"classjob": -1
},
{
"id": 796,
"name": "Aerial Blast",
"icon": 2715,
"classjob": -1
},
{
"id": 797,
"name": "Crimson Cyclone",
"icon": 2721,
"classjob": -1
},
{
"id": 798,
"name": "Burning Strike",
"icon": 2722,
"classjob": -1
},
{
"id": 799,
"name": "Radiant Shield",
"icon": 2723,
"classjob": -1
},
{
"id": 800,
"name": "Flaming Crush",
"icon": 2724,
"classjob": -1
},
{
"id": 801,
"name": "Inferno",
"icon": 2725,
"classjob": -1
},
{
"id": 802,
"name": "Embrace",
"icon": 2826,
"classjob": -1
},
{
"id": 803,
"name": "Whispering Dawn",
"icon": 2827,
"classjob": -1
},
{
"id": 804,
"name": "Fey Covenant",
"icon": 2828,
"classjob": -1
},
{
"id": 805,
"name": "Fey Illumination",
"icon": 2829,
"classjob": -1
},
{
"id": 806,
"name": "Embrace",
"icon": 2836,
"classjob": -1
},
{
"id": 807,
"name": "Silent Dusk",
"icon": 2837,
"classjob": -1
},
{
"id": 808,
"name": "Fey Glow",
"icon": 2838,
"classjob": -1
},
{
"id": 809,
"name": "Fey Light",
"icon": 2839,
"classjob": -1
},
{
"id": 810,
"name": "Fey Caress",
"icon": 2811,
"classjob": -1
},
{
"id": 811,
"name": "Fey Wind",
"icon": 2812,
"classjob": -1
},
{
"id": 817,
"name": "Choco Strike",
"icon": 4029,
"classjob": -1
},
{
"id": 818,
"name": "Choco Guard",
"icon": 4028,
"classjob": -1
},
{
"id": 819,
"name": "Choco Kick",
"icon": 4027,
"classjob": -1
},
{
"id": 820,
"name": "Choco Drop",
"icon": 4026,
"classjob": -1
},
{
"id": 821,
"name": "Choco Blast",
"icon": 4033,
"classjob": -1
},
{
"id": 822,
"name": "Choco Rush",
"icon": 4032,
"classjob": -1
},
{
"id": 823,
"name": "Choco Beak",
"icon": 4031,
"classjob": -1
},
{
"id": 824,
"name": "Choco Slash",
"icon": 4030,
"classjob": -1
},
{
"id": 825,
"name": "Choco Medica",
"icon": 4037,
"classjob": -1
},
{
"id": 826,
"name": "Choco Surge",
"icon": 4036,
"classjob": -1
},
{
"id": 827,
"name": "Choco Cure",
"icon": 4035,
"classjob": -1
},
{
"id": 828,
"name": "Choco Regen",
"icon": 4034,
"classjob": -1
},
{
"id": 829,
"name": "Hundred Fists",
"icon": 405,
"classjob": -1
},
{
"id": 830,
"name": "汎用：絶対回避",
"icon": 405,
"classjob": -1
},
{
"id": 831,
"name": "コボルド：大型爆弾",
"icon": 405,
"classjob": -1
},
{
"id": 832,
"name": "コボルド：範囲被ダメージカット",
"icon": 405,
"classjob": -1
},
{
"id": 833,
"name": "コボルド：範囲被ダメージカット強",
"icon": 405,
"classjob": -1
},
{
"id": 834,
"name": "Jumping Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 835,
"name": "Ambuscade",
"icon": 405,
"classjob": -1
},
{
"id": 836,
"name": "シュポシェ池：出現予兆",
"icon": 405,
"classjob": -1
},
{
"id": 837,
"name": "シュポシェ池：予兆解除",
"icon": 405,
"classjob": -1
},
{
"id": 838,
"name": "シュポシェ池：出現",
"icon": 405,
"classjob": -1
},
{
"id": 839,
"name": "Detonation",
"icon": 405,
"classjob": -1
},
{
"id": 840,
"name": "Massive Detonation",
"icon": 405,
"classjob": -1
},
{
"id": 850,
"name": "Unpacking Minion",
"icon": 405,
"classjob": 0
},
{
"id": 854,
"name": "Void Fire III",
"icon": 453,
"classjob": -1
},
{
"id": 855,
"name": "Void Fire II",
"icon": 452,
"classjob": -1
},
{
"id": 856,
"name": "Void Thunder III",
"icon": 459,
"classjob": -1
},
{
"id": 857,
"name": "Bomb Hurl",
"icon": 405,
"classjob": -1
},
{
"id": 858,
"name": "Phlebotomize",
"icon": 316,
"classjob": -1
},
{
"id": 859,
"name": "Ice Spikes",
"icon": 405,
"classjob": -1
},
{
"id": 860,
"name": "Soul Drain",
"icon": 405,
"classjob": -1
},
{
"id": 861,
"name": "Drunken Fists",
"icon": 405,
"classjob": -1
},
{
"id": 862,
"name": "Mini Detonation",
"icon": 405,
"classjob": -1
},
{
"id": 863,
"name": "Acorn Armageddon",
"icon": 405,
"classjob": -1
},
{
"id": 864,
"name": "Flaming Crush",
"icon": 405,
"classjob": -1
},
{
"id": 865,
"name": "Gutripper",
"icon": 405,
"classjob": -1
},
{
"id": 866,
"name": "Heartstopper",
"icon": 405,
"classjob": -1
},
{
"id": 867,
"name": "Void Call",
"icon": 405,
"classjob": -1
},
{
"id": 868,
"name": "Seduce",
"icon": 405,
"classjob": -1
},
{
"id": 869,
"name": "Cold Mist",
"icon": 405,
"classjob": -1
},
{
"id": 870,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 871,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 872,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 873,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 874,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 875,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 876,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 877,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 878,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 879,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 880,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 881,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 882,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 883,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 884,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 885,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 886,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 887,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 888,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 889,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 890,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 891,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 892,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 893,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 894,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 895,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 896,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 897,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 898,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 899,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 900,
"name": "Tornado",
"icon": 405,
"classjob": -1
},
{
"id": 901,
"name": "Rake",
"icon": 405,
"classjob": -1
},
{
"id": 902,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 903,
"name": "Swinge",
"icon": 405,
"classjob": -1
},
{
"id": 904,
"name": "Sprout Smack",
"icon": 405,
"classjob": -1
},
{
"id": 905,
"name": "Sprout Spin",
"icon": 405,
"classjob": -1
},
{
"id": 906,
"name": "Stolon",
"icon": 405,
"classjob": -1
},
{
"id": 907,
"name": "Small Claw",
"icon": 405,
"classjob": -1
},
{
"id": 908,
"name": "FF11クラブ：泡ブレス",
"icon": 405,
"classjob": -1
},
{
"id": 909,
"name": "Screwdriver",
"icon": 405,
"classjob": -1
},
{
"id": 910,
"name": "Water Wall",
"icon": 405,
"classjob": -1
},
{
"id": 911,
"name": "Dark Orb",
"icon": 405,
"classjob": -1
},
{
"id": 912,
"name": "Condemnation",
"icon": 405,
"classjob": -1
},
{
"id": 913,
"name": "Painful Whip",
"icon": 405,
"classjob": -1
},
{
"id": 914,
"name": "Gas Shell",
"icon": 405,
"classjob": -1
},
{
"id": 915,
"name": "Bearclaw",
"icon": 405,
"classjob": -1
},
{
"id": 916,
"name": "Filoplumage",
"icon": 405,
"classjob": -1
},
{
"id": 917,
"name": "Gust",
"icon": 405,
"classjob": -1
},
{
"id": 918,
"name": "Sharp Sting",
"icon": 405,
"classjob": -1
},
{
"id": 919,
"name": "Final Sting",
"icon": 405,
"classjob": -1
},
{
"id": 920,
"name": "Foreburst",
"icon": 405,
"classjob": -1
},
{
"id": 921,
"name": "Wind Shear",
"icon": 405,
"classjob": -1
},
{
"id": 922,
"name": "Zephyr Mantle",
"icon": 405,
"classjob": -1
},
{
"id": 923,
"name": "Loop",
"icon": 405,
"classjob": -1
},
{
"id": 924,
"name": "Slowcall",
"icon": 405,
"classjob": -1
},
{
"id": 925,
"name": "FF12ミリアムガード：マップOBJ召喚武器投げ",
"icon": 405,
"classjob": -1
},
{
"id": 926,
"name": "FF12ミリアムガード：マップOBJ召喚4つ同時",
"icon": 405,
"classjob": -1
},
{
"id": 927,
"name": "Creeping Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 928,
"name": "Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 929,
"name": "Verge Line",
"icon": 405,
"classjob": -1
},
{
"id": 930,
"name": "Verge Pulse",
"icon": 405,
"classjob": -1
},
{
"id": 931,
"name": "Mow",
"icon": 405,
"classjob": -1
},
{
"id": 932,
"name": "Triclip",
"icon": 405,
"classjob": -1
},
{
"id": 933,
"name": "Frightful Roar",
"icon": 405,
"classjob": -1
},
{
"id": 934,
"name": "Mortal Ray",
"icon": 405,
"classjob": -1
},
{
"id": 935,
"name": "Caudal Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 936,
"name": "Crushing Fangs",
"icon": 405,
"classjob": -1
},
{
"id": 937,
"name": "Flatten",
"icon": 405,
"classjob": -1
},
{
"id": 938,
"name": "Threaten",
"icon": 405,
"classjob": -1
},
{
"id": 939,
"name": "Standing Chine",
"icon": 405,
"classjob": -1
},
{
"id": 940,
"name": "Kneeling Snath",
"icon": 405,
"classjob": -1
},
{
"id": 941,
"name": "Moldy Phlegm",
"icon": 405,
"classjob": -1
},
{
"id": 942,
"name": "Goobbue's Grief",
"icon": 405,
"classjob": -1
},
{
"id": 943,
"name": "Amorphic Flail",
"icon": 405,
"classjob": -1
},
{
"id": 945,
"name": "Sharpened Knife",
"icon": 405,
"classjob": -1
},
{
"id": 946,
"name": "The Scourge Of Nym",
"icon": 405,
"classjob": -1
},
{
"id": 947,
"name": "Everyone's Grudge",
"icon": 405,
"classjob": -1
},
{
"id": 948,
"name": "Throat Stab",
"icon": 405,
"classjob": -1
},
{
"id": 949,
"name": "Rancor Release",
"icon": 405,
"classjob": -1
},
{
"id": 950,
"name": "Inhale",
"icon": 405,
"classjob": -1
},
{
"id": 951,
"name": "Eyes On Me",
"icon": 405,
"classjob": -1
},
{
"id": 952,
"name": "アーリマン：仲間を呼ぶ",
"icon": 405,
"classjob": -1
},
{
"id": 953,
"name": "Ceruleum Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 954,
"name": "Firewater",
"icon": 405,
"classjob": -1
},
{
"id": 955,
"name": "Boulderdash",
"icon": 405,
"classjob": -1
},
{
"id": 956,
"name": "Sand Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 957,
"name": "Sand Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 958,
"name": "Desolation",
"icon": 405,
"classjob": -1
},
{
"id": 959,
"name": "Sand Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 960,
"name": "Sea Of Pitch",
"icon": 405,
"classjob": -1
},
{
"id": 961,
"name": "透明：ガーゴイル暗黒沼発生",
"icon": 405,
"classjob": -1
},
{
"id": 962,
"name": "Sea Of Pitch",
"icon": 405,
"classjob": -1
},
{
"id": 963,
"name": "Barbaric Surge",
"icon": 405,
"classjob": -1
},
{
"id": 964,
"name": "Aqua Vitae",
"icon": 405,
"classjob": -1
},
{
"id": 965,
"name": "Peck",
"icon": 405,
"classjob": -1
},
{
"id": 966,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 967,
"name": "Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 968,
"name": "Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 969,
"name": "Aero",
"icon": 405,
"classjob": -1
},
{
"id": 970,
"name": "Stone",
"icon": 405,
"classjob": -1
},
{
"id": 971,
"name": "Water",
"icon": 405,
"classjob": -1
},
{
"id": 972,
"name": "Scathe",
"icon": 405,
"classjob": -1
},
{
"id": 973,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 974,
"name": "Nerve Sever",
"icon": 405,
"classjob": -1
},
{
"id": 975,
"name": "Neck Rip",
"icon": 405,
"classjob": -1
},
{
"id": 976,
"name": "Lap",
"icon": 405,
"classjob": -1
},
{
"id": 977,
"name": "Cap Bump",
"icon": 405,
"classjob": -1
},
{
"id": 978,
"name": "Bog Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 979,
"name": "Effluvium",
"icon": 405,
"classjob": -1
},
{
"id": 980,
"name": "Bog Bubble",
"icon": 405,
"classjob": -1
},
{
"id": 981,
"name": "Stagnant Spray",
"icon": 405,
"classjob": -1
},
{
"id": 982,
"name": "Eerie Light",
"icon": 405,
"classjob": -1
},
{
"id": 983,
"name": "Whistle",
"icon": 405,
"classjob": -1
},
{
"id": 984,
"name": "Burning Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 985,
"name": "Levinshower",
"icon": 405,
"classjob": -1
},
{
"id": 986,
"name": "Screwdriver",
"icon": 405,
"classjob": -1
},
{
"id": 987,
"name": "Mind Blast",
"icon": 405,
"classjob": -1
},
{
"id": 988,
"name": "Drain Touch",
"icon": 405,
"classjob": -1
},
{
"id": 989,
"name": "Grand Slam",
"icon": 405,
"classjob": -1
},
{
"id": 990,
"name": "Bang Toss",
"icon": 405,
"classjob": -1
},
{
"id": 991,
"name": "Bravado",
"icon": 405,
"classjob": -1
},
{
"id": 992,
"name": "Goblin Attack",
"icon": 405,
"classjob": -1
},
{
"id": 993,
"name": "Scorched Earth",
"icon": 405,
"classjob": -1
},
{
"id": 994,
"name": "うろこトカゲ：雷属性ON",
"icon": 405,
"classjob": -1
},
{
"id": 995,
"name": "Electrify",
"icon": 405,
"classjob": -1
},
{
"id": 996,
"name": "Bubble Burst",
"icon": 405,
"classjob": -1
},
{
"id": 997,
"name": "Mark Of Pain",
"icon": 405,
"classjob": -1
},
{
"id": 998,
"name": "Dark Dome",
"icon": 405,
"classjob": -1
},
{
"id": 999,
"name": "Nerve Sever",
"icon": 405,
"classjob": -1
},
{
"id": 1000,
"name": "Sandslinger",
"icon": 405,
"classjob": -1
},
{
"id": 1001,
"name": "Telega",
"icon": 405,
"classjob": -1
},
{
"id": 1002,
"name": "Clamor",
"icon": 405,
"classjob": -1
},
{
"id": 1003,
"name": "Iron Tempest",
"icon": 405,
"classjob": -1
},
{
"id": 1004,
"name": "Salivous Snap",
"icon": 405,
"classjob": -1
},
{
"id": 1005,
"name": "Overpower",
"icon": 405,
"classjob": -1
},
{
"id": 1006,
"name": "Labored Leap",
"icon": 405,
"classjob": -1
},
{
"id": 1007,
"name": "Detonator",
"icon": 405,
"classjob": -1
},
{
"id": 1008,
"name": "Stoneskin",
"icon": 405,
"classjob": -1
},
{
"id": 1009,
"name": "Cure",
"icon": 405,
"classjob": -1
},
{
"id": 1010,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 1011,
"name": "Levinshower",
"icon": 405,
"classjob": -1
},
{
"id": 1012,
"name": "Double Smash",
"icon": 405,
"classjob": -1
},
{
"id": 1014,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 1015,
"name": "Wing Cutter",
"icon": 405,
"classjob": -1
},
{
"id": 1016,
"name": "Water II",
"icon": 405,
"classjob": -1
},
{
"id": 1017,
"name": "Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 1018,
"name": "Spiked Tail",
"icon": 405,
"classjob": -1
},
{
"id": 1019,
"name": "Typhoon",
"icon": 405,
"classjob": -1
},
{
"id": 1020,
"name": "Typhoon",
"icon": 405,
"classjob": -1
},
{
"id": 1021,
"name": "Blazing Trail",
"icon": 405,
"classjob": -1
},
{
"id": 1022,
"name": "Frost Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1023,
"name": "Sheet Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 1024,
"name": "Sheet Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 1025,
"name": "Rime Wreath",
"icon": 405,
"classjob": -1
},
{
"id": 1026,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 1027,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 1028,
"name": "Snowfall",
"icon": 405,
"classjob": -1
},
{
"id": 1029,
"name": "大砲：発射：成功",
"icon": 405,
"classjob": -1
},
{
"id": 1030,
"name": "Blazing Trail",
"icon": 405,
"classjob": -1
},
{
"id": 1031,
"name": "Hundred Lashings",
"icon": 405,
"classjob": -1
},
{
"id": 1032,
"name": "Gold Rush",
"icon": 405,
"classjob": -1
},
{
"id": 1033,
"name": "Gold Dust",
"icon": 405,
"classjob": -1
},
{
"id": 1034,
"name": "10-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 1035,
"name": "100-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 1036,
"name": "Bad Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1037,
"name": "Vine Probe",
"icon": 405,
"classjob": -1
},
{
"id": 1038,
"name": "Burr Burrow",
"icon": 405,
"classjob": -1
},
{
"id": 1039,
"name": "Hooked Burrs",
"icon": 405,
"classjob": -1
},
{
"id": 1040,
"name": "Germinate",
"icon": 405,
"classjob": -1
},
{
"id": 1041,
"name": "ベビーモルボル専用：AA/モルボル菌つき",
"icon": 405,
"classjob": -1
},
{
"id": 1042,
"name": "Gold Bile Plume",
"icon": 405,
"classjob": -1
},
{
"id": 1043,
"name": "Gold Bile Plume",
"icon": 405,
"classjob": -1
},
{
"id": 1044,
"name": "Murder Hole",
"icon": 405,
"classjob": -1
},
{
"id": 1045,
"name": "Liquefy",
"icon": 405,
"classjob": -1
},
{
"id": 1046,
"name": "Liquefy",
"icon": 405,
"classjob": -1
},
{
"id": 1047,
"name": "Repel",
"icon": 405,
"classjob": -1
},
{
"id": 1048,
"name": "Void Fire II",
"icon": 452,
"classjob": -1
},
{
"id": 1049,
"name": "Thunderstrike",
"icon": 405,
"classjob": -1
},
{
"id": 1050,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 1051,
"name": "Bury",
"icon": 405,
"classjob": -1
},
{
"id": 1052,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1056,
"name": "Inspirit",
"icon": 405,
"classjob": -1
},
{
"id": 1057,
"name": "Vasoconstrictor",
"icon": 405,
"classjob": -1
},
{
"id": 1059,
"name": "Level 5 Death",
"icon": 405,
"classjob": -1
},
{
"id": 1060,
"name": "Oiled Arrow",
"icon": 405,
"classjob": -1
},
{
"id": 1061,
"name": "Nascent Flash",
"icon": 405,
"classjob": -1
},
{
"id": 1062,
"name": "Nascent End",
"icon": 405,
"classjob": -1
},
{
"id": 1064,
"name": "Skydragon Dive",
"icon": 405,
"classjob": -1
},
{
"id": 1065,
"name": "Voice Of Valor",
"icon": 405,
"classjob": -1
},
{
"id": 1066,
"name": "堅忍の誉れ",
"icon": 405,
"classjob": -1
},
{
"id": 1067,
"name": "無敵の進撃マーチ（仮）",
"icon": 405,
"classjob": -1
},
{
"id": 1068,
"name": "Blast Wave",
"icon": 405,
"classjob": -1
},
{
"id": 1069,
"name": "Bubble Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1070,
"name": "Soothing Song",
"icon": 405,
"classjob": -1
},
{
"id": 1071,
"name": "Plasma Release",
"icon": 405,
"classjob": -1
},
{
"id": 1072,
"name": "The Look",
"icon": 405,
"classjob": -1
},
{
"id": 1073,
"name": "Tail Drive",
"icon": 405,
"classjob": -1
},
{
"id": 1074,
"name": "Imminent Catastrophe",
"icon": 405,
"classjob": -1
},
{
"id": 1075,
"name": "Plague Dance",
"icon": 405,
"classjob": -1
},
{
"id": 1076,
"name": "Bubonic Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 1077,
"name": "Terror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 1078,
"name": "Mind Melt",
"icon": 405,
"classjob": -1
},
{
"id": 1079,
"name": "Canker",
"icon": 405,
"classjob": -1
},
{
"id": 1080,
"name": "Reanimate",
"icon": 405,
"classjob": -1
},
{
"id": 1081,
"name": "Sow",
"icon": 405,
"classjob": -1
},
{
"id": 1082,
"name": "Void Call",
"icon": 405,
"classjob": -1
},
{
"id": 1083,
"name": "Void Fire III",
"icon": 453,
"classjob": -1
},
{
"id": 1084,
"name": "Void Fire II",
"icon": 452,
"classjob": -1
},
{
"id": 1085,
"name": "Void Thunder III",
"icon": 459,
"classjob": -1
},
{
"id": 1086,
"name": "Rockslide",
"icon": 405,
"classjob": -1
},
{
"id": 1087,
"name": "Plaincracker",
"icon": 405,
"classjob": -1
},
{
"id": 1088,
"name": "Obliterate",
"icon": 405,
"classjob": -1
},
{
"id": 1089,
"name": "Potent Blinding Potion",
"icon": 405,
"classjob": -1
},
{
"id": 1090,
"name": "Moldy Sneeze",
"icon": 405,
"classjob": -1
},
{
"id": 1091,
"name": "Bubo Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1092,
"name": "Meteor Strike",
"icon": 405,
"classjob": -1
},
{
"id": 1093,
"name": "Pulse Wave",
"icon": 405,
"classjob": -1
},
{
"id": 1094,
"name": "Spirit Pulse",
"icon": 405,
"classjob": -1
},
{
"id": 1095,
"name": "Ultimate Focus",
"icon": 405,
"classjob": -1
},
{
"id": 1096,
"name": "Ultimate Focus",
"icon": 405,
"classjob": -1
},
{
"id": 1097,
"name": "Thunderstrike",
"icon": 405,
"classjob": -1
},
{
"id": 1098,
"name": "Spirits Without",
"icon": 405,
"classjob": -1
},
{
"id": 1099,
"name": "Bloodstain",
"icon": 405,
"classjob": -1
},
{
"id": 1100,
"name": "Condemnation",
"icon": 405,
"classjob": -1
},
{
"id": 1101,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1102,
"name": "The Ram's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1103,
"name": "The Dragon's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1104,
"name": "The Ram's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 1105,
"name": "The Dragon's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 1106,
"name": "The Ram's Keeper",
"icon": 405,
"classjob": -1
},
{
"id": 1107,
"name": "Cacophony",
"icon": 405,
"classjob": -1
},
{
"id": 1108,
"name": "Chaotic Chorus",
"icon": 405,
"classjob": -1
},
{
"id": 1109,
"name": "Mandible Bite",
"icon": 405,
"classjob": -1
},
{
"id": 1110,
"name": "Formic Pheromones",
"icon": 405,
"classjob": -1
},
{
"id": 1111,
"name": "Sand Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 1112,
"name": "Bottomless Desert",
"icon": 405,
"classjob": -1
},
{
"id": 1113,
"name": "Sand Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 1114,
"name": "Eyes On Me",
"icon": 405,
"classjob": -1
},
{
"id": 1115,
"name": "Firewater",
"icon": 405,
"classjob": -1
},
{
"id": 1116,
"name": "Star Map",
"icon": 405,
"classjob": -1
},
{
"id": 1117,
"name": "Silence",
"icon": 405,
"classjob": -1
},
{
"id": 1118,
"name": "Paralyze",
"icon": 405,
"classjob": -1
},
{
"id": 1119,
"name": "Slow",
"icon": 405,
"classjob": -1
},
{
"id": 1120,
"name": "Water",
"icon": 405,
"classjob": -1
},
{
"id": 1121,
"name": "Boulderdash",
"icon": 405,
"classjob": -1
},
{
"id": 1122,
"name": "Straight Punch",
"icon": 405,
"classjob": -1
},
{
"id": 1123,
"name": "Straight Punch",
"icon": 405,
"classjob": -1
},
{
"id": 1124,
"name": "Elbow Drop",
"icon": 405,
"classjob": -1
},
{
"id": 1125,
"name": "Double Smash",
"icon": 405,
"classjob": -1
},
{
"id": 1126,
"name": "Telega",
"icon": 405,
"classjob": -1
},
{
"id": 1127,
"name": "Ravage",
"icon": 405,
"classjob": -1
},
{
"id": 1128,
"name": "Magitek Cannon",
"icon": 61108,
"classjob": 0
},
{
"id": 1129,
"name": "Photon Stream",
"icon": 61109,
"classjob": 0
},
{
"id": 1130,
"name": "Labored Leap",
"icon": 405,
"classjob": -1
},
{
"id": 1131,
"name": "Hot Hands",
"icon": 405,
"classjob": -1
},
{
"id": 1132,
"name": "Hellssend",
"icon": 405,
"classjob": -1
},
{
"id": 1133,
"name": "Last Resort",
"icon": 405,
"classjob": -1
},
{
"id": 1134,
"name": "Cannonfire",
"icon": 61111,
"classjob": 0
},
{
"id": 1135,
"name": "Rive",
"icon": 405,
"classjob": -1
},
{
"id": 1136,
"name": "Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 1137,
"name": "Shield Skewer",
"icon": 405,
"classjob": -1
},
{
"id": 1138,
"name": "Winds Of Tartarus",
"icon": 405,
"classjob": -1
},
{
"id": 1139,
"name": "Gate Of Tartarus",
"icon": 405,
"classjob": -1
},
{
"id": 1140,
"name": "Shrapnel Shell",
"icon": 405,
"classjob": -1
},
{
"id": 1141,
"name": "Drill Shot",
"icon": 405,
"classjob": -1
},
{
"id": 1142,
"name": "Firebomb",
"icon": 405,
"classjob": -1
},
{
"id": 1143,
"name": "Magitek Missiles",
"icon": 405,
"classjob": -1
},
{
"id": 1144,
"name": "Magitek Missiles",
"icon": 405,
"classjob": -1
},
{
"id": 1145,
"name": "Delta Trance",
"icon": 405,
"classjob": -1
},
{
"id": 1146,
"name": "Roundhouse",
"icon": 405,
"classjob": -1
},
{
"id": 1147,
"name": "Stunning Sweep",
"icon": 405,
"classjob": -1
},
{
"id": 1148,
"name": "Aglaia Bite",
"icon": 405,
"classjob": -1
},
{
"id": 1149,
"name": "Angry Salamander",
"icon": 405,
"classjob": -1
},
{
"id": 1150,
"name": "Aglaia Climb",
"icon": 405,
"classjob": -1
},
{
"id": 1151,
"name": "Order To Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1152,
"name": "Sideswing",
"icon": 405,
"classjob": -1
},
{
"id": 1153,
"name": "Spine Shatter",
"icon": 405,
"classjob": -1
},
{
"id": 1154,
"name": "Wheel Of Suffering",
"icon": 405,
"classjob": -1
},
{
"id": 1155,
"name": "Iron Uprising",
"icon": 405,
"classjob": -1
},
{
"id": 1156,
"name": "Augmented Suffering",
"icon": 405,
"classjob": -1
},
{
"id": 1157,
"name": "Augmented Uprising",
"icon": 405,
"classjob": -1
},
{
"id": 1158,
"name": "Augmented Shatter",
"icon": 405,
"classjob": -1
},
{
"id": 1159,
"name": "Eye For An Eye",
"icon": 405,
"classjob": -1
},
{
"id": 1160,
"name": "Rouse",
"icon": 405,
"classjob": -1
},
{
"id": 1161,
"name": "Stone Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 1162,
"name": "Dragon's Blood",
"icon": 405,
"classjob": -1
},
{
"id": 1163,
"name": "Rotten Meat",
"icon": 405,
"classjob": -1
},
{
"id": 1164,
"name": "Spirit Dart",
"icon": 405,
"classjob": -1
},
{
"id": 1165,
"name": "Throat Stab",
"icon": 405,
"classjob": -1
},
{
"id": 1166,
"name": "Viscous Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 1167,
"name": "Aetherial Surge",
"icon": 405,
"classjob": -1
},
{
"id": 1168,
"name": "魔導ジャガーノート：GT攻撃",
"icon": 405,
"classjob": -1
},
{
"id": 1169,
"name": "魔導ジャガーノート：前方扇範囲攻撃",
"icon": 405,
"classjob": -1
},
{
"id": 1170,
"name": "Equalizer",
"icon": 405,
"classjob": -1
},
{
"id": 1171,
"name": "Neutralizer",
"icon": 405,
"classjob": -1
},
{
"id": 1172,
"name": "Photon Stream",
"icon": 405,
"classjob": -1
},
{
"id": 1173,
"name": "アルテマウェポン：アルテマ弾/生成",
"icon": 405,
"classjob": -1
},
{
"id": 1174,
"name": "Aetheroplasm",
"icon": 405,
"classjob": -1
},
{
"id": 1175,
"name": "Diffractive Laser",
"icon": 405,
"classjob": -1
},
{
"id": 1176,
"name": "Forward Laser",
"icon": 405,
"classjob": -1
},
{
"id": 1177,
"name": "Forward Laser",
"icon": 405,
"classjob": -1
},
{
"id": 1178,
"name": "Forward Laser",
"icon": 405,
"classjob": -1
},
{
"id": 1179,
"name": "Ceruleum Vent",
"icon": 405,
"classjob": -1
},
{
"id": 1180,
"name": "Homing Lasers",
"icon": 405,
"classjob": -1
},
{
"id": 1181,
"name": "Rock Throw",
"icon": 405,
"classjob": -1
},
{
"id": 1182,
"name": "Vulcan Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1183,
"name": "Aerial Blast",
"icon": 405,
"classjob": -1
},
{
"id": 1184,
"name": "Landslide",
"icon": 405,
"classjob": -1
},
{
"id": 1185,
"name": "Boulder Throw",
"icon": 405,
"classjob": -1
},
{
"id": 1186,
"name": "Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 1187,
"name": "Earthen Fury",
"icon": 405,
"classjob": -1
},
{
"id": 1188,
"name": "Radiant Plume",
"icon": 405,
"classjob": -1
},
{
"id": 1189,
"name": "Hellfire",
"icon": 405,
"classjob": -1
},
{
"id": 1190,
"name": "Tank Purge",
"icon": 405,
"classjob": -1
},
{
"id": 1191,
"name": "Assault Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 1192,
"name": "Freefire",
"icon": 405,
"classjob": -1
},
{
"id": 1193,
"name": "Ultima",
"icon": 405,
"classjob": -1
},
{
"id": 1194,
"name": "Ultima",
"icon": 405,
"classjob": -1
},
{
"id": 1195,
"name": "Innocence",
"icon": 405,
"classjob": -1
},
{
"id": 1196,
"name": "Heirsbane",
"icon": 405,
"classjob": -1
},
{
"id": 1197,
"name": "Hand Of The Empire",
"icon": 405,
"classjob": -1
},
{
"id": 1198,
"name": "Terminus Est",
"icon": 405,
"classjob": -1
},
{
"id": 1199,
"name": "Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 1200,
"name": "人型：黒将軍/魔導火フィールド",
"icon": 405,
"classjob": -1
},
{
"id": 1201,
"name": "Judgment",
"icon": 405,
"classjob": -1
},
{
"id": 1202,
"name": "Terminus Est",
"icon": 405,
"classjob": -1
},
{
"id": 1203,
"name": "Judgment",
"icon": 405,
"classjob": -1
},
{
"id": 1204,
"name": "Magitek Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 1205,
"name": "Clearout",
"icon": 405,
"classjob": -1
},
{
"id": 1206,
"name": "Clearout",
"icon": 405,
"classjob": -1
},
{
"id": 1207,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1208,
"name": "Hood Swing",
"icon": 405,
"classjob": -1
},
{
"id": 1209,
"name": "Whip Back",
"icon": 405,
"classjob": -1
},
{
"id": 1210,
"name": "Regorge",
"icon": 405,
"classjob": -1
},
{
"id": 1211,
"name": "Steel Scales",
"icon": 405,
"classjob": -1
},
{
"id": 1212,
"name": "Disseminate",
"icon": 405,
"classjob": -1
},
{
"id": 1213,
"name": "Rupture",
"icon": 405,
"classjob": -1
},
{
"id": 1214,
"name": "Syrup",
"icon": 405,
"classjob": -1
},
{
"id": 1215,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1216,
"name": "High Voltage",
"icon": 405,
"classjob": -1
},
{
"id": 1217,
"name": "Repelling Cannons",
"icon": 405,
"classjob": -1
},
{
"id": 1218,
"name": "Allagan Rot",
"icon": 405,
"classjob": -1
},
{
"id": 1219,
"name": "Allagan Rot",
"icon": 405,
"classjob": -1
},
{
"id": 1220,
"name": "Gravity Field",
"icon": 405,
"classjob": -1
},
{
"id": 1221,
"name": "Ballast",
"icon": 405,
"classjob": -1
},
{
"id": 1222,
"name": "Ballast",
"icon": 405,
"classjob": -1
},
{
"id": 1223,
"name": "Ballast",
"icon": 405,
"classjob": -1
},
{
"id": 1224,
"name": "Vacuum Wave",
"icon": 405,
"classjob": -1
},
{
"id": 1225,
"name": "Chain Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 1226,
"name": "Firestream",
"icon": 405,
"classjob": -1
},
{
"id": 1227,
"name": "Piercing Laser",
"icon": 405,
"classjob": -1
},
{
"id": 1228,
"name": "Node Retrieval",
"icon": 405,
"classjob": -1
},
{
"id": 1229,
"name": "Object 199",
"icon": 405,
"classjob": -1
},
{
"id": 1230,
"name": "Leech",
"icon": 405,
"classjob": -1
},
{
"id": 1231,
"name": "Headspin",
"icon": 405,
"classjob": -1
},
{
"id": 1232,
"name": "Emergency Cooldown",
"icon": 405,
"classjob": -1
},
{
"id": 1233,
"name": "Headspin",
"icon": 405,
"classjob": -1
},
{
"id": 1234,
"name": "Emergency Cooldown",
"icon": 405,
"classjob": -1
},
{
"id": 1235,
"name": "Countershot",
"icon": 405,
"classjob": -1
},
{
"id": 1236,
"name": "Gravity Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 1237,
"name": "Pox",
"icon": 405,
"classjob": -1
},
{
"id": 1238,
"name": "Rotoswipe",
"icon": 405,
"classjob": -1
},
{
"id": 1239,
"name": "Bot Retrieval",
"icon": 405,
"classjob": -1
},
{
"id": 1240,
"name": "Plummet",
"icon": 405,
"classjob": -1
},
{
"id": 1241,
"name": "Death Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 1242,
"name": "Death Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 1243,
"name": "Liquid Hell",
"icon": 405,
"classjob": -1
},
{
"id": 1244,
"name": "Firestorm",
"icon": 405,
"classjob": -1
},
{
"id": 1245,
"name": "Firestorm",
"icon": 405,
"classjob": -1
},
{
"id": 1246,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 1247,
"name": "Divebomb",
"icon": 405,
"classjob": -1
},
{
"id": 1248,
"name": "Aetheric Profusion",
"icon": 405,
"classjob": -1
},
{
"id": 1249,
"name": "Twister",
"icon": 405,
"classjob": -1
},
{
"id": 1250,
"name": "Twister",
"icon": 405,
"classjob": -1
},
{
"id": 1251,
"name": "Unwoven Will",
"icon": 405,
"classjob": -1
},
{
"id": 1252,
"name": "Sustained Blast",
"icon": 405,
"classjob": -1
},
{
"id": 1253,
"name": "Sustained Blast",
"icon": 405,
"classjob": -1
},
{
"id": 1254,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 1255,
"name": "Hatch",
"icon": 405,
"classjob": -1
},
{
"id": 1256,
"name": "Hatch",
"icon": 405,
"classjob": -1
},
{
"id": 1257,
"name": "Caber Toss",
"icon": 405,
"classjob": -1
},
{
"id": 1258,
"name": "Emergency Override",
"icon": 405,
"classjob": -1
},
{
"id": 1259,
"name": "Spellsword",
"icon": 405,
"classjob": -1
},
{
"id": 1260,
"name": "Death's Door",
"icon": 405,
"classjob": -1
},
{
"id": 1261,
"name": "Heave",
"icon": 405,
"classjob": -1
},
{
"id": 1262,
"name": "Phantom Orb",
"icon": 405,
"classjob": -1
},
{
"id": 1263,
"name": "Incinerate",
"icon": 405,
"classjob": -1
},
{
"id": 1264,
"name": "Steam Clean",
"icon": 405,
"classjob": -1
},
{
"id": 1265,
"name": "Wrecking Ball",
"icon": 405,
"classjob": -1
},
{
"id": 1266,
"name": "Inferno",
"icon": 405,
"classjob": -1
},
{
"id": 1267,
"name": "Whirlwind",
"icon": 405,
"classjob": -1
},
{
"id": 1268,
"name": "Umbral Vise",
"icon": 405,
"classjob": -1
},
{
"id": 1269,
"name": "Skyward Swing",
"icon": 405,
"classjob": -1
},
{
"id": 1270,
"name": "Thunder II",
"icon": 405,
"classjob": -1
},
{
"id": 1271,
"name": "Army Of One",
"icon": 405,
"classjob": -1
},
{
"id": 1272,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1273,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1274,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1275,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 1277,
"name": "Blazing Trail",
"icon": 405,
"classjob": -1
},
{
"id": 1278,
"name": "Triumvirate",
"icon": 405,
"classjob": -1
},
{
"id": 1279,
"name": "Mean Thrash",
"icon": 405,
"classjob": -1
},
{
"id": 1280,
"name": "Fear Itself",
"icon": 405,
"classjob": -1
},
{
"id": 1281,
"name": "Bravery",
"icon": 405,
"classjob": -1
},
{
"id": 1282,
"name": "The Scorpion's Sting",
"icon": 405,
"classjob": -1
},
{
"id": 1283,
"name": "Static Charge",
"icon": 405,
"classjob": -1
},
{
"id": 1284,
"name": "Gelid Charge",
"icon": 405,
"classjob": -1
},
{
"id": 1285,
"name": "The Ram's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 1286,
"name": "Overclock",
"icon": 405,
"classjob": -1
},
{
"id": 1287,
"name": "Light Succor",
"icon": 405,
"classjob": -1
},
{
"id": 1288,
"name": "Benight",
"icon": 405,
"classjob": -1
},
{
"id": 1289,
"name": "Gravity Force",
"icon": 405,
"classjob": -1
},
{
"id": 1290,
"name": "Stop",
"icon": 405,
"classjob": -1
},
{
"id": 1291,
"name": "Backstep",
"icon": 405,
"classjob": -1
},
{
"id": 1292,
"name": "Sidestep",
"icon": 405,
"classjob": -1
},
{
"id": 1293,
"name": "Sidestep",
"icon": 405,
"classjob": -1
},
{
"id": 1294,
"name": "Swift Shadow",
"icon": 405,
"classjob": -1
},
{
"id": 1295,
"name": "Pain Flare",
"icon": 405,
"classjob": -1
},
{
"id": 1296,
"name": "Telega",
"icon": 405,
"classjob": -1
},
{
"id": 1297,
"name": "Burning Tendrils",
"icon": 405,
"classjob": -1
},
{
"id": 1298,
"name": "Burning Tendrils",
"icon": 405,
"classjob": -1
},
{
"id": 1299,
"name": "Rive",
"icon": 405,
"classjob": -1
},
{
"id": 1300,
"name": "Tackle",
"icon": 405,
"classjob": -1
},
{
"id": 1301,
"name": "Pluto",
"icon": 405,
"classjob": -1
},
{
"id": 1302,
"name": "Regeneration",
"icon": 405,
"classjob": -1
},
{
"id": 1303,
"name": "Duplicity",
"icon": 405,
"classjob": -1
},
{
"id": 1304,
"name": "Dark Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 1305,
"name": "Dark Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 1306,
"name": "Summon I",
"icon": 405,
"classjob": -1
},
{
"id": 1307,
"name": "Summon II",
"icon": 405,
"classjob": -1
},
{
"id": 1308,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 1309,
"name": "Spiked Tail",
"icon": 405,
"classjob": -1
},
{
"id": 1311,
"name": "Web Of Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 1312,
"name": "Stoneskin",
"icon": 405,
"classjob": -1
},
{
"id": 1313,
"name": "Inner Beastman",
"icon": 405,
"classjob": -1
},
{
"id": 1314,
"name": "Aggravate",
"icon": 405,
"classjob": -1
},
{
"id": 1315,
"name": "Chain Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 1316,
"name": "Ring Of Frost",
"icon": 2579,
"classjob": -1
},
{
"id": 1317,
"name": "The Traders' Spurn",
"icon": 405,
"classjob": -1
},
{
"id": 1318,
"name": "Jump",
"icon": 405,
"classjob": -1
},
{
"id": 1319,
"name": "The Dragon's Curse",
"icon": 405,
"classjob": -1
},
{
"id": 1320,
"name": "The Dragon's Curse",
"icon": 405,
"classjob": -1
},
{
"id": 1321,
"name": "The Dragon's Curse",
"icon": 405,
"classjob": -1
},
{
"id": 1323,
"name": "Radiant Shield",
"icon": 405,
"classjob": -1
},
{
"id": 1324,
"name": "Inferno",
"icon": 405,
"classjob": -1
},
{
"id": 1325,
"name": "Embrace",
"icon": 405,
"classjob": -1
},
{
"id": 1327,
"name": "Everyone's Grudge",
"icon": 405,
"classjob": -1
},
{
"id": 1328,
"name": "Someone's Grudge",
"icon": 405,
"classjob": -1
},
{
"id": 1329,
"name": "Siren Song",
"icon": 405,
"classjob": -1
},
{
"id": 1330,
"name": "Hell Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1331,
"name": "Stone",
"icon": 405,
"classjob": -1
},
{
"id": 1332,
"name": "Earthen Fury",
"icon": 405,
"classjob": -1
},
{
"id": 1333,
"name": "Boulder Clap",
"icon": 405,
"classjob": -1
},
{
"id": 1334,
"name": "Shockwave",
"icon": 405,
"classjob": -1
},
{
"id": 1335,
"name": "Aerial Blast",
"icon": 405,
"classjob": -1
},
{
"id": 1336,
"name": "The Ram's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1337,
"name": "The Dragon's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1338,
"name": "The Dragon's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 1339,
"name": "The Ram's Keeper",
"icon": 405,
"classjob": -1
},
{
"id": 1340,
"name": "Cacophony",
"icon": 405,
"classjob": -1
},
{
"id": 1341,
"name": "Elemental Angst",
"icon": 405,
"classjob": -1
},
{
"id": 1342,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1343,
"name": "Ballast",
"icon": 405,
"classjob": -1
},
{
"id": 1344,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1345,
"name": "Blessing Of Light",
"icon": 405,
"classjob": -1
},
{
"id": 1346,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1347,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1348,
"name": "Last Supper",
"icon": 405,
"classjob": -1
},
{
"id": 1349,
"name": "Armageddon",
"icon": 405,
"classjob": -1
},
{
"id": 1350,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1352,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1353,
"name": "Incinerate",
"icon": 405,
"classjob": -1
},
{
"id": 1354,
"name": "Vulcan Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1355,
"name": "Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 1356,
"name": "Radiant Plume",
"icon": 405,
"classjob": -1
},
{
"id": 1357,
"name": "Hellfire",
"icon": 405,
"classjob": -1
},
{
"id": 1358,
"name": "Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 1359,
"name": "Radiant Plume",
"icon": 405,
"classjob": -1
},
{
"id": 1360,
"name": "Rock Buster",
"icon": 405,
"classjob": -1
},
{
"id": 1361,
"name": "Tumult",
"icon": 405,
"classjob": -1
},
{
"id": 1362,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 1363,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 1364,
"name": "Landslide",
"icon": 405,
"classjob": -1
},
{
"id": 1365,
"name": "Geocrush",
"icon": 405,
"classjob": -1
},
{
"id": 1366,
"name": "Earthen Fury",
"icon": 405,
"classjob": -1
},
{
"id": 1367,
"name": "Grand Sword",
"icon": 405,
"classjob": -1
},
{
"id": 1368,
"name": "Grand Strike",
"icon": 405,
"classjob": -1
},
{
"id": 1369,
"name": "Disruptor",
"icon": 405,
"classjob": -1
},
{
"id": 1370,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1371,
"name": "Overheat",
"icon": 405,
"classjob": -1
},
{
"id": 1372,
"name": "Exhaust",
"icon": 405,
"classjob": -1
},
{
"id": 1373,
"name": "Magitek Field",
"icon": 405,
"classjob": -1
},
{
"id": 1374,
"name": "Dark Orb",
"icon": 405,
"classjob": -1
},
{
"id": 1375,
"name": "Sea Of Pitch",
"icon": 405,
"classjob": -1
},
{
"id": 1376,
"name": "Grip Of Night",
"icon": 405,
"classjob": -1
},
{
"id": 1377,
"name": "Shadow Flare",
"icon": 405,
"classjob": -1
},
{
"id": 1378,
"name": "Dirty Cannons",
"icon": 405,
"classjob": -1
},
{
"id": 1379,
"name": "Friction",
"icon": 405,
"classjob": -1
},
{
"id": 1380,
"name": "Downburst",
"icon": 405,
"classjob": -1
},
{
"id": 1381,
"name": "Wicked Wheel",
"icon": 405,
"classjob": -1
},
{
"id": 1382,
"name": "Slipstream",
"icon": 405,
"classjob": -1
},
{
"id": 1383,
"name": "Mistral Song",
"icon": 405,
"classjob": -1
},
{
"id": 1384,
"name": "Mistral Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 1385,
"name": "Aerial Blast",
"icon": 405,
"classjob": -1
},
{
"id": 1386,
"name": "Great Whirlwind",
"icon": 405,
"classjob": -1
},
{
"id": 1387,
"name": "Eye Of The Storm",
"icon": 405,
"classjob": -1
},
{
"id": 1388,
"name": "Featherlance",
"icon": 405,
"classjob": -1
},
{
"id": 1389,
"name": "Thermal Tumult",
"icon": 405,
"classjob": -1
},
{
"id": 1390,
"name": "Mistral Song",
"icon": 405,
"classjob": -1
},
{
"id": 1391,
"name": "Sea Of Pitch",
"icon": 405,
"classjob": -1
},
{
"id": 1392,
"name": "The Scourge Of Nym",
"icon": 405,
"classjob": -1
},
{
"id": 1393,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1394,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 1395,
"name": "Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 1396,
"name": "Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 1397,
"name": "Aero",
"icon": 405,
"classjob": -1
},
{
"id": 1398,
"name": "Stone",
"icon": 405,
"classjob": -1
},
{
"id": 1399,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1400,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1401,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1402,
"name": "Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 1403,
"name": "Radiant Plume",
"icon": 405,
"classjob": -1
},
{
"id": 1404,
"name": "Crimson Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 1405,
"name": "Hellfire",
"icon": 405,
"classjob": -1
},
{
"id": 1406,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1407,
"name": "Geocrush",
"icon": 405,
"classjob": -1
},
{
"id": 1408,
"name": "Earthen Fury",
"icon": 405,
"classjob": -1
},
{
"id": 1409,
"name": "Mistral Song",
"icon": 405,
"classjob": -1
},
{
"id": 1410,
"name": "Eye Of The Storm",
"icon": 405,
"classjob": -1
},
{
"id": 1411,
"name": "Aerial Blast",
"icon": 405,
"classjob": -1
},
{
"id": 1412,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1413,
"name": "Mow",
"icon": 405,
"classjob": -1
},
{
"id": 1414,
"name": "Triclip",
"icon": 405,
"classjob": -1
},
{
"id": 1415,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1416,
"name": "Stone Skull",
"icon": 405,
"classjob": -1
},
{
"id": 1417,
"name": "Boulder Clap",
"icon": 405,
"classjob": -1
},
{
"id": 1418,
"name": "True Grit",
"icon": 405,
"classjob": -1
},
{
"id": 1419,
"name": "Rockslide",
"icon": 405,
"classjob": -1
},
{
"id": 1420,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1421,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1422,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1423,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1424,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 1425,
"name": "Grand Sword",
"icon": 405,
"classjob": -1
},
{
"id": 1426,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1427,
"name": "Exhaust",
"icon": 405,
"classjob": -1
},
{
"id": 1428,
"name": "Grand Strike",
"icon": 405,
"classjob": -1
},
{
"id": 1429,
"name": "Photon Stream",
"icon": 405,
"classjob": -1
},
{
"id": 1430,
"name": "Magitek Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 1431,
"name": "Photon Stream",
"icon": 405,
"classjob": -1
},
{
"id": 1432,
"name": "Magitek Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 1433,
"name": "Drill Cannons",
"icon": 405,
"classjob": -1
},
{
"id": 1434,
"name": "Cermet Drill",
"icon": 405,
"classjob": -1
},
{
"id": 1435,
"name": "Overcharge",
"icon": 405,
"classjob": -1
},
{
"id": 1436,
"name": "Blessing Of Light",
"icon": 405,
"classjob": -1
},
{
"id": 1437,
"name": "Cannonfire",
"icon": 61111,
"classjob": 0
},
{
"id": 1438,
"name": "Photon Stream",
"icon": 405,
"classjob": -1
},
{
"id": 1439,
"name": "Magitek Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 1440,
"name": "Dark Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 1441,
"name": "Dark Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 1442,
"name": "The Dragon's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 1443,
"name": "Blast Wave",
"icon": 405,
"classjob": -1
},
{
"id": 1444,
"name": "Aqua Vitae",
"icon": 405,
"classjob": -1
},
{
"id": 1445,
"name": "Obliterate",
"icon": 405,
"classjob": -1
},
{
"id": 1446,
"name": "Boulder Clap",
"icon": 405,
"classjob": -1
},
{
"id": 1447,
"name": "High Voltage",
"icon": 405,
"classjob": -1
},
{
"id": 1448,
"name": "Repelling Cannons",
"icon": 405,
"classjob": -1
},
{
"id": 1449,
"name": "Chain Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 1450,
"name": "Piercing Laser",
"icon": 405,
"classjob": -1
},
{
"id": 1451,
"name": "Firestorm",
"icon": 405,
"classjob": -1
},
{
"id": 1452,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 1453,
"name": "Hatch",
"icon": 405,
"classjob": -1
},
{
"id": 1454,
"name": "Devour",
"icon": 405,
"classjob": -1
},
{
"id": 1455,
"name": "The Hand",
"icon": 405,
"classjob": -1
},
{
"id": 1456,
"name": "Divebomb",
"icon": 405,
"classjob": -1
},
{
"id": 1457,
"name": "Liquid Hell",
"icon": 405,
"classjob": -1
},
{
"id": 1458,
"name": "Death Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 1459,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1460,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1461,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1463,
"name": "Rock Buster",
"icon": 405,
"classjob": -1
},
{
"id": 1464,
"name": "Mountain Buster",
"icon": 405,
"classjob": -1
},
{
"id": 1465,
"name": "Tumult",
"icon": 405,
"classjob": -1
},
{
"id": 1466,
"name": "Upheaval",
"icon": 405,
"classjob": -1
},
{
"id": 1467,
"name": "Landslide",
"icon": 405,
"classjob": -1
},
{
"id": 1468,
"name": "Landslide",
"icon": 405,
"classjob": -1
},
{
"id": 1469,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 1470,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 1471,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1472,
"name": "Geocrush",
"icon": 405,
"classjob": -1
},
{
"id": 1473,
"name": "Earthen Fury",
"icon": 405,
"classjob": -1
},
{
"id": 1474,
"name": "Upheaval",
"icon": 405,
"classjob": -1
},
{
"id": 1475,
"name": "Landslide",
"icon": 405,
"classjob": -1
},
{
"id": 1476,
"name": "Tumult",
"icon": 405,
"classjob": -1
},
{
"id": 1477,
"name": "Granite Sepulchre",
"icon": 405,
"classjob": -1
},
{
"id": 1482,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1483,
"name": "Deathly Verse",
"icon": 405,
"classjob": -1
},
{
"id": 1484,
"name": "Feral Lunge",
"icon": 405,
"classjob": -1
},
{
"id": 1485,
"name": "Lunatic Voice",
"icon": 405,
"classjob": -1
},
{
"id": 1486,
"name": "Song Of Torment",
"icon": 405,
"classjob": -1
},
{
"id": 1487,
"name": "Deathly Cadenza",
"icon": 405,
"classjob": -1
},
{
"id": 1488,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1489,
"name": "Flying Frenzy",
"icon": 405,
"classjob": -1
},
{
"id": 1490,
"name": "Caustic Vomit",
"icon": 405,
"classjob": -1
},
{
"id": 1491,
"name": "Breath Wing",
"icon": 405,
"classjob": -1
},
{
"id": 1492,
"name": "Rotoswipe",
"icon": 405,
"classjob": -1
},
{
"id": 1493,
"name": "Climb",
"icon": 405,
"classjob": -1
},
{
"id": 1494,
"name": "Sonic Storm",
"icon": 405,
"classjob": -1
},
{
"id": 1495,
"name": "Alight",
"icon": 405,
"classjob": -1
},
{
"id": 1496,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1497,
"name": "Sonic Boom",
"icon": 405,
"classjob": -1
},
{
"id": 1498,
"name": "Corrupting Shot",
"icon": 405,
"classjob": -1
},
{
"id": 1499,
"name": "Corrupting Spit",
"icon": 405,
"classjob": -1
},
{
"id": 1500,
"name": "Corrupting Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1501,
"name": "Crystalline Shot",
"icon": 405,
"classjob": -1
},
{
"id": 1502,
"name": "Giga Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1503,
"name": "Viscous Aetheroplasm",
"icon": 405,
"classjob": -1
},
{
"id": 1504,
"name": "Ceruleum Vent",
"icon": 405,
"classjob": -1
},
{
"id": 1505,
"name": "Homing Lasers",
"icon": 405,
"classjob": -1
},
{
"id": 1506,
"name": "Diffractive Laser",
"icon": 405,
"classjob": -1
},
{
"id": 1507,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1508,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1509,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1510,
"name": "Aetheroplasm",
"icon": 405,
"classjob": -1
},
{
"id": 1511,
"name": "Aetheric Boom",
"icon": 405,
"classjob": -1
},
{
"id": 1512,
"name": "Aetheroplasm",
"icon": 405,
"classjob": -1
},
{
"id": 1513,
"name": "Fusion Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1514,
"name": "Tank Purge",
"icon": 405,
"classjob": -1
},
{
"id": 1515,
"name": "Freefire",
"icon": 405,
"classjob": -1
},
{
"id": 1516,
"name": "Ultima",
"icon": 405,
"classjob": -1
},
{
"id": 1517,
"name": "Mistral Song",
"icon": 405,
"classjob": -1
},
{
"id": 1518,
"name": "Vulcan Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1519,
"name": "Eye Of The Storm",
"icon": 405,
"classjob": -1
},
{
"id": 1520,
"name": "Geocrush",
"icon": 405,
"classjob": -1
},
{
"id": 1521,
"name": "Radiant Plume",
"icon": 405,
"classjob": -1
},
{
"id": 1522,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 1523,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1524,
"name": "Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 1525,
"name": "Crimson Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 1526,
"name": "Assault Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 1527,
"name": "Piercing Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 1528,
"name": "Incinerate",
"icon": 405,
"classjob": -1
},
{
"id": 1529,
"name": "Inferno Howl",
"icon": 405,
"classjob": -1
},
{
"id": 1530,
"name": "Searing Wind",
"icon": 405,
"classjob": -1
},
{
"id": 1531,
"name": "Vulcan Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1532,
"name": "Crimson Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 1533,
"name": "Attack",
"icon": 405,
"classjob": 0
},
{
"id": 1534,
"name": "Infernal Fetters",
"icon": 405,
"classjob": -1
},
{
"id": 1535,
"name": "Infernal Surge",
"icon": 405,
"classjob": -1
},
{
"id": 1536,
"name": "Hellfire",
"icon": 405,
"classjob": -1
},
{
"id": 1537,
"name": "Soar",
"icon": 405,
"classjob": -1
},
{
"id": 1538,
"name": "Descend",
"icon": 405,
"classjob": -1
},
{
"id": 1539,
"name": "Death Throes",
"icon": 405,
"classjob": -1
},
{
"id": 1542,
"name": "Crystalline Shower",
"icon": 405,
"classjob": -1
},
{
"id": 1543,
"name": "Breath Wing",
"icon": 405,
"classjob": -1
},
{
"id": 1544,
"name": "Brood Rage",
"icon": 405,
"classjob": -1
},
{
"id": 1545,
"name": "Hatch",
"icon": 405,
"classjob": -1
},
{
"id": 1546,
"name": "Viscous Aetheroplasm",
"icon": 405,
"classjob": -1
},
{
"id": 1547,
"name": "Predatory Swoop",
"icon": 405,
"classjob": -1
},
{
"id": 1548,
"name": "Friction",
"icon": 405,
"classjob": -1
},
{
"id": 1549,
"name": "Friction",
"icon": 405,
"classjob": -1
},
{
"id": 1550,
"name": "Feather Rain",
"icon": 405,
"classjob": -1
},
{
"id": 1551,
"name": "Thermal Tumult",
"icon": 405,
"classjob": -1
},
{
"id": 1552,
"name": "Wicked Wheel",
"icon": 405,
"classjob": -1
},
{
"id": 1553,
"name": "Downburst",
"icon": 405,
"classjob": -1
},
{
"id": 1554,
"name": "Aerial Blast",
"icon": 405,
"classjob": -1
},
{
"id": 1555,
"name": "Gigastorm",
"icon": 405,
"classjob": -1
},
{
"id": 1556,
"name": "Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 1557,
"name": "Super Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 1558,
"name": "Testudo",
"icon": 4801,
"classjob": -1
},
{
"id": 1559,
"name": "Glory Slash",
"icon": 4802,
"classjob": -1
},
{
"id": 1560,
"name": "Mythril Tempest",
"icon": 4803,
"classjob": -1
},
{
"id": 1561,
"name": "Thrill Of War",
"icon": 4804,
"classjob": -1
},
{
"id": 1562,
"name": "Full Swing",
"icon": 4805,
"classjob": -1
},
{
"id": 1563,
"name": "Axe Kick",
"icon": 4806,
"classjob": -1
},
{
"id": 1564,
"name": "Somersault",
"icon": 4807,
"classjob": -1
},
{
"id": 1565,
"name": "Fetter Ward",
"icon": 4808,
"classjob": -1
},
{
"id": 1566,
"name": "Impulse Rush",
"icon": 4809,
"classjob": -1
},
{
"id": 1567,
"name": "Skewer",
"icon": 4810,
"classjob": -1
},
{
"id": 1568,
"name": "Manasong",
"icon": 4811,
"classjob": -1
},
{
"id": 1569,
"name": "Farshot",
"icon": 4812,
"classjob": -1
},
{
"id": 1570,
"name": "Blast Shot",
"icon": 4813,
"classjob": -1
},
{
"id": 1571,
"name": "Sacred Prism",
"icon": 4814,
"classjob": -1
},
{
"id": 1572,
"name": "Divine Breath",
"icon": 4815,
"classjob": -1
},
{
"id": 1573,
"name": "Night Wing",
"icon": 4816,
"classjob": -1
},
{
"id": 1574,
"name": "Phantom Dart",
"icon": 4817,
"classjob": -1
},
{
"id": 1575,
"name": "Misty Veil",
"icon": 4818,
"classjob": -1
},
{
"id": 1576,
"name": "Wither",
"icon": 4819,
"classjob": -1
},
{
"id": 1577,
"name": "Aura Blast",
"icon": 4820,
"classjob": -1
},
{
"id": 1578,
"name": "Focalization",
"icon": 4821,
"classjob": -1
},
{
"id": 1579,
"name": "Weapon Throw",
"icon": 4822,
"classjob": -1
},
{
"id": 1580,
"name": "Enliven",
"icon": 4823,
"classjob": -1
},
{
"id": 1581,
"name": "Aetheric Burst",
"icon": 4824,
"classjob": -1
},
{
"id": 1582,
"name": "Equanimity",
"icon": 4825,
"classjob": -1
},
{
"id": 1583,
"name": "Mana Draw",
"icon": 4826,
"classjob": -1
},
{
"id": 1584,
"name": "Purify",
"icon": 4827,
"classjob": -1
},
{
"id": 1585,
"name": "Attunement",
"icon": 4828,
"classjob": -1
},
{
"id": 1586,
"name": "Detect",
"icon": 4829,
"classjob": -1
},
{
"id": 1587,
"name": "Malmsight",
"icon": 4830,
"classjob": -1
},
{
"id": 1588,
"name": "Overwhelm",
"icon": 4831,
"classjob": -1
},
{
"id": 1589,
"name": "Ill Wind",
"icon": 4832,
"classjob": -1
},
{
"id": 1590,
"name": "Recuperate",
"icon": 4833,
"classjob": -1
},
{
"id": 1591,
"name": "Between The Eyes",
"icon": 4835,
"classjob": -1
},
{
"id": 1592,
"name": "Stun Gun",
"icon": 4836,
"classjob": -1
},
{
"id": 1593,
"name": "Report",
"icon": 4837,
"classjob": -1
},
{
"id": 1594,
"name": "Retrogradation",
"icon": 4840,
"classjob": -1
},
{
"id": 1595,
"name": "Tar Pit",
"icon": 4838,
"classjob": -1
},
{
"id": 1596,
"name": "Carnal Chill",
"icon": 4839,
"classjob": -1
},
{
"id": 1597,
"name": "Push Back",
"icon": 4834,
"classjob": -1
},
{
"id": 1610,
"name": "Blood Sword",
"icon": 405,
"classjob": -1
},
{
"id": 1611,
"name": "透明：合体引き寄せ/ハウケタハード",
"icon": 405,
"classjob": -1
},
{
"id": 1612,
"name": "Danse Macabre",
"icon": 405,
"classjob": -1
},
{
"id": 1613,
"name": "100-kuponze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 1614,
"name": "Moogle-Go-Round",
"icon": 405,
"classjob": -1
},
{
"id": 1615,
"name": "Spinning Mogshield",
"icon": 405,
"classjob": -1
},
{
"id": 1616,
"name": "Come At Me Kupo",
"icon": 405,
"classjob": -1
},
{
"id": 1617,
"name": "Pom Flare",
"icon": 405,
"classjob": -1
},
{
"id": 1618,
"name": "Pom Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 1619,
"name": "Pom Cure",
"icon": 405,
"classjob": -1
},
{
"id": 1620,
"name": "Pom Holy",
"icon": 405,
"classjob": -1
},
{
"id": 1621,
"name": "Moogle Eye Shot",
"icon": 405,
"classjob": -1
},
{
"id": 1622,
"name": "Mograin Of Death",
"icon": 405,
"classjob": -1
},
{
"id": 1623,
"name": "March Of The Moogles",
"icon": 405,
"classjob": -1
},
{
"id": 1624,
"name": "March Of The Moogles",
"icon": 405,
"classjob": -1
},
{
"id": 1625,
"name": "Moogle Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 1626,
"name": "1000-kuponze Charge",
"icon": 405,
"classjob": -1
},
{
"id": 1627,
"name": "Mog Creation",
"icon": 405,
"classjob": -1
},
{
"id": 1628,
"name": "Memento Moogle",
"icon": 405,
"classjob": -1
},
{
"id": 1629,
"name": "Moogle-Go-Round",
"icon": 405,
"classjob": -1
},
{
"id": 1630,
"name": "Come At Me Kupo",
"icon": 405,
"classjob": -1
},
{
"id": 1631,
"name": "Pom Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 1632,
"name": "Pom Holy",
"icon": 405,
"classjob": -1
},
{
"id": 1633,
"name": "Mograin Of Death",
"icon": 405,
"classjob": -1
},
{
"id": 1634,
"name": "March Of The Moogles",
"icon": 405,
"classjob": -1
},
{
"id": 1635,
"name": "透明：モーグリ：モーグリショット：ターゲッティング/ノーマル",
"icon": 405,
"classjob": -1
},
{
"id": 1636,
"name": "透明：モーグリ：アローレイン：ターゲッティング/ノーマル",
"icon": 405,
"classjob": -1
},
{
"id": 1637,
"name": "Spell Of Restoration",
"icon": 405,
"classjob": -1
},
{
"id": 1638,
"name": "Guardian Aura",
"icon": 405,
"classjob": -1
},
{
"id": 1639,
"name": "Charge Up",
"icon": 405,
"classjob": -1
},
{
"id": 1640,
"name": "Critical Swing",
"icon": 405,
"classjob": -1
},
{
"id": 1641,
"name": "Critical Sweep",
"icon": 405,
"classjob": -1
},
{
"id": 1642,
"name": "Pulverizing Punch",
"icon": 405,
"classjob": -1
},
{
"id": 1643,
"name": "Thwack",
"icon": 405,
"classjob": -1
},
{
"id": 1644,
"name": "Blizzaga V",
"icon": 405,
"classjob": -1
},
{
"id": 1645,
"name": "Fire V",
"icon": 405,
"classjob": -1
},
{
"id": 1646,
"name": "Gravity II",
"icon": 405,
"classjob": -1
},
{
"id": 1647,
"name": "Play Rough",
"icon": 405,
"classjob": -1
},
{
"id": 1648,
"name": "Tornado II",
"icon": 405,
"classjob": -1
},
{
"id": 1649,
"name": "Warp",
"icon": 405,
"classjob": -1
},
{
"id": 1650,
"name": "透明：アルテマウェポン：アルテマ弾ターゲッティング",
"icon": 405,
"classjob": -1
},
{
"id": 1651,
"name": "タイタン・エギ：タイタンハード/ＡＡ",
"icon": 405,
"classjob": -1
},
{
"id": 1652,
"name": "透明：タイタン：岩の牢獄",
"icon": 405,
"classjob": -1
},
{
"id": 1653,
"name": "Suction",
"icon": 405,
"classjob": -1
},
{
"id": 1654,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 1655,
"name": "Gas Shell",
"icon": 405,
"classjob": -1
},
{
"id": 1656,
"name": "Flash Flood",
"icon": 405,
"classjob": -1
},
{
"id": 1657,
"name": "Acid Shower",
"icon": 405,
"classjob": -1
},
{
"id": 1658,
"name": "Wallop",
"icon": 405,
"classjob": -1
},
{
"id": 1659,
"name": "Putrid Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 1660,
"name": "Peel",
"icon": 405,
"classjob": -1
},
{
"id": 1661,
"name": "Terror Touch",
"icon": 405,
"classjob": -1
},
{
"id": 1662,
"name": "Paralyze III",
"icon": 405,
"classjob": -1
},
{
"id": 1663,
"name": "Banish",
"icon": 405,
"classjob": -1
},
{
"id": 1664,
"name": "Banish III",
"icon": 405,
"classjob": -1
},
{
"id": 1665,
"name": "Banish",
"icon": 405,
"classjob": -1
},
{
"id": 1666,
"name": "Divide",
"icon": 405,
"classjob": -1
},
{
"id": 1667,
"name": "Screwdriver",
"icon": 405,
"classjob": -1
},
{
"id": 1668,
"name": "Aether Detonation",
"icon": 405,
"classjob": -1
},
{
"id": 1669,
"name": "Aether Detonation",
"icon": 405,
"classjob": -1
},
{
"id": 1670,
"name": "Wallop",
"icon": 405,
"classjob": -1
},
{
"id": 1671,
"name": "Eye Of The Storm",
"icon": 405,
"classjob": -1
},
{
"id": 1672,
"name": "Aero Blast",
"icon": 405,
"classjob": -1
},
{
"id": 1673,
"name": "Whipcrack",
"icon": 405,
"classjob": -1
},
{
"id": 1674,
"name": "Bombination",
"icon": 405,
"classjob": -1
},
{
"id": 1675,
"name": "Zombify",
"icon": 405,
"classjob": -1
},
{
"id": 1676,
"name": "Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 1677,
"name": "Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 1678,
"name": "Fire II",
"icon": 452,
"classjob": -1
},
{
"id": 1679,
"name": "Dark Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 1680,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 1681,
"name": "Rockslide",
"icon": 405,
"classjob": -1
},
{
"id": 1682,
"name": "Plaincracker",
"icon": 405,
"classjob": -1
},
{
"id": 1683,
"name": "Earthen Heart",
"icon": 405,
"classjob": -1
},
{
"id": 1684,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 1685,
"name": "Dark Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 1686,
"name": "Mercurial Strike",
"icon": 405,
"classjob": -1
},
{
"id": 1687,
"name": "Power Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1688,
"name": "Impact Roar",
"icon": 405,
"classjob": -1
},
{
"id": 1689,
"name": "Sand Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 1690,
"name": "Fast Boulder",
"icon": 405,
"classjob": -1
},
{
"id": 1691,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1692,
"name": "Dust Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 1693,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 1694,
"name": "Decipher",
"icon": 115,
"classjob": 0
},
{
"id": 1695,
"name": "Dig",
"icon": 116,
"classjob": 0
},
{
"id": 1696,
"name": "Void Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 1697,
"name": "Void Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 1698,
"name": "Icefall",
"icon": 405,
"classjob": -1
},
{
"id": 1699,
"name": "Nether Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1700,
"name": "アークデーモン：AA",
"icon": 405,
"classjob": -1
},
{
"id": 1701,
"name": "Abyssal Swing",
"icon": 405,
"classjob": -1
},
{
"id": 1702,
"name": "Abyssal Transfixion",
"icon": 405,
"classjob": -1
},
{
"id": 1703,
"name": "Abyssal Charge",
"icon": 405,
"classjob": -1
},
{
"id": 1704,
"name": "Tenebrous Missile",
"icon": 405,
"classjob": -1
},
{
"id": 1705,
"name": "Prime Guillotine",
"icon": 405,
"classjob": -1
},
{
"id": 1706,
"name": "Abyssal Charge",
"icon": 405,
"classjob": -1
},
{
"id": 1707,
"name": "Death Scythe",
"icon": 405,
"classjob": -1
},
{
"id": 1708,
"name": "Dismember",
"icon": 405,
"classjob": -1
},
{
"id": 1709,
"name": "Void Miasma",
"icon": 405,
"classjob": -1
},
{
"id": 1710,
"name": "Danse Macabre",
"icon": 405,
"classjob": -1
},
{
"id": 1711,
"name": "Hell Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1712,
"name": "Mow",
"icon": 405,
"classjob": -1
},
{
"id": 1713,
"name": "Frightful Roar",
"icon": 405,
"classjob": -1
},
{
"id": 1714,
"name": "Void Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 1715,
"name": "Void Thunder III",
"icon": 405,
"classjob": -1
},
{
"id": 1716,
"name": "Dark Mist",
"icon": 405,
"classjob": -1
},
{
"id": 1717,
"name": "Void Fire IV",
"icon": 405,
"classjob": -1
},
{
"id": 1718,
"name": "Void Thunder IV",
"icon": 405,
"classjob": -1
},
{
"id": 1719,
"name": "Beguiling Mist",
"icon": 405,
"classjob": -1
},
{
"id": 1720,
"name": "Blood Rain",
"icon": 405,
"classjob": -1
},
{
"id": 1721,
"name": "Blood Rain",
"icon": 405,
"classjob": -1
},
{
"id": 1722,
"name": "Blood Rain",
"icon": 405,
"classjob": -1
},
{
"id": 1723,
"name": "Void Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 1724,
"name": "Dark Mist",
"icon": 405,
"classjob": -1
},
{
"id": 1725,
"name": "Great Divide",
"icon": 405,
"classjob": -1
},
{
"id": 1726,
"name": "Dimension Zero",
"icon": 405,
"classjob": -1
},
{
"id": 1730,
"name": "Ancient Flare",
"icon": 405,
"classjob": -1
},
{
"id": 1731,
"name": "Ancient Flare",
"icon": 405,
"classjob": -1
},
{
"id": 1732,
"name": "Quake III",
"icon": 405,
"classjob": -1
},
{
"id": 1733,
"name": "Vacuum Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1734,
"name": "Abyssal Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1735,
"name": "Megiddo Flame",
"icon": 405,
"classjob": -1
},
{
"id": 1736,
"name": "Vacuum Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1737,
"name": "Abyssal Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1738,
"name": "Abyssal Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1739,
"name": "Abyssal Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1740,
"name": "Abyssal Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1741,
"name": "Megiddo Flame",
"icon": 405,
"classjob": -1
},
{
"id": 1742,
"name": "Megiddo Flame",
"icon": 405,
"classjob": -1
},
{
"id": 1743,
"name": "Megiddo Flame",
"icon": 405,
"classjob": -1
},
{
"id": 1744,
"name": "Megiddo Flame",
"icon": 405,
"classjob": -1
},
{
"id": 1745,
"name": "Quake",
"icon": 405,
"classjob": -1
},
{
"id": 1746,
"name": "Hundred Cuts",
"icon": 405,
"classjob": -1
},
{
"id": 1747,
"name": "Hundred Cuts",
"icon": 405,
"classjob": -1
},
{
"id": 1748,
"name": "Ancient Flare",
"icon": 405,
"classjob": -1
},
{
"id": 1749,
"name": "Void Fire",
"icon": 405,
"classjob": -1
},
{
"id": 1750,
"name": "Thunderbolt",
"icon": 405,
"classjob": -1
},
{
"id": 1751,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 1752,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 1753,
"name": "Wild Horn",
"icon": 405,
"classjob": -1
},
{
"id": 1754,
"name": "ベヒーモス：二本足",
"icon": 405,
"classjob": -1
},
{
"id": 1755,
"name": "Trounce",
"icon": 405,
"classjob": -1
},
{
"id": 1756,
"name": "Ecliptic Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 1757,
"name": "Aim",
"icon": 405,
"classjob": -1
},
{
"id": 1758,
"name": "Flame Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1759,
"name": "Astral Light",
"icon": 405,
"classjob": -1
},
{
"id": 1760,
"name": "Demonize",
"icon": 405,
"classjob": -1
},
{
"id": 1761,
"name": "Mistral Song",
"icon": 405,
"classjob": -1
},
{
"id": 1762,
"name": "Fatal Allure",
"icon": 405,
"classjob": -1
},
{
"id": 1763,
"name": "Featherlance",
"icon": 405,
"classjob": -1
},
{
"id": 1764,
"name": "Fiery Breath",
"icon": 61113,
"classjob": 0
},
{
"id": 1765,
"name": "Big Sneeze",
"icon": 61114,
"classjob": 0
},
{
"id": 1766,
"name": "Throw",
"icon": 405,
"classjob": 0
},
{
"id": 1768,
"name": "Magnetic Field",
"icon": 405,
"classjob": -1
},
{
"id": 1770,
"name": "Condemnation",
"icon": 405,
"classjob": -1
},
{
"id": 1771,
"name": "Corrupted Tail",
"icon": 405,
"classjob": -1
},
{
"id": 1772,
"name": "Grim Cleaver",
"icon": 405,
"classjob": -1
},
{
"id": 1773,
"name": "Grim Halo",
"icon": 405,
"classjob": -1
},
{
"id": 1774,
"name": "Desolation",
"icon": 405,
"classjob": -1
},
{
"id": 1775,
"name": "Grim Fate",
"icon": 405,
"classjob": -1
},
{
"id": 1777,
"name": "Great Whirlwind",
"icon": 405,
"classjob": -1
},
{
"id": 1778,
"name": "Snowball",
"icon": 405,
"classjob": -1
},
{
"id": 1780,
"name": "Moonfall Slash",
"icon": 405,
"classjob": -1
},
{
"id": 1781,
"name": "Dust Diffusion",
"icon": 405,
"classjob": -1
},
{
"id": 1782,
"name": "Will Of Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 1783,
"name": "Holy Flame",
"icon": 405,
"classjob": -1
},
{
"id": 1784,
"name": "Poison Spore",
"icon": 405,
"classjob": -1
},
{
"id": 1785,
"name": "Grand Sword",
"icon": 405,
"classjob": -1
},
{
"id": 1786,
"name": "Grand Strike",
"icon": 405,
"classjob": -1
},
{
"id": 1787,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1788,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1789,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 1790,
"name": "Rotten Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1791,
"name": "The Look",
"icon": 405,
"classjob": -1
},
{
"id": 1792,
"name": "Tail Drive",
"icon": 405,
"classjob": -1
},
{
"id": 1794,
"name": "Rock Buster",
"icon": 405,
"classjob": -1
},
{
"id": 1795,
"name": "Tumult",
"icon": 405,
"classjob": -1
},
{
"id": 1796,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 1797,
"name": "Rock Throw",
"icon": 405,
"classjob": -1
},
{
"id": 1798,
"name": "Landslide",
"icon": 405,
"classjob": -1
},
{
"id": 1799,
"name": "Geocrush",
"icon": 405,
"classjob": -1
},
{
"id": 1800,
"name": "Earthen Fury",
"icon": 405,
"classjob": -1
},
{
"id": 1801,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 1802,
"name": "Viscous Aetheroplasm",
"icon": 405,
"classjob": -1
},
{
"id": 1803,
"name": "Ceruleum Vent",
"icon": 405,
"classjob": -1
},
{
"id": 1804,
"name": "Homing Lasers",
"icon": 405,
"classjob": -1
},
{
"id": 1805,
"name": "Diffractive Laser",
"icon": 405,
"classjob": -1
},
{
"id": 1806,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1807,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1808,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1809,
"name": "Aetheroplasm",
"icon": 405,
"classjob": -1
},
{
"id": 1810,
"name": "Aetheric Boom",
"icon": 405,
"classjob": -1
},
{
"id": 1811,
"name": "Aetheroplasm",
"icon": 405,
"classjob": -1
},
{
"id": 1812,
"name": "Fusion Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1813,
"name": "Tank Purge",
"icon": 405,
"classjob": -1
},
{
"id": 1814,
"name": "Freefire",
"icon": 405,
"classjob": -1
},
{
"id": 1815,
"name": "Ultima",
"icon": 405,
"classjob": -1
},
{
"id": 1816,
"name": "Mistral Song",
"icon": 405,
"classjob": -1
},
{
"id": 1817,
"name": "Vulcan Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1818,
"name": "Eye Of The Storm",
"icon": 405,
"classjob": -1
},
{
"id": 1819,
"name": "Geocrush",
"icon": 405,
"classjob": -1
},
{
"id": 1820,
"name": "Radiant Plume",
"icon": 405,
"classjob": -1
},
{
"id": 1821,
"name": "Weight Of The Land",
"icon": 405,
"classjob": -1
},
{
"id": 1822,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1823,
"name": "Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 1824,
"name": "Crimson Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 1825,
"name": "Assault Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 1826,
"name": "Viscous Aetheroplasm",
"icon": 405,
"classjob": -1
},
{
"id": 1827,
"name": "透明：アルテマウェポン：アルテマ弾ターゲッティング",
"icon": 405,
"classjob": -1
},
{
"id": 1828,
"name": "Level 5 Petrify",
"icon": 405,
"classjob": -1
},
{
"id": 1829,
"name": "Void Fire II",
"icon": 452,
"classjob": -1
},
{
"id": 1830,
"name": "Void Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 1831,
"name": "Sweet Steel",
"icon": 405,
"classjob": -1
},
{
"id": 1832,
"name": "Detonator",
"icon": 405,
"classjob": -1
},
{
"id": 1833,
"name": "Dark Mist",
"icon": 405,
"classjob": -1
},
{
"id": 1834,
"name": "Cold Caress",
"icon": 405,
"classjob": -1
},
{
"id": 1835,
"name": "Earthbreak",
"icon": 405,
"classjob": -1
},
{
"id": 1836,
"name": "Bravery",
"icon": 405,
"classjob": -1
},
{
"id": 1837,
"name": "Earthquake",
"icon": 405,
"classjob": -1
},
{
"id": 1838,
"name": "Bottomless Desert",
"icon": 405,
"classjob": -1
},
{
"id": 1839,
"name": "Earthbreak",
"icon": 405,
"classjob": -1
},
{
"id": 1840,
"name": "Sand Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 1841,
"name": "Grand Sword",
"icon": 405,
"classjob": -1
},
{
"id": 1842,
"name": "Void Thunder III",
"icon": 459,
"classjob": -1
},
{
"id": 1844,
"name": "Tail Drive",
"icon": 405,
"classjob": -1
},
{
"id": 1845,
"name": "Attractant",
"icon": 405,
"classjob": -1
},
{
"id": 1846,
"name": "Devour",
"icon": 405,
"classjob": -1
},
{
"id": 1847,
"name": "Dirty Sneeze",
"icon": 405,
"classjob": -1
},
{
"id": 1848,
"name": "Beatdown",
"icon": 405,
"classjob": -1
},
{
"id": 1849,
"name": "Spore Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 1850,
"name": "Spit",
"icon": 405,
"classjob": -1
},
{
"id": 1851,
"name": "Spore Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1852,
"name": "Purulent Ooze",
"icon": 405,
"classjob": -1
},
{
"id": 1853,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1854,
"name": "Inhale",
"icon": 405,
"classjob": -1
},
{
"id": 1855,
"name": "Aqua Breath",
"icon": 405,
"classjob": -1
},
{
"id": 1856,
"name": "Tail Whip",
"icon": 405,
"classjob": -1
},
{
"id": 1857,
"name": "Scale Darts",
"icon": 405,
"classjob": -1
},
{
"id": 1858,
"name": "Waterspout",
"icon": 405,
"classjob": -1
},
{
"id": 1859,
"name": "Waterspout",
"icon": 405,
"classjob": -1
},
{
"id": 1860,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 1861,
"name": "Spinning Dive",
"icon": 405,
"classjob": -1
},
{
"id": 1862,
"name": "Stun Shot",
"icon": 405,
"classjob": -1
},
{
"id": 1863,
"name": "Bilgestorm",
"icon": 405,
"classjob": -1
},
{
"id": 1864,
"name": "Hydro Shot",
"icon": 405,
"classjob": -1
},
{
"id": 1865,
"name": "Dreadstorm",
"icon": 405,
"classjob": -1
},
{
"id": 1866,
"name": "Dreadwash",
"icon": 405,
"classjob": -1
},
{
"id": 1867,
"name": "Tidal Roar",
"icon": 405,
"classjob": -1
},
{
"id": 1868,
"name": "Tidal Roar",
"icon": 405,
"classjob": -1
},
{
"id": 1869,
"name": "Spinning Dive",
"icon": 405,
"classjob": -1
},
{
"id": 1870,
"name": "Aether Draw",
"icon": 405,
"classjob": -1
},
{
"id": 1871,
"name": "Splash",
"icon": 405,
"classjob": -1
},
{
"id": 1872,
"name": "Tidal Wave",
"icon": 405,
"classjob": -1
},
{
"id": 1873,
"name": "Grand Fall",
"icon": 405,
"classjob": -1
},
{
"id": 1874,
"name": "Ruin",
"icon": 405,
"classjob": -1
},
{
"id": 1875,
"name": "Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 1876,
"name": "Dread Tide",
"icon": 405,
"classjob": -1
},
{
"id": 1877,
"name": "Dread Tide",
"icon": 405,
"classjob": -1
},
{
"id": 1878,
"name": "Dread Tide",
"icon": 405,
"classjob": -1
},
{
"id": 1879,
"name": "Dread Tide",
"icon": 405,
"classjob": -1
},
{
"id": 1880,
"name": "Diabolic Curse",
"icon": 405,
"classjob": -1
},
{
"id": 1881,
"name": "Pavor Nocturnus",
"icon": 405,
"classjob": -1
},
{
"id": 1882,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1883,
"name": "Camisado",
"icon": 405,
"classjob": -1
},
{
"id": 1884,
"name": "Nightmare",
"icon": 405,
"classjob": -1
},
{
"id": 1885,
"name": "Scurvy",
"icon": 405,
"classjob": -1
},
{
"id": 1886,
"name": "Deathtrap",
"icon": 405,
"classjob": -1
},
{
"id": 1887,
"name": "Unlock",
"icon": 405,
"classjob": -1
},
{
"id": 1888,
"name": "透明：悪魔の扉：吸い込み",
"icon": 405,
"classjob": -1
},
{
"id": 1889,
"name": "Diabolic Curse",
"icon": 405,
"classjob": -1
},
{
"id": 1890,
"name": "Graviball",
"icon": 405,
"classjob": -1
},
{
"id": 1891,
"name": "Critical Gravity",
"icon": 405,
"classjob": -1
},
{
"id": 1892,
"name": "Noctoshield",
"icon": 405,
"classjob": -1
},
{
"id": 1893,
"name": "Ruinous Omen",
"icon": 405,
"classjob": -1
},
{
"id": 1894,
"name": "Ultimate Terror",
"icon": 405,
"classjob": -1
},
{
"id": 1895,
"name": "Night Terror",
"icon": 405,
"classjob": -1
},
{
"id": 1896,
"name": "Scale Flakes",
"icon": 405,
"classjob": -1
},
{
"id": 1897,
"name": "Exuviation",
"icon": 405,
"classjob": -1
},
{
"id": 1898,
"name": "Poison Dust",
"icon": 405,
"classjob": -1
},
{
"id": 1899,
"name": "Swoop",
"icon": 405,
"classjob": -1
},
{
"id": 1900,
"name": "Stormwind",
"icon": 405,
"classjob": -1
},
{
"id": 1901,
"name": "Climb",
"icon": 405,
"classjob": -1
},
{
"id": 1902,
"name": "Eerie Soundwave",
"icon": 405,
"classjob": -1
},
{
"id": 1903,
"name": "Plague Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 1904,
"name": "Corrosive Gale",
"icon": 405,
"classjob": -1
},
{
"id": 1905,
"name": "Erosion Darts",
"icon": 405,
"classjob": -1
},
{
"id": 1906,
"name": "Cannonball",
"icon": 405,
"classjob": -1
},
{
"id": 1907,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 1908,
"name": "Claw",
"icon": 405,
"classjob": -1
},
{
"id": 1909,
"name": "Bad-mouth",
"icon": 405,
"classjob": -1
},
{
"id": 1910,
"name": "Kick And Scream",
"icon": 405,
"classjob": -1
},
{
"id": 1911,
"name": "Venom",
"icon": 405,
"classjob": -1
},
{
"id": 1912,
"name": "Cursed Sphere",
"icon": 405,
"classjob": -1
},
{
"id": 1913,
"name": "Death Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1914,
"name": "Hex Eye",
"icon": 405,
"classjob": -1
},
{
"id": 1915,
"name": "Loom",
"icon": 405,
"classjob": -1
},
{
"id": 1916,
"name": "Paralyze III",
"icon": 405,
"classjob": -1
},
{
"id": 1917,
"name": "Briny Veil",
"icon": 405,
"classjob": -1
},
{
"id": 1918,
"name": "Career",
"icon": 405,
"classjob": -1
},
{
"id": 1919,
"name": "Glider Ram",
"icon": 405,
"classjob": -1
},
{
"id": 1920,
"name": "Goblin Rush",
"icon": 405,
"classjob": -1
},
{
"id": 1921,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 1922,
"name": "Sniper Shot",
"icon": 405,
"classjob": -1
},
{
"id": 1923,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1924,
"name": "Needle Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1926,
"name": "Barrel Toss",
"icon": 405,
"classjob": -1
},
{
"id": 1927,
"name": "Ceruleum Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 1928,
"name": "Scramble",
"icon": 405,
"classjob": -1
},
{
"id": 1929,
"name": "Glider Ram",
"icon": 405,
"classjob": -1
},
{
"id": 1930,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1931,
"name": "Flamethrower",
"icon": 405,
"classjob": -1
},
{
"id": 1932,
"name": "Bombardment",
"icon": 405,
"classjob": -1
},
{
"id": 1933,
"name": "Carpet Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 1934,
"name": "Giant Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 1935,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1936,
"name": "Big Burst",
"icon": 405,
"classjob": -1
},
{
"id": 1939,
"name": "Cermet Drill",
"icon": 405,
"classjob": -1
},
{
"id": 1940,
"name": "Drill Cannons",
"icon": 405,
"classjob": -1
},
{
"id": 1941,
"name": "Overcharge",
"icon": 405,
"classjob": -1
},
{
"id": 1942,
"name": "Hit And Run",
"icon": 405,
"classjob": -1
},
{
"id": 1943,
"name": "Bloody Caress",
"icon": 405,
"classjob": -1
},
{
"id": 1944,
"name": "Thorn Whip",
"icon": 405,
"classjob": -1
},
{
"id": 1945,
"name": "Floral Trap",
"icon": 405,
"classjob": -1
},
{
"id": 1946,
"name": "Devour",
"icon": 405,
"classjob": -1
},
{
"id": 1947,
"name": "Spit",
"icon": 405,
"classjob": -1
},
{
"id": 1948,
"name": "Viscid Emission",
"icon": 405,
"classjob": -1
},
{
"id": 1949,
"name": "Blighted Bouquet",
"icon": 405,
"classjob": -1
},
{
"id": 1950,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 1951,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 1952,
"name": "Swarm",
"icon": 405,
"classjob": -1
},
{
"id": 1953,
"name": "Acid Rain",
"icon": 405,
"classjob": -1
},
{
"id": 1954,
"name": "Rotten Stench",
"icon": 405,
"classjob": -1
},
{
"id": 1955,
"name": "Sharp Sting",
"icon": 405,
"classjob": -1
},
{
"id": 1956,
"name": "Terminal Sting",
"icon": 405,
"classjob": -1
},
{
"id": 1957,
"name": "Acid Spray",
"icon": 405,
"classjob": -1
},
{
"id": 1958,
"name": "Acid Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 1959,
"name": "Acid Ooze",
"icon": 405,
"classjob": -1
},
{
"id": 1960,
"name": "Tail Slap",
"icon": 405,
"classjob": -1
},
{
"id": 1961,
"name": "Red Lotus Blade",
"icon": 405,
"classjob": -1
},
{
"id": 1962,
"name": "Circle Of Flames",
"icon": 405,
"classjob": -1
},
{
"id": 1963,
"name": "Circle Blade",
"icon": 405,
"classjob": -1
},
{
"id": 1964,
"name": "Cursed Voice",
"icon": 405,
"classjob": -1
},
{
"id": 1965,
"name": "Petrifying Voice",
"icon": 405,
"classjob": -1
},
{
"id": 1966,
"name": "Hysteric Smash",
"icon": 405,
"classjob": -1
},
{
"id": 1967,
"name": "Cursed Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 1968,
"name": "Petrifying Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 1969,
"name": "Petrifaction",
"icon": 405,
"classjob": -1
},
{
"id": 1970,
"name": "Venomous Tail",
"icon": 405,
"classjob": -1
},
{
"id": 1971,
"name": "Venomous Tail",
"icon": 405,
"classjob": -1
},
{
"id": 1972,
"name": "Tail Slap",
"icon": 405,
"classjob": -1
},
{
"id": 1973,
"name": "Circle Blade",
"icon": 405,
"classjob": -1
},
{
"id": 1974,
"name": "Bravery",
"icon": 405,
"classjob": -1
},
{
"id": 1975,
"name": "Shot",
"icon": 405,
"classjob": -1
},
{
"id": 1976,
"name": "Aimed Shot",
"icon": 405,
"classjob": -1
},
{
"id": 1977,
"name": "Arrow Deluge",
"icon": 405,
"classjob": -1
},
{
"id": 1978,
"name": "Dark Sphere",
"icon": 405,
"classjob": -1
},
{
"id": 1979,
"name": "Petrifaction",
"icon": 405,
"classjob": -1
},
{
"id": 1980,
"name": "Terror Sphere",
"icon": 405,
"classjob": -1
},
{
"id": 1981,
"name": "Discipline",
"icon": 405,
"classjob": -1
},
{
"id": 1982,
"name": "Discipline",
"icon": 405,
"classjob": -1
},
{
"id": 1983,
"name": "Discipline",
"icon": 405,
"classjob": -1
},
{
"id": 1984,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1985,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 1986,
"name": "Diffusion Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1987,
"name": "Brainjack",
"icon": 405,
"classjob": -1
},
{
"id": 1988,
"name": "Allagan Field",
"icon": 405,
"classjob": -1
},
{
"id": 1989,
"name": "Critical Surge",
"icon": 405,
"classjob": -1
},
{
"id": 1990,
"name": "Gaseous Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 1991,
"name": "Homing Missile",
"icon": 405,
"classjob": -1
},
{
"id": 1992,
"name": "Atomic Ray",
"icon": 405,
"classjob": -1
},
{
"id": 1993,
"name": "Inertia Stream",
"icon": 405,
"classjob": -1
},
{
"id": 1994,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 1995,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 1996,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 1997,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 1998,
"name": "Life Drain",
"icon": 405,
"classjob": -1
},
{
"id": 1999,
"name": "Defensive Reaction",
"icon": 405,
"classjob": -1
},
{
"id": 2000,
"name": "Disruption Wave",
"icon": 405,
"classjob": -1
},
{
"id": 2001,
"name": "Triggered Landmine",
"icon": 405,
"classjob": -1
},
{
"id": 2002,
"name": "Landmine Auto-detonation",
"icon": 405,
"classjob": -1
},
{
"id": 2003,
"name": "Rotoswipe",
"icon": 405,
"classjob": -1
},
{
"id": 2004,
"name": "Flamethrower",
"icon": 405,
"classjob": -1
},
{
"id": 2005,
"name": "Ravensclaw",
"icon": 405,
"classjob": -1
},
{
"id": 2006,
"name": "Ravensbeak",
"icon": 405,
"classjob": -1
},
{
"id": 2007,
"name": "Raven's Ascent",
"icon": 405,
"classjob": -1
},
{
"id": 2008,
"name": "Iron Chariot",
"icon": 405,
"classjob": -1
},
{
"id": 2009,
"name": "Iron Chariot",
"icon": 405,
"classjob": -1
},
{
"id": 2010,
"name": "Lunar Dynamo",
"icon": 405,
"classjob": -1
},
{
"id": 2011,
"name": "Lunar Dynamo",
"icon": 405,
"classjob": -1
},
{
"id": 2012,
"name": "Dalamud Dive",
"icon": 405,
"classjob": -1
},
{
"id": 2013,
"name": "Raven Dive",
"icon": 405,
"classjob": -1
},
{
"id": 2014,
"name": "Meteor Stream",
"icon": 405,
"classjob": -1
},
{
"id": 2015,
"name": "Thermionic Beam",
"icon": 405,
"classjob": -1
},
{
"id": 2016,
"name": "Super Nova",
"icon": 405,
"classjob": -1
},
{
"id": 2017,
"name": "Universal Gravitation",
"icon": 405,
"classjob": -1
},
{
"id": 2018,
"name": "Binding Coil",
"icon": 405,
"classjob": -1
},
{
"id": 2019,
"name": "Asphyxiation",
"icon": 405,
"classjob": -1
},
{
"id": 2020,
"name": "Heavensfall",
"icon": 405,
"classjob": -1
},
{
"id": 2021,
"name": "Thermionic Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2022,
"name": "Bahamut's Favor",
"icon": 405,
"classjob": -1
},
{
"id": 2023,
"name": "Megaflare",
"icon": 405,
"classjob": -1
},
{
"id": 2024,
"name": "Megaflare",
"icon": 405,
"classjob": -1
},
{
"id": 2025,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 2026,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 2027,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 2028,
"name": "Debris Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2029,
"name": "Stone Skull",
"icon": 405,
"classjob": -1
},
{
"id": 2030,
"name": "Boulder Clap",
"icon": 405,
"classjob": -1
},
{
"id": 2031,
"name": "Demolish",
"icon": 405,
"classjob": -1
},
{
"id": 2032,
"name": "Earthen Heart",
"icon": 405,
"classjob": -1
},
{
"id": 2033,
"name": "Heavy Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2034,
"name": "Heavy Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2035,
"name": "Heavy Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2036,
"name": "Heavy Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2037,
"name": "Earthshock",
"icon": 405,
"classjob": -1
},
{
"id": 2038,
"name": "Magnetism",
"icon": 405,
"classjob": -1
},
{
"id": 2039,
"name": "Ball Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 2040,
"name": "Deadly Drive",
"icon": 405,
"classjob": -1
},
{
"id": 2041,
"name": "Binding Chain",
"icon": 405,
"classjob": -1
},
{
"id": 2042,
"name": "Neurolink Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2043,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 2044,
"name": "Iceball",
"icon": 405,
"classjob": -1
},
{
"id": 2045,
"name": "Chain Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 2046,
"name": "Chain Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 2047,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 2048,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 2049,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 2050,
"name": "1000-kuponze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 2051,
"name": "Moogle-Go-Round",
"icon": 405,
"classjob": -1
},
{
"id": 2052,
"name": "Stifling Mogdark",
"icon": 405,
"classjob": -1
},
{
"id": 2053,
"name": "Come At Me Kupo",
"icon": 405,
"classjob": -1
},
{
"id": 2054,
"name": "Searing Moglight",
"icon": 405,
"classjob": -1
},
{
"id": 2055,
"name": "Pom Flare",
"icon": 405,
"classjob": -1
},
{
"id": 2056,
"name": "Pom Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 2057,
"name": "Mog Malison",
"icon": 405,
"classjob": -1
},
{
"id": 2058,
"name": "Pom Cure",
"icon": 405,
"classjob": -1
},
{
"id": 2059,
"name": "Pom Holy",
"icon": 405,
"classjob": -1
},
{
"id": 2060,
"name": "Mog Anthem",
"icon": 405,
"classjob": -1
},
{
"id": 2061,
"name": "Moogle Eye Shot",
"icon": 405,
"classjob": -1
},
{
"id": 2062,
"name": "Mograin Of Death",
"icon": 405,
"classjob": -1
},
{
"id": 2063,
"name": "Delta Mog Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2064,
"name": "Delta Mog Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2065,
"name": "Hair Splitter",
"icon": 405,
"classjob": -1
},
{
"id": 2066,
"name": "Fluff Ruffler",
"icon": 405,
"classjob": -1
},
{
"id": 2067,
"name": "1000-kuponze Charge",
"icon": 405,
"classjob": -1
},
{
"id": 2068,
"name": "Mog Creation",
"icon": 405,
"classjob": -1
},
{
"id": 2069,
"name": "Mooglesse Oblige",
"icon": 405,
"classjob": -1
},
{
"id": 2070,
"name": "To Arms",
"icon": 405,
"classjob": -1
},
{
"id": 2071,
"name": "Royal Rouse",
"icon": 405,
"classjob": -1
},
{
"id": 2072,
"name": "Mog Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 2073,
"name": "Scission Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 2074,
"name": "Microwall",
"icon": 405,
"classjob": -1
},
{
"id": 2075,
"name": "1000-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 2076,
"name": "Predatorial Instinct",
"icon": 405,
"classjob": -1
},
{
"id": 2077,
"name": "Piercing Glower",
"icon": 405,
"classjob": -1
},
{
"id": 2078,
"name": "10-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 2079,
"name": "100-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 2080,
"name": "100-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 2081,
"name": "Eye Of The Beholder",
"icon": 405,
"classjob": -1
},
{
"id": 2082,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2083,
"name": "Dread Tide",
"icon": 405,
"classjob": -1
},
{
"id": 2084,
"name": "Dread Tide",
"icon": 405,
"classjob": -1
},
{
"id": 2085,
"name": "Dread Tide",
"icon": 405,
"classjob": -1
},
{
"id": 2086,
"name": "Aqua Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2087,
"name": "Tail Whip",
"icon": 405,
"classjob": -1
},
{
"id": 2088,
"name": "Scale Darts",
"icon": 405,
"classjob": -1
},
{
"id": 2089,
"name": "Waterspout",
"icon": 405,
"classjob": -1
},
{
"id": 2090,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 2091,
"name": "Tidal Roar",
"icon": 405,
"classjob": -1
},
{
"id": 2092,
"name": "Spinning Dive",
"icon": 405,
"classjob": -1
},
{
"id": 2093,
"name": "Splash",
"icon": 405,
"classjob": -1
},
{
"id": 2094,
"name": "Tidal Wave",
"icon": 405,
"classjob": -1
},
{
"id": 2095,
"name": "Grand Fall",
"icon": 405,
"classjob": -1
},
{
"id": 2096,
"name": "Tidal Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 2097,
"name": "Briny Veil",
"icon": 405,
"classjob": -1
},
{
"id": 2098,
"name": "Spinning Dive",
"icon": 405,
"classjob": -1
},
{
"id": 2099,
"name": "Demon Eye",
"icon": 405,
"classjob": -1
},
{
"id": 2100,
"name": "Vivifying Gleam",
"icon": 405,
"classjob": -1
},
{
"id": 2101,
"name": "Bull Charge",
"icon": 405,
"classjob": -1
},
{
"id": 2102,
"name": "Cold Stare",
"icon": 405,
"classjob": -1
},
{
"id": 2103,
"name": "Jettatura",
"icon": 405,
"classjob": -1
},
{
"id": 2104,
"name": "Jettatura",
"icon": 405,
"classjob": -1
},
{
"id": 2105,
"name": "Bestial Roar",
"icon": 405,
"classjob": -1
},
{
"id": 2106,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2107,
"name": "Heavensfall",
"icon": 405,
"classjob": -1
},
{
"id": 2108,
"name": "Whirlwind Slash",
"icon": 405,
"classjob": -1
},
{
"id": 2109,
"name": "Whirlwind Slash",
"icon": 405,
"classjob": -1
},
{
"id": 2110,
"name": "Bitter End",
"icon": 405,
"classjob": -1
},
{
"id": 2111,
"name": "Bitter End",
"icon": 405,
"classjob": -1
},
{
"id": 2112,
"name": "Pradamante",
"icon": 405,
"classjob": -1
},
{
"id": 2113,
"name": "Giga Jump",
"icon": 405,
"classjob": -1
},
{
"id": 2114,
"name": "Frog Song",
"icon": 405,
"classjob": -1
},
{
"id": 2115,
"name": "Tiny Song",
"icon": 405,
"classjob": -1
},
{
"id": 2116,
"name": "Rocket Punch",
"icon": 405,
"classjob": -1
},
{
"id": 2117,
"name": "Grovel",
"icon": 405,
"classjob": -1
},
{
"id": 2118,
"name": "Wind Slash",
"icon": 405,
"classjob": -1
},
{
"id": 2119,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2121,
"name": "Memento Moogle",
"icon": 405,
"classjob": -1
},
{
"id": 2122,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 2123,
"name": "Divine Embrace",
"icon": 405,
"classjob": -1
},
{
"id": 2124,
"name": "Sacred Garden",
"icon": 405,
"classjob": -1
},
{
"id": 2125,
"name": "Cross Lance",
"icon": 405,
"classjob": -1
},
{
"id": 2126,
"name": "Cross Lance",
"icon": 405,
"classjob": -1
},
{
"id": 2127,
"name": "Standstill",
"icon": 405,
"classjob": -1
},
{
"id": 2128,
"name": "Thal's Fury",
"icon": 405,
"classjob": -1
},
{
"id": 2129,
"name": "Thal's Judgment",
"icon": 405,
"classjob": -1
},
{
"id": 2130,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 2131,
"name": "Heat Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2132,
"name": "Tail Smash",
"icon": 405,
"classjob": -1
},
{
"id": 2133,
"name": "Deadly Hold",
"icon": 405,
"classjob": -1
},
{
"id": 2134,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 2135,
"name": "Cast Light",
"icon": 1107,
"classjob": 18
},
{
"id": 2136,
"name": "Master Recipe Book",
"icon": 405,
"classjob": 0
},
{
"id": 2137,
"name": "Bomb Spark",
"icon": 405,
"classjob": -1
},
{
"id": 2138,
"name": "Electrocute",
"icon": 405,
"classjob": -1
},
{
"id": 2140,
"name": "Bombardment",
"icon": 405,
"classjob": -1
},
{
"id": 2141,
"name": "Iron Ball",
"icon": 405,
"classjob": -1
},
{
"id": 2142,
"name": "Seedvolley",
"icon": 405,
"classjob": -1
},
{
"id": 2143,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2144,
"name": "The Ram's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 2145,
"name": "The Dragon's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 2146,
"name": "Hood Swing",
"icon": 405,
"classjob": -1
},
{
"id": 2147,
"name": "Whip Back",
"icon": 405,
"classjob": -1
},
{
"id": 2148,
"name": "Regorge",
"icon": 405,
"classjob": -1
},
{
"id": 2149,
"name": "Gust",
"icon": 405,
"classjob": -1
},
{
"id": 2150,
"name": "Shot",
"icon": 405,
"classjob": -1
},
{
"id": 2151,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2152,
"name": "Pulse Transmission",
"icon": 405,
"classjob": -1
},
{
"id": 2153,
"name": "透明：メテオ核予兆/小：バハムートダンジョン2/Trash",
"icon": 405,
"classjob": -1
},
{
"id": 2154,
"name": "Bombardment",
"icon": 405,
"classjob": -1
},
{
"id": 2155,
"name": "Mold Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2156,
"name": "Acid Rain",
"icon": 405,
"classjob": -1
},
{
"id": 2157,
"name": "Frenzy",
"icon": 405,
"classjob": -1
},
{
"id": 2158,
"name": "Sacrifice",
"icon": 405,
"classjob": -1
},
{
"id": 2159,
"name": "Pradamante",
"icon": 405,
"classjob": -1
},
{
"id": 2160,
"name": "Spit",
"icon": 405,
"classjob": -1
},
{
"id": 2161,
"name": "Bahamut's Claw",
"icon": 405,
"classjob": -1
},
{
"id": 2162,
"name": "リヴァイアサン：魔法反撃",
"icon": 405,
"classjob": -1
},
{
"id": 2163,
"name": "リヴァイアサン：遠隔反撃",
"icon": 405,
"classjob": -1
},
{
"id": 2164,
"name": "Mantle Of The Whorl",
"icon": 405,
"classjob": -1
},
{
"id": 2165,
"name": "Veil Of The Whorl",
"icon": 405,
"classjob": -1
},
{
"id": 2166,
"name": "Mog Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 2167,
"name": "Stardust",
"icon": 405,
"classjob": -1
},
{
"id": 2168,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 2169,
"name": "Thorn Whip",
"icon": 405,
"classjob": -1
},
{
"id": 2170,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2171,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 2172,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 2173,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 2174,
"name": "透明：メテオ核予兆/大：バハムートダンジョン2/Trash",
"icon": 405,
"classjob": -1
},
{
"id": 2175,
"name": "Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 2176,
"name": "Thunder III",
"icon": 405,
"classjob": -1
},
{
"id": 2177,
"name": "Oversurge",
"icon": 405,
"classjob": -1
},
{
"id": 2178,
"name": "Fire Dust",
"icon": 405,
"classjob": -1
},
{
"id": 2179,
"name": "Pebble",
"icon": 405,
"classjob": -1
},
{
"id": 2180,
"name": "Briary Growth",
"icon": 405,
"classjob": -1
},
{
"id": 2181,
"name": "Goblin Rush",
"icon": 405,
"classjob": -1
},
{
"id": 2182,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 2183,
"name": "Savage Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 2184,
"name": "Aqua Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2185,
"name": "Delta Mog Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2186,
"name": "Spinning Dive",
"icon": 405,
"classjob": -1
},
{
"id": 2187,
"name": "Spinning Dive",
"icon": 405,
"classjob": -1
},
{
"id": 2188,
"name": "Overpower",
"icon": 405,
"classjob": -1
},
{
"id": 2189,
"name": "Glider Ram",
"icon": 405,
"classjob": -1
},
{
"id": 2190,
"name": "Sniper Shot",
"icon": 405,
"classjob": -1
},
{
"id": 2191,
"name": "Thal's Fury",
"icon": 405,
"classjob": -1
},
{
"id": 2192,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2193,
"name": "Aqua Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2194,
"name": "Tail Whip",
"icon": 405,
"classjob": -1
},
{
"id": 2195,
"name": "Scale Darts",
"icon": 405,
"classjob": -1
},
{
"id": 2196,
"name": "Waterspout",
"icon": 405,
"classjob": -1
},
{
"id": 2197,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 2198,
"name": "Spinning Dive",
"icon": 405,
"classjob": -1
},
{
"id": 2199,
"name": "Tidal Roar",
"icon": 405,
"classjob": -1
},
{
"id": 2200,
"name": "Splash",
"icon": 405,
"classjob": -1
},
{
"id": 2201,
"name": "Tidal Wave",
"icon": 405,
"classjob": -1
},
{
"id": 2202,
"name": "Grand Fall",
"icon": 405,
"classjob": -1
},
{
"id": 2203,
"name": "Dread Tide",
"icon": 405,
"classjob": -1
},
{
"id": 2204,
"name": "Ripe Banana",
"icon": 405,
"classjob": -1
},
{
"id": 2205,
"name": "Browbeat",
"icon": 405,
"classjob": -1
},
{
"id": 2206,
"name": "Stool Pelt",
"icon": 405,
"classjob": -1
},
{
"id": 2207,
"name": "Chest Thump",
"icon": 405,
"classjob": -1
},
{
"id": 2208,
"name": "Streak",
"icon": 405,
"classjob": -1
},
{
"id": 2209,
"name": "Wallop",
"icon": 405,
"classjob": -1
},
{
"id": 2210,
"name": "Clearout",
"icon": 405,
"classjob": -1
},
{
"id": 2211,
"name": "Stool Pelt",
"icon": 405,
"classjob": -1
},
{
"id": 2212,
"name": "Ink Blot",
"icon": 405,
"classjob": -1
},
{
"id": 2213,
"name": "Ink Blot",
"icon": 405,
"classjob": -1
},
{
"id": 2214,
"name": "Ruin",
"icon": 405,
"classjob": -1
},
{
"id": 2215,
"name": "Seize",
"icon": 405,
"classjob": -1
},
{
"id": 2216,
"name": "Hurl",
"icon": 405,
"classjob": -1
},
{
"id": 2217,
"name": "Seawater Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 2218,
"name": "Clearout",
"icon": 405,
"classjob": -1
},
{
"id": 2219,
"name": "Wallop",
"icon": 405,
"classjob": -1
},
{
"id": 2220,
"name": "World's End",
"icon": 405,
"classjob": -1
},
{
"id": 2221,
"name": "Blazing Trail",
"icon": 405,
"classjob": -1
},
{
"id": 2222,
"name": "Deadly Drive",
"icon": 405,
"classjob": -1
},
{
"id": 2223,
"name": "Iceball",
"icon": 405,
"classjob": -1
},
{
"id": 2224,
"name": "Dragon's Blood",
"icon": 405,
"classjob": -1
},
{
"id": 2225,
"name": "Strident Scream",
"icon": 405,
"classjob": -1
},
{
"id": 2226,
"name": "透明：ギミック汎用：引き寄せ",
"icon": 405,
"classjob": -1
},
{
"id": 2227,
"name": "Jaws Of Death",
"icon": 405,
"classjob": -1
},
{
"id": 2228,
"name": "Upwell",
"icon": 405,
"classjob": -1
},
{
"id": 2229,
"name": "Spittle",
"icon": 405,
"classjob": -1
},
{
"id": 2230,
"name": "Spittle Splatter",
"icon": 405,
"classjob": -1
},
{
"id": 2231,
"name": "Riptide",
"icon": 405,
"classjob": -1
},
{
"id": 2232,
"name": "Watery Grave",
"icon": 405,
"classjob": -1
},
{
"id": 2233,
"name": "Watery Grave",
"icon": 405,
"classjob": -1
},
{
"id": 2234,
"name": "Waterwhirl",
"icon": 405,
"classjob": -1
},
{
"id": 2235,
"name": "Surface Breach",
"icon": 405,
"classjob": -1
},
{
"id": 2236,
"name": "Whirlpool",
"icon": 405,
"classjob": -1
},
{
"id": 2237,
"name": "Iron Kiss",
"icon": 61111,
"classjob": 0
},
{
"id": 2238,
"name": "Spindly Finger",
"icon": 61116,
"classjob": 0
},
{
"id": 2239,
"name": "Ripe Banana",
"icon": 405,
"classjob": -1
},
{
"id": 2240,
"name": "Spinning Edge",
"icon": 601,
"classjob": 29
},
{
"id": 2241,
"name": "Shade Shift",
"icon": 607,
"classjob": 29
},
{
"id": 2242,
"name": "Gust Slash",
"icon": 602,
"classjob": 29
},
{
"id": 2243,
"name": "Kiss Of The Wasp",
"icon": 608,
"classjob": 29
},
{
"id": 2244,
"name": "Mutilate",
"icon": 604,
"classjob": 29
},
{
"id": 2245,
"name": "Hide",
"icon": 609,
"classjob": 29
},
{
"id": 2246,
"name": "Assassinate",
"icon": 612,
"classjob": 29
},
{
"id": 2247,
"name": "Throwing Dagger",
"icon": 614,
"classjob": 29
},
{
"id": 2248,
"name": "Mug",
"icon": 613,
"classjob": 29
},
{
"id": 2249,
"name": "Goad",
"icon": 610,
"classjob": 29
},
{
"id": 2250,
"name": "Sneak Attack",
"icon": 617,
"classjob": 29
},
{
"id": 2251,
"name": "Dancing Edge",
"icon": 603,
"classjob": 29
},
{
"id": 2252,
"name": "Kiss Of The Viper",
"icon": 611,
"classjob": 29
},
{
"id": 2253,
"name": "Hide",
"icon": 609,
"classjob": 29
},
{
"id": 2254,
"name": "Death Blossom",
"icon": 615,
"classjob": 29
},
{
"id": 2255,
"name": "Aeolian Edge",
"icon": 605,
"classjob": 29
},
{
"id": 2256,
"name": "Jugulate",
"icon": 616,
"classjob": 29
},
{
"id": 2257,
"name": "Shadow Fang",
"icon": 606,
"classjob": 29
},
{
"id": 2258,
"name": "Trick Attack",
"icon": 618,
"classjob": 29
},
{
"id": 2259,
"name": "Ten",
"icon": 2901,
"classjob": 30
},
{
"id": 2260,
"name": "Ninjutsu",
"icon": 2904,
"classjob": 30
},
{
"id": 2261,
"name": "Chi",
"icon": 2902,
"classjob": 30
},
{
"id": 2262,
"name": "Shukuchi",
"icon": 2905,
"classjob": 30
},
{
"id": 2263,
"name": "Jin",
"icon": 2903,
"classjob": 30
},
{
"id": 2264,
"name": "Kassatsu",
"icon": 2906,
"classjob": 30
},
{
"id": 2265,
"name": "Fuma Shuriken",
"icon": 2907,
"classjob": 30
},
{
"id": 2266,
"name": "Katon",
"icon": 2908,
"classjob": 30
},
{
"id": 2267,
"name": "Raiton",
"icon": 2912,
"classjob": 30
},
{
"id": 2268,
"name": "Hyoton",
"icon": 2909,
"classjob": 30
},
{
"id": 2269,
"name": "Huton",
"icon": 2910,
"classjob": 30
},
{
"id": 2270,
"name": "Doton",
"icon": 2911,
"classjob": 30
},
{
"id": 2271,
"name": "Suiton",
"icon": 2913,
"classjob": 30
},
{
"id": 2272,
"name": "Rabbit Medium",
"icon": 2914,
"classjob": 30
},
{
"id": 2273,
"name": "Rending Snath",
"icon": 405,
"classjob": -1
},
{
"id": 2274,
"name": "Shock Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2275,
"name": "Thunderspark",
"icon": 405,
"classjob": -1
},
{
"id": 2276,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2277,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2278,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2279,
"name": "Judgment Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 2280,
"name": "Chaotic Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2281,
"name": "Rolling Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 2282,
"name": "Thunderbolt",
"icon": 405,
"classjob": -1
},
{
"id": 2283,
"name": "Increased Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 2284,
"name": "Shock Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2285,
"name": "Thunderspark",
"icon": 405,
"classjob": -1
},
{
"id": 2286,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2287,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2288,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2289,
"name": "Judgment Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 2290,
"name": "Chaotic Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2291,
"name": "Rolling Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 2292,
"name": "Thunderbolt",
"icon": 405,
"classjob": -1
},
{
"id": 2293,
"name": "Rake",
"icon": 405,
"classjob": -1
},
{
"id": 2294,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2295,
"name": "Swinge",
"icon": 405,
"classjob": -1
},
{
"id": 2296,
"name": "Agony",
"icon": 405,
"classjob": -1
},
{
"id": 2297,
"name": "Agony",
"icon": 405,
"classjob": -1
},
{
"id": 2298,
"name": "Nip",
"icon": 405,
"classjob": -1
},
{
"id": 2299,
"name": "Hard Stomp",
"icon": 405,
"classjob": -1
},
{
"id": 2300,
"name": "Diamondback",
"icon": 405,
"classjob": -1
},
{
"id": 2301,
"name": "アダマン：亀ドラゴン：回転ジェット準備：ストーンヴィジルハード",
"icon": 405,
"classjob": -1
},
{
"id": 2302,
"name": "Whipstream",
"icon": 405,
"classjob": -1
},
{
"id": 2303,
"name": "アダマン：亀ドラゴン：回転ジェット終了：ストーンヴィジルハード",
"icon": 405,
"classjob": -1
},
{
"id": 2304,
"name": "Cannonball Ricochet",
"icon": 405,
"classjob": -1
},
{
"id": 2305,
"name": "Electric Velitation",
"icon": 405,
"classjob": -1
},
{
"id": 2306,
"name": "Tail Chase",
"icon": 405,
"classjob": -1
},
{
"id": 2307,
"name": "Iron Kiss",
"icon": 405,
"classjob": -1
},
{
"id": 2308,
"name": "Spindly Finger",
"icon": 405,
"classjob": -1
},
{
"id": 2309,
"name": "Cannonball Ricochet",
"icon": 405,
"classjob": -1
},
{
"id": 2310,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 2311,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 2312,
"name": "Heat Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2313,
"name": "Tail Smash",
"icon": 405,
"classjob": -1
},
{
"id": 2314,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 2315,
"name": "Bloodboil",
"icon": 405,
"classjob": -1
},
{
"id": 2316,
"name": "Bone Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 2317,
"name": "Ancient Flare",
"icon": 405,
"classjob": -1
},
{
"id": 2318,
"name": "Ink",
"icon": 405,
"classjob": -1
},
{
"id": 2319,
"name": "Unholy",
"icon": 405,
"classjob": -1
},
{
"id": 2320,
"name": "Iron Justice",
"icon": 405,
"classjob": -1
},
{
"id": 2321,
"name": "Topple",
"icon": 405,
"classjob": -1
},
{
"id": 2322,
"name": "Smolder",
"icon": 405,
"classjob": -1
},
{
"id": 2323,
"name": "Shiver",
"icon": 405,
"classjob": -1
},
{
"id": 2324,
"name": "Shudder",
"icon": 405,
"classjob": -1
},
{
"id": 2325,
"name": "Iron Justice",
"icon": 405,
"classjob": -1
},
{
"id": 2326,
"name": "Daybreak",
"icon": 405,
"classjob": -1
},
{
"id": 2327,
"name": "Daybreak",
"icon": 405,
"classjob": -1
},
{
"id": 2328,
"name": "Daybreak",
"icon": 405,
"classjob": -1
},
{
"id": 2329,
"name": "Firewalker",
"icon": 405,
"classjob": -1
},
{
"id": 2330,
"name": "Searing Chain",
"icon": 405,
"classjob": -1
},
{
"id": 2331,
"name": "Infinite Anguish",
"icon": 405,
"classjob": -1
},
{
"id": 2332,
"name": "King's Will",
"icon": 405,
"classjob": -1
},
{
"id": 2333,
"name": "Douse",
"icon": 405,
"classjob": -1
},
{
"id": 2334,
"name": "Drench",
"icon": 405,
"classjob": -1
},
{
"id": 2335,
"name": "Scale Ripple",
"icon": 405,
"classjob": -1
},
{
"id": 2336,
"name": "Falling Sky",
"icon": 405,
"classjob": -1
},
{
"id": 2337,
"name": "Quake",
"icon": 405,
"classjob": -1
},
{
"id": 2338,
"name": "Dragon Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2339,
"name": "Drain",
"icon": 405,
"classjob": -1
},
{
"id": 2340,
"name": "Breakga",
"icon": 405,
"classjob": -1
},
{
"id": 2341,
"name": "Roast",
"icon": 405,
"classjob": -1
},
{
"id": 2342,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 2343,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 2344,
"name": "Hunter's Moon",
"icon": 405,
"classjob": -1
},
{
"id": 2345,
"name": "Hunter's Moon",
"icon": 405,
"classjob": -1
},
{
"id": 2346,
"name": "Astral Punch",
"icon": 405,
"classjob": -1
},
{
"id": 2347,
"name": "Ancient Flare",
"icon": 405,
"classjob": -1
},
{
"id": 2348,
"name": "Aura",
"icon": 405,
"classjob": -1
},
{
"id": 2349,
"name": "Blood Moon",
"icon": 405,
"classjob": -1
},
{
"id": 2350,
"name": "Iron Justice",
"icon": 405,
"classjob": -1
},
{
"id": 2351,
"name": "Deathstream",
"icon": 405,
"classjob": -1
},
{
"id": 2352,
"name": "Terror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 2353,
"name": "Vile Utterance",
"icon": 405,
"classjob": -1
},
{
"id": 2354,
"name": "Double Axe Handle",
"icon": 405,
"classjob": -1
},
{
"id": 2355,
"name": "Knuckle Press",
"icon": 405,
"classjob": -1
},
{
"id": 2356,
"name": "Burning Rave",
"icon": 405,
"classjob": -1
},
{
"id": 2357,
"name": "Burning Rave",
"icon": 405,
"classjob": -1
},
{
"id": 2358,
"name": "Aura Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 2359,
"name": "Ancient Quake",
"icon": 405,
"classjob": -1
},
{
"id": 2360,
"name": "Festal Cant",
"icon": 61118,
"classjob": 0
},
{
"id": 2361,
"name": "Ancient Quaga",
"icon": 405,
"classjob": -1
},
{
"id": 2362,
"name": "Unholy",
"icon": 405,
"classjob": -1
},
{
"id": 2363,
"name": "Comet Impact",
"icon": 405,
"classjob": -1
},
{
"id": 2364,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 2365,
"name": "Aetherochemical Reaction",
"icon": 405,
"classjob": -1
},
{
"id": 2366,
"name": "Aetherochemical Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 2367,
"name": "Imperium",
"icon": 405,
"classjob": -1
},
{
"id": 2368,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 2370,
"name": "Thunderbolt",
"icon": 405,
"classjob": -1
},
{
"id": 2371,
"name": "Mini",
"icon": 405,
"classjob": -1
},
{
"id": 2372,
"name": "The Last Bout",
"icon": 405,
"classjob": -1
},
{
"id": 2373,
"name": "The Last Dance",
"icon": 405,
"classjob": -1
},
{
"id": 2374,
"name": "The Last Song",
"icon": 405,
"classjob": -1
},
{
"id": 2375,
"name": "Plasma Release",
"icon": 405,
"classjob": -1
},
{
"id": 2376,
"name": "The Last Song",
"icon": 405,
"classjob": -1
},
{
"id": 2377,
"name": "Pyrotechnics",
"icon": 405,
"classjob": -1
},
{
"id": 2378,
"name": "Pyrotechnics",
"icon": 405,
"classjob": -1
},
{
"id": 2379,
"name": "Coloratura",
"icon": 405,
"classjob": -1
},
{
"id": 2380,
"name": "Firaga Forte",
"icon": 405,
"classjob": -1
},
{
"id": 2381,
"name": "Tremblor",
"icon": 405,
"classjob": -1
},
{
"id": 2382,
"name": "Blizzaga Forte",
"icon": 405,
"classjob": -1
},
{
"id": 2383,
"name": "Thundaga Forte",
"icon": 405,
"classjob": -1
},
{
"id": 2384,
"name": "Thundaga Forte",
"icon": 405,
"classjob": -1
},
{
"id": 2385,
"name": "Midwinter Tragedy",
"icon": 405,
"classjob": -1
},
{
"id": 2386,
"name": "Ranine Comedy",
"icon": 405,
"classjob": -1
},
{
"id": 2387,
"name": "ガーディアン：ブレス：詠唱無し",
"icon": 405,
"classjob": -1
},
{
"id": 2388,
"name": "Conductivity",
"icon": 405,
"classjob": -1
},
{
"id": 2389,
"name": "Quick Nock",
"icon": 405,
"classjob": -1
},
{
"id": 2390,
"name": "Inhumanity",
"icon": 405,
"classjob": -1
},
{
"id": 2391,
"name": "Rotting Arrow",
"icon": 405,
"classjob": -1
},
{
"id": 2392,
"name": "Wallop",
"icon": 405,
"classjob": -1
},
{
"id": 2393,
"name": "Tantrum",
"icon": 405,
"classjob": -1
},
{
"id": 2394,
"name": "Spontaneous Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 2395,
"name": "Death Throes",
"icon": 405,
"classjob": -1
},
{
"id": 2396,
"name": "Iron Justice",
"icon": 405,
"classjob": -1
},
{
"id": 2397,
"name": "Cloudcover",
"icon": 405,
"classjob": -1
},
{
"id": 2398,
"name": "Black Nebula",
"icon": 405,
"classjob": -1
},
{
"id": 2399,
"name": "Soul Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2400,
"name": "Spirit Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2401,
"name": "Soul Charge",
"icon": 405,
"classjob": -1
},
{
"id": 2402,
"name": "Red Wedding",
"icon": 405,
"classjob": -1
},
{
"id": 2403,
"name": "Eyes For You",
"icon": 405,
"classjob": -1
},
{
"id": 2404,
"name": "Head Over Heels",
"icon": 405,
"classjob": -1
},
{
"id": 2405,
"name": "In Sickness And In Health",
"icon": 405,
"classjob": -1
},
{
"id": 2406,
"name": "Desolation",
"icon": 405,
"classjob": -1
},
{
"id": 2407,
"name": "Terror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 2408,
"name": "Spiral Spin",
"icon": 405,
"classjob": -1
},
{
"id": 2409,
"name": "Desolation",
"icon": 405,
"classjob": -1
},
{
"id": 2410,
"name": "Level X Petrify",
"icon": 405,
"classjob": -1
},
{
"id": 2411,
"name": "Stone",
"icon": 403,
"classjob": -1
},
{
"id": 2412,
"name": "Grim Fate",
"icon": 405,
"classjob": -1
},
{
"id": 2413,
"name": "Heartburn",
"icon": 405,
"classjob": -1
},
{
"id": 2414,
"name": "Elbow Drop",
"icon": 405,
"classjob": -1
},
{
"id": 2415,
"name": "Double Smash",
"icon": 405,
"classjob": -1
},
{
"id": 2416,
"name": "100-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 2417,
"name": "100-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 2418,
"name": "Glower",
"icon": 405,
"classjob": -1
},
{
"id": 2419,
"name": "Eye Of The Beholder",
"icon": 405,
"classjob": -1
},
{
"id": 2420,
"name": "Burning Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 2421,
"name": "Levinshower",
"icon": 405,
"classjob": -1
},
{
"id": 2422,
"name": "Bad Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2423,
"name": "Vine Probe",
"icon": 405,
"classjob": -1
},
{
"id": 2424,
"name": "Boulder Clap",
"icon": 405,
"classjob": -1
},
{
"id": 2425,
"name": "Rockslide",
"icon": 405,
"classjob": -1
},
{
"id": 2426,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 2427,
"name": "Petribreath",
"icon": 405,
"classjob": -1
},
{
"id": 2428,
"name": "Numbing Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2429,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2430,
"name": "Terror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 2431,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2432,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2433,
"name": "Sweet Steel",
"icon": 405,
"classjob": -1
},
{
"id": 2434,
"name": "Magitek Cannon",
"icon": 64161,
"classjob": 0
},
{
"id": 2435,
"name": "Photon Stream",
"icon": 64162,
"classjob": 0
},
{
"id": 2436,
"name": "Fiery Breath",
"icon": 64163,
"classjob": 0
},
{
"id": 2437,
"name": "Sneeze",
"icon": 64164,
"classjob": 0
},
{
"id": 2438,
"name": "Aura Curtain",
"icon": 405,
"classjob": -1
},
{
"id": 2439,
"name": "Cavatina",
"icon": 405,
"classjob": -1
},
{
"id": 2440,
"name": "Cavatina",
"icon": 405,
"classjob": -1
},
{
"id": 2441,
"name": "Curtain Call",
"icon": 405,
"classjob": -1
},
{
"id": 2442,
"name": "Diamond Dust",
"icon": 405,
"classjob": -1
},
{
"id": 2443,
"name": "Toad Breath",
"icon": 61115,
"classjob": 0
},
{
"id": 2444,
"name": "Void Fire II",
"icon": 452,
"classjob": -1
},
{
"id": 2445,
"name": "Salivous Snap",
"icon": 405,
"classjob": -1
},
{
"id": 2446,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2447,
"name": "Oculus",
"icon": 405,
"classjob": -1
},
{
"id": 2448,
"name": "Low Peal",
"icon": 405,
"classjob": -1
},
{
"id": 2449,
"name": "Deep Chill",
"icon": 405,
"classjob": -1
},
{
"id": 2450,
"name": "Inner Demons",
"icon": 405,
"classjob": -1
},
{
"id": 2451,
"name": "Frost Blade",
"icon": 405,
"classjob": -1
},
{
"id": 2452,
"name": "Melt",
"icon": 405,
"classjob": -1
},
{
"id": 2453,
"name": "Frost Staff",
"icon": 405,
"classjob": -1
},
{
"id": 2454,
"name": "Icebrand",
"icon": 405,
"classjob": -1
},
{
"id": 2455,
"name": "Hailstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2456,
"name": "Hailstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2457,
"name": "Permafrost",
"icon": 405,
"classjob": -1
},
{
"id": 2458,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2459,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2460,
"name": "Absolute Zero",
"icon": 405,
"classjob": -1
},
{
"id": 2461,
"name": "Dreams Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 2462,
"name": "Icicle Impact",
"icon": 405,
"classjob": -1
},
{
"id": 2463,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2464,
"name": "Heavenly Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2465,
"name": "Glacier Bash",
"icon": 405,
"classjob": -1
},
{
"id": 2466,
"name": "Diamond Dust",
"icon": 405,
"classjob": -1
},
{
"id": 2467,
"name": "透明：シヴァ：凍結レクト：ノックバック用",
"icon": 405,
"classjob": -1
},
{
"id": 2468,
"name": "Whiteout",
"icon": 405,
"classjob": -1
},
{
"id": 2475,
"name": "Brackish Rain",
"icon": 405,
"classjob": -1
},
{
"id": 2476,
"name": "Brackish Drop",
"icon": 405,
"classjob": -1
},
{
"id": 2477,
"name": "Hatch",
"icon": 405,
"classjob": -1
},
{
"id": 2478,
"name": "Wings Of Woe",
"icon": 405,
"classjob": -1
},
{
"id": 2479,
"name": "Flounder",
"icon": 405,
"classjob": -1
},
{
"id": 2480,
"name": "Big Scissors",
"icon": 405,
"classjob": -1
},
{
"id": 2481,
"name": "Bubble Bath",
"icon": 405,
"classjob": -1
},
{
"id": 2482,
"name": "Final Sting",
"icon": 405,
"classjob": -1
},
{
"id": 2484,
"name": "Bloody Caress",
"icon": 405,
"classjob": -1
},
{
"id": 2485,
"name": "Thorn Whip",
"icon": 405,
"classjob": -1
},
{
"id": 2486,
"name": "Thorn Whip",
"icon": 405,
"classjob": -1
},
{
"id": 2487,
"name": "Briary Growth",
"icon": 405,
"classjob": -1
},
{
"id": 2488,
"name": "Floral Trap",
"icon": 405,
"classjob": -1
},
{
"id": 2489,
"name": "Devour",
"icon": 405,
"classjob": -1
},
{
"id": 2490,
"name": "Spit",
"icon": 405,
"classjob": -1
},
{
"id": 2491,
"name": "Spit",
"icon": 405,
"classjob": -1
},
{
"id": 2492,
"name": "Viscid Emission",
"icon": 405,
"classjob": -1
},
{
"id": 2493,
"name": "Blighted Bouquet",
"icon": 405,
"classjob": -1
},
{
"id": 2494,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2495,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2496,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2497,
"name": "Swarm",
"icon": 405,
"classjob": -1
},
{
"id": 2498,
"name": "Acid Rain",
"icon": 405,
"classjob": -1
},
{
"id": 2499,
"name": "Acid Rain",
"icon": 405,
"classjob": -1
},
{
"id": 2500,
"name": "Rotten Stench",
"icon": 405,
"classjob": -1
},
{
"id": 2501,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2502,
"name": "Sharp Sting",
"icon": 405,
"classjob": -1
},
{
"id": 2503,
"name": "Terminal Sting",
"icon": 405,
"classjob": -1
},
{
"id": 2504,
"name": "Acid Spray",
"icon": 405,
"classjob": -1
},
{
"id": 2505,
"name": "Acid Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 2506,
"name": "Acid Ooze",
"icon": 405,
"classjob": -1
},
{
"id": 2507,
"name": "Tail Slap",
"icon": 405,
"classjob": -1
},
{
"id": 2508,
"name": "Red Lotus Blade",
"icon": 405,
"classjob": -1
},
{
"id": 2509,
"name": "Circle Of Flames",
"icon": 405,
"classjob": -1
},
{
"id": 2510,
"name": "Circle Blade",
"icon": 405,
"classjob": -1
},
{
"id": 2511,
"name": "Cursed Voice",
"icon": 405,
"classjob": -1
},
{
"id": 2512,
"name": "Petrifying Voice",
"icon": 405,
"classjob": -1
},
{
"id": 2513,
"name": "Hysteric Smash",
"icon": 405,
"classjob": -1
},
{
"id": 2514,
"name": "Cursed Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 2515,
"name": "Petrifying Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 2516,
"name": "Petrifaction",
"icon": 405,
"classjob": -1
},
{
"id": 2517,
"name": "Venomous Tail",
"icon": 405,
"classjob": -1
},
{
"id": 2518,
"name": "Venomous Tail",
"icon": 405,
"classjob": -1
},
{
"id": 2519,
"name": "Tail Slap",
"icon": 405,
"classjob": -1
},
{
"id": 2520,
"name": "Circle Blade",
"icon": 405,
"classjob": -1
},
{
"id": 2521,
"name": "Bravery",
"icon": 405,
"classjob": -1
},
{
"id": 2522,
"name": "Shot",
"icon": 405,
"classjob": -1
},
{
"id": 2523,
"name": "Aimed Shot",
"icon": 405,
"classjob": -1
},
{
"id": 2524,
"name": "Arrow Deluge",
"icon": 405,
"classjob": -1
},
{
"id": 2525,
"name": "Dark Sphere",
"icon": 405,
"classjob": -1
},
{
"id": 2526,
"name": "Petrifaction",
"icon": 405,
"classjob": -1
},
{
"id": 2527,
"name": "Terror Sphere",
"icon": 405,
"classjob": -1
},
{
"id": 2528,
"name": "Frenzy",
"icon": 405,
"classjob": -1
},
{
"id": 2529,
"name": "Sacrifice",
"icon": 405,
"classjob": -1
},
{
"id": 2530,
"name": "Discipline",
"icon": 405,
"classjob": -1
},
{
"id": 2531,
"name": "Discipline",
"icon": 405,
"classjob": -1
},
{
"id": 2532,
"name": "Discipline",
"icon": 405,
"classjob": -1
},
{
"id": 2533,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2534,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2535,
"name": "Diffusion Ray",
"icon": 405,
"classjob": -1
},
{
"id": 2536,
"name": "Brainjack",
"icon": 405,
"classjob": -1
},
{
"id": 2537,
"name": "Allagan Field",
"icon": 405,
"classjob": -1
},
{
"id": 2538,
"name": "Critical Surge",
"icon": 405,
"classjob": -1
},
{
"id": 2539,
"name": "Gaseous Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 2540,
"name": "Homing Missile",
"icon": 405,
"classjob": -1
},
{
"id": 2541,
"name": "Atomic Ray",
"icon": 405,
"classjob": -1
},
{
"id": 2542,
"name": "Inertia Stream",
"icon": 405,
"classjob": -1
},
{
"id": 2543,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 2544,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 2545,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 2546,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 2547,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 2548,
"name": "Life Drain",
"icon": 405,
"classjob": -1
},
{
"id": 2549,
"name": "Defensive Reaction",
"icon": 405,
"classjob": -1
},
{
"id": 2550,
"name": "Disruption Wave",
"icon": 405,
"classjob": -1
},
{
"id": 2551,
"name": "Triggered Landmine",
"icon": 405,
"classjob": -1
},
{
"id": 2552,
"name": "Landmine Auto-detonation",
"icon": 405,
"classjob": -1
},
{
"id": 2553,
"name": "Rotoswipe",
"icon": 405,
"classjob": -1
},
{
"id": 2554,
"name": "Flamethrower",
"icon": 405,
"classjob": -1
},
{
"id": 2555,
"name": "Ravensclaw",
"icon": 405,
"classjob": -1
},
{
"id": 2556,
"name": "Ravensbeak",
"icon": 405,
"classjob": -1
},
{
"id": 2557,
"name": "Raven's Ascent",
"icon": 405,
"classjob": -1
},
{
"id": 2558,
"name": "Iron Chariot",
"icon": 405,
"classjob": -1
},
{
"id": 2559,
"name": "Lunar Dynamo",
"icon": 405,
"classjob": -1
},
{
"id": 2560,
"name": "Dalamud Dive",
"icon": 405,
"classjob": -1
},
{
"id": 2561,
"name": "Raven Dive",
"icon": 405,
"classjob": -1
},
{
"id": 2562,
"name": "Meteor Stream",
"icon": 405,
"classjob": -1
},
{
"id": 2563,
"name": "Thermionic Beam",
"icon": 405,
"classjob": -1
},
{
"id": 2564,
"name": "Stardust",
"icon": 405,
"classjob": -1
},
{
"id": 2565,
"name": "Bahamut's Claw",
"icon": 405,
"classjob": -1
},
{
"id": 2566,
"name": "Super Nova",
"icon": 405,
"classjob": -1
},
{
"id": 2567,
"name": "Universal Gravitation",
"icon": 405,
"classjob": -1
},
{
"id": 2568,
"name": "Binding Coil",
"icon": 405,
"classjob": -1
},
{
"id": 2569,
"name": "Asphyxiation",
"icon": 405,
"classjob": -1
},
{
"id": 2570,
"name": "Heavensfall",
"icon": 405,
"classjob": -1
},
{
"id": 2571,
"name": "Thermionic Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2572,
"name": "Bahamut's Favor",
"icon": 405,
"classjob": -1
},
{
"id": 2573,
"name": "Megaflare",
"icon": 405,
"classjob": -1
},
{
"id": 2574,
"name": "Megaflare",
"icon": 405,
"classjob": -1
},
{
"id": 2575,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 2576,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 2577,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 2578,
"name": "Debris Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2579,
"name": "Stone Skull",
"icon": 405,
"classjob": -1
},
{
"id": 2580,
"name": "Boulder Clap",
"icon": 405,
"classjob": -1
},
{
"id": 2581,
"name": "Demolish",
"icon": 405,
"classjob": -1
},
{
"id": 2582,
"name": "Earthen Heart",
"icon": 405,
"classjob": -1
},
{
"id": 2583,
"name": "Heavy Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2584,
"name": "Heavy Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2585,
"name": "Heavy Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2586,
"name": "Heavy Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2587,
"name": "Earthshock",
"icon": 405,
"classjob": -1
},
{
"id": 2588,
"name": "Magnetism",
"icon": 405,
"classjob": -1
},
{
"id": 2589,
"name": "Ball Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 2590,
"name": "Deadly Drive",
"icon": 405,
"classjob": -1
},
{
"id": 2591,
"name": "Binding Chain",
"icon": 405,
"classjob": -1
},
{
"id": 2592,
"name": "Neurolink Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2593,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 2594,
"name": "Iceball",
"icon": 405,
"classjob": -1
},
{
"id": 2595,
"name": "Chain Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 2596,
"name": "Chain Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 2597,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 2598,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 2599,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 2600,
"name": "Heavensfall",
"icon": 405,
"classjob": -1
},
{
"id": 2601,
"name": "Seedvolley",
"icon": 405,
"classjob": -1
},
{
"id": 2602,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2603,
"name": "The Ram's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 2604,
"name": "The Dragon's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 2605,
"name": "Hood Swing",
"icon": 405,
"classjob": -1
},
{
"id": 2606,
"name": "Whip Back",
"icon": 405,
"classjob": -1
},
{
"id": 2607,
"name": "Regorge",
"icon": 405,
"classjob": -1
},
{
"id": 2608,
"name": "Gust",
"icon": 405,
"classjob": -1
},
{
"id": 2609,
"name": "Shot",
"icon": 405,
"classjob": -1
},
{
"id": 2610,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 2611,
"name": "Pulse Transmission",
"icon": 405,
"classjob": -1
},
{
"id": 2612,
"name": "透明：メテオ核予兆/小：バハムートダンジョン2/Trash",
"icon": 405,
"classjob": -1
},
{
"id": 2613,
"name": "透明：メテオ核予兆/大：バハムートダンジョン2/Trash",
"icon": 405,
"classjob": -1
},
{
"id": 2615,
"name": "Low Voltage",
"icon": 405,
"classjob": -1
},
{
"id": 2616,
"name": "Object 130",
"icon": 405,
"classjob": -1
},
{
"id": 2617,
"name": "Auto-cannons",
"icon": 405,
"classjob": -1
},
{
"id": 2618,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 2619,
"name": "Infatuation",
"icon": 405,
"classjob": -1
},
{
"id": 2620,
"name": "Saturate",
"icon": 61113,
"classjob": 0
},
{
"id": 2622,
"name": "Ram",
"icon": 405,
"classjob": -1
},
{
"id": 2623,
"name": "Teary Twirl",
"icon": 405,
"classjob": -1
},
{
"id": 2624,
"name": "Pluck And Prune",
"icon": 405,
"classjob": -1
},
{
"id": 2625,
"name": "Pungent Pirouette",
"icon": 405,
"classjob": -1
},
{
"id": 2626,
"name": "Heirloom Scream",
"icon": 405,
"classjob": -1
},
{
"id": 2627,
"name": "Pollen",
"icon": 405,
"classjob": -1
},
{
"id": 2628,
"name": "Mystery Waltz",
"icon": 405,
"classjob": -1
},
{
"id": 2630,
"name": "Cannonfire",
"icon": 61111,
"classjob": 0
},
{
"id": 2631,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 2632,
"name": "透明：2014夏祭り花火",
"icon": 405,
"classjob": -1
},
{
"id": 2635,
"name": "Shock Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2636,
"name": "Thunderspark",
"icon": 405,
"classjob": -1
},
{
"id": 2637,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2638,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2639,
"name": "Thunderstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2640,
"name": "Judgment Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 2641,
"name": "Chaotic Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2642,
"name": "Rolling Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 2643,
"name": "Thunderbolt",
"icon": 405,
"classjob": -1
},
{
"id": 2644,
"name": "Increased Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 2645,
"name": "A Realm Reborn",
"icon": 405,
"classjob": 0
},
{
"id": 2647,
"name": "Flying Frenzy",
"icon": 405,
"classjob": -1
},
{
"id": 2648,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 2649,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 2650,
"name": "Earthen Heart",
"icon": 405,
"classjob": -1
},
{
"id": 2651,
"name": "Poison Dust",
"icon": 405,
"classjob": -1
},
{
"id": 2652,
"name": "Dark Orb",
"icon": 405,
"classjob": -1
},
{
"id": 2653,
"name": "Dark Dome",
"icon": 405,
"classjob": -1
},
{
"id": 2654,
"name": "Condemnation",
"icon": 405,
"classjob": -1
},
{
"id": 2655,
"name": "Condemnation",
"icon": 405,
"classjob": -1
},
{
"id": 2656,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 2657,
"name": "Mark Of Pain",
"icon": 405,
"classjob": -1
},
{
"id": 2658,
"name": "Death Ray",
"icon": 405,
"classjob": -1
},
{
"id": 2659,
"name": "Hex Eye",
"icon": 405,
"classjob": -1
},
{
"id": 2660,
"name": "Catharsis",
"icon": 405,
"classjob": -1
},
{
"id": 2661,
"name": "Golden Tongue",
"icon": 405,
"classjob": -1
},
{
"id": 2662,
"name": "Claw",
"icon": 405,
"classjob": -1
},
{
"id": 2663,
"name": "Bad-mouth",
"icon": 405,
"classjob": -1
},
{
"id": 2664,
"name": "Kick And Scream",
"icon": 405,
"classjob": -1
},
{
"id": 2665,
"name": "Kick And Scream",
"icon": 405,
"classjob": -1
},
{
"id": 2666,
"name": "Sticky Web",
"icon": 405,
"classjob": -1
},
{
"id": 2667,
"name": "Caustic Spray",
"icon": 405,
"classjob": -1
},
{
"id": 2668,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 2669,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 2670,
"name": "Realm Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 2671,
"name": "Silkscreen",
"icon": 405,
"classjob": -1
},
{
"id": 2672,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 2673,
"name": "Hammer Beak",
"icon": 405,
"classjob": -1
},
{
"id": 2674,
"name": "Petribreath",
"icon": 405,
"classjob": -1
},
{
"id": 2675,
"name": "Numbing Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2676,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2677,
"name": "Slumber Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2678,
"name": "10,000 Needles",
"icon": 405,
"classjob": -1
},
{
"id": 2679,
"name": "20,000 Needles",
"icon": 405,
"classjob": -1
},
{
"id": 2680,
"name": "30,000 Needles",
"icon": 405,
"classjob": -1
},
{
"id": 2681,
"name": "Microblaster",
"icon": 405,
"classjob": -1
},
{
"id": 2682,
"name": "Charged Whisker",
"icon": 405,
"classjob": -1
},
{
"id": 2683,
"name": "Petrifying Eye",
"icon": 405,
"classjob": -1
},
{
"id": 2684,
"name": "Petriblaster",
"icon": 405,
"classjob": -1
},
{
"id": 2685,
"name": "Stone Cold",
"icon": 405,
"classjob": -1
},
{
"id": 2686,
"name": "Megablaster",
"icon": 405,
"classjob": -1
},
{
"id": 2687,
"name": "Levinshower",
"icon": 405,
"classjob": -1
},
{
"id": 2688,
"name": "Levinfang",
"icon": 405,
"classjob": -1
},
{
"id": 2689,
"name": "Electrify",
"icon": 405,
"classjob": -1
},
{
"id": 2690,
"name": "Electrify",
"icon": 405,
"classjob": -1
},
{
"id": 2692,
"name": "Terror Touch",
"icon": 405,
"classjob": -1
},
{
"id": 2693,
"name": "Paralyze III",
"icon": 405,
"classjob": -1
},
{
"id": 2694,
"name": "Tornado",
"icon": 405,
"classjob": -1
},
{
"id": 2695,
"name": "Spinning Kick",
"icon": 405,
"classjob": -1
},
{
"id": 2696,
"name": "Groundburst",
"icon": 405,
"classjob": -1
},
{
"id": 2697,
"name": "Gravity Force",
"icon": 405,
"classjob": -1
},
{
"id": 2698,
"name": "Drench",
"icon": 405,
"classjob": -1
},
{
"id": 2699,
"name": "Douse",
"icon": 405,
"classjob": -1
},
{
"id": 2700,
"name": "Douse",
"icon": 405,
"classjob": -1
},
{
"id": 2701,
"name": "Scale Ripple",
"icon": 405,
"classjob": -1
},
{
"id": 2702,
"name": "Scale Ripple",
"icon": 405,
"classjob": -1
},
{
"id": 2703,
"name": "Counter Maneuvers",
"icon": 405,
"classjob": -1
},
{
"id": 2704,
"name": "Counter Maneuvers",
"icon": 405,
"classjob": -1
},
{
"id": 2705,
"name": "Shred",
"icon": 405,
"classjob": -1
},
{
"id": 2706,
"name": "The Hand",
"icon": 405,
"classjob": -1
},
{
"id": 2707,
"name": "Shred",
"icon": 405,
"classjob": -1
},
{
"id": 2708,
"name": "The Hand",
"icon": 405,
"classjob": -1
},
{
"id": 2710,
"name": "Bubble Shower",
"icon": 405,
"classjob": -1
},
{
"id": 2711,
"name": "Big Scissors",
"icon": 405,
"classjob": -1
},
{
"id": 2712,
"name": "Bubble Bath",
"icon": 405,
"classjob": -1
},
{
"id": 2713,
"name": "Crab Dribble",
"icon": 405,
"classjob": -1
},
{
"id": 2715,
"name": "Lateral Slash",
"icon": 405,
"classjob": -1
},
{
"id": 2716,
"name": "Sharpened Knife",
"icon": 405,
"classjob": -1
},
{
"id": 2717,
"name": "The Scourge Of Nym",
"icon": 405,
"classjob": -1
},
{
"id": 2718,
"name": "Throat Stab",
"icon": 405,
"classjob": -1
},
{
"id": 2719,
"name": "Whetstone",
"icon": 405,
"classjob": -1
},
{
"id": 2720,
"name": "Transonic Blast",
"icon": 405,
"classjob": -1
},
{
"id": 2721,
"name": "Flying Frenzy",
"icon": 405,
"classjob": -1
},
{
"id": 2722,
"name": "Breath Wing",
"icon": 405,
"classjob": -1
},
{
"id": 2723,
"name": "Sonic Storm",
"icon": 405,
"classjob": -1
},
{
"id": 2724,
"name": "Sonic Boom",
"icon": 405,
"classjob": -1
},
{
"id": 2725,
"name": "Rake",
"icon": 405,
"classjob": -1
},
{
"id": 2726,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2727,
"name": "Swinge",
"icon": 405,
"classjob": -1
},
{
"id": 2728,
"name": "Stagnant Spray",
"icon": 405,
"classjob": -1
},
{
"id": 2729,
"name": "Nightmarish Light",
"icon": 405,
"classjob": -1
},
{
"id": 2730,
"name": "Peculiar Light",
"icon": 405,
"classjob": -1
},
{
"id": 2731,
"name": "Bog Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 2732,
"name": "Wild Rattle",
"icon": 405,
"classjob": -1
},
{
"id": 2733,
"name": "Dripping Fang",
"icon": 405,
"classjob": -1
},
{
"id": 2734,
"name": "Stone Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 2735,
"name": "Hood Swing",
"icon": 405,
"classjob": -1
},
{
"id": 2736,
"name": "Whip Back",
"icon": 405,
"classjob": -1
},
{
"id": 2737,
"name": "Regorge",
"icon": 405,
"classjob": -1
},
{
"id": 2738,
"name": "Steel Scales",
"icon": 405,
"classjob": -1
},
{
"id": 2739,
"name": "Disseminate",
"icon": 405,
"classjob": -1
},
{
"id": 2740,
"name": "Canopy",
"icon": 405,
"classjob": -1
},
{
"id": 2741,
"name": "Arboreal Storm",
"icon": 405,
"classjob": -1
},
{
"id": 2742,
"name": "Acorn Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 2743,
"name": "Backhand Blow",
"icon": 405,
"classjob": -1
},
{
"id": 2744,
"name": "Rise And Fall",
"icon": 405,
"classjob": -1
},
{
"id": 2746,
"name": "Mind Blast",
"icon": 405,
"classjob": -1
},
{
"id": 2747,
"name": "Mind Melt",
"icon": 405,
"classjob": -1
},
{
"id": 2748,
"name": "Tornado",
"icon": 405,
"classjob": -1
},
{
"id": 2750,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 2751,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 2752,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 2753,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 2754,
"name": "Hundred Lashings",
"icon": 405,
"classjob": -1
},
{
"id": 2755,
"name": "Bloody Caress",
"icon": 405,
"classjob": -1
},
{
"id": 2756,
"name": "Gold Dust",
"icon": 405,
"classjob": -1
},
{
"id": 2757,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2758,
"name": "Viscid Emission",
"icon": 405,
"classjob": -1
},
{
"id": 2759,
"name": "Bombination",
"icon": 405,
"classjob": -1
},
{
"id": 2760,
"name": "Whipcrack",
"icon": 405,
"classjob": -1
},
{
"id": 2761,
"name": "Aero Blast",
"icon": 405,
"classjob": -1
},
{
"id": 2762,
"name": "Stormwind",
"icon": 405,
"classjob": -1
},
{
"id": 2763,
"name": "Eerie Soundwave",
"icon": 405,
"classjob": -1
},
{
"id": 2764,
"name": "Plague Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 2765,
"name": "Corrosive Gale",
"icon": 405,
"classjob": -1
},
{
"id": 2766,
"name": "10-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 2767,
"name": "10-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 2768,
"name": "100-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 2769,
"name": "100-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 2770,
"name": "Glower",
"icon": 405,
"classjob": -1
},
{
"id": 2771,
"name": "Eye Of The Beholder",
"icon": 405,
"classjob": -1
},
{
"id": 2772,
"name": "1000-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 2773,
"name": "Predatorial Instinct",
"icon": 405,
"classjob": -1
},
{
"id": 2776,
"name": "Dissever",
"icon": 405,
"classjob": -1
},
{
"id": 2777,
"name": "White Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2778,
"name": "Ball Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 2779,
"name": "Ball Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 2780,
"name": "Triumvirate",
"icon": 405,
"classjob": -1
},
{
"id": 2781,
"name": "Mean Thrash",
"icon": 405,
"classjob": -1
},
{
"id": 2782,
"name": "Fear Itself",
"icon": 405,
"classjob": -1
},
{
"id": 2783,
"name": "Stone Skull",
"icon": 405,
"classjob": -1
},
{
"id": 2784,
"name": "Boulder Clap",
"icon": 405,
"classjob": -1
},
{
"id": 2785,
"name": "True Grit",
"icon": 405,
"classjob": -1
},
{
"id": 2786,
"name": "Plaincracker",
"icon": 405,
"classjob": -1
},
{
"id": 2787,
"name": "Obliterate",
"icon": 405,
"classjob": -1
},
{
"id": 2788,
"name": "Rockslide",
"icon": 405,
"classjob": -1
},
{
"id": 2789,
"name": "Earthen Heart",
"icon": 405,
"classjob": -1
},
{
"id": 2790,
"name": "Magnetism",
"icon": 405,
"classjob": -1
},
{
"id": 2791,
"name": "Sand Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2792,
"name": "Sandstorm",
"icon": 405,
"classjob": -1
},
{
"id": 2793,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2794,
"name": "Earthquake",
"icon": 405,
"classjob": -1
},
{
"id": 2795,
"name": "Sand Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 2796,
"name": "Bottomless Desert",
"icon": 405,
"classjob": -1
},
{
"id": 2797,
"name": "Sand Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 2798,
"name": "Beatdown",
"icon": 405,
"classjob": -1
},
{
"id": 2799,
"name": "Inhale",
"icon": 405,
"classjob": -1
},
{
"id": 2800,
"name": "Moldy Sneeze",
"icon": 405,
"classjob": -1
},
{
"id": 2801,
"name": "Sickly Sneeze",
"icon": 405,
"classjob": -1
},
{
"id": 2802,
"name": "Moldy Phlegm",
"icon": 405,
"classjob": -1
},
{
"id": 2803,
"name": "Goobbue's Grief",
"icon": 405,
"classjob": -1
},
{
"id": 2804,
"name": "Attractant",
"icon": 405,
"classjob": -1
},
{
"id": 2805,
"name": "Sticky Tongue",
"icon": 405,
"classjob": -1
},
{
"id": 2806,
"name": "Solidifying Secretion",
"icon": 405,
"classjob": -1
},
{
"id": 2807,
"name": "Lethal Lap",
"icon": 405,
"classjob": -1
},
{
"id": 2808,
"name": "Lap",
"icon": 405,
"classjob": -1
},
{
"id": 2809,
"name": "Labored Leap",
"icon": 405,
"classjob": -1
},
{
"id": 2810,
"name": "Vasoconstrictor",
"icon": 405,
"classjob": -1
},
{
"id": 2811,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 2812,
"name": "Heat Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2813,
"name": "Tail Smash",
"icon": 405,
"classjob": -1
},
{
"id": 2814,
"name": "Deadly Hold",
"icon": 405,
"classjob": -1
},
{
"id": 2815,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 2816,
"name": "Pulverizing Pound",
"icon": 405,
"classjob": -1
},
{
"id": 2817,
"name": "Horrisonous Blast",
"icon": 405,
"classjob": -1
},
{
"id": 2818,
"name": "Seismic Rift",
"icon": 405,
"classjob": -1
},
{
"id": 2819,
"name": "Khoomii",
"icon": 405,
"classjob": -1
},
{
"id": 2820,
"name": "Sonorous Blast",
"icon": 405,
"classjob": -1
},
{
"id": 2822,
"name": "Encierro",
"icon": 405,
"classjob": -1
},
{
"id": 2823,
"name": "Devil Eye",
"icon": 405,
"classjob": -1
},
{
"id": 2824,
"name": "Petrifaction",
"icon": 405,
"classjob": -1
},
{
"id": 2825,
"name": "Bull Charge",
"icon": 405,
"classjob": -1
},
{
"id": 2826,
"name": "Cold Stare",
"icon": 405,
"classjob": -1
},
{
"id": 2827,
"name": "Jettatura",
"icon": 405,
"classjob": -1
},
{
"id": 2828,
"name": "Bestial Roar",
"icon": 405,
"classjob": -1
},
{
"id": 2829,
"name": "Mow",
"icon": 405,
"classjob": -1
},
{
"id": 2830,
"name": "Triclip",
"icon": 405,
"classjob": -1
},
{
"id": 2831,
"name": "Frightful Roar",
"icon": 405,
"classjob": -1
},
{
"id": 2832,
"name": "Mortal Ray",
"icon": 405,
"classjob": -1
},
{
"id": 2833,
"name": "Salivous Snap",
"icon": 405,
"classjob": -1
},
{
"id": 2834,
"name": "Dragon Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2835,
"name": "Granite Rain",
"icon": 405,
"classjob": -1
},
{
"id": 2836,
"name": "Toxic Vomit",
"icon": 405,
"classjob": -1
},
{
"id": 2837,
"name": "Evil Eye",
"icon": 405,
"classjob": -1
},
{
"id": 2839,
"name": "Grand Sword",
"icon": 405,
"classjob": -1
},
{
"id": 2840,
"name": "Grand Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2841,
"name": "System Evaluation",
"icon": 405,
"classjob": -1
},
{
"id": 2842,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 2843,
"name": "Overheat",
"icon": 405,
"classjob": -1
},
{
"id": 2844,
"name": "Exhaust",
"icon": 405,
"classjob": -1
},
{
"id": 2845,
"name": "Plasma Field",
"icon": 405,
"classjob": -1
},
{
"id": 2846,
"name": "Plasma Field",
"icon": 405,
"classjob": -1
},
{
"id": 2847,
"name": "Void Fire",
"icon": 405,
"classjob": -1
},
{
"id": 2848,
"name": "Void Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 2849,
"name": "Void Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 2850,
"name": "Void Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 2851,
"name": "Void Thunder II",
"icon": 405,
"classjob": -1
},
{
"id": 2852,
"name": "Void Thunder III",
"icon": 405,
"classjob": -1
},
{
"id": 2853,
"name": "Void Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 2854,
"name": "Void Blizzard II",
"icon": 405,
"classjob": -1
},
{
"id": 2855,
"name": "Void Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 2856,
"name": "Countershot",
"icon": 405,
"classjob": -1
},
{
"id": 2862,
"name": "Void Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 2864,
"name": "Rook Autoturret",
"icon": 3026,
"classjob": 31
},
{
"id": 2865,
"name": "Bishop Autoturret",
"icon": 3027,
"classjob": 31
},
{
"id": 2866,
"name": "Split Shot",
"icon": 3001,
"classjob": 31
},
{
"id": 2867,
"name": "Reload",
"icon": 3019,
"classjob": 31
},
{
"id": 2868,
"name": "Slug Shot",
"icon": 3002,
"classjob": 31
},
{
"id": 2869,
"name": "Lead Shot",
"icon": 3006,
"classjob": 31
},
{
"id": 2870,
"name": "Spread Shot",
"icon": 3014,
"classjob": 31
},
{
"id": 2871,
"name": "Grenado Shot",
"icon": 3015,
"classjob": 31
},
{
"id": 2872,
"name": "Hot Shot",
"icon": 3003,
"classjob": 31
},
{
"id": 2873,
"name": "Clean Shot",
"icon": 3004,
"classjob": 31
},
{
"id": 2874,
"name": "Gauss Round",
"icon": 3005,
"classjob": 31
},
{
"id": 2875,
"name": "Heartbreak",
"icon": 3007,
"classjob": 31
},
{
"id": 2876,
"name": "Reassemble",
"icon": 3022,
"classjob": 31
},
{
"id": 2877,
"name": "Leg Graze",
"icon": 3013,
"classjob": 31
},
{
"id": 2878,
"name": "Wildfire",
"icon": 3018,
"classjob": 31
},
{
"id": 2879,
"name": "Quick Reload",
"icon": 3020,
"classjob": 31
},
{
"id": 2880,
"name": "Gauss Barrel",
"icon": 3021,
"classjob": 31
},
{
"id": 2881,
"name": "Rapid Fire",
"icon": 3023,
"classjob": 31
},
{
"id": 2882,
"name": "Rend Mind",
"icon": 3010,
"classjob": 31
},
{
"id": 2883,
"name": "Suppressive Fire",
"icon": 3008,
"classjob": 31
},
{
"id": 2884,
"name": "Foot Graze",
"icon": 3012,
"classjob": 31
},
{
"id": 2885,
"name": "Hypercharge",
"icon": 3024,
"classjob": 31
},
{
"id": 2886,
"name": "Head Graze",
"icon": 3009,
"classjob": 31
},
{
"id": 2887,
"name": "Dismantle",
"icon": 3011,
"classjob": 31
},
{
"id": 2888,
"name": "Blank",
"icon": 3016,
"classjob": 31
},
{
"id": 2889,
"name": "Promotion",
"icon": 3025,
"classjob": 31
},
{
"id": 2890,
"name": "Ricochet",
"icon": 3017,
"classjob": 31
},
{
"id": 2891,
"name": "Volley Fire",
"icon": 405,
"classjob": -1
},
{
"id": 2892,
"name": "Aether Mortar",
"icon": 405,
"classjob": -1
},
{
"id": 2893,
"name": "Ossify",
"icon": 405,
"classjob": -1
},
{
"id": 2894,
"name": "Eternity Ring",
"icon": 405,
"classjob": 0
},
{
"id": 2895,
"name": "Rotting Bandages",
"icon": 405,
"classjob": -1
},
{
"id": 2897,
"name": "Sandblast",
"icon": 405,
"classjob": -1
},
{
"id": 2898,
"name": "Desert Storm",
"icon": 405,
"classjob": -1
},
{
"id": 2899,
"name": "Dust To Dust",
"icon": 405,
"classjob": -1
},
{
"id": 2900,
"name": "Iron Pike",
"icon": 405,
"classjob": -1
},
{
"id": 2901,
"name": "Crackle Hiss",
"icon": 405,
"classjob": -1
},
{
"id": 2902,
"name": "Critical Rip",
"icon": 405,
"classjob": -1
},
{
"id": 2903,
"name": "Spike Flail",
"icon": 405,
"classjob": -1
},
{
"id": 2904,
"name": "Erratic Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 2905,
"name": "Erratic Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 2906,
"name": "Electrification",
"icon": 405,
"classjob": -1
},
{
"id": 2907,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 2908,
"name": "Electric Shock",
"icon": 405,
"classjob": -1
},
{
"id": 2909,
"name": "Electrocharge",
"icon": 405,
"classjob": -1
},
{
"id": 2910,
"name": "Electric Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2911,
"name": "Heat Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 2912,
"name": "Heat Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 2913,
"name": "Cyclonic Chaos",
"icon": 405,
"classjob": -1
},
{
"id": 2914,
"name": "Cyclonic Chaos",
"icon": 405,
"classjob": -1
},
{
"id": 2915,
"name": "Electric Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2916,
"name": "Crackle Hiss",
"icon": 405,
"classjob": -1
},
{
"id": 2917,
"name": "Spike Flail",
"icon": 405,
"classjob": -1
},
{
"id": 2918,
"name": "Erratic Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 2919,
"name": "Erratic Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 2920,
"name": "Static Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 2921,
"name": "Electric Burst",
"icon": 405,
"classjob": -1
},
{
"id": 2922,
"name": "(仮)ティアマット：メカハイドラ：オートアタック：バハムートダンジョン3",
"icon": 405,
"classjob": -1
},
{
"id": 2923,
"name": "Resonance",
"icon": 405,
"classjob": -1
},
{
"id": 2924,
"name": "Nerve Gas",
"icon": 405,
"classjob": -1
},
{
"id": 2925,
"name": "Nerve Gas",
"icon": 405,
"classjob": -1
},
{
"id": 2926,
"name": "Nerve Gas",
"icon": 405,
"classjob": -1
},
{
"id": 2927,
"name": "Barofield",
"icon": 405,
"classjob": -1
},
{
"id": 2928,
"name": "Barofield",
"icon": 405,
"classjob": -1
},
{
"id": 2929,
"name": "Main Head",
"icon": 405,
"classjob": -1
},
{
"id": 2930,
"name": "Secondary Head",
"icon": 405,
"classjob": -1
},
{
"id": 2931,
"name": "Secondary Head",
"icon": 405,
"classjob": -1
},
{
"id": 2932,
"name": "(仮)ティアマット：メカハイドラ：3連メテオ発射/A：バハムートダンジョン3",
"icon": 405,
"classjob": -1
},
{
"id": 2933,
"name": "(仮)ティアマット：メカハイドラ：3連メテオ発射/B：バハムートダンジョン3",
"icon": 405,
"classjob": -1
},
{
"id": 2934,
"name": "Seed Of The Rivers",
"icon": 405,
"classjob": -1
},
{
"id": 2935,
"name": "Seed Of The Sea",
"icon": 405,
"classjob": -1
},
{
"id": 2936,
"name": "Emergency Mode",
"icon": 405,
"classjob": -1
},
{
"id": 2937,
"name": "Nerve Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 2938,
"name": "Nerve Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 2939,
"name": "Nanospore Jet",
"icon": 405,
"classjob": -1
},
{
"id": 2940,
"name": "Nanospore Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 2941,
"name": "Auto-cannons",
"icon": 405,
"classjob": -1
},
{
"id": 2942,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 2943,
"name": "Vacuum Wave",
"icon": 405,
"classjob": -1
},
{
"id": 2944,
"name": "(仮)ダラガブ球：AA：バハムートダンジョン3/ボス2用",
"icon": 405,
"classjob": -1
},
{
"id": 2945,
"name": "Node Retrieval",
"icon": 405,
"classjob": -1
},
{
"id": 2946,
"name": "Object 199",
"icon": 405,
"classjob": -1
},
{
"id": 2947,
"name": "Repelling Cannons",
"icon": 405,
"classjob": -1
},
{
"id": 2948,
"name": "Gravity Field",
"icon": 405,
"classjob": -1
},
{
"id": 2949,
"name": "Forked Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 2950,
"name": "Forked Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 2951,
"name": "Revelation",
"icon": 405,
"classjob": -1
},
{
"id": 2952,
"name": "Brand Of Purgatory",
"icon": 405,
"classjob": -1
},
{
"id": 2953,
"name": "Chain Of Purgatory",
"icon": 405,
"classjob": -1
},
{
"id": 2954,
"name": "Arm Of Purgatory",
"icon": 405,
"classjob": -1
},
{
"id": 2955,
"name": "Flames Of Unforgiveness",
"icon": 405,
"classjob": -1
},
{
"id": 2956,
"name": "Blackfire",
"icon": 405,
"classjob": -1
},
{
"id": 2957,
"name": "Blackfire Blaze",
"icon": 405,
"classjob": -1
},
{
"id": 2958,
"name": "Blackfire Wave",
"icon": 405,
"classjob": -1
},
{
"id": 2959,
"name": "Whitefire",
"icon": 405,
"classjob": -1
},
{
"id": 2960,
"name": "Whitefire",
"icon": 405,
"classjob": -1
},
{
"id": 2961,
"name": "Bluefire",
"icon": 405,
"classjob": -1
},
{
"id": 2962,
"name": "Bluefire",
"icon": 405,
"classjob": -1
},
{
"id": 2963,
"name": "Redfire",
"icon": 405,
"classjob": -1
},
{
"id": 2964,
"name": "Redfire Blast",
"icon": 405,
"classjob": -1
},
{
"id": 2965,
"name": "Redfire Blaze",
"icon": 405,
"classjob": -1
},
{
"id": 2966,
"name": "(仮)フェニックス：原種：飛び上がる：バハムートダンジョン3",
"icon": 405,
"classjob": -1
},
{
"id": 2967,
"name": "(仮)フェニックス：原種：着地：バハムートダンジョン3",
"icon": 405,
"classjob": -1
},
{
"id": 2968,
"name": "Flames Of Rebirth",
"icon": 405,
"classjob": -1
},
{
"id": 2969,
"name": "Flames Of Rebirth",
"icon": 405,
"classjob": -1
},
{
"id": 2970,
"name": "Flames Of Rebirth",
"icon": 405,
"classjob": -1
},
{
"id": 2971,
"name": "Flames Of Rebirth",
"icon": 405,
"classjob": -1
},
{
"id": 2972,
"name": "Fountain Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 2973,
"name": "Fountain Of Life",
"icon": 405,
"classjob": -1
},
{
"id": 2974,
"name": "Fountain Of Death",
"icon": 405,
"classjob": -1
},
{
"id": 2975,
"name": "Summon",
"icon": 405,
"classjob": -1
},
{
"id": 2976,
"name": "Scorched Pinion",
"icon": 405,
"classjob": -1
},
{
"id": 2977,
"name": "Scorched Pinion",
"icon": 405,
"classjob": -1
},
{
"id": 2978,
"name": "Redfire Plume",
"icon": 405,
"classjob": -1
},
{
"id": 2979,
"name": "Redfire Plume",
"icon": 405,
"classjob": -1
},
{
"id": 2980,
"name": "Rejuvenation",
"icon": 405,
"classjob": -1
},
{
"id": 2981,
"name": "(仮)ワイバーン：ズー：火の鳥：ポップ時アクション：バハムートダンジョン3",
"icon": 405,
"classjob": -1
},
{
"id": 2982,
"name": "Sharp Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2983,
"name": "Sharp Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2984,
"name": "Sharp Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2985,
"name": "Fantod",
"icon": 405,
"classjob": -1
},
{
"id": 2986,
"name": "Fantod",
"icon": 405,
"classjob": -1
},
{
"id": 2987,
"name": "Fantod",
"icon": 405,
"classjob": -1
},
{
"id": 2988,
"name": "(仮)バハムート：霊体：オートアタック：バハムートダンジョン3",
"icon": 405,
"classjob": -1
},
{
"id": 2989,
"name": "Flare Breath",
"icon": 405,
"classjob": -1
},
{
"id": 2990,
"name": "Flatten",
"icon": 405,
"classjob": -1
},
{
"id": 2991,
"name": "Megaflare",
"icon": 405,
"classjob": -1
},
{
"id": 2992,
"name": "Megaflare",
"icon": 405,
"classjob": -1
},
{
"id": 2993,
"name": "Megaflare",
"icon": 405,
"classjob": -1
},
{
"id": 2994,
"name": "Megaflare",
"icon": 405,
"classjob": -1
},
{
"id": 2995,
"name": "Megaflare",
"icon": 405,
"classjob": -1
},
{
"id": 2996,
"name": "Megaflare Strike",
"icon": 405,
"classjob": -1
},
{
"id": 2997,
"name": "Earth Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 2998,
"name": "Earth Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 2999,
"name": "Earth Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 3000,
"name": "Earth Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 3001,
"name": "Gigaflare",
"icon": 405,
"classjob": -1
},
{
"id": 3002,
"name": "Gigaflare",
"icon": 405,
"classjob": -1
},
{
"id": 3003,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 3004,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 3005,
"name": "Rage Of Bahamut",
"icon": 405,
"classjob": -1
},
{
"id": 3006,
"name": "(仮)バハムート：霊体：上空へ飛び立つ：バハムートダンジョン3",
"icon": 405,
"classjob": -1
},
{
"id": 3007,
"name": "(仮)バハムート：霊体：上空から地上に着地する：バハムートダンジョン3",
"icon": 405,
"classjob": -1
},
{
"id": 3008,
"name": "Megaflare Dive",
"icon": 405,
"classjob": -1
},
{
"id": 3009,
"name": "Teraflare",
"icon": 405,
"classjob": -1
},
{
"id": 3010,
"name": "Akh Morn",
"icon": 405,
"classjob": -1
},
{
"id": 3011,
"name": "Akh Morn",
"icon": 405,
"classjob": -1
},
{
"id": 3012,
"name": "Tempest Wing",
"icon": 405,
"classjob": -1
},
{
"id": 3013,
"name": "Deadly Drive",
"icon": 405,
"classjob": -1
},
{
"id": 3014,
"name": "Blazing Trail",
"icon": 405,
"classjob": -1
},
{
"id": 3015,
"name": "Bravery",
"icon": 405,
"classjob": -1
},
{
"id": 3016,
"name": "Double Dive",
"icon": 405,
"classjob": -1
},
{
"id": 3017,
"name": "Plummet",
"icon": 405,
"classjob": -1
},
{
"id": 3018,
"name": "Death Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 3019,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 3020,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 3021,
"name": "Tail Smash",
"icon": 405,
"classjob": -1
},
{
"id": 3022,
"name": "Devour",
"icon": 405,
"classjob": -1
},
{
"id": 3023,
"name": "Bloody Claw",
"icon": 405,
"classjob": -1
},
{
"id": 3024,
"name": "Pole Reversal",
"icon": 405,
"classjob": -1
},
{
"id": 3025,
"name": "Apocalypse",
"icon": 405,
"classjob": -1
},
{
"id": 3026,
"name": "Evil Eye",
"icon": 405,
"classjob": -1
},
{
"id": 3027,
"name": "Calcifying Mist",
"icon": 405,
"classjob": -1
},
{
"id": 3028,
"name": "Baleful Roar",
"icon": 405,
"classjob": -1
},
{
"id": 3029,
"name": "Shot",
"icon": 405,
"classjob": -1
},
{
"id": 3030,
"name": "Rotoswipe",
"icon": 405,
"classjob": -1
},
{
"id": 3031,
"name": "(仮)ダラガブ球：AA：バハムートダンジョン3：2層Trash",
"icon": 405,
"classjob": -1
},
{
"id": 3032,
"name": "Subduction",
"icon": 405,
"classjob": -1
},
{
"id": 3033,
"name": "The Giving Sea",
"icon": 405,
"classjob": -1
},
{
"id": 3034,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 3035,
"name": "Death Grip",
"icon": 405,
"classjob": -1
},
{
"id": 3036,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 3037,
"name": "Frost Bow",
"icon": 405,
"classjob": -1
},
{
"id": 3038,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3039,
"name": "Glass Dance",
"icon": 405,
"classjob": -1
},
{
"id": 3040,
"name": "Avalanche",
"icon": 405,
"classjob": -1
},
{
"id": 3041,
"name": "Icebrand",
"icon": 405,
"classjob": -1
},
{
"id": 3042,
"name": "Hailstorm",
"icon": 405,
"classjob": -1
},
{
"id": 3043,
"name": "Permafrost",
"icon": 405,
"classjob": -1
},
{
"id": 3044,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3045,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3046,
"name": "Absolute Zero",
"icon": 405,
"classjob": -1
},
{
"id": 3047,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3048,
"name": "Heavenly Strike",
"icon": 405,
"classjob": -1
},
{
"id": 3049,
"name": "Glacier Bash",
"icon": 405,
"classjob": -1
},
{
"id": 3050,
"name": "Dreams Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 3051,
"name": "Icicle Impact",
"icon": 405,
"classjob": -1
},
{
"id": 3052,
"name": "Whiteout",
"icon": 405,
"classjob": -1
},
{
"id": 3053,
"name": "The Warden's Verdict",
"icon": 405,
"classjob": -1
},
{
"id": 3054,
"name": "Impale",
"icon": 405,
"classjob": -1
},
{
"id": 3055,
"name": "Mark Of Death",
"icon": 405,
"classjob": -1
},
{
"id": 3056,
"name": "Inspire",
"icon": 405,
"classjob": -1
},
{
"id": 3057,
"name": "Stun Claws",
"icon": 405,
"classjob": -1
},
{
"id": 3058,
"name": "Expire",
"icon": 405,
"classjob": -1
},
{
"id": 3059,
"name": "Aqua Ball",
"icon": 405,
"classjob": -1
},
{
"id": 3060,
"name": "Tail Screw",
"icon": 405,
"classjob": -1
},
{
"id": 3061,
"name": "Wild Instinct",
"icon": 405,
"classjob": -1
},
{
"id": 3062,
"name": "Hornswaggle",
"icon": 405,
"classjob": -1
},
{
"id": 3063,
"name": "Scuttle",
"icon": 405,
"classjob": -1
},
{
"id": 3064,
"name": "Keelhaul",
"icon": 405,
"classjob": -1
},
{
"id": 3065,
"name": "Aim",
"icon": 405,
"classjob": -1
},
{
"id": 3066,
"name": "Musket",
"icon": 405,
"classjob": -1
},
{
"id": 3067,
"name": "Walk The Plank",
"icon": 405,
"classjob": -1
},
{
"id": 3068,
"name": "Tackle",
"icon": 405,
"classjob": -1
},
{
"id": 3069,
"name": "Ink Jet",
"icon": 405,
"classjob": -1
},
{
"id": 3070,
"name": "Ink Blot",
"icon": 405,
"classjob": -1
},
{
"id": 3071,
"name": "Wallop",
"icon": 405,
"classjob": -1
},
{
"id": 3072,
"name": "Strangle",
"icon": 405,
"classjob": -1
},
{
"id": 3073,
"name": "Seize",
"icon": 405,
"classjob": -1
},
{
"id": 3074,
"name": "Hurl",
"icon": 405,
"classjob": -1
},
{
"id": 3075,
"name": "Seawater Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 3076,
"name": "Wallop",
"icon": 405,
"classjob": -1
},
{
"id": 3077,
"name": "Clearout",
"icon": 405,
"classjob": -1
},
{
"id": 3078,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 3079,
"name": "Snow Drift",
"icon": 405,
"classjob": -1
},
{
"id": 3080,
"name": "Snow Drift",
"icon": 405,
"classjob": -1
},
{
"id": 3081,
"name": "Aura",
"icon": 405,
"classjob": -1
},
{
"id": 3082,
"name": "Tundra",
"icon": 405,
"classjob": -1
},
{
"id": 3083,
"name": "Cold Wave",
"icon": 405,
"classjob": -1
},
{
"id": 3084,
"name": "Ice Guillotine",
"icon": 405,
"classjob": -1
},
{
"id": 3085,
"name": "Hypothermal Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 3086,
"name": "Death Grip",
"icon": 405,
"classjob": -1
},
{
"id": 3087,
"name": "Frozen Mist",
"icon": 405,
"classjob": -1
},
{
"id": 3088,
"name": "Buffet",
"icon": 405,
"classjob": -1
},
{
"id": 3089,
"name": "Northerlies",
"icon": 405,
"classjob": -1
},
{
"id": 3090,
"name": "Snow Boulder",
"icon": 405,
"classjob": -1
},
{
"id": 3091,
"name": "Double Smash",
"icon": 405,
"classjob": -1
},
{
"id": 3092,
"name": "Elbow Drop",
"icon": 405,
"classjob": -1
},
{
"id": 3093,
"name": "Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 3095,
"name": "Pillar Impact",
"icon": 405,
"classjob": -1
},
{
"id": 3096,
"name": "Pillar Pierce",
"icon": 405,
"classjob": -1
},
{
"id": 3097,
"name": "Pillar Shatter",
"icon": 405,
"classjob": -1
},
{
"id": 3098,
"name": "Heavy Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3099,
"name": "Thousand-year Storm",
"icon": 405,
"classjob": -1
},
{
"id": 3100,
"name": "Heavensward Howl",
"icon": 405,
"classjob": -1
},
{
"id": 3101,
"name": "Thousand-year Storm",
"icon": 405,
"classjob": -1
},
{
"id": 3102,
"name": "Ecliptic Bite",
"icon": 405,
"classjob": -1
},
{
"id": 3103,
"name": "Lunar Cry",
"icon": 405,
"classjob": -1
},
{
"id": 3104,
"name": "5000 Needles",
"icon": 405,
"classjob": -1
},
{
"id": 3105,
"name": "100,000 Needles",
"icon": 405,
"classjob": -1
},
{
"id": 3106,
"name": "3000 Needles",
"icon": 405,
"classjob": -1
},
{
"id": 3107,
"name": "Sabotendash",
"icon": 405,
"classjob": -1
},
{
"id": 3108,
"name": "Smite Of Fury",
"icon": 405,
"classjob": -1
},
{
"id": 3109,
"name": "Flurry Of Rage",
"icon": 405,
"classjob": -1
},
{
"id": 3110,
"name": "Light Of Anathema",
"icon": 405,
"classjob": -1
},
{
"id": 3111,
"name": "Cold Wave",
"icon": 405,
"classjob": -1
},
{
"id": 3112,
"name": "Cactguard",
"icon": 405,
"classjob": -1
},
{
"id": 3113,
"name": "Transcendence",
"icon": 405,
"classjob": -1
},
{
"id": 3114,
"name": "Chaotic Eye",
"icon": 405,
"classjob": -1
},
{
"id": 3115,
"name": "Goad",
"icon": 405,
"classjob": -1
},
{
"id": 3116,
"name": "Whispers Of Ire",
"icon": 405,
"classjob": -1
},
{
"id": 3117,
"name": "Severe Snort",
"icon": 405,
"classjob": -1
},
{
"id": 3118,
"name": "Snort",
"icon": 405,
"classjob": -1
},
{
"id": 3119,
"name": "Snortsault",
"icon": 405,
"classjob": -1
},
{
"id": 3120,
"name": "Snortsault",
"icon": 405,
"classjob": -1
},
{
"id": 3121,
"name": "Snortsault",
"icon": 405,
"classjob": -1
},
{
"id": 3122,
"name": "FUNGAH",
"icon": 405,
"classjob": -1
},
{
"id": 3123,
"name": "FUNGAH",
"icon": 405,
"classjob": -1
},
{
"id": 3124,
"name": "人型：拘束：事件屋ヒルディ",
"icon": 405,
"classjob": -1
},
{
"id": 3125,
"name": "Fungah",
"icon": 405,
"classjob": -1
},
{
"id": 3126,
"name": "Fungahhh",
"icon": 405,
"classjob": -1
},
{
"id": 3127,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 3128,
"name": "Grind",
"icon": 405,
"classjob": -1
},
{
"id": 3129,
"name": "Bosom Buddies",
"icon": 405,
"classjob": -1
},
{
"id": 3130,
"name": "4-tonze Weight",
"icon": 405,
"classjob": -1
},
{
"id": 3131,
"name": "4-tonze Weight",
"icon": 405,
"classjob": -1
},
{
"id": 3132,
"name": "Imp Song",
"icon": 405,
"classjob": -1
},
{
"id": 3133,
"name": "Aqua Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3134,
"name": "Megavolt",
"icon": 405,
"classjob": -1
},
{
"id": 3135,
"name": "Tentacle",
"icon": 405,
"classjob": -1
},
{
"id": 3136,
"name": "Wallop",
"icon": 405,
"classjob": -1
},
{
"id": 3137,
"name": "Clearout",
"icon": 405,
"classjob": -1
},
{
"id": 3138,
"name": "Bosom Buddies",
"icon": 405,
"classjob": -1
},
{
"id": 3139,
"name": "Imp Punch",
"icon": 61119,
"classjob": 0
},
{
"id": 3141,
"name": "Sanngetall",
"icon": 405,
"classjob": -1
},
{
"id": 3142,
"name": "Sanngetall",
"icon": 405,
"classjob": -1
},
{
"id": 3143,
"name": "Hall Of Sorrow",
"icon": 405,
"classjob": -1
},
{
"id": 3144,
"name": "Einherjar",
"icon": 405,
"classjob": -1
},
{
"id": 3145,
"name": "Valknut",
"icon": 405,
"classjob": -1
},
{
"id": 3146,
"name": "Darksteel Reins",
"icon": 405,
"classjob": -1
},
{
"id": 3147,
"name": "Hall Of Stone",
"icon": 405,
"classjob": -1
},
{
"id": 3148,
"name": "Hall Of Stone",
"icon": 405,
"classjob": -1
},
{
"id": 3149,
"name": "Hall Of Lead",
"icon": 405,
"classjob": -1
},
{
"id": 3150,
"name": "Hall Of Lead",
"icon": 405,
"classjob": -1
},
{
"id": 3151,
"name": "Gungnir",
"icon": 405,
"classjob": -1
},
{
"id": 3152,
"name": "Gagnrath",
"icon": 405,
"classjob": -1
},
{
"id": 3153,
"name": "Gungnir",
"icon": 405,
"classjob": -1
},
{
"id": 3154,
"name": "Zantetsuken",
"icon": 405,
"classjob": -1
},
{
"id": 3155,
"name": "Shin-Zantetsuken",
"icon": 405,
"classjob": -1
},
{
"id": 3156,
"name": "Hypothermal Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 3157,
"name": "Death Blossom",
"icon": 405,
"classjob": -1
},
{
"id": 3158,
"name": "Throwing Dagger",
"icon": 405,
"classjob": -1
},
{
"id": 3159,
"name": "Snortsault",
"icon": 405,
"classjob": -1
},
{
"id": 3160,
"name": "Pillar Impact",
"icon": 405,
"classjob": -1
},
{
"id": 3161,
"name": "Chains Of Malison",
"icon": 405,
"classjob": -1
},
{
"id": 3162,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3163,
"name": "Holmgang",
"icon": 266,
"classjob": -1
},
{
"id": 3164,
"name": "(仮)人型：真デュラハン：オートアタック：古城アムダハード",
"icon": 405,
"classjob": -1
},
{
"id": 3165,
"name": "Geirrothr",
"icon": 405,
"classjob": -1
},
{
"id": 3166,
"name": "Hall Of Sorrow",
"icon": 405,
"classjob": -1
},
{
"id": 3167,
"name": "Valfodr",
"icon": 405,
"classjob": -1
},
{
"id": 3168,
"name": "Yggr",
"icon": 405,
"classjob": -1
},
{
"id": 3169,
"name": "Smite Of Gloom",
"icon": 405,
"classjob": -1
},
{
"id": 3170,
"name": "Ripples Of Gloom",
"icon": 405,
"classjob": -1
},
{
"id": 3171,
"name": "Invisible",
"icon": 405,
"classjob": -1
},
{
"id": 3172,
"name": "Batter",
"icon": 405,
"classjob": -1
},
{
"id": 3173,
"name": "Entrance",
"icon": 405,
"classjob": -1
},
{
"id": 3174,
"name": "Doppelganger",
"icon": 405,
"classjob": -1
},
{
"id": 3175,
"name": "Banishing Light",
"icon": 405,
"classjob": -1
},
{
"id": 3176,
"name": "Banishing Light",
"icon": 405,
"classjob": -1
},
{
"id": 3177,
"name": "Cadaveric Spasm",
"icon": 405,
"classjob": -1
},
{
"id": 3178,
"name": "Sleight",
"icon": 405,
"classjob": -1
},
{
"id": 3179,
"name": "Spontaneous Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 3180,
"name": "(仮)バハムート・ネール：ピエロ：オートアタック：古城アムダハード",
"icon": 405,
"classjob": -1
},
{
"id": 3181,
"name": "Jongleur's X",
"icon": 405,
"classjob": -1
},
{
"id": 3182,
"name": "Blackout",
"icon": 405,
"classjob": -1
},
{
"id": 3183,
"name": "Wild Card",
"icon": 405,
"classjob": -1
},
{
"id": 3184,
"name": "Black Wind",
"icon": 405,
"classjob": -1
},
{
"id": 3185,
"name": "Sleight",
"icon": 405,
"classjob": -1
},
{
"id": 3186,
"name": "Jester's Reap",
"icon": 405,
"classjob": -1
},
{
"id": 3187,
"name": "Death Scythe",
"icon": 405,
"classjob": -1
},
{
"id": 3188,
"name": "Abyssal Charge",
"icon": 405,
"classjob": -1
},
{
"id": 3189,
"name": "Swarm",
"icon": 405,
"classjob": -1
},
{
"id": 3190,
"name": "Viscid Emission",
"icon": 405,
"classjob": -1
},
{
"id": 3191,
"name": "Arboreal Storm",
"icon": 405,
"classjob": -1
},
{
"id": 3192,
"name": "Acorn Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 3193,
"name": "Clearout",
"icon": 405,
"classjob": -1
},
{
"id": 3194,
"name": "Bitter Nectar",
"icon": 405,
"classjob": -1
},
{
"id": 3195,
"name": "Crash Down",
"icon": 405,
"classjob": -1
},
{
"id": 3196,
"name": "Makibishi",
"icon": 405,
"classjob": -1
},
{
"id": 3197,
"name": "Ilsabardian Regen",
"icon": 405,
"classjob": -1
},
{
"id": 3198,
"name": "Melt",
"icon": 405,
"classjob": -1
},
{
"id": 3199,
"name": "Melt",
"icon": 405,
"classjob": -1
},
{
"id": 3200,
"name": "Shatter",
"icon": 405,
"classjob": -1
},
{
"id": 3201,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 3202,
"name": "Suiyaku",
"icon": 405,
"classjob": -1
},
{
"id": 3203,
"name": "Raiton",
"icon": 405,
"classjob": 0
},
{
"id": 3204,
"name": "Raiton",
"icon": 405,
"classjob": 0
},
{
"id": 3205,
"name": "Katon",
"icon": 405,
"classjob": -1
},
{
"id": 3206,
"name": "Shadowspawn",
"icon": 405,
"classjob": -1
},
{
"id": 3207,
"name": "Kanashibari",
"icon": 405,
"classjob": 0
},
{
"id": 3208,
"name": "Rebirth",
"icon": 405,
"classjob": -1
},
{
"id": 3209,
"name": "Tempest Wing",
"icon": 405,
"classjob": -1
},
{
"id": 3210,
"name": "透明：シヴァ：凍結レクト：ノックバック用/ヒロイック",
"icon": 405,
"classjob": -1
},
{
"id": 3211,
"name": "Batterhorn",
"icon": 405,
"classjob": -1
},
{
"id": 3212,
"name": "Fire Angon",
"icon": 405,
"classjob": -1
},
{
"id": 3213,
"name": "Blazing Angon",
"icon": 405,
"classjob": -1
},
{
"id": 3214,
"name": "Burning Memories",
"icon": 405,
"classjob": -1
},
{
"id": 3215,
"name": "Clobber",
"icon": 405,
"classjob": -1
},
{
"id": 3216,
"name": "Blazing Angon",
"icon": 405,
"classjob": -1
},
{
"id": 3217,
"name": "Firespit",
"icon": 405,
"classjob": -1
},
{
"id": 3218,
"name": "Groundburst",
"icon": 405,
"classjob": -1
},
{
"id": 3219,
"name": "Toad",
"icon": 405,
"classjob": -1
},
{
"id": 3220,
"name": "Sacred Standard",
"icon": 405,
"classjob": -1
},
{
"id": 3221,
"name": "Standard Retrieval",
"icon": 405,
"classjob": -1
},
{
"id": 3222,
"name": "Grip Of Fury",
"icon": 405,
"classjob": -1
},
{
"id": 3223,
"name": "Grip Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 3224,
"name": "Grip Of Fens",
"icon": 405,
"classjob": -1
},
{
"id": 3225,
"name": "Grip Of Ferrum",
"icon": 405,
"classjob": -1
},
{
"id": 3226,
"name": "Rushing Slash",
"icon": 405,
"classjob": -1
},
{
"id": 3227,
"name": "Vorpal Wheel",
"icon": 405,
"classjob": -1
},
{
"id": 3228,
"name": "Rot Gas",
"icon": 405,
"classjob": -1
},
{
"id": 3229,
"name": "Tyrannic Blare",
"icon": 405,
"classjob": -1
},
{
"id": 3230,
"name": "Soul Douse",
"icon": 405,
"classjob": -1
},
{
"id": 3231,
"name": "Sacred Idol",
"icon": 405,
"classjob": -1
},
{
"id": 3232,
"name": "Grip Of Fever",
"icon": 405,
"classjob": -1
},
{
"id": 3233,
"name": "Groundburst",
"icon": 405,
"classjob": -1
},
{
"id": 3234,
"name": "Hide",
"icon": 405,
"classjob": -1
},
{
"id": 3235,
"name": "Howling Moon",
"icon": 405,
"classjob": -1
},
{
"id": 3236,
"name": "Arrow Deluge",
"icon": 405,
"classjob": -1
},
{
"id": 3238,
"name": "Grip Of Fever",
"icon": 405,
"classjob": -1
},
{
"id": 3239,
"name": "Snow Boulder",
"icon": 405,
"classjob": -1
},
{
"id": 3241,
"name": "Slabber",
"icon": 405,
"classjob": -1
},
{
"id": 3242,
"name": "Devour",
"icon": 405,
"classjob": -1
},
{
"id": 3243,
"name": "Engorge",
"icon": 405,
"classjob": -1
},
{
"id": 3244,
"name": "Spew",
"icon": 405,
"classjob": -1
},
{
"id": 3245,
"name": "Predator Claws",
"icon": 405,
"classjob": -1
},
{
"id": 3246,
"name": "Tail Blow",
"icon": 405,
"classjob": -1
},
{
"id": 3247,
"name": "Hound Out Of Hell",
"icon": 405,
"classjob": -1
},
{
"id": 3248,
"name": "Innerspace",
"icon": 405,
"classjob": -1
},
{
"id": 3249,
"name": "Mini",
"icon": 405,
"classjob": -1
},
{
"id": 3250,
"name": "Sulphurous Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3251,
"name": "Sulphurous Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3252,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 3253,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 3254,
"name": "Ululation",
"icon": 405,
"classjob": -1
},
{
"id": 3255,
"name": "Triclip",
"icon": 405,
"classjob": -1
},
{
"id": 3256,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 3257,
"name": "Detonator",
"icon": 405,
"classjob": -1
},
{
"id": 3258,
"name": "Elbow Drop",
"icon": 405,
"classjob": -1
},
{
"id": 3259,
"name": "Double Smash",
"icon": 405,
"classjob": -1
},
{
"id": 3260,
"name": "10-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 3261,
"name": "10-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 3266,
"name": "Stranger Tides",
"icon": 405,
"classjob": -1
},
{
"id": 3267,
"name": "World's End",
"icon": 405,
"classjob": -1
},
{
"id": 3268,
"name": "Blood Drain",
"icon": 405,
"classjob": -1
},
{
"id": 3272,
"name": "Double Vision",
"icon": 405,
"classjob": -1
},
{
"id": 3273,
"name": "Sullen Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 3274,
"name": "Ireful Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 3275,
"name": "Level 100 Flare",
"icon": 405,
"classjob": -1
},
{
"id": 3276,
"name": "Level 100 Flare",
"icon": 405,
"classjob": -1
},
{
"id": 3277,
"name": "Level 150 Death",
"icon": 405,
"classjob": -1
},
{
"id": 3278,
"name": "Level 150 Death",
"icon": 405,
"classjob": -1
},
{
"id": 3279,
"name": "Death",
"icon": 405,
"classjob": -1
},
{
"id": 3280,
"name": "Stare",
"icon": 405,
"classjob": -1
},
{
"id": 3281,
"name": "Mortal Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 3282,
"name": "Discordance",
"icon": 405,
"classjob": -1
},
{
"id": 3283,
"name": "Fermata",
"icon": 405,
"classjob": -1
},
{
"id": 3284,
"name": "Breath Of Light",
"icon": 405,
"classjob": -1
},
{
"id": 3285,
"name": "Breath Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 3286,
"name": "Breath Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 3287,
"name": "Breath Of Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 3288,
"name": "Breath Of Poison",
"icon": 405,
"classjob": -1
},
{
"id": 3289,
"name": "Radiance",
"icon": 405,
"classjob": -1
},
{
"id": 3290,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 3291,
"name": "Seep",
"icon": 405,
"classjob": -1
},
{
"id": 3293,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3294,
"name": "Heat Wave",
"icon": 405,
"classjob": -1
},
{
"id": 3295,
"name": "White Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3296,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3297,
"name": "Zero-form Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 3298,
"name": "Feint Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 3299,
"name": "Feint Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 3300,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 3301,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 3302,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 3303,
"name": "Bad Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3304,
"name": "Black Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 3305,
"name": "Flood Of Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 3306,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3307,
"name": "Low Voltage",
"icon": 405,
"classjob": -1
},
{
"id": 3308,
"name": "Object 130",
"icon": 405,
"classjob": -1
},
{
"id": 3309,
"name": "Auto-cannons",
"icon": 405,
"classjob": -1
},
{
"id": 3310,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 3311,
"name": "High-powered Beam",
"icon": 405,
"classjob": -1
},
{
"id": 3312,
"name": "Repelling Cannons",
"icon": 405,
"classjob": -1
},
{
"id": 3313,
"name": "Web",
"icon": 405,
"classjob": -1
},
{
"id": 3314,
"name": "Web",
"icon": 405,
"classjob": -1
},
{
"id": 3315,
"name": "Aero II",
"icon": 405,
"classjob": -1
},
{
"id": 3316,
"name": "Aero II",
"icon": 405,
"classjob": -1
},
{
"id": 3317,
"name": "Woken Wind",
"icon": 405,
"classjob": -1
},
{
"id": 3318,
"name": "Buffet",
"icon": 405,
"classjob": -1
},
{
"id": 3319,
"name": "Turbulence",
"icon": 405,
"classjob": -1
},
{
"id": 3320,
"name": "Missile",
"icon": 405,
"classjob": -1
},
{
"id": 3321,
"name": "Eerie Soundwave",
"icon": 405,
"classjob": -1
},
{
"id": 3322,
"name": "White Wind",
"icon": 405,
"classjob": -1
},
{
"id": 3323,
"name": "Cockcrow",
"icon": 405,
"classjob": -1
},
{
"id": 3324,
"name": "Declaration",
"icon": 405,
"classjob": -1
},
{
"id": 3325,
"name": "Masamune",
"icon": 405,
"classjob": -1
},
{
"id": 3326,
"name": "Electrogenetic Force",
"icon": 405,
"classjob": -1
},
{
"id": 3327,
"name": "Invisible Touch",
"icon": 405,
"classjob": -1
},
{
"id": 3328,
"name": "Dragon's Lair",
"icon": 405,
"classjob": -1
},
{
"id": 3329,
"name": "Dragonfire",
"icon": 405,
"classjob": -1
},
{
"id": 3330,
"name": "Dragonspirit",
"icon": 405,
"classjob": -1
},
{
"id": 3331,
"name": "Dragonflight",
"icon": 405,
"classjob": -1
},
{
"id": 3332,
"name": "Dragonstrike",
"icon": 405,
"classjob": -1
},
{
"id": 3333,
"name": "Sword Dance",
"icon": 405,
"classjob": -1
},
{
"id": 3334,
"name": "Sword Dance",
"icon": 405,
"classjob": -1
},
{
"id": 3335,
"name": "Enchain",
"icon": 405,
"classjob": -1
},
{
"id": 3336,
"name": "Divider",
"icon": 405,
"classjob": -1
},
{
"id": 3337,
"name": "Icewind",
"icon": 405,
"classjob": -1
},
{
"id": 3338,
"name": "Moonlight",
"icon": 405,
"classjob": -1
},
{
"id": 3339,
"name": "Bloomshower",
"icon": 405,
"classjob": -1
},
{
"id": 3340,
"name": "Marrow Drain",
"icon": 405,
"classjob": -1
},
{
"id": 3341,
"name": "Marrow Drain",
"icon": 405,
"classjob": -1
},
{
"id": 3342,
"name": "Marrow Drain",
"icon": 405,
"classjob": -1
},
{
"id": 3343,
"name": "The Ram's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 3344,
"name": "The Dragon's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 3345,
"name": "Mean Thrash",
"icon": 405,
"classjob": -1
},
{
"id": 3346,
"name": "Diarchy",
"icon": 405,
"classjob": -1
},
{
"id": 3347,
"name": "Ball Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 3348,
"name": "Ball Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 3349,
"name": "Whirlwind Slash",
"icon": 405,
"classjob": -1
},
{
"id": 3350,
"name": "Bitter End",
"icon": 405,
"classjob": -1
},
{
"id": 3351,
"name": "Pradamante",
"icon": 405,
"classjob": -1
},
{
"id": 3352,
"name": "Giga Jump",
"icon": 405,
"classjob": -1
},
{
"id": 3353,
"name": "Tiny Song",
"icon": 405,
"classjob": -1
},
{
"id": 3354,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3355,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3356,
"name": "Full Force",
"icon": 405,
"classjob": -1
},
{
"id": 3358,
"name": "Eyes On Me",
"icon": 405,
"classjob": -1
},
{
"id": 3359,
"name": "Aegis Boon",
"icon": 103,
"classjob": 0
},
{
"id": 3360,
"name": "Raw Destruction",
"icon": 103,
"classjob": 0
},
{
"id": 3361,
"name": "Cometeor",
"icon": 103,
"classjob": 0
},
{
"id": 3362,
"name": "Empyrean Rain",
"icon": 103,
"classjob": 0
},
{
"id": 3363,
"name": "テュポーン：自分中心円：ゴールドソーサー",
"icon": 405,
"classjob": -1
},
{
"id": 3364,
"name": "テュポーン：ステージ外周：ゴールドソーサー",
"icon": 405,
"classjob": -1
},
{
"id": 3365,
"name": "テュポーン：扇：ゴールドソーサー",
"icon": 405,
"classjob": -1
},
{
"id": 3366,
"name": "テュポーン：直線：ゴールドソーサー",
"icon": 405,
"classjob": -1
},
{
"id": 3367,
"name": "テュポーン：GT：ゴールドソーサー",
"icon": 405,
"classjob": -1
},
{
"id": 3368,
"name": "透明：テュポーン：GT：ゴールドソーサー",
"icon": 405,
"classjob": -1
},
{
"id": 3369,
"name": "Landwaster",
"icon": 405,
"classjob": -1
},
{
"id": 3370,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 3371,
"name": "Sidewise Slice",
"icon": 405,
"classjob": -1
},
{
"id": 3372,
"name": "Seismic Impact",
"icon": 405,
"classjob": -1
},
{
"id": 3373,
"name": "Blazing Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 3374,
"name": "Underfoot",
"icon": 405,
"classjob": -1
},
{
"id": 3375,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 3377,
"name": "Iron Kiss",
"icon": 61111,
"classjob": 0
},
{
"id": 3378,
"name": "Spindly Finger",
"icon": 61116,
"classjob": 0
},
{
"id": 3379,
"name": "Pitch Bomb",
"icon": 61120,
"classjob": 0
},
{
"id": 3380,
"name": "Dragonkiller",
"icon": 405,
"classjob": -1
},
{
"id": 3381,
"name": "Whirlwind Slash",
"icon": 405,
"classjob": -1
},
{
"id": 3382,
"name": "Bitter End",
"icon": 405,
"classjob": -1
},
{
"id": 3383,
"name": "Pradamante",
"icon": 405,
"classjob": -1
},
{
"id": 3384,
"name": "Flamethrower",
"icon": 405,
"classjob": -1
},
{
"id": 3385,
"name": "Heavy Swing",
"icon": 405,
"classjob": -1
},
{
"id": 3386,
"name": "Mark XLI Quick-firing Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 3387,
"name": "Intake",
"icon": 405,
"classjob": -1
},
{
"id": 3388,
"name": "Mark XLIII Mini Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 3389,
"name": "Flamethrower",
"icon": 405,
"classjob": -1
},
{
"id": 3390,
"name": "Flamethrower",
"icon": 405,
"classjob": -1
},
{
"id": 3391,
"name": "Carpet Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 3392,
"name": "Carpet Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 3393,
"name": "Blitz",
"icon": 405,
"classjob": -1
},
{
"id": 3394,
"name": "Garlean Fire",
"icon": 405,
"classjob": -1
},
{
"id": 3395,
"name": "Disdain",
"icon": 405,
"classjob": -1
},
{
"id": 3396,
"name": "Disdain",
"icon": 405,
"classjob": -1
},
{
"id": 3397,
"name": "Admonishment",
"icon": 405,
"classjob": -1
},
{
"id": 3398,
"name": "Admonishment",
"icon": 405,
"classjob": -1
},
{
"id": 3399,
"name": "Admonishment",
"icon": 405,
"classjob": -1
},
{
"id": 3400,
"name": "Outer Turmoil",
"icon": 405,
"classjob": -1
},
{
"id": 3401,
"name": "Animadversion",
"icon": 405,
"classjob": -1
},
{
"id": 3402,
"name": "Condescension",
"icon": 405,
"classjob": -1
},
{
"id": 3403,
"name": "Antipathy",
"icon": 405,
"classjob": -1
},
{
"id": 3404,
"name": "Antipathy",
"icon": 405,
"classjob": -1
},
{
"id": 3405,
"name": "Antipathy",
"icon": 405,
"classjob": -1
},
{
"id": 3406,
"name": "Antipathy",
"icon": 405,
"classjob": -1
},
{
"id": 3407,
"name": "Inner Turmoil",
"icon": 405,
"classjob": -1
},
{
"id": 3408,
"name": "Detonation",
"icon": 405,
"classjob": -1
},
{
"id": 3409,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 3411,
"name": "Garlean Fire",
"icon": 405,
"classjob": -1
},
{
"id": 3412,
"name": "Ancient Quaga",
"icon": 405,
"classjob": -1
},
{
"id": 3413,
"name": "Ancient Quake",
"icon": 405,
"classjob": -1
},
{
"id": 3414,
"name": "Black Hole",
"icon": 405,
"classjob": -1
},
{
"id": 3415,
"name": "White Hole",
"icon": 405,
"classjob": -1
},
{
"id": 3416,
"name": "Shockwave",
"icon": 405,
"classjob": -1
},
{
"id": 3418,
"name": "Hunter's Moon",
"icon": 405,
"classjob": -1
},
{
"id": 3419,
"name": "Aetherial Distribution",
"icon": 405,
"classjob": -1
},
{
"id": 3420,
"name": "Dark IV",
"icon": 405,
"classjob": -1
},
{
"id": 3421,
"name": "Isten Burst",
"icon": 405,
"classjob": -1
},
{
"id": 3422,
"name": "Sina Burst",
"icon": 405,
"classjob": -1
},
{
"id": 3423,
"name": "Salas Burst",
"icon": 405,
"classjob": -1
},
{
"id": 3424,
"name": "Dark II",
"icon": 405,
"classjob": -1
},
{
"id": 3425,
"name": "Extend",
"icon": 405,
"classjob": -1
},
{
"id": 3426,
"name": "Blight",
"icon": 405,
"classjob": -1
},
{
"id": 3427,
"name": "Aetherial Pull",
"icon": 405,
"classjob": -1
},
{
"id": 3428,
"name": "Aetherial Tide",
"icon": 405,
"classjob": -1
},
{
"id": 3429,
"name": "Comet",
"icon": 405,
"classjob": -1
},
{
"id": 3430,
"name": "Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 3431,
"name": "Dark Fire",
"icon": 405,
"classjob": -1
},
{
"id": 3432,
"name": "Spark",
"icon": 405,
"classjob": -1
},
{
"id": 3433,
"name": "Spark",
"icon": 405,
"classjob": -1
},
{
"id": 3434,
"name": "End Of Days",
"icon": 405,
"classjob": -1
},
{
"id": 3435,
"name": "End Of Days",
"icon": 405,
"classjob": -1
},
{
"id": 3436,
"name": "アシエン・ナブリアレス：ダテレポ：ナブリアレス戦",
"icon": 405,
"classjob": -1
},
{
"id": 3437,
"name": "Quake III",
"icon": 405,
"classjob": -1
},
{
"id": 3439,
"name": "Void Call",
"icon": 405,
"classjob": -1
},
{
"id": 3440,
"name": "Rot Gas",
"icon": 405,
"classjob": -1
},
{
"id": 3441,
"name": "The Dragon's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3442,
"name": "White Wind",
"icon": 405,
"classjob": -1
},
{
"id": 3443,
"name": "Double",
"icon": 405,
"classjob": -1
},
{
"id": 3444,
"name": "Triple",
"icon": 405,
"classjob": -1
},
{
"id": 3445,
"name": "Granite Rain",
"icon": 405,
"classjob": -1
},
{
"id": 3446,
"name": "Frost Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3447,
"name": "Sheet Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 3448,
"name": "Rime Wreath",
"icon": 405,
"classjob": -1
},
{
"id": 3449,
"name": "Plasma Release",
"icon": 405,
"classjob": -1
},
{
"id": 3450,
"name": "Web Of Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 3451,
"name": "Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 3452,
"name": "Spiked Tail",
"icon": 405,
"classjob": -1
},
{
"id": 3453,
"name": "Rake",
"icon": 405,
"classjob": -1
},
{
"id": 3454,
"name": "Engulfing Flames",
"icon": 405,
"classjob": -1
},
{
"id": 3455,
"name": "Swinge",
"icon": 405,
"classjob": -1
},
{
"id": 3456,
"name": "Hard Stomp",
"icon": 405,
"classjob": -1
},
{
"id": 3457,
"name": "Diamondback",
"icon": 405,
"classjob": -1
},
{
"id": 3458,
"name": "Tortoise Stomp",
"icon": 405,
"classjob": -1
},
{
"id": 3459,
"name": "Burning Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 3460,
"name": "Salivous Snap",
"icon": 405,
"classjob": -1
},
{
"id": 3461,
"name": "Dragon Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3462,
"name": "Toxic Vomit",
"icon": 405,
"classjob": -1
},
{
"id": 3463,
"name": "Lunge",
"icon": 405,
"classjob": -1
},
{
"id": 3464,
"name": "Electric Velitation",
"icon": 405,
"classjob": -1
},
{
"id": 3465,
"name": "Strident Scream",
"icon": 405,
"classjob": -1
},
{
"id": 3466,
"name": "Levinshower",
"icon": 405,
"classjob": -1
},
{
"id": 3467,
"name": "Electrify",
"icon": 405,
"classjob": -1
},
{
"id": 3468,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 3469,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 3470,
"name": "Heat Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3471,
"name": "Tail Smash",
"icon": 405,
"classjob": -1
},
{
"id": 3472,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 3473,
"name": "Bloodboil",
"icon": 405,
"classjob": -1
},
{
"id": 3474,
"name": "Bone Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 3475,
"name": "Batterhorn",
"icon": 405,
"classjob": -1
},
{
"id": 3476,
"name": "Bitter End",
"icon": 405,
"classjob": -1
},
{
"id": 3477,
"name": "Giga Jump",
"icon": 405,
"classjob": -1
},
{
"id": 3478,
"name": "Grand Sword",
"icon": 405,
"classjob": -1
},
{
"id": 3479,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 3480,
"name": "Exhaust",
"icon": 405,
"classjob": -1
},
{
"id": 3481,
"name": "Grand Strike",
"icon": 405,
"classjob": -1
},
{
"id": 3482,
"name": "Carpet Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 3483,
"name": "Icewind",
"icon": 405,
"classjob": -1
},
{
"id": 3484,
"name": "Moonlight",
"icon": 405,
"classjob": -1
},
{
"id": 3485,
"name": "Bloomshower",
"icon": 405,
"classjob": -1
},
{
"id": 3486,
"name": "Magitek Field",
"icon": 405,
"classjob": -1
},
{
"id": 3487,
"name": "Turret Retrieval",
"icon": 3028,
"classjob": 31
},
{
"id": 3497,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 3498,
"name": "Sheet Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 3499,
"name": "Mortal Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 3500,
"name": "Carpet Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 3501,
"name": "Fluid Spread",
"icon": 405,
"classjob": -1
},
{
"id": 3502,
"name": "Aetherial Tide",
"icon": 405,
"classjob": -1
},
{
"id": 3503,
"name": "Blazing Trail",
"icon": 405,
"classjob": -1
},
{
"id": 3504,
"name": "Quickchant",
"icon": 61121,
"classjob": 0
},
{
"id": 3505,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 3506,
"name": "Low Voltage",
"icon": 64165,
"classjob": 0
},
{
"id": 3507,
"name": "Reawakening",
"icon": 405,
"classjob": -1
},
{
"id": 3508,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3509,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3510,
"name": "Sour Sough",
"icon": 405,
"classjob": -1
},
{
"id": 3511,
"name": "Icewind",
"icon": 405,
"classjob": -1
},
{
"id": 3512,
"name": "Moonlight",
"icon": 405,
"classjob": -1
},
{
"id": 3513,
"name": "Bloomshower",
"icon": 405,
"classjob": -1
},
{
"id": 3514,
"name": "Ballast",
"icon": 405,
"classjob": -1
},
{
"id": 3515,
"name": "Labored Leap",
"icon": 405,
"classjob": -1
},
{
"id": 3516,
"name": "Stone Skull",
"icon": 405,
"classjob": -1
},
{
"id": 3517,
"name": "Words Of Winter",
"icon": 405,
"classjob": -1
},
{
"id": 3518,
"name": "Disclosure",
"icon": 405,
"classjob": -1
},
{
"id": 3519,
"name": "Repel",
"icon": 405,
"classjob": -1
},
{
"id": 3520,
"name": "Liquefy",
"icon": 405,
"classjob": -1
},
{
"id": 3521,
"name": "Liquefy",
"icon": 405,
"classjob": -1
},
{
"id": 3522,
"name": "Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 3523,
"name": "Dark Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 3524,
"name": "Void Call",
"icon": 405,
"classjob": -1
},
{
"id": 3525,
"name": "Tome Seal",
"icon": 405,
"classjob": -1
},
{
"id": 3526,
"name": "Void Spark",
"icon": 405,
"classjob": -1
},
{
"id": 3527,
"name": "Thrub",
"icon": 405,
"classjob": -1
},
{
"id": 3528,
"name": "Deep Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 3529,
"name": "Magic Burst",
"icon": 405,
"classjob": -1
},
{
"id": 3530,
"name": "Abyssal Charge",
"icon": 405,
"classjob": -1
},
{
"id": 3531,
"name": "Abyssal Charge",
"icon": 405,
"classjob": -1
},
{
"id": 3532,
"name": "Abyssal Swing",
"icon": 405,
"classjob": -1
},
{
"id": 3533,
"name": "Abyssal Transfixion",
"icon": 405,
"classjob": -1
},
{
"id": 3534,
"name": "Void Thunder III",
"icon": 459,
"classjob": -1
},
{
"id": 3535,
"name": "Void Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 3536,
"name": "Canker",
"icon": 405,
"classjob": -1
},
{
"id": 3537,
"name": "Void Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 3538,
"name": "Goring Blade",
"icon": 2506,
"classjob": 19
},
{
"id": 3539,
"name": "Royal Authority",
"icon": 2507,
"classjob": 19
},
{
"id": 3540,
"name": "Divine Veil",
"icon": 2508,
"classjob": 19
},
{
"id": 3541,
"name": "Clemency",
"icon": 2509,
"classjob": 19
},
{
"id": 3542,
"name": "Sheltron",
"icon": 2510,
"classjob": 19
},
{
"id": 3543,
"name": "Tornado Kick",
"icon": 2531,
"classjob": 20
},
{
"id": 3544,
"name": "Purification",
"icon": 2532,
"classjob": 20
},
{
"id": 3545,
"name": "Elixir Field",
"icon": 2533,
"classjob": 20
},
{
"id": 3546,
"name": "Meditation",
"icon": 2534,
"classjob": 20
},
{
"id": 3547,
"name": "The Forbidden Chakra",
"icon": 2535,
"classjob": 20
},
{
"id": 3548,
"name": "Deliverance",
"icon": 2556,
"classjob": 21
},
{
"id": 3549,
"name": "Fell Cleave",
"icon": 2557,
"classjob": 21
},
{
"id": 3550,
"name": "Decimate",
"icon": 2558,
"classjob": 21
},
{
"id": 3551,
"name": "Raw Intuition",
"icon": 2559,
"classjob": 21
},
{
"id": 3552,
"name": "Equilibrium",
"icon": 2560,
"classjob": 21
},
{
"id": 3553,
"name": "Blood Of The Dragon",
"icon": 2581,
"classjob": 22
},
{
"id": 3554,
"name": "Fang And Claw",
"icon": 2582,
"classjob": 22
},
{
"id": 3555,
"name": "Geirskogul",
"icon": 2583,
"classjob": 22
},
{
"id": 3556,
"name": "Wheeling Thrust",
"icon": 2584,
"classjob": 22
},
{
"id": 3557,
"name": "Battle Litany",
"icon": 2585,
"classjob": 22
},
{
"id": 3558,
"name": "Empyreal Arrow",
"icon": 2606,
"classjob": 23
},
{
"id": 3559,
"name": "The Wanderer's Minuet",
"icon": 2607,
"classjob": 23
},
{
"id": 3560,
"name": "Iron Jaws",
"icon": 2608,
"classjob": 23
},
{
"id": 3561,
"name": "The Warden's Paean",
"icon": 2609,
"classjob": 23
},
{
"id": 3562,
"name": "Sidewinder",
"icon": 2610,
"classjob": 23
},
{
"id": 3563,
"name": "Armor Crush",
"icon": 2915,
"classjob": 30
},
{
"id": 3564,
"name": "Shadewalker",
"icon": 2916,
"classjob": 30
},
{
"id": 3565,
"name": "Smoke Screen",
"icon": 2917,
"classjob": 30
},
{
"id": 3566,
"name": "Dream Within A Dream",
"icon": 2918,
"classjob": 30
},
{
"id": 3567,
"name": "Duality",
"icon": 2919,
"classjob": 30
},
{
"id": 3568,
"name": "Stone III",
"icon": 2631,
"classjob": 24
},
{
"id": 3569,
"name": "Asylum",
"icon": 2632,
"classjob": 24
},
{
"id": 3570,
"name": "Tetragrammaton",
"icon": 2633,
"classjob": 24
},
{
"id": 3571,
"name": "Assize",
"icon": 2634,
"classjob": 24
},
{
"id": 3572,
"name": "Aero III",
"icon": 2635,
"classjob": 24
},
{
"id": 3573,
"name": "Ley Lines",
"icon": 2656,
"classjob": 25
},
{
"id": 3574,
"name": "Sharpcast",
"icon": 2657,
"classjob": 25
},
{
"id": 3575,
"name": "Enochian",
"icon": 2658,
"classjob": 25
},
{
"id": 3576,
"name": "Blizzard IV",
"icon": 2659,
"classjob": 25
},
{
"id": 3577,
"name": "Fire IV",
"icon": 2660,
"classjob": 25
},
{
"id": 3578,
"name": "Painflare",
"icon": 2681,
"classjob": 27
},
{
"id": 3579,
"name": "Ruin III",
"icon": 2682,
"classjob": 27
},
{
"id": 3580,
"name": "Tri-disaster",
"icon": 2683,
"classjob": 27
},
{
"id": 3581,
"name": "Dreadwyrm Trance",
"icon": 2684,
"classjob": 27
},
{
"id": 3582,
"name": "Deathflare",
"icon": 2685,
"classjob": 27
},
{
"id": 3583,
"name": "Indomitability",
"icon": 2806,
"classjob": 28
},
{
"id": 3584,
"name": "Broil",
"icon": 2807,
"classjob": 28
},
{
"id": 3585,
"name": "Deployment Tactics",
"icon": 2808,
"classjob": 28
},
{
"id": 3586,
"name": "Emergency Tactics",
"icon": 2809,
"classjob": 28
},
{
"id": 3587,
"name": "Dissipation",
"icon": 2810,
"classjob": 28
},
{
"id": 3588,
"name": "Charged Volley Fire",
"icon": 405,
"classjob": -1
},
{
"id": 3589,
"name": "Charged Aether Mortar",
"icon": 405,
"classjob": -1
},
{
"id": 3590,
"name": "Draw",
"icon": 3101,
"classjob": 33
},
{
"id": 3591,
"name": "Royal Road",
"icon": 3103,
"classjob": 33
},
{
"id": 3592,
"name": "Spread",
"icon": 3104,
"classjob": 33
},
{
"id": 3593,
"name": "Redraw",
"icon": 3105,
"classjob": 33
},
{
"id": 3594,
"name": "Benefic",
"icon": 3126,
"classjob": 33
},
{
"id": 3595,
"name": "Aspected Benefic",
"icon": 3127,
"classjob": 33
},
{
"id": 3596,
"name": "Malefic",
"icon": 3120,
"classjob": 33
},
{
"id": 3597,
"name": "Stella",
"icon": 3121,
"classjob": 33
},
{
"id": 3598,
"name": "Malefic II",
"icon": 3122,
"classjob": 33
},
{
"id": 3599,
"name": "Combust",
"icon": 3124,
"classjob": 33
},
{
"id": 3600,
"name": "Helios",
"icon": 3129,
"classjob": 33
},
{
"id": 3601,
"name": "Aspected Helios",
"icon": 3130,
"classjob": 33
},
{
"id": 3602,
"name": "Exalted Detriment",
"icon": 3131,
"classjob": 33
},
{
"id": 3603,
"name": "Ascend",
"icon": 3132,
"classjob": 33
},
{
"id": 3604,
"name": "Diurnal Sect",
"icon": 3133,
"classjob": 33
},
{
"id": 3605,
"name": "Nocturnal Sect",
"icon": 3134,
"classjob": 33
},
{
"id": 3606,
"name": "Lightspeed",
"icon": 3135,
"classjob": 33
},
{
"id": 3607,
"name": "Luminiferous Aether",
"icon": 3136,
"classjob": 33
},
{
"id": 3608,
"name": "Combust II",
"icon": 3125,
"classjob": 33
},
{
"id": 3609,
"name": "Disable",
"icon": 3137,
"classjob": 33
},
{
"id": 3610,
"name": "Benefic II",
"icon": 3128,
"classjob": 33
},
{
"id": 3611,
"name": "Time Dilation",
"icon": 3138,
"classjob": 33
},
{
"id": 3612,
"name": "Synastry",
"icon": 3139,
"classjob": 33
},
{
"id": 3613,
"name": "Collective Unconscious",
"icon": 3140,
"classjob": 33
},
{
"id": 3614,
"name": "Essential Dignity",
"icon": 3141,
"classjob": 33
},
{
"id": 3615,
"name": "Gravity",
"icon": 3123,
"classjob": 33
},
{
"id": 3616,
"name": "Celestial Opposition",
"icon": 3142,
"classjob": 33
},
{
"id": 3617,
"name": "Hard Slash",
"icon": 3051,
"classjob": 32
},
{
"id": 3618,
"name": "Shadowskin",
"icon": 3074,
"classjob": 32
},
{
"id": 3619,
"name": "Spinning Slash",
"icon": 3052,
"classjob": 32
},
{
"id": 3620,
"name": "Scourge",
"icon": 3056,
"classjob": 32
},
{
"id": 3621,
"name": "Unleash",
"icon": 3063,
"classjob": 32
},
{
"id": 3622,
"name": "Low Blow",
"icon": 3059,
"classjob": 32
},
{
"id": 3623,
"name": "Syphon Strike",
"icon": 3054,
"classjob": 32
},
{
"id": 3624,
"name": "Unmend",
"icon": 3062,
"classjob": 32
},
{
"id": 3625,
"name": "Blood Weapon",
"icon": 3071,
"classjob": 32
},
{
"id": 3626,
"name": "Reprisal",
"icon": 3060,
"classjob": 32
},
{
"id": 3627,
"name": "Power Slash",
"icon": 3053,
"classjob": 32
},
{
"id": 3628,
"name": "Darkside",
"icon": 3068,
"classjob": 32
},
{
"id": 3629,
"name": "Grit",
"icon": 3070,
"classjob": 32
},
{
"id": 3630,
"name": "Dark Dance",
"icon": 3073,
"classjob": 32
},
{
"id": 3631,
"name": "Blood Price",
"icon": 3072,
"classjob": 32
},
{
"id": 3632,
"name": "Souleater",
"icon": 3055,
"classjob": 32
},
{
"id": 3633,
"name": "Dark Passenger",
"icon": 3065,
"classjob": 32
},
{
"id": 3634,
"name": "Dark Mind",
"icon": 3076,
"classjob": 32
},
{
"id": 3635,
"name": "Dark Arts",
"icon": 3069,
"classjob": 32
},
{
"id": 3636,
"name": "Shadow Wall",
"icon": 3075,
"classjob": 32
},
{
"id": 3637,
"name": "Delirium",
"icon": 3057,
"classjob": 32
},
{
"id": 3638,
"name": "Living Dead",
"icon": 3077,
"classjob": 32
},
{
"id": 3639,
"name": "Salted Earth",
"icon": 3066,
"classjob": 32
},
{
"id": 3640,
"name": "Plunge",
"icon": 3061,
"classjob": 32
},
{
"id": 3641,
"name": "Abyssal Drain",
"icon": 3064,
"classjob": 32
},
{
"id": 3642,
"name": "Sole Survivor",
"icon": 3067,
"classjob": 32
},
{
"id": 3643,
"name": "Carve And Spit",
"icon": 3058,
"classjob": 32
},
{
"id": 3644,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 3645,
"name": "Pressure Increase",
"icon": 405,
"classjob": -1
},
{
"id": 3646,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 3647,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3648,
"name": "Royal Fount",
"icon": 405,
"classjob": -1
},
{
"id": 3649,
"name": "Gunnery Pod",
"icon": 405,
"classjob": -1
},
{
"id": 3650,
"name": "Photon Spaser",
"icon": 405,
"classjob": -1
},
{
"id": 3651,
"name": "Hydrothermal Missile",
"icon": 405,
"classjob": -1
},
{
"id": 3652,
"name": "Hydrothermal Missile",
"icon": 405,
"classjob": -1
},
{
"id": 3653,
"name": "Emergency Deployment",
"icon": 405,
"classjob": -1
},
{
"id": 3654,
"name": "Resin Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 3655,
"name": "Resin Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 3656,
"name": "Distress Beacon",
"icon": 405,
"classjob": -1
},
{
"id": 3657,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 3658,
"name": "Hypercompressed Plasma",
"icon": 405,
"classjob": -1
},
{
"id": 3659,
"name": "3000-tonze Missile",
"icon": 405,
"classjob": -1
},
{
"id": 3660,
"name": "3000-tonze Missile",
"icon": 405,
"classjob": -1
},
{
"id": 3661,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 3662,
"name": "Light Impact",
"icon": 405,
"classjob": -1
},
{
"id": 3663,
"name": "Emergency Liftoff",
"icon": 405,
"classjob": -1
},
{
"id": 3664,
"name": "Jet Exhaust",
"icon": 405,
"classjob": -1
},
{
"id": 3665,
"name": "Quick Landing",
"icon": 405,
"classjob": -1
},
{
"id": 3666,
"name": "Resin Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 3667,
"name": "Needle Spaser",
"icon": 405,
"classjob": -1
},
{
"id": 3668,
"name": "Particle Collision",
"icon": 405,
"classjob": -1
},
{
"id": 3669,
"name": "Fastcast",
"icon": 405,
"classjob": -1
},
{
"id": 3670,
"name": "Trunk Tawse",
"icon": 405,
"classjob": -1
},
{
"id": 3671,
"name": "Rock Of Ages",
"icon": 405,
"classjob": -1
},
{
"id": 3672,
"name": "Wooly Inspiration",
"icon": 405,
"classjob": -1
},
{
"id": 3673,
"name": "Tusk Butt",
"icon": 405,
"classjob": -1
},
{
"id": 3674,
"name": "Rout",
"icon": 405,
"classjob": -1
},
{
"id": 3675,
"name": "Rear",
"icon": 405,
"classjob": -1
},
{
"id": 3676,
"name": "Prehistoric Trumpet",
"icon": 405,
"classjob": -1
},
{
"id": 3677,
"name": "Skullsplinter",
"icon": 405,
"classjob": -1
},
{
"id": 3678,
"name": "Tumulus",
"icon": 405,
"classjob": -1
},
{
"id": 3679,
"name": "Lifeless Wail",
"icon": 405,
"classjob": -1
},
{
"id": 3680,
"name": "Death Spiral",
"icon": 405,
"classjob": -1
},
{
"id": 3681,
"name": "Widowmaker",
"icon": 405,
"classjob": -1
},
{
"id": 3682,
"name": "Overturn",
"icon": 405,
"classjob": -1
},
{
"id": 3683,
"name": "Dead Alive",
"icon": 405,
"classjob": -1
},
{
"id": 3684,
"name": "Rictus",
"icon": 405,
"classjob": -1
},
{
"id": 3685,
"name": "Iron Tempest",
"icon": 405,
"classjob": -1
},
{
"id": 3686,
"name": "Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 3687,
"name": "Black Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 3688,
"name": "Black Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 3689,
"name": "Lifeless Wind",
"icon": 405,
"classjob": -1
},
{
"id": 3690,
"name": "A Bone Reborn",
"icon": 405,
"classjob": -1
},
{
"id": 3691,
"name": "Brain Drain",
"icon": 405,
"classjob": -1
},
{
"id": 3692,
"name": "Golden Talons",
"icon": 405,
"classjob": -1
},
{
"id": 3693,
"name": "Freefall",
"icon": 405,
"classjob": -1
},
{
"id": 3694,
"name": "Alpine Draft",
"icon": 405,
"classjob": -1
},
{
"id": 3695,
"name": "Whirling Gaol",
"icon": 405,
"classjob": -1
},
{
"id": 3696,
"name": "Winds Of Winter",
"icon": 405,
"classjob": -1
},
{
"id": 3697,
"name": "Whirling Gaol",
"icon": 405,
"classjob": -1
},
{
"id": 3698,
"name": "Imprison",
"icon": 405,
"classjob": -1
},
{
"id": 3699,
"name": "Whirligig",
"icon": 405,
"classjob": -1
},
{
"id": 3700,
"name": "Falling Rubble",
"icon": 405,
"classjob": -1
},
{
"id": 3701,
"name": "Shatter",
"icon": 405,
"classjob": -1
},
{
"id": 3702,
"name": "Thump",
"icon": 405,
"classjob": -1
},
{
"id": 3703,
"name": "Slowball",
"icon": 405,
"classjob": -1
},
{
"id": 3704,
"name": "Chilling Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 3705,
"name": "Sanguine Bite",
"icon": 405,
"classjob": -1
},
{
"id": 3706,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 3707,
"name": "Mana Capacitor",
"icon": 405,
"classjob": -1
},
{
"id": 3708,
"name": "Muscle Activator",
"icon": 405,
"classjob": -1
},
{
"id": 3709,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 3710,
"name": "Pressure Increase",
"icon": 405,
"classjob": -1
},
{
"id": 3711,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3712,
"name": "Dragonfly Avatar",
"icon": 405,
"classjob": -1
},
{
"id": 3713,
"name": "Scorpion Avatar",
"icon": 405,
"classjob": -1
},
{
"id": 3714,
"name": "Beetle Avatar",
"icon": 405,
"classjob": -1
},
{
"id": 3715,
"name": "Blinding Blade",
"icon": 405,
"classjob": -1
},
{
"id": 3716,
"name": "The Seeing Tail",
"icon": 405,
"classjob": -1
},
{
"id": 3717,
"name": "The Seeing Wing",
"icon": 405,
"classjob": -1
},
{
"id": 3718,
"name": "Revengeance",
"icon": 405,
"classjob": -1
},
{
"id": 3719,
"name": "Prelude To Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 3720,
"name": "Prelude To Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 3721,
"name": "Prelude To Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 3722,
"name": "Prelude To Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 3723,
"name": "Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 3724,
"name": "Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 3725,
"name": "Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 3726,
"name": "Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 3727,
"name": "Tapasya",
"icon": 405,
"classjob": -1
},
{
"id": 3728,
"name": "Tapasya",
"icon": 405,
"classjob": -1
},
{
"id": 3729,
"name": "Atma-Linga",
"icon": 405,
"classjob": -1
},
{
"id": 3730,
"name": "Falling Laughter",
"icon": 405,
"classjob": -1
},
{
"id": 3731,
"name": "Bloody Fuller",
"icon": 405,
"classjob": -1
},
{
"id": 3734,
"name": "Laughing Moon",
"icon": 405,
"classjob": -1
},
{
"id": 3735,
"name": "Chandrahas",
"icon": 405,
"classjob": -1
},
{
"id": 3736,
"name": "The Rose Of Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 3737,
"name": "The Rose Of Conquest",
"icon": 405,
"classjob": -1
},
{
"id": 3738,
"name": "Pillars Of Heaven",
"icon": 405,
"classjob": -1
},
{
"id": 3739,
"name": "Surpanakha",
"icon": 405,
"classjob": -1
},
{
"id": 3740,
"name": "The Rose Of Hate",
"icon": 405,
"classjob": -1
},
{
"id": 3741,
"name": "Swift Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 3742,
"name": "Swift Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 3743,
"name": "Blinding Blade",
"icon": 405,
"classjob": -1
},
{
"id": 3744,
"name": "The Seeing Left",
"icon": 405,
"classjob": -1
},
{
"id": 3745,
"name": "The Seeing Right",
"icon": 405,
"classjob": -1
},
{
"id": 3746,
"name": "The Seeing Wings",
"icon": 405,
"classjob": -1
},
{
"id": 3747,
"name": "Revengeance",
"icon": 405,
"classjob": -1
},
{
"id": 3748,
"name": "Tapasya",
"icon": 405,
"classjob": -1
},
{
"id": 3749,
"name": "Tapasya",
"icon": 405,
"classjob": -1
},
{
"id": 3750,
"name": "Atma-Linga",
"icon": 405,
"classjob": -1
},
{
"id": 3751,
"name": "Swift Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3752,
"name": "Swift Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3753,
"name": "Swift Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3754,
"name": "Swift Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3755,
"name": "Swift Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3756,
"name": "Final Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3757,
"name": "Final Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3758,
"name": "Final Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3759,
"name": "Final Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3761,
"name": "Warlord Shell",
"icon": 405,
"classjob": -1
},
{
"id": 3762,
"name": "Warlord Flame",
"icon": 405,
"classjob": -1
},
{
"id": 3763,
"name": "Bloody Fuller",
"icon": 405,
"classjob": -1
},
{
"id": 3764,
"name": "Laughing Moon",
"icon": 405,
"classjob": -1
},
{
"id": 3765,
"name": "Chandrahas",
"icon": 405,
"classjob": -1
},
{
"id": 3766,
"name": "The Rose Of Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 3767,
"name": "The Rose Of Conquest",
"icon": 405,
"classjob": -1
},
{
"id": 3768,
"name": "Pillars Of Heaven",
"icon": 405,
"classjob": -1
},
{
"id": 3769,
"name": "Laughing Rose",
"icon": 405,
"classjob": -1
},
{
"id": 3770,
"name": "Surpanakha",
"icon": 405,
"classjob": -1
},
{
"id": 3771,
"name": "The Rose Of Hate",
"icon": 405,
"classjob": -1
},
{
"id": 3772,
"name": "Prelude To Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3773,
"name": "Prelude To Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3774,
"name": "Prelude To Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3775,
"name": "Prelude To Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3776,
"name": "Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3777,
"name": "Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3778,
"name": "Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 3779,
"name": "Void Spark",
"icon": 405,
"classjob": -1
},
{
"id": 3780,
"name": "Void Spark",
"icon": 405,
"classjob": -1
},
{
"id": 3781,
"name": "Chaos Blast",
"icon": 405,
"classjob": -1
},
{
"id": 3782,
"name": "Void Call",
"icon": 405,
"classjob": -1
},
{
"id": 3783,
"name": "Paperweight",
"icon": 405,
"classjob": -1
},
{
"id": 3784,
"name": "Deathtrap",
"icon": 405,
"classjob": -1
},
{
"id": 3785,
"name": "Ink Blot",
"icon": 405,
"classjob": -1
},
{
"id": 3786,
"name": "Tackle",
"icon": 405,
"classjob": -1
},
{
"id": 3787,
"name": "Level 5 Death",
"icon": 405,
"classjob": -1
},
{
"id": 3788,
"name": "Death Ray",
"icon": 405,
"classjob": -1
},
{
"id": 3789,
"name": "Horror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 3790,
"name": "Weighing Of The Heart",
"icon": 405,
"classjob": -1
},
{
"id": 3791,
"name": "Dark Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 3792,
"name": "Weighing Of The Heart",
"icon": 405,
"classjob": -1
},
{
"id": 3793,
"name": "Bloody Caress",
"icon": 405,
"classjob": -1
},
{
"id": 3794,
"name": "Acid Rain",
"icon": 405,
"classjob": -1
},
{
"id": 3795,
"name": "Photosynthesis",
"icon": 405,
"classjob": -1
},
{
"id": 3796,
"name": "Quick Creeper",
"icon": 405,
"classjob": -1
},
{
"id": 3797,
"name": "Phytobeam",
"icon": 405,
"classjob": -1
},
{
"id": 3798,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 3799,
"name": "Acid Rain",
"icon": 405,
"classjob": -1
},
{
"id": 3801,
"name": "Acid Spray",
"icon": 405,
"classjob": -1
},
{
"id": 3802,
"name": "Acid Cloud",
"icon": 405,
"classjob": -1
},
{
"id": 3803,
"name": "Overbite",
"icon": 405,
"classjob": -1
},
{
"id": 3804,
"name": "Razor Scales",
"icon": 405,
"classjob": -1
},
{
"id": 3805,
"name": "Ensnare",
"icon": 405,
"classjob": -1
},
{
"id": 3806,
"name": "Mad Dash",
"icon": 405,
"classjob": -1
},
{
"id": 3807,
"name": "Mad Dash",
"icon": 405,
"classjob": -1
},
{
"id": 3808,
"name": "Mad Dash",
"icon": 405,
"classjob": -1
},
{
"id": 3809,
"name": "Mad Dash",
"icon": 405,
"classjob": -1
},
{
"id": 3810,
"name": "Primordial Roar",
"icon": 405,
"classjob": -1
},
{
"id": 3811,
"name": "Abyssic Buster",
"icon": 405,
"classjob": -1
},
{
"id": 3812,
"name": "Dark Star",
"icon": 405,
"classjob": -1
},
{
"id": 3813,
"name": "Chaos Blast",
"icon": 405,
"classjob": -1
},
{
"id": 3814,
"name": "Comet",
"icon": 405,
"classjob": -1
},
{
"id": 3815,
"name": "Heavensfall",
"icon": 405,
"classjob": -1
},
{
"id": 3816,
"name": "Comet",
"icon": 405,
"classjob": -1
},
{
"id": 3817,
"name": "Heavensfall",
"icon": 405,
"classjob": -1
},
{
"id": 3818,
"name": "Heavensfall",
"icon": 405,
"classjob": -1
},
{
"id": 3819,
"name": "Chaos Blast",
"icon": 405,
"classjob": -1
},
{
"id": 3820,
"name": "Digest",
"icon": 405,
"classjob": -1
},
{
"id": 3821,
"name": "Uplander Doom",
"icon": 405,
"classjob": -1
},
{
"id": 3822,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 3823,
"name": "Searing Wind",
"icon": 405,
"classjob": -1
},
{
"id": 3824,
"name": "Void Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 3825,
"name": "Terminus Est",
"icon": 405,
"classjob": -1
},
{
"id": 3826,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3827,
"name": "Fluid Swing",
"icon": 405,
"classjob": -1
},
{
"id": 3828,
"name": "Splash",
"icon": 405,
"classjob": -1
},
{
"id": 3829,
"name": "Protean Wave",
"icon": 405,
"classjob": -1
},
{
"id": 3830,
"name": "Protean Wave",
"icon": 405,
"classjob": -1
},
{
"id": 3831,
"name": "Protean Wave",
"icon": 405,
"classjob": -1
},
{
"id": 3832,
"name": "Protean Wave",
"icon": 405,
"classjob": -1
},
{
"id": 3833,
"name": "Sluice",
"icon": 405,
"classjob": -1
},
{
"id": 3834,
"name": "Sluice",
"icon": 405,
"classjob": -1
},
{
"id": 3835,
"name": "Sluice",
"icon": 405,
"classjob": -1
},
{
"id": 3836,
"name": "Fluid Swing",
"icon": 405,
"classjob": -1
},
{
"id": 3837,
"name": "Valve",
"icon": 405,
"classjob": -1
},
{
"id": 3838,
"name": "Cascade",
"icon": 405,
"classjob": -1
},
{
"id": 3839,
"name": "Cascade",
"icon": 405,
"classjob": -1
},
{
"id": 3840,
"name": "Digititis",
"icon": 405,
"classjob": -1
},
{
"id": 3841,
"name": "Ferrofluid",
"icon": 405,
"classjob": -1
},
{
"id": 3842,
"name": "Liquid Gaol",
"icon": 405,
"classjob": -1
},
{
"id": 3843,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3844,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 3845,
"name": "Fluid Strike",
"icon": 405,
"classjob": -1
},
{
"id": 3846,
"name": "Fluid Strike",
"icon": 405,
"classjob": -1
},
{
"id": 3847,
"name": "Wash Away",
"icon": 405,
"classjob": -1
},
{
"id": 3848,
"name": "Digititis",
"icon": 405,
"classjob": -1
},
{
"id": 3849,
"name": "Equal Concentration",
"icon": 405,
"classjob": -1
},
{
"id": 3850,
"name": "Hand Of Pain",
"icon": 405,
"classjob": -1
},
{
"id": 3851,
"name": "Hand Of Prayer",
"icon": 405,
"classjob": -1
},
{
"id": 3852,
"name": "Hand Of Parting",
"icon": 405,
"classjob": -1
},
{
"id": 3853,
"name": "Fluid Claw",
"icon": 405,
"classjob": -1
},
{
"id": 3854,
"name": "Release",
"icon": 405,
"classjob": -1
},
{
"id": 3855,
"name": "Contamination",
"icon": 405,
"classjob": -1
},
{
"id": 3856,
"name": "Drainage",
"icon": 405,
"classjob": -1
},
{
"id": 3857,
"name": "Severe Contamination",
"icon": 405,
"classjob": -1
},
{
"id": 3858,
"name": "Ferrofluid",
"icon": 405,
"classjob": -1
},
{
"id": 3859,
"name": "Magnetism",
"icon": 405,
"classjob": -1
},
{
"id": 3860,
"name": "Ultramagnetism",
"icon": 405,
"classjob": -1
},
{
"id": 3861,
"name": "Repel",
"icon": 405,
"classjob": -1
},
{
"id": 3863,
"name": "Contamination",
"icon": 405,
"classjob": -1
},
{
"id": 3864,
"name": "Drainage",
"icon": 405,
"classjob": -1
},
{
"id": 3865,
"name": "Protean Wave",
"icon": 405,
"classjob": -1
},
{
"id": 3866,
"name": "Liquid Gaol",
"icon": 405,
"classjob": -1
},
{
"id": 3867,
"name": "Pressurize",
"icon": 405,
"classjob": -1
},
{
"id": 3868,
"name": "Outburst",
"icon": 405,
"classjob": -1
},
{
"id": 3869,
"name": "Oil Blast",
"icon": 405,
"classjob": -1
},
{
"id": 3870,
"name": "Oil Blast",
"icon": 405,
"classjob": -1
},
{
"id": 3871,
"name": "Current Leakage",
"icon": 405,
"classjob": -1
},
{
"id": 3872,
"name": "Current Leakage",
"icon": 405,
"classjob": -1
},
{
"id": 3873,
"name": "Mucilage",
"icon": 405,
"classjob": -1
},
{
"id": 3881,
"name": "Hydromorph",
"icon": 405,
"classjob": -1
},
{
"id": 3882,
"name": "Countershade",
"icon": 405,
"classjob": -1
},
{
"id": 3883,
"name": "Filoplumes",
"icon": 405,
"classjob": -1
},
{
"id": 3884,
"name": "Feather Squall",
"icon": 405,
"classjob": -1
},
{
"id": 3885,
"name": "Feather Squall",
"icon": 405,
"classjob": -1
},
{
"id": 3886,
"name": "Sideslip",
"icon": 405,
"classjob": -1
},
{
"id": 3887,
"name": "Electric Predation",
"icon": 405,
"classjob": -1
},
{
"id": 3888,
"name": "Ionospheric Charge",
"icon": 405,
"classjob": -1
},
{
"id": 3889,
"name": "Electric Cachexia",
"icon": 405,
"classjob": -1
},
{
"id": 3890,
"name": "Electrocution",
"icon": 405,
"classjob": -1
},
{
"id": 3891,
"name": "Electrocution",
"icon": 405,
"classjob": -1
},
{
"id": 3892,
"name": "Ground",
"icon": 405,
"classjob": -1
},
{
"id": 3893,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 3894,
"name": "Reflux",
"icon": 405,
"classjob": -1
},
{
"id": 3895,
"name": "Spiked Tail",
"icon": 405,
"classjob": -1
},
{
"id": 3896,
"name": "The Serpent's Apple",
"icon": 405,
"classjob": -1
},
{
"id": 3897,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 3898,
"name": "Original Sin",
"icon": 405,
"classjob": -1
},
{
"id": 3899,
"name": "Fall Of Man",
"icon": 405,
"classjob": -1
},
{
"id": 3900,
"name": "Folly",
"icon": 405,
"classjob": -1
},
{
"id": 3901,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 3902,
"name": "Cyclonic Separation",
"icon": 405,
"classjob": -1
},
{
"id": 3903,
"name": "The Scarlet Whisper",
"icon": 405,
"classjob": -1
},
{
"id": 3904,
"name": "The Scarlet Price",
"icon": 405,
"classjob": -1
},
{
"id": 3905,
"name": "The Scarlet Price",
"icon": 405,
"classjob": -1
},
{
"id": 3906,
"name": "Scarlet Thread",
"icon": 405,
"classjob": -1
},
{
"id": 3907,
"name": "Deafening Bellow",
"icon": 405,
"classjob": -1
},
{
"id": 3908,
"name": "The Sable Price",
"icon": 405,
"classjob": -1
},
{
"id": 3909,
"name": "Sable Weave",
"icon": 405,
"classjob": -1
},
{
"id": 3910,
"name": "Massacre",
"icon": 405,
"classjob": -1
},
{
"id": 3911,
"name": "Massacre",
"icon": 405,
"classjob": -1
},
{
"id": 3912,
"name": "Takeoff",
"icon": 405,
"classjob": -1
},
{
"id": 3913,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 3914,
"name": "Personal Barrier",
"icon": 405,
"classjob": -1
},
{
"id": 3915,
"name": "Blazing Trail",
"icon": 405,
"classjob": -1
},
{
"id": 3916,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 3917,
"name": "Roast",
"icon": 405,
"classjob": -1
},
{
"id": 3918,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 3919,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 3920,
"name": "Rime Wreath",
"icon": 405,
"classjob": -1
},
{
"id": 3921,
"name": "Frost Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3922,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 3923,
"name": "Tramontane",
"icon": 405,
"classjob": -1
},
{
"id": 3924,
"name": "Terminus Est",
"icon": 405,
"classjob": -1
},
{
"id": 3925,
"name": "Sanguine Blade",
"icon": 405,
"classjob": -1
},
{
"id": 3926,
"name": "Between The Lines",
"icon": 405,
"classjob": -1
},
{
"id": 3927,
"name": "Coryza",
"icon": 405,
"classjob": -1
},
{
"id": 3928,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 3929,
"name": "Iceball",
"icon": 405,
"classjob": -1
},
{
"id": 3930,
"name": "Dragon's Blood",
"icon": 405,
"classjob": -1
},
{
"id": 3931,
"name": "Hydrothermal Missile",
"icon": 405,
"classjob": -1
},
{
"id": 3932,
"name": "Mortal Revolution",
"icon": 405,
"classjob": -1
},
{
"id": 3933,
"name": "Perpetual Ray",
"icon": 405,
"classjob": -1
},
{
"id": 3934,
"name": "Carnage Zero",
"icon": 405,
"classjob": -1
},
{
"id": 3935,
"name": "Perpetual Ray",
"icon": 405,
"classjob": -1
},
{
"id": 3936,
"name": "Hydrothermal Missile",
"icon": 405,
"classjob": -1
},
{
"id": 3937,
"name": "Discoid",
"icon": 405,
"classjob": -1
},
{
"id": 3938,
"name": "Emergency Quarantine",
"icon": 405,
"classjob": -1
},
{
"id": 3939,
"name": "Carnage",
"icon": 405,
"classjob": -1
},
{
"id": 3940,
"name": "Judgment Nisi",
"icon": 405,
"classjob": -1
},
{
"id": 3941,
"name": "Judgment Nisi",
"icon": 405,
"classjob": -1
},
{
"id": 3942,
"name": "Royal Pentacle",
"icon": 405,
"classjob": -1
},
{
"id": 3943,
"name": "Aetherochemical Laser",
"icon": 405,
"classjob": -1
},
{
"id": 3944,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 3945,
"name": "Panzerfaust",
"icon": 405,
"classjob": -1
},
{
"id": 3946,
"name": "Pressure Decrease",
"icon": 405,
"classjob": -1
},
{
"id": 3947,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 3948,
"name": "Wirbelwind",
"icon": 405,
"classjob": -1
},
{
"id": 3949,
"name": "Exhaust",
"icon": 405,
"classjob": -1
},
{
"id": 3950,
"name": "Reducible Complexity",
"icon": 405,
"classjob": -1
},
{
"id": 3951,
"name": "Laser Absorption",
"icon": 405,
"classjob": -1
},
{
"id": 3952,
"name": "Laser Diffusion",
"icon": 405,
"classjob": -1
},
{
"id": 3953,
"name": "Reprobation",
"icon": 405,
"classjob": -1
},
{
"id": 3954,
"name": "Retribution",
"icon": 405,
"classjob": -1
},
{
"id": 3955,
"name": "Reprobation",
"icon": 405,
"classjob": -1
},
{
"id": 3956,
"name": "Retribution",
"icon": 405,
"classjob": -1
},
{
"id": 3957,
"name": "Exhaust",
"icon": 405,
"classjob": -1
},
{
"id": 3958,
"name": "Final Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 3959,
"name": "Fracture",
"icon": 405,
"classjob": -1
},
{
"id": 3960,
"name": "Forward Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 3961,
"name": "Words Of Winter",
"icon": 405,
"classjob": -1
},
{
"id": 3962,
"name": "Rapid Sever",
"icon": 405,
"classjob": -1
},
{
"id": 3963,
"name": "Double Sever",
"icon": 405,
"classjob": -1
},
{
"id": 3964,
"name": "Double Sever",
"icon": 405,
"classjob": -1
},
{
"id": 3965,
"name": "Double Sever",
"icon": 405,
"classjob": -1
},
{
"id": 3966,
"name": "Atmospheric Displacement",
"icon": 405,
"classjob": -1
},
{
"id": 3967,
"name": "Overclock",
"icon": 405,
"classjob": -1
},
{
"id": 3968,
"name": "Atmospheric Compression",
"icon": 405,
"classjob": -1
},
{
"id": 3969,
"name": "11-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 3970,
"name": "111-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 3971,
"name": "10-tonze Slash",
"icon": 405,
"classjob": -1
},
{
"id": 3972,
"name": "Disorienting Groan",
"icon": 405,
"classjob": -1
},
{
"id": 3973,
"name": "Disorienting Groan",
"icon": 405,
"classjob": -1
},
{
"id": 3974,
"name": "Zoom In",
"icon": 405,
"classjob": -1
},
{
"id": 3975,
"name": "1111-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 3976,
"name": "Feast",
"icon": 405,
"classjob": -1
},
{
"id": 3977,
"name": "Sanctification",
"icon": 405,
"classjob": -1
},
{
"id": 3978,
"name": "Unholy",
"icon": 405,
"classjob": -1
},
{
"id": 3979,
"name": "Aetherochemical Explosive",
"icon": 405,
"classjob": -1
},
{
"id": 3980,
"name": "Aetherochemical Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 3981,
"name": "The Educator",
"icon": 405,
"classjob": -1
},
{
"id": 3982,
"name": "Broken Glass",
"icon": 405,
"classjob": -1
},
{
"id": 3983,
"name": "Aetherochemical Mine",
"icon": 405,
"classjob": -1
},
{
"id": 3984,
"name": "Aetherochemical Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 3985,
"name": "Seed Of The Rivers",
"icon": 405,
"classjob": -1
},
{
"id": 3986,
"name": "The Educator Boot Sequence",
"icon": 405,
"classjob": -1
},
{
"id": 3988,
"name": "Auto-cannons",
"icon": 405,
"classjob": -1
},
{
"id": 3991,
"name": "First Lesson",
"icon": 405,
"classjob": -1
},
{
"id": 3992,
"name": "Thunder Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 3993,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 3994,
"name": "Dragon's Blood",
"icon": 405,
"classjob": -1
},
{
"id": 3995,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 3996,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 3997,
"name": "Heat Breath",
"icon": 405,
"classjob": -1
},
{
"id": 3998,
"name": "Tail Smash",
"icon": 405,
"classjob": -1
},
{
"id": 3999,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 4000,
"name": "Hand Of The Empire",
"icon": 405,
"classjob": -1
},
{
"id": 4001,
"name": "Innocence",
"icon": 405,
"classjob": -1
},
{
"id": 4002,
"name": "Mark Of Death",
"icon": 405,
"classjob": -1
},
{
"id": 4003,
"name": "Tail Screw",
"icon": 405,
"classjob": -1
},
{
"id": 4004,
"name": "Wild Instinct",
"icon": 405,
"classjob": -1
},
{
"id": 4005,
"name": "Terminus Est",
"icon": 405,
"classjob": -1
},
{
"id": 4007,
"name": "Garlean Fire",
"icon": 405,
"classjob": -1
},
{
"id": 4008,
"name": "Burn",
"icon": 405,
"classjob": -1
},
{
"id": 4009,
"name": "Chaos Blast",
"icon": 405,
"classjob": -1
},
{
"id": 4010,
"name": "Cetacean Rage",
"icon": 405,
"classjob": -1
},
{
"id": 4011,
"name": "Baleen Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 4012,
"name": "Rain Storm",
"icon": 405,
"classjob": -1
},
{
"id": 4013,
"name": "Mortal Revolution",
"icon": 405,
"classjob": -1
},
{
"id": 4014,
"name": "Primal Tears",
"icon": 405,
"classjob": -1
},
{
"id": 4015,
"name": "Sharp Gust",
"icon": 405,
"classjob": -1
},
{
"id": 4016,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 4017,
"name": "Magicked Bubble",
"icon": 405,
"classjob": -1
},
{
"id": 4018,
"name": "Writhe",
"icon": 405,
"classjob": -1
},
{
"id": 4019,
"name": "Whale Song",
"icon": 405,
"classjob": -1
},
{
"id": 4020,
"name": "Breach Blast",
"icon": 405,
"classjob": -1
},
{
"id": 4021,
"name": "Windcaller",
"icon": 405,
"classjob": -1
},
{
"id": 4022,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 4023,
"name": "Spiritual Ray",
"icon": 405,
"classjob": -1
},
{
"id": 4024,
"name": "Water Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 4025,
"name": "Death Blossom",
"icon": 405,
"classjob": -1
},
{
"id": 4026,
"name": "Morrowmotes",
"icon": 405,
"classjob": -1
},
{
"id": 4027,
"name": "Falling Sky",
"icon": 405,
"classjob": -1
},
{
"id": 4028,
"name": "Howling Wing",
"icon": 405,
"classjob": -1
},
{
"id": 4029,
"name": "Powerful Gust",
"icon": 405,
"classjob": -1
},
{
"id": 4030,
"name": "Extreme Wind",
"icon": 405,
"classjob": -1
},
{
"id": 4031,
"name": "Dry Fin",
"icon": 405,
"classjob": -1
},
{
"id": 4032,
"name": "Dead Wind",
"icon": 405,
"classjob": -1
},
{
"id": 4033,
"name": "Wet Fin",
"icon": 405,
"classjob": -1
},
{
"id": 4034,
"name": "Dead Water",
"icon": 405,
"classjob": -1
},
{
"id": 4035,
"name": "Baleen Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 4036,
"name": "Vacuum Wave",
"icon": 405,
"classjob": -1
},
{
"id": 4037,
"name": "Atmospheric Disruption",
"icon": 405,
"classjob": -1
},
{
"id": 4038,
"name": "Shrug",
"icon": 405,
"classjob": -1
},
{
"id": 4042,
"name": "Hardsilver Chain",
"icon": 405,
"classjob": -1
},
{
"id": 4043,
"name": "Bodyhurt Breakblock",
"icon": 405,
"classjob": -1
},
{
"id": 4044,
"name": "Brainhurt Breakblock",
"icon": 405,
"classjob": -1
},
{
"id": 4045,
"name": "Tempered Will",
"icon": 405,
"classjob": -1
},
{
"id": 4046,
"name": "Sniper Shot",
"icon": 405,
"classjob": -1
},
{
"id": 4047,
"name": "Goblin Rush",
"icon": 405,
"classjob": -1
},
{
"id": 4048,
"name": "Gobbieboom",
"icon": 405,
"classjob": -1
},
{
"id": 4049,
"name": "Snapcannon",
"icon": 405,
"classjob": -1
},
{
"id": 4050,
"name": "Heavydoom",
"icon": 405,
"classjob": -1
},
{
"id": 4051,
"name": "Meltyspume",
"icon": 405,
"classjob": -1
},
{
"id": 4052,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 4053,
"name": "Pressure Increase",
"icon": 405,
"classjob": -1
},
{
"id": 4054,
"name": "Blitzstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 4055,
"name": "Snapcannon",
"icon": 405,
"classjob": -1
},
{
"id": 4056,
"name": "Boomcannon",
"icon": 405,
"classjob": -1
},
{
"id": 4057,
"name": "Bangyzoom",
"icon": 405,
"classjob": -1
},
{
"id": 4058,
"name": "Carpet Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 4059,
"name": "Giant Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 4060,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 4061,
"name": "Massive Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 4062,
"name": "Heavydoom",
"icon": 61122,
"classjob": 0
},
{
"id": 4063,
"name": "Cracklyplume",
"icon": 61123,
"classjob": 0
},
{
"id": 4064,
"name": "Meltyspume",
"icon": 61124,
"classjob": 0
},
{
"id": 4065,
"name": "Stickyloom",
"icon": 61125,
"classjob": 0
},
{
"id": 4066,
"name": "Self-destruct",
"icon": 405,
"classjob": 0
},
{
"id": 4067,
"name": "Recharge",
"icon": 61127,
"classjob": 0
},
{
"id": 4068,
"name": "FF11クラブ：マウント・ゴブリンカニ戦車：自爆",
"icon": 405,
"classjob": -1
},
{
"id": 4069,
"name": "Rain Storm",
"icon": 405,
"classjob": -1
},
{
"id": 4070,
"name": "Thunderhead",
"icon": 405,
"classjob": -1
},
{
"id": 4071,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 4072,
"name": "Clear Vision",
"icon": 1020,
"classjob": 16
},
{
"id": 4073,
"name": "Bountiful Yield",
"icon": 1021,
"classjob": 16
},
{
"id": 4074,
"name": "Collector's Glove",
"icon": 1024,
"classjob": 16
},
{
"id": 4075,
"name": "Methodical Appraisal",
"icon": 1025,
"classjob": 16
},
{
"id": 4076,
"name": "Instinctual Appraisal",
"icon": 1027,
"classjob": 16
},
{
"id": 4077,
"name": "Impulsive Appraisal",
"icon": 1030,
"classjob": 16
},
{
"id": 4078,
"name": "Discerning Eye",
"icon": 1026,
"classjob": 16
},
{
"id": 4079,
"name": "Utmost Caution",
"icon": 1028,
"classjob": 16
},
{
"id": 4080,
"name": "Deep Breath",
"icon": 1031,
"classjob": 16
},
{
"id": 4081,
"name": "Luck Of The Mountaineer",
"icon": 1029,
"classjob": 16
},
{
"id": 4082,
"name": "Dredge",
"icon": 1022,
"classjob": 16
},
{
"id": 4083,
"name": "Dredge II",
"icon": 1023,
"classjob": 16
},
{
"id": 4084,
"name": "Single Mind",
"icon": 1032,
"classjob": 16
},
{
"id": 4085,
"name": "Last Ditch",
"icon": 1033,
"classjob": 16
},
{
"id": 4086,
"name": "Flora Mastery",
"icon": 1070,
"classjob": 17
},
{
"id": 4087,
"name": "Bountiful Harvest",
"icon": 1071,
"classjob": 17
},
{
"id": 4088,
"name": "Collector's Glove",
"icon": 1074,
"classjob": 17
},
{
"id": 4089,
"name": "Methodical Appraisal",
"icon": 1075,
"classjob": 17
},
{
"id": 4090,
"name": "Instinctual Appraisal",
"icon": 1077,
"classjob": 17
},
{
"id": 4091,
"name": "Impulsive Appraisal",
"icon": 1080,
"classjob": 17
},
{
"id": 4092,
"name": "Discerning Eye",
"icon": 1076,
"classjob": 17
},
{
"id": 4093,
"name": "Utmost Caution",
"icon": 1078,
"classjob": 17
},
{
"id": 4094,
"name": "Deep Breath",
"icon": 1081,
"classjob": 17
},
{
"id": 4095,
"name": "Luck Of The Pioneer",
"icon": 1079,
"classjob": 17
},
{
"id": 4096,
"name": "Prune",
"icon": 1072,
"classjob": 17
},
{
"id": 4097,
"name": "Prune II",
"icon": 1073,
"classjob": 17
},
{
"id": 4098,
"name": "Single Mind",
"icon": 1082,
"classjob": 17
},
{
"id": 4099,
"name": "Last Ditch",
"icon": 1083,
"classjob": 17
},
{
"id": 4100,
"name": "Snagging",
"icon": 1109,
"classjob": 18
},
{
"id": 4101,
"name": "Collect",
"icon": 1110,
"classjob": 18
},
{
"id": 4102,
"name": "Patience",
"icon": 1113,
"classjob": 18
},
{
"id": 4103,
"name": "Powerful Hookset",
"icon": 1115,
"classjob": 18
},
{
"id": 4104,
"name": "Chum",
"icon": 1111,
"classjob": 18
},
{
"id": 4105,
"name": "Fish Eyes",
"icon": 1112,
"classjob": 18
},
{
"id": 4106,
"name": "Patience II",
"icon": 1114,
"classjob": 18
},
{
"id": 4108,
"name": "Sacred Totem",
"icon": 405,
"classjob": -1
},
{
"id": 4109,
"name": "Sacred Totem",
"icon": 405,
"classjob": -1
},
{
"id": 4110,
"name": "Totem Chant",
"icon": 405,
"classjob": -1
},
{
"id": 4111,
"name": "Vanu Stripe",
"icon": 405,
"classjob": -1
},
{
"id": 4112,
"name": "Morrowcloud",
"icon": 405,
"classjob": -1
},
{
"id": 4113,
"name": "Strong Wind",
"icon": 405,
"classjob": -1
},
{
"id": 4114,
"name": "Deep Depression",
"icon": 405,
"classjob": -1
},
{
"id": 4115,
"name": "Vacuum Wave",
"icon": 405,
"classjob": -1
},
{
"id": 4116,
"name": "Turbine",
"icon": 405,
"classjob": -1
},
{
"id": 4117,
"name": "Fin Rays",
"icon": 405,
"classjob": -1
},
{
"id": 4118,
"name": "74 Degrees",
"icon": 405,
"classjob": -1
},
{
"id": 4119,
"name": "Overflow",
"icon": 405,
"classjob": -1
},
{
"id": 4122,
"name": "Advent",
"icon": 405,
"classjob": -1
},
{
"id": 4125,
"name": "Heavenly Slash",
"icon": 405,
"classjob": -1
},
{
"id": 4126,
"name": "Holiest Of Holy",
"icon": 405,
"classjob": -1
},
{
"id": 4127,
"name": "Holy Shield Bash",
"icon": 405,
"classjob": -1
},
{
"id": 4128,
"name": "Solid Ascension",
"icon": 405,
"classjob": -1
},
{
"id": 4129,
"name": "Solid Ascension",
"icon": 405,
"classjob": -1
},
{
"id": 4130,
"name": "Shining Blade",
"icon": 405,
"classjob": -1
},
{
"id": 4131,
"name": "Execution",
"icon": 405,
"classjob": -1
},
{
"id": 4132,
"name": "Bright Flare",
"icon": 405,
"classjob": -1
},
{
"id": 4133,
"name": "Heavy Swing",
"icon": 405,
"classjob": -1
},
{
"id": 4134,
"name": "Hyperdimensional Slash",
"icon": 405,
"classjob": -1
},
{
"id": 4135,
"name": "Faith Unmoving",
"icon": 405,
"classjob": -1
},
{
"id": 4136,
"name": "Dimensional Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 4137,
"name": "Dimensional Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 4138,
"name": "Dimensional Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 4139,
"name": "Dimensional Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 4140,
"name": "Dimensional Rip",
"icon": 405,
"classjob": -1
},
{
"id": 4141,
"name": "Stellar Implosion",
"icon": 405,
"classjob": -1
},
{
"id": 4142,
"name": "Dimensional Torsion",
"icon": 405,
"classjob": -1
},
{
"id": 4143,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 4144,
"name": "Altar Candle",
"icon": 405,
"classjob": -1
},
{
"id": 4145,
"name": "Heavensflame",
"icon": 405,
"classjob": -1
},
{
"id": 4146,
"name": "Heavensflame",
"icon": 405,
"classjob": -1
},
{
"id": 4147,
"name": "Holy Chain",
"icon": 405,
"classjob": -1
},
{
"id": 4148,
"name": "Holy Chain",
"icon": 405,
"classjob": -1
},
{
"id": 4149,
"name": "Altar Pyre",
"icon": 405,
"classjob": -1
},
{
"id": 4151,
"name": "Pure Of Heart",
"icon": 405,
"classjob": -1
},
{
"id": 4152,
"name": "White Knight's Tour",
"icon": 405,
"classjob": -1
},
{
"id": 4153,
"name": "Black Knight's Tour",
"icon": 405,
"classjob": -1
},
{
"id": 4154,
"name": "Turret Charge",
"icon": 405,
"classjob": -1
},
{
"id": 4155,
"name": "Turret Charge",
"icon": 405,
"classjob": -1
},
{
"id": 4156,
"name": "Sacred Flame",
"icon": 405,
"classjob": -1
},
{
"id": 4157,
"name": "Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 4158,
"name": "Gale Cut",
"icon": 405,
"classjob": -1
},
{
"id": 4159,
"name": "Page Tear",
"icon": 405,
"classjob": -1
},
{
"id": 4161,
"name": "(仮)帝国バリア装置：シールド展開",
"icon": 405,
"classjob": -1
},
{
"id": 4162,
"name": "Black Nebula",
"icon": 405,
"classjob": -1
},
{
"id": 4163,
"name": "Head Down",
"icon": 405,
"classjob": -1
},
{
"id": 4164,
"name": "Bone Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 4165,
"name": "Tail Smash",
"icon": 405,
"classjob": -1
},
{
"id": 4167,
"name": "Bibliocide",
"icon": 405,
"classjob": -1
},
{
"id": 4168,
"name": "Vacuum Blade",
"icon": 405,
"classjob": -1
},
{
"id": 4169,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4170,
"name": "Deathly Whisk",
"icon": 405,
"classjob": -1
},
{
"id": 4171,
"name": "Reedmace",
"icon": 405,
"classjob": -1
},
{
"id": 4172,
"name": "Low Caterwaul",
"icon": 405,
"classjob": -1
},
{
"id": 4173,
"name": "High Caterwaul",
"icon": 405,
"classjob": -1
},
{
"id": 4174,
"name": "Forward Fulguration",
"icon": 405,
"classjob": -1
},
{
"id": 4175,
"name": "Flank Fulguration",
"icon": 405,
"classjob": -1
},
{
"id": 4176,
"name": "Flank Fulguration",
"icon": 405,
"classjob": -1
},
{
"id": 4177,
"name": "Rear Fulguration",
"icon": 405,
"classjob": -1
},
{
"id": 4178,
"name": "Electromagnetic Coil",
"icon": 405,
"classjob": -1
},
{
"id": 4179,
"name": "Precision Hookset",
"icon": 1116,
"classjob": 18
},
{
"id": 4181,
"name": "Pellet",
"icon": 405,
"classjob": -1
},
{
"id": 4182,
"name": "Soul Douse",
"icon": 405,
"classjob": -1
},
{
"id": 4183,
"name": "Nymian Plague",
"icon": 405,
"classjob": -1
},
{
"id": 4190,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4191,
"name": "Ascalon's Might",
"icon": 405,
"classjob": -1
},
{
"id": 4192,
"name": "Ascalon's Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 4193,
"name": "Ascalon's Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 4194,
"name": "Lightning Storm",
"icon": 405,
"classjob": -1
},
{
"id": 4195,
"name": "Lightning Storm",
"icon": 405,
"classjob": -1
},
{
"id": 4196,
"name": "Meteorain",
"icon": 405,
"classjob": -1
},
{
"id": 4197,
"name": "Meteorain",
"icon": 405,
"classjob": -1
},
{
"id": 4198,
"name": "Ancient Quaga",
"icon": 405,
"classjob": -1
},
{
"id": 4199,
"name": "Knights Of The Round",
"icon": 405,
"classjob": -1
},
{
"id": 4200,
"name": "The Dragon's Eye",
"icon": 405,
"classjob": -1
},
{
"id": 4201,
"name": "The Dragon's Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 4202,
"name": "Ultimate End",
"icon": 405,
"classjob": -1
},
{
"id": 4203,
"name": "The Light Of Ascalon",
"icon": 405,
"classjob": -1
},
{
"id": 4204,
"name": "Broad Swing",
"icon": 405,
"classjob": -1
},
{
"id": 4205,
"name": "Sacred Cross",
"icon": 405,
"classjob": -1
},
{
"id": 4206,
"name": "Heavenly Slash",
"icon": 405,
"classjob": -1
},
{
"id": 4207,
"name": "Holiest Of Holy",
"icon": 405,
"classjob": -1
},
{
"id": 4208,
"name": "Holy Bladedance",
"icon": 405,
"classjob": -1
},
{
"id": 4209,
"name": "Holy Bladedance",
"icon": 405,
"classjob": -1
},
{
"id": 4210,
"name": "Shining Blade",
"icon": 405,
"classjob": -1
},
{
"id": 4211,
"name": "Bright Flare",
"icon": 405,
"classjob": -1
},
{
"id": 4212,
"name": "Dimensional Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 4213,
"name": "Dimensional Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 4214,
"name": "Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 4215,
"name": "Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 4216,
"name": "Eternal Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 4217,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4218,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4219,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4220,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4221,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4222,
"name": "Spiral Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 4223,
"name": "Spiral Pierce",
"icon": 405,
"classjob": -1
},
{
"id": 4224,
"name": "Skyward Leap",
"icon": 405,
"classjob": -1
},
{
"id": 4226,
"name": "Skyward Leap",
"icon": 405,
"classjob": -1
},
{
"id": 4227,
"name": "Heavensflame",
"icon": 405,
"classjob": -1
},
{
"id": 4228,
"name": "Heavensflame",
"icon": 405,
"classjob": -1
},
{
"id": 4229,
"name": "Heavensflame",
"icon": 405,
"classjob": -1
},
{
"id": 4230,
"name": "Heavensflame",
"icon": 405,
"classjob": -1
},
{
"id": 4231,
"name": "Heavensflame",
"icon": 405,
"classjob": -1
},
{
"id": 4232,
"name": "Holy Chain",
"icon": 405,
"classjob": -1
},
{
"id": 4233,
"name": "Hiemal Storm",
"icon": 405,
"classjob": -1
},
{
"id": 4234,
"name": "Hiemal Storm",
"icon": 405,
"classjob": -1
},
{
"id": 4235,
"name": "Holy Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 4236,
"name": "Comet Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4237,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4238,
"name": "Big Shot",
"icon": 103,
"classjob": 0
},
{
"id": 4239,
"name": "Desperado",
"icon": 103,
"classjob": 0
},
{
"id": 4240,
"name": "Land Waker",
"icon": 103,
"classjob": 0
},
{
"id": 4241,
"name": "Dark Force",
"icon": 103,
"classjob": 0
},
{
"id": 4242,
"name": "Dragonsong Dive",
"icon": 103,
"classjob": 0
},
{
"id": 4243,
"name": "Chimatsuri",
"icon": 103,
"classjob": 0
},
{
"id": 4244,
"name": "Sagittarius Arrow",
"icon": 103,
"classjob": 0
},
{
"id": 4245,
"name": "Satellite Beam",
"icon": 103,
"classjob": 0
},
{
"id": 4246,
"name": "Teraflare",
"icon": 103,
"classjob": 0
},
{
"id": 4247,
"name": "Angel Feathers",
"icon": 103,
"classjob": 0
},
{
"id": 4248,
"name": "Astral Stasis",
"icon": 103,
"classjob": 0
},
{
"id": 4249,
"name": "Terminal Velocity",
"icon": 103,
"classjob": 0
},
{
"id": 4250,
"name": "Draw",
"icon": 405,
"classjob": -1
},
{
"id": 4251,
"name": "Aggravate",
"icon": 405,
"classjob": -1
},
{
"id": 4252,
"name": "Frost Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4257,
"name": "Retreat",
"icon": 405,
"classjob": -1
},
{
"id": 4259,
"name": "Pillar Pierce",
"icon": 405,
"classjob": -1
},
{
"id": 4260,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 4261,
"name": "Sheet Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 4262,
"name": "Form Shift",
"icon": 2536,
"classjob": 20
},
{
"id": 4263,
"name": "Blood Lance",
"icon": 405,
"classjob": -1
},
{
"id": 4264,
"name": "Mighty Unmorph",
"icon": 405,
"classjob": -1
},
{
"id": 4265,
"name": "Time To Burn",
"icon": 405,
"classjob": -1
},
{
"id": 4266,
"name": "Terror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 4267,
"name": "Sticky Tongue",
"icon": 405,
"classjob": -1
},
{
"id": 4268,
"name": "Labored Leap",
"icon": 405,
"classjob": -1
},
{
"id": 4269,
"name": "Bitter Nectar",
"icon": 405,
"classjob": -1
},
{
"id": 4270,
"name": "Levinbolt",
"icon": 405,
"classjob": -1
},
{
"id": 4271,
"name": "Cannonfire",
"icon": 405,
"classjob": 0
},
{
"id": 4272,
"name": "Blazing Trail",
"icon": 405,
"classjob": -1
},
{
"id": 4273,
"name": "Prey",
"icon": 405,
"classjob": -1
},
{
"id": 4274,
"name": "Overbite",
"icon": 405,
"classjob": -1
},
{
"id": 4275,
"name": "Bubo Burst",
"icon": 405,
"classjob": -1
},
{
"id": 4314,
"name": "Bastardbluss",
"icon": 405,
"classjob": -1
},
{
"id": 4315,
"name": "Magitek Slug",
"icon": 405,
"classjob": -1
},
{
"id": 4316,
"name": "Magitek Spread",
"icon": 405,
"classjob": -1
},
{
"id": 4317,
"name": "Judgment",
"icon": 405,
"classjob": -1
},
{
"id": 4318,
"name": "Judgment",
"icon": 405,
"classjob": -1
},
{
"id": 4319,
"name": "Quickstep",
"icon": 405,
"classjob": -1
},
{
"id": 4320,
"name": "Magitek Turret",
"icon": 405,
"classjob": -1
},
{
"id": 4321,
"name": "Aetherochemical Laser",
"icon": 405,
"classjob": -1
},
{
"id": 4322,
"name": "Aetherochemical Grenado",
"icon": 405,
"classjob": -1
},
{
"id": 4323,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 4324,
"name": "Riddle Of The Sphinx",
"icon": 405,
"classjob": -1
},
{
"id": 4325,
"name": "Paradox",
"icon": 405,
"classjob": -1
},
{
"id": 4326,
"name": "Ka",
"icon": 405,
"classjob": -1
},
{
"id": 4327,
"name": "Chthonic Hush",
"icon": 405,
"classjob": -1
},
{
"id": 4328,
"name": "Weighing Of The Heart",
"icon": 405,
"classjob": -1
},
{
"id": 4329,
"name": "Hood Swing",
"icon": 405,
"classjob": -1
},
{
"id": 4330,
"name": "Steel Scales",
"icon": 405,
"classjob": -1
},
{
"id": 4331,
"name": "Petrifaction",
"icon": 405,
"classjob": -1
},
{
"id": 4332,
"name": "Circle Of Flames",
"icon": 405,
"classjob": -1
},
{
"id": 4333,
"name": "Inertia Stream",
"icon": 405,
"classjob": -1
},
{
"id": 4334,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 4335,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 4336,
"name": "Gaseous Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 4337,
"name": "Dark Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 4338,
"name": "Dark Blizzard II",
"icon": 405,
"classjob": -1
},
{
"id": 4339,
"name": "Dark Blizzard II",
"icon": 405,
"classjob": -1
},
{
"id": 4340,
"name": "Permafrost",
"icon": 405,
"classjob": -1
},
{
"id": 4341,
"name": "Blizzard Sphere",
"icon": 405,
"classjob": -1
},
{
"id": 4342,
"name": "Dark Fire",
"icon": 405,
"classjob": -1
},
{
"id": 4343,
"name": "Dark Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 4344,
"name": "Dark Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 4345,
"name": "Fire Sphere",
"icon": 405,
"classjob": -1
},
{
"id": 4346,
"name": "Shadow Flare",
"icon": 405,
"classjob": -1
},
{
"id": 4347,
"name": "Sea Of Pitch",
"icon": 405,
"classjob": -1
},
{
"id": 4348,
"name": "Dark Orb",
"icon": 405,
"classjob": -1
},
{
"id": 4349,
"name": "End Of Days",
"icon": 405,
"classjob": -1
},
{
"id": 4350,
"name": "Blizzard Burst",
"icon": 405,
"classjob": -1
},
{
"id": 4351,
"name": "Fire Burst",
"icon": 405,
"classjob": -1
},
{
"id": 4352,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4353,
"name": "Height Of Chaos",
"icon": 405,
"classjob": -1
},
{
"id": 4354,
"name": "Ancient Circle",
"icon": 405,
"classjob": -1
},
{
"id": 4355,
"name": "Ancient Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 4356,
"name": "Ancient Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 4357,
"name": "Universal Manipulation",
"icon": 405,
"classjob": -1
},
{
"id": 4358,
"name": "Chaos Bleed",
"icon": 405,
"classjob": -1
},
{
"id": 4359,
"name": "Entropic Flame",
"icon": 405,
"classjob": -1
},
{
"id": 4360,
"name": "Entropic Flame",
"icon": 405,
"classjob": -1
},
{
"id": 4361,
"name": "Shadow Flare",
"icon": 405,
"classjob": -1
},
{
"id": 4362,
"name": "Annihilation",
"icon": 405,
"classjob": -1
},
{
"id": 4363,
"name": "Pull Of The Void",
"icon": 405,
"classjob": -1
},
{
"id": 4364,
"name": "Peace Of The Void",
"icon": 405,
"classjob": -1
},
{
"id": 4365,
"name": "Shadow Punch",
"icon": 405,
"classjob": -1
},
{
"id": 4366,
"name": "Dark II",
"icon": 405,
"classjob": -1
},
{
"id": 4367,
"name": "Swinge",
"icon": 405,
"classjob": -1
},
{
"id": 4368,
"name": "Gouge",
"icon": 405,
"classjob": -1
},
{
"id": 4369,
"name": "Gouge",
"icon": 405,
"classjob": -1
},
{
"id": 4370,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 4371,
"name": "Pressure Increase",
"icon": 405,
"classjob": -1
},
{
"id": 4372,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 4373,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4374,
"name": "Royal Fount",
"icon": 405,
"classjob": -1
},
{
"id": 4375,
"name": "Gunnery Pod",
"icon": 405,
"classjob": -1
},
{
"id": 4376,
"name": "Photon Spaser",
"icon": 405,
"classjob": -1
},
{
"id": 4377,
"name": "Hydrothermal Missile",
"icon": 405,
"classjob": -1
},
{
"id": 4378,
"name": "Hydrothermal Missile",
"icon": 405,
"classjob": -1
},
{
"id": 4379,
"name": "Emergency Deployment",
"icon": 405,
"classjob": -1
},
{
"id": 4380,
"name": "Resin Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 4381,
"name": "Resin Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 4382,
"name": "Distress Signal",
"icon": 405,
"classjob": -1
},
{
"id": 4383,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 4384,
"name": "3000-tonze Missile",
"icon": 405,
"classjob": -1
},
{
"id": 4385,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4386,
"name": "Light Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4387,
"name": "Emergency Liftoff",
"icon": 405,
"classjob": -1
},
{
"id": 4388,
"name": "Jet Exhaust",
"icon": 405,
"classjob": -1
},
{
"id": 4389,
"name": "Quick Landing",
"icon": 405,
"classjob": -1
},
{
"id": 4390,
"name": "Needle Spaser",
"icon": 405,
"classjob": -1
},
{
"id": 4391,
"name": "Particle Collision",
"icon": 405,
"classjob": -1
},
{
"id": 4392,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 4393,
"name": "Pressure Increase",
"icon": 405,
"classjob": -1
},
{
"id": 4394,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4395,
"name": "Impale",
"icon": 405,
"classjob": -1
},
{
"id": 4396,
"name": "Expire",
"icon": 405,
"classjob": -1
},
{
"id": 4397,
"name": "Aqua Ball",
"icon": 405,
"classjob": -1
},
{
"id": 4398,
"name": "Tail Screw",
"icon": 405,
"classjob": -1
},
{
"id": 4399,
"name": "Painful Whip",
"icon": 405,
"classjob": -1
},
{
"id": 4400,
"name": "Gas Shell",
"icon": 405,
"classjob": -1
},
{
"id": 4401,
"name": "The Balance",
"icon": 3110,
"classjob": 33
},
{
"id": 4402,
"name": "The Bole",
"icon": 3111,
"classjob": 33
},
{
"id": 4403,
"name": "The Arrow",
"icon": 3112,
"classjob": 33
},
{
"id": 4404,
"name": "The Spear",
"icon": 3113,
"classjob": 33
},
{
"id": 4405,
"name": "The Ewer",
"icon": 3114,
"classjob": 33
},
{
"id": 4406,
"name": "The Spire",
"icon": 3115,
"classjob": 33
},
{
"id": 4407,
"name": "The Balance",
"icon": 3110,
"classjob": 33
},
{
"id": 4408,
"name": "The Bole",
"icon": 3111,
"classjob": 33
},
{
"id": 4409,
"name": "The Arrow",
"icon": 3112,
"classjob": 33
},
{
"id": 4410,
"name": "The Spear",
"icon": 3113,
"classjob": 33
},
{
"id": 4411,
"name": "The Ewer",
"icon": 3114,
"classjob": 33
},
{
"id": 4412,
"name": "The Spire",
"icon": 3115,
"classjob": 33
},
{
"id": 4413,
"name": "The Balance",
"icon": 3110,
"classjob": 33
},
{
"id": 4414,
"name": "The Bole",
"icon": 3111,
"classjob": 33
},
{
"id": 4415,
"name": "The Arrow",
"icon": 3112,
"classjob": 33
},
{
"id": 4416,
"name": "The Spear",
"icon": 3113,
"classjob": 33
},
{
"id": 4417,
"name": "The Ewer",
"icon": 3114,
"classjob": 33
},
{
"id": 4418,
"name": "The Spire",
"icon": 3115,
"classjob": 33
},
{
"id": 4419,
"name": "The Balance",
"icon": 3110,
"classjob": 33
},
{
"id": 4420,
"name": "The Bole",
"icon": 3111,
"classjob": 33
},
{
"id": 4421,
"name": "The Arrow",
"icon": 3112,
"classjob": 33
},
{
"id": 4422,
"name": "The Spear",
"icon": 3113,
"classjob": 33
},
{
"id": 4423,
"name": "The Ewer",
"icon": 3114,
"classjob": 33
},
{
"id": 4424,
"name": "The Spire",
"icon": 3115,
"classjob": 33
},
{
"id": 4425,
"name": "Spinning Mogshield",
"icon": 405,
"classjob": -1
},
{
"id": 4426,
"name": "Pom Cure",
"icon": 405,
"classjob": -1
},
{
"id": 4427,
"name": "Moogle Eye Shot",
"icon": 405,
"classjob": -1
},
{
"id": 4428,
"name": "Pom Flare",
"icon": 405,
"classjob": -1
},
{
"id": 4429,
"name": "100-kuponze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 4430,
"name": "Moogle-Go-Round",
"icon": 405,
"classjob": -1
},
{
"id": 4431,
"name": "March Of The Moogles",
"icon": 405,
"classjob": -1
},
{
"id": 4432,
"name": "Poison Needle",
"icon": 405,
"classjob": -1
},
{
"id": 4445,
"name": "Feral Peck",
"icon": 405,
"classjob": -1
},
{
"id": 4446,
"name": "Reaving Wind",
"icon": 405,
"classjob": -1
},
{
"id": 4447,
"name": "Calamitous Wind",
"icon": 405,
"classjob": -1
},
{
"id": 4448,
"name": "Warped Wail",
"icon": 405,
"classjob": -1
},
{
"id": 4449,
"name": "Palsynyxis",
"icon": 405,
"classjob": -1
},
{
"id": 4450,
"name": "Transpierce",
"icon": 405,
"classjob": -1
},
{
"id": 4451,
"name": "Furore",
"icon": 405,
"classjob": -1
},
{
"id": 4452,
"name": "Sticky Thread",
"icon": 405,
"classjob": -1
},
{
"id": 4453,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4454,
"name": "Incinerate",
"icon": 405,
"classjob": -1
},
{
"id": 4455,
"name": "Carpomission",
"icon": 405,
"classjob": -1
},
{
"id": 4456,
"name": "Isle Drop",
"icon": 405,
"classjob": -1
},
{
"id": 4457,
"name": "Neck Splinter",
"icon": 405,
"classjob": -1
},
{
"id": 4458,
"name": "Whiplash",
"icon": 405,
"classjob": -1
},
{
"id": 4459,
"name": "Whistle",
"icon": 405,
"classjob": -1
},
{
"id": 4460,
"name": "Brightflame",
"icon": 405,
"classjob": -1
},
{
"id": 4461,
"name": "Frog Legs",
"icon": 405,
"classjob": -1
},
{
"id": 4462,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 4463,
"name": "Drowning Mist",
"icon": 405,
"classjob": -1
},
{
"id": 4464,
"name": "Eerie Soundwave",
"icon": 405,
"classjob": -1
},
{
"id": 4465,
"name": "Puncture",
"icon": 405,
"classjob": -1
},
{
"id": 4466,
"name": "Wriggle",
"icon": 405,
"classjob": -1
},
{
"id": 4467,
"name": "Spinning Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4468,
"name": "Chthonic Hush",
"icon": 405,
"classjob": -1
},
{
"id": 4469,
"name": "Underbite",
"icon": 405,
"classjob": -1
},
{
"id": 4470,
"name": "Primordial Bark",
"icon": 405,
"classjob": -1
},
{
"id": 4471,
"name": "Third Leg Forward",
"icon": 405,
"classjob": -1
},
{
"id": 4472,
"name": "Topple",
"icon": 405,
"classjob": -1
},
{
"id": 4473,
"name": "Third Leg Back",
"icon": 405,
"classjob": -1
},
{
"id": 4474,
"name": "Touch Move",
"icon": 405,
"classjob": -1
},
{
"id": 4475,
"name": "White Knight's Tour",
"icon": 405,
"classjob": -1
},
{
"id": 4476,
"name": "Black Knight's Tour",
"icon": 405,
"classjob": -1
},
{
"id": 4477,
"name": "Vanu Snap",
"icon": 405,
"classjob": -1
},
{
"id": 4478,
"name": "Hoot",
"icon": 405,
"classjob": -1
},
{
"id": 4479,
"name": "Wings Of The Manukmanai",
"icon": 405,
"classjob": -1
},
{
"id": 4480,
"name": "Course Of The Manukmanai",
"icon": 405,
"classjob": -1
},
{
"id": 4481,
"name": "Raptorial Spike",
"icon": 405,
"classjob": -1
},
{
"id": 4482,
"name": "Heart Breach",
"icon": 405,
"classjob": -1
},
{
"id": 4483,
"name": "Flintlock",
"icon": 405,
"classjob": -1
},
{
"id": 4484,
"name": "Grenado",
"icon": 405,
"classjob": -1
},
{
"id": 4485,
"name": "Ice Dispenser",
"icon": 405,
"classjob": -1
},
{
"id": 4486,
"name": "Freezeover",
"icon": 405,
"classjob": -1
},
{
"id": 4487,
"name": "Plain Pound",
"icon": 405,
"classjob": -1
},
{
"id": 4488,
"name": "Face Off",
"icon": 405,
"classjob": -1
},
{
"id": 4489,
"name": "Flex",
"icon": 405,
"classjob": -1
},
{
"id": 4490,
"name": "Foul Waters",
"icon": 405,
"classjob": -1
},
{
"id": 4491,
"name": "Bragot Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4492,
"name": "Quarry Lake",
"icon": 405,
"classjob": -1
},
{
"id": 4493,
"name": "Naked Soul",
"icon": 405,
"classjob": -1
},
{
"id": 4494,
"name": "Toxic Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4495,
"name": "Cold Wave",
"icon": 405,
"classjob": -1
},
{
"id": 4496,
"name": "Ice Guillotine",
"icon": 405,
"classjob": -1
},
{
"id": 4497,
"name": "Needle Burst",
"icon": 405,
"classjob": -1
},
{
"id": 4498,
"name": "Bomb Spread",
"icon": 405,
"classjob": -1
},
{
"id": 4499,
"name": "Buffet",
"icon": 405,
"classjob": -1
},
{
"id": 4500,
"name": "Northerlies",
"icon": 405,
"classjob": -1
},
{
"id": 4501,
"name": "Horrisonous Blast",
"icon": 405,
"classjob": -1
},
{
"id": 4502,
"name": "Adventitious Lash",
"icon": 405,
"classjob": -1
},
{
"id": 4503,
"name": "Ballistic Burr",
"icon": 405,
"classjob": -1
},
{
"id": 4504,
"name": "Anemochory",
"icon": 405,
"classjob": -1
},
{
"id": 4505,
"name": "Alpine Draft",
"icon": 405,
"classjob": -1
},
{
"id": 4506,
"name": "Scratch Fever",
"icon": 405,
"classjob": -1
},
{
"id": 4507,
"name": "Yowl",
"icon": 405,
"classjob": -1
},
{
"id": 4508,
"name": "Gobskin",
"icon": 405,
"classjob": -1
},
{
"id": 4509,
"name": "Flying Bream",
"icon": 405,
"classjob": -1
},
{
"id": 4510,
"name": "Snow Flurry",
"icon": 405,
"classjob": -1
},
{
"id": 4511,
"name": "Freshwater Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 4512,
"name": "Brine Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4513,
"name": "Lumisphere",
"icon": 405,
"classjob": -1
},
{
"id": 4514,
"name": "Flamespitter",
"icon": 405,
"classjob": -1
},
{
"id": 4515,
"name": "Sour Belch",
"icon": 405,
"classjob": -1
},
{
"id": 4516,
"name": "Cloying Stench",
"icon": 405,
"classjob": -1
},
{
"id": 4517,
"name": "Strut",
"icon": 405,
"classjob": -1
},
{
"id": 4518,
"name": "Hard Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 4519,
"name": "Sideswipe",
"icon": 405,
"classjob": -1
},
{
"id": 4520,
"name": "Puff",
"icon": 405,
"classjob": -1
},
{
"id": 4521,
"name": "Final Yip",
"icon": 405,
"classjob": -1
},
{
"id": 4522,
"name": "Paradise Lost",
"icon": 405,
"classjob": -1
},
{
"id": 4523,
"name": "Chirp",
"icon": 405,
"classjob": -1
},
{
"id": 4524,
"name": "Reckless Abandon",
"icon": 405,
"classjob": -1
},
{
"id": 4525,
"name": "Spinal Tap",
"icon": 405,
"classjob": -1
},
{
"id": 4526,
"name": "Unfinal Sting",
"icon": 405,
"classjob": -1
},
{
"id": 4527,
"name": "Hypothermal Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 4528,
"name": "Hypnotize",
"icon": 405,
"classjob": -1
},
{
"id": 4529,
"name": "Optical Intrusion",
"icon": 405,
"classjob": -1
},
{
"id": 4530,
"name": "Leaf Dagger",
"icon": 405,
"classjob": -1
},
{
"id": 4531,
"name": "Quaver",
"icon": 405,
"classjob": -1
},
{
"id": 4532,
"name": "Offal Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4533,
"name": "Flash Evaporation",
"icon": 405,
"classjob": -1
},
{
"id": 4534,
"name": "Sleetvolley",
"icon": 405,
"classjob": -1
},
{
"id": 4535,
"name": "Ferocious Forehand",
"icon": 405,
"classjob": -1
},
{
"id": 4536,
"name": "The Killing Paw",
"icon": 405,
"classjob": -1
},
{
"id": 4537,
"name": "Headlight",
"icon": 405,
"classjob": -1
},
{
"id": 4538,
"name": "Catching Claws",
"icon": 405,
"classjob": -1
},
{
"id": 4539,
"name": "Frumious Jaws",
"icon": 405,
"classjob": -1
},
{
"id": 4540,
"name": "Shiver",
"icon": 405,
"classjob": -1
},
{
"id": 4541,
"name": "Acris",
"icon": 405,
"classjob": -1
},
{
"id": 4542,
"name": "Vitalis",
"icon": 405,
"classjob": -1
},
{
"id": 4543,
"name": "Appendicular Disseverment",
"icon": 405,
"classjob": -1
},
{
"id": 4544,
"name": "Fang's End",
"icon": 405,
"classjob": -1
},
{
"id": 4545,
"name": "Defibrillate",
"icon": 405,
"classjob": -1
},
{
"id": 4546,
"name": "Electrogenesis",
"icon": 405,
"classjob": -1
},
{
"id": 4547,
"name": "Cover Fire",
"icon": 405,
"classjob": -1
},
{
"id": 4548,
"name": "Shortwave Maser",
"icon": 405,
"classjob": -1
},
{
"id": 4549,
"name": "Passive Infrared Guidance System",
"icon": 405,
"classjob": -1
},
{
"id": 4550,
"name": "Aetherochemical Amplification",
"icon": 405,
"classjob": -1
},
{
"id": 4551,
"name": "Spite Of The Sky Elders",
"icon": 405,
"classjob": -1
},
{
"id": 4552,
"name": "Scorn Of The Sky Elders",
"icon": 405,
"classjob": -1
},
{
"id": 4553,
"name": "Triple Helix",
"icon": 405,
"classjob": -1
},
{
"id": 4554,
"name": "Headwind",
"icon": 405,
"classjob": -1
},
{
"id": 4555,
"name": "Furore",
"icon": 405,
"classjob": -1
},
{
"id": 4556,
"name": "Rotoswipe",
"icon": 405,
"classjob": -1
},
{
"id": 4557,
"name": "Wrecking Ball",
"icon": 405,
"classjob": -1
},
{
"id": 4558,
"name": "Strong Wind",
"icon": 405,
"classjob": -1
},
{
"id": 4559,
"name": "Azure Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 4560,
"name": "Collectable Synthesis",
"icon": 1522,
"classjob": 8
},
{
"id": 4561,
"name": "Collectable Synthesis",
"icon": 1572,
"classjob": 9
},
{
"id": 4562,
"name": "Collectable Synthesis",
"icon": 1623,
"classjob": 10
},
{
"id": 4563,
"name": "Collectable Synthesis",
"icon": 1674,
"classjob": 11
},
{
"id": 4564,
"name": "Collectable Synthesis",
"icon": 1772,
"classjob": 13
},
{
"id": 4565,
"name": "Collectable Synthesis",
"icon": 1722,
"classjob": 12
},
{
"id": 4566,
"name": "Collectable Synthesis",
"icon": 1823,
"classjob": 14
},
{
"id": 4567,
"name": "Collectable Synthesis",
"icon": 1873,
"classjob": 15
},
{
"id": 4568,
"name": "Name Of The Wind",
"icon": 1525,
"classjob": 8
},
{
"id": 4569,
"name": "Name Of Fire",
"icon": 1575,
"classjob": 9
},
{
"id": 4570,
"name": "Name Of Ice",
"icon": 1626,
"classjob": 10
},
{
"id": 4571,
"name": "Name Of Earth",
"icon": 1725,
"classjob": 12
},
{
"id": 4572,
"name": "Name Of Lightning",
"icon": 1775,
"classjob": 13
},
{
"id": 4573,
"name": "Name Of Water",
"icon": 1826,
"classjob": 14
},
{
"id": 4648,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 4649,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4650,
"name": "The Ram's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4651,
"name": "The Dragon's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4653,
"name": "Heartburn",
"icon": 405,
"classjob": -1
},
{
"id": 4654,
"name": "Bull Charge",
"icon": 405,
"classjob": -1
},
{
"id": 4655,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 4656,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 4657,
"name": "Poison Dust",
"icon": 405,
"classjob": -1
},
{
"id": 4658,
"name": "Cannonball",
"icon": 405,
"classjob": -1
},
{
"id": 4659,
"name": "Leech",
"icon": 405,
"classjob": -1
},
{
"id": 4660,
"name": "Rake",
"icon": 405,
"classjob": -1
},
{
"id": 4661,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4662,
"name": "Slow Play",
"icon": 405,
"classjob": -1
},
{
"id": 4663,
"name": "銅像：自壊アクション：竜の巣：中ボス1",
"icon": 405,
"classjob": -1
},
{
"id": 4664,
"name": "Headspin",
"icon": 405,
"classjob": -1
},
{
"id": 4665,
"name": "Headspin",
"icon": 405,
"classjob": -1
},
{
"id": 4666,
"name": "Calcifying Mist",
"icon": 405,
"classjob": -1
},
{
"id": 4667,
"name": "Chilling Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 4668,
"name": "Straight Punch",
"icon": 405,
"classjob": -1
},
{
"id": 4669,
"name": "Firewater",
"icon": 405,
"classjob": -1
},
{
"id": 4670,
"name": "Bloody Caress",
"icon": 405,
"classjob": -1
},
{
"id": 4671,
"name": "Viscid Emission",
"icon": 405,
"classjob": -1
},
{
"id": 4672,
"name": "Iceball",
"icon": 405,
"classjob": -1
},
{
"id": 4673,
"name": "The Dragon's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4674,
"name": "Granite Rain",
"icon": 405,
"classjob": -1
},
{
"id": 4681,
"name": "Miasma Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4682,
"name": "Evil Eye",
"icon": 405,
"classjob": -1
},
{
"id": 4683,
"name": "Cermet Drill",
"icon": 405,
"classjob": -1
},
{
"id": 4684,
"name": "Overcharge",
"icon": 405,
"classjob": -1
},
{
"id": 4685,
"name": "Sonorous Blast",
"icon": 405,
"classjob": -1
},
{
"id": 4686,
"name": "Seismic Rift",
"icon": 405,
"classjob": -1
},
{
"id": 4687,
"name": "Pulverizing Pound",
"icon": 405,
"classjob": -1
},
{
"id": 4688,
"name": "Beak Snap",
"icon": 405,
"classjob": -1
},
{
"id": 4689,
"name": "Overtone Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 4690,
"name": "Golden Talons",
"icon": 405,
"classjob": -1
},
{
"id": 4691,
"name": "Proboscis",
"icon": 405,
"classjob": -1
},
{
"id": 4692,
"name": "Choco Kick",
"icon": 405,
"classjob": -1
},
{
"id": 4693,
"name": "Ball Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 4694,
"name": "Ball Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 4695,
"name": "Shred",
"icon": 405,
"classjob": -1
},
{
"id": 4696,
"name": "The Hand",
"icon": 405,
"classjob": -1
},
{
"id": 4697,
"name": "Whipcrack",
"icon": 405,
"classjob": -1
},
{
"id": 4698,
"name": "Bombination",
"icon": 405,
"classjob": -1
},
{
"id": 4699,
"name": "Fowl Stench",
"icon": 405,
"classjob": -1
},
{
"id": 4700,
"name": "Rise And Fall",
"icon": 405,
"classjob": -1
},
{
"id": 4701,
"name": "Canopy",
"icon": 405,
"classjob": -1
},
{
"id": 4702,
"name": "Original Sin",
"icon": 405,
"classjob": -1
},
{
"id": 4703,
"name": "Tail Slap",
"icon": 405,
"classjob": -1
},
{
"id": 4704,
"name": "Shot",
"icon": 405,
"classjob": -1
},
{
"id": 4705,
"name": "Sharp Gust",
"icon": 405,
"classjob": -1
},
{
"id": 4706,
"name": "Transonic Blast",
"icon": 405,
"classjob": -1
},
{
"id": 4707,
"name": "Sonic Boom",
"icon": 405,
"classjob": -1
},
{
"id": 4708,
"name": "Savage Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 4709,
"name": "Savage Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 4710,
"name": "Photon Stream",
"icon": 405,
"classjob": -1
},
{
"id": 4711,
"name": "Magitek Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 4712,
"name": "Scale Ripple",
"icon": 405,
"classjob": -1
},
{
"id": 4713,
"name": "Wing Cutter",
"icon": 405,
"classjob": -1
},
{
"id": 4714,
"name": "Grand Sword",
"icon": 405,
"classjob": -1
},
{
"id": 4715,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 4716,
"name": "Head Butt",
"icon": 405,
"classjob": -1
},
{
"id": 4717,
"name": "Seismic Scream",
"icon": 405,
"classjob": -1
},
{
"id": 4718,
"name": "Dry Fin",
"icon": 405,
"classjob": -1
},
{
"id": 4719,
"name": "Electric Predation",
"icon": 405,
"classjob": -1
},
{
"id": 4720,
"name": "Stagnant Spray",
"icon": 405,
"classjob": -1
},
{
"id": 4721,
"name": "Bog Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 4722,
"name": "Peculiar Light",
"icon": 405,
"classjob": -1
},
{
"id": 4723,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 4724,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 4725,
"name": "Death Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 4726,
"name": "Reflux",
"icon": 405,
"classjob": -1
},
{
"id": 4727,
"name": "Thunderbolt",
"icon": 405,
"classjob": -1
},
{
"id": 4728,
"name": "Wild Horn",
"icon": 405,
"classjob": -1
},
{
"id": 4729,
"name": "Trounce",
"icon": 405,
"classjob": -1
},
{
"id": 4730,
"name": "Ecliptic Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 4732,
"name": "Golden Talons",
"icon": 405,
"classjob": -1
},
{
"id": 4733,
"name": "Freefall",
"icon": 405,
"classjob": -1
},
{
"id": 4734,
"name": "Alpine Draft",
"icon": 405,
"classjob": -1
},
{
"id": 4735,
"name": "Winds Of Winter",
"icon": 405,
"classjob": -1
},
{
"id": 4737,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4738,
"name": "Geirrothr",
"icon": 405,
"classjob": -1
},
{
"id": 4739,
"name": "Hall Of Sorrow",
"icon": 405,
"classjob": -1
},
{
"id": 4740,
"name": "Valfodr",
"icon": 405,
"classjob": -1
},
{
"id": 4741,
"name": "Counter Stance",
"icon": 405,
"classjob": -1
},
{
"id": 4743,
"name": "Quickstep",
"icon": 405,
"classjob": -1
},
{
"id": 4744,
"name": "The Sultan's Brand",
"icon": 405,
"classjob": -1
},
{
"id": 4745,
"name": "Unbreakable",
"icon": 405,
"classjob": -1
},
{
"id": 4746,
"name": "Spirits Without",
"icon": 405,
"classjob": -1
},
{
"id": 4747,
"name": "Bloodstain",
"icon": 405,
"classjob": -1
},
{
"id": 4749,
"name": "Aqua Ball",
"icon": 405,
"classjob": -1
},
{
"id": 4750,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 4751,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 4752,
"name": "Heat Breath",
"icon": 405,
"classjob": -1
},
{
"id": 4753,
"name": "Tail Smash",
"icon": 405,
"classjob": -1
},
{
"id": 4754,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 4755,
"name": "Bloodboil",
"icon": 405,
"classjob": -1
},
{
"id": 4756,
"name": "Bone Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 4757,
"name": "Tail Screw",
"icon": 405,
"classjob": -1
},
{
"id": 4758,
"name": "Nascent Flash",
"icon": 405,
"classjob": -1
},
{
"id": 4759,
"name": "Aether Charge",
"icon": 405,
"classjob": -1
},
{
"id": 4760,
"name": "Shadow Pulse",
"icon": 405,
"classjob": -1
},
{
"id": 4762,
"name": "削除予定",
"icon": 405,
"classjob": -1
},
{
"id": 4764,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 4766,
"name": "Laughing Moon",
"icon": 405,
"classjob": -1
},
{
"id": 4767,
"name": "Laughing Moon",
"icon": 405,
"classjob": -1
},
{
"id": 4768,
"name": "Venom",
"icon": 405,
"classjob": -1
},
{
"id": 4769,
"name": "Swift Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 4770,
"name": "Swift Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 4771,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 4772,
"name": "Filoplumes",
"icon": 405,
"classjob": -1
},
{
"id": 4773,
"name": "Sideslip",
"icon": 405,
"classjob": -1
},
{
"id": 4774,
"name": "Revelation",
"icon": 405,
"classjob": -1
},
{
"id": 4775,
"name": "Redfire",
"icon": 405,
"classjob": -1
},
{
"id": 4776,
"name": "Tropical Wind",
"icon": 405,
"classjob": -1
},
{
"id": 4778,
"name": "Magitek Field",
"icon": 405,
"classjob": -1
},
{
"id": 4779,
"name": "Summoning Rite",
"icon": 405,
"classjob": -1
},
{
"id": 4780,
"name": "Crackle Hiss",
"icon": 405,
"classjob": -1
},
{
"id": 4781,
"name": "Critical Rip",
"icon": 405,
"classjob": -1
},
{
"id": 4782,
"name": "Electrification",
"icon": 405,
"classjob": -1
},
{
"id": 4783,
"name": "Electric Burst",
"icon": 405,
"classjob": -1
},
{
"id": 4785,
"name": "Ruby Carbuncle",
"icon": 405,
"classjob": -1
},
{
"id": 4786,
"name": "Obsidian Carbuncle",
"icon": 405,
"classjob": -1
},
{
"id": 4787,
"name": "Wing Cutter",
"icon": 405,
"classjob": -1
},
{
"id": 4788,
"name": "Silence",
"icon": 405,
"classjob": -1
},
{
"id": 4789,
"name": "Tornado",
"icon": 405,
"classjob": -1
},
{
"id": 4790,
"name": "Blitz",
"icon": 405,
"classjob": -1
},
{
"id": 4791,
"name": "Tail Screw",
"icon": 405,
"classjob": -1
},
{
"id": 4792,
"name": "Impale",
"icon": 405,
"classjob": -1
},
{
"id": 4793,
"name": "Scathe",
"icon": 405,
"classjob": -1
},
{
"id": 4794,
"name": "Sheet Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 4795,
"name": "Salivous Snap",
"icon": 405,
"classjob": -1
},
{
"id": 4796,
"name": "○削除予定",
"icon": 405,
"classjob": -1
},
{
"id": 4797,
"name": "Whipcrack",
"icon": 405,
"classjob": -1
},
{
"id": 4798,
"name": "The Killing Paw",
"icon": 405,
"classjob": -1
},
{
"id": 4799,
"name": "Tail Snap",
"icon": 405,
"classjob": -1
},
{
"id": 4800,
"name": "Self-destruct",
"icon": 61126,
"classjob": 0
},
{
"id": 4801,
"name": "Snipethoom",
"icon": 405,
"classjob": -1
},
{
"id": 4802,
"name": "Cacophony",
"icon": 405,
"classjob": -1
},
{
"id": 4803,
"name": "The Ram's Keeper",
"icon": 405,
"classjob": -1
},
{
"id": 4804,
"name": "Mighty Morph",
"icon": 405,
"classjob": -1
},
{
"id": 4805,
"name": "Wallop",
"icon": 405,
"classjob": -1
},
{
"id": 4807,
"name": "The Last Song",
"icon": 405,
"classjob": -1
},
{
"id": 4808,
"name": "Primordial Bark",
"icon": 405,
"classjob": -1
},
{
"id": 4809,
"name": "Iron Justice",
"icon": 405,
"classjob": -1
},
{
"id": 4810,
"name": "Kick And Scream",
"icon": 405,
"classjob": -1
},
{
"id": 4811,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 4812,
"name": "Dead Or Alive",
"icon": 405,
"classjob": -1
},
{
"id": 4813,
"name": "Seep",
"icon": 405,
"classjob": -1
},
{
"id": 4814,
"name": "Static Charge",
"icon": 405,
"classjob": -1
},
{
"id": 4815,
"name": "Black Menace",
"icon": 405,
"classjob": -1
},
{
"id": 4816,
"name": "Black Menace",
"icon": 405,
"classjob": -1
},
{
"id": 4817,
"name": "Black Menace",
"icon": 405,
"classjob": -1
},
{
"id": 4818,
"name": "Disclosure",
"icon": 405,
"classjob": -1
},
{
"id": 4819,
"name": "Eggnog",
"icon": 405,
"classjob": -1
},
{
"id": 4820,
"name": "Defensive Stance",
"icon": 405,
"classjob": -1
},
{
"id": 4821,
"name": "Dark Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 4822,
"name": "Spiked Tail",
"icon": 405,
"classjob": -1
},
{
"id": 4823,
"name": "Aero Blast",
"icon": 405,
"classjob": -1
},
{
"id": 4824,
"name": "Electrify",
"icon": 405,
"classjob": -1
},
{
"id": 4825,
"name": "Auto-cannons",
"icon": 405,
"classjob": -1
},
{
"id": 4826,
"name": "Web Of Lightning",
"icon": 405,
"classjob": -1
},
{
"id": 4827,
"name": "Plasma Release",
"icon": 405,
"classjob": -1
},
{
"id": 4828,
"name": "Steam Release",
"icon": 405,
"classjob": -1
},
{
"id": 4830,
"name": "Sea Of Pitch",
"icon": 405,
"classjob": -1
},
{
"id": 4831,
"name": "Dark Blizzard II",
"icon": 405,
"classjob": -1
},
{
"id": 4833,
"name": "Dark Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 4834,
"name": "Browbeat",
"icon": 405,
"classjob": -1
},
{
"id": 4835,
"name": "Stool Pelt",
"icon": 405,
"classjob": -1
},
{
"id": 4837,
"name": "Gravity Force",
"icon": 405,
"classjob": -1
},
{
"id": 4838,
"name": "Shock",
"icon": 405,
"classjob": -1
},
{
"id": 4839,
"name": "Megiddo Flame",
"icon": 405,
"classjob": -1
},
{
"id": 4840,
"name": "Dark Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 4841,
"name": "Sea Of Pitch",
"icon": 405,
"classjob": -1
},
{
"id": 4842,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4843,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4844,
"name": "Debris Burst",
"icon": 405,
"classjob": -1
},
{
"id": 4845,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4846,
"name": "Fluid Swing",
"icon": 405,
"classjob": -1
},
{
"id": 4847,
"name": "Splash",
"icon": 405,
"classjob": -1
},
{
"id": 4848,
"name": "Protean Wave",
"icon": 405,
"classjob": -1
},
{
"id": 4849,
"name": "Protean Wave",
"icon": 405,
"classjob": -1
},
{
"id": 4850,
"name": "Sluice",
"icon": 405,
"classjob": -1
},
{
"id": 4851,
"name": "Sluice",
"icon": 405,
"classjob": -1
},
{
"id": 4852,
"name": "Sluice",
"icon": 405,
"classjob": -1
},
{
"id": 4853,
"name": "Fluid Swing",
"icon": 405,
"classjob": -1
},
{
"id": 4854,
"name": "Valve",
"icon": 405,
"classjob": -1
},
{
"id": 4855,
"name": "Cascade",
"icon": 405,
"classjob": -1
},
{
"id": 4856,
"name": "Cascade",
"icon": 405,
"classjob": -1
},
{
"id": 4857,
"name": "Digititis",
"icon": 405,
"classjob": -1
},
{
"id": 4858,
"name": "Ferrofluid",
"icon": 405,
"classjob": -1
},
{
"id": 4859,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4860,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4861,
"name": "Fluid Swing",
"icon": 405,
"classjob": -1
},
{
"id": 4862,
"name": "Fluid Swing",
"icon": 405,
"classjob": -1
},
{
"id": 4863,
"name": "Wash Away",
"icon": 405,
"classjob": -1
},
{
"id": 4864,
"name": "Digititis",
"icon": 405,
"classjob": -1
},
{
"id": 4865,
"name": "Equal Concentration",
"icon": 405,
"classjob": -1
},
{
"id": 4866,
"name": "Hand Of Pain",
"icon": 405,
"classjob": -1
},
{
"id": 4867,
"name": "Contamination",
"icon": 405,
"classjob": -1
},
{
"id": 4868,
"name": "Drainage",
"icon": 405,
"classjob": -1
},
{
"id": 4869,
"name": "Severe Contamination",
"icon": 405,
"classjob": -1
},
{
"id": 4870,
"name": "Ferrofluid",
"icon": 405,
"classjob": -1
},
{
"id": 4871,
"name": "Magnetism",
"icon": 405,
"classjob": -1
},
{
"id": 4872,
"name": "Ultramagnetism",
"icon": 405,
"classjob": -1
},
{
"id": 4873,
"name": "Repel",
"icon": 405,
"classjob": -1
},
{
"id": 4874,
"name": "Oil Blast",
"icon": 405,
"classjob": -1
},
{
"id": 4875,
"name": "Oil Blast",
"icon": 405,
"classjob": -1
},
{
"id": 4876,
"name": "Current Leakage",
"icon": 405,
"classjob": -1
},
{
"id": 4877,
"name": "Current Leakage",
"icon": 405,
"classjob": -1
},
{
"id": 4878,
"name": "Mucilage",
"icon": 405,
"classjob": -1
},
{
"id": 4879,
"name": "Aqua Vitae",
"icon": 405,
"classjob": -1
},
{
"id": 4880,
"name": "Celestial Stasis",
"icon": 405,
"classjob": -1
},
{
"id": 4881,
"name": "Ancient Graviga",
"icon": 405,
"classjob": -1
},
{
"id": 4884,
"name": "Rostnbyrt",
"icon": 405,
"classjob": -1
},
{
"id": 4885,
"name": "Aero Blast",
"icon": 405,
"classjob": -1
},
{
"id": 4886,
"name": "Lumisphere",
"icon": 405,
"classjob": -1
},
{
"id": 4887,
"name": "Magitek Spread",
"icon": 405,
"classjob": -1
},
{
"id": 4901,
"name": "Light Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 4902,
"name": "Bodyhurt Breakblock",
"icon": 405,
"classjob": -1
},
{
"id": 4903,
"name": "Brainhurt Breakblock",
"icon": 405,
"classjob": -1
},
{
"id": 4905,
"name": "Gobbieboom",
"icon": 405,
"classjob": -1
},
{
"id": 4906,
"name": "Thunderhead",
"icon": 405,
"classjob": -1
},
{
"id": 4907,
"name": "Heavydoom",
"icon": 405,
"classjob": -1
},
{
"id": 4908,
"name": "Meltyspume",
"icon": 405,
"classjob": -1
},
{
"id": 4909,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 4910,
"name": "Pressure Increase",
"icon": 405,
"classjob": -1
},
{
"id": 4911,
"name": "Blitzstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 4912,
"name": "Bangyzoom",
"icon": 405,
"classjob": -1
},
{
"id": 4913,
"name": "Heavydoom",
"icon": 61122,
"classjob": 0
},
{
"id": 4914,
"name": "Cracklyplume",
"icon": 61123,
"classjob": 0
},
{
"id": 4915,
"name": "Meltyspume",
"icon": 61124,
"classjob": 0
},
{
"id": 4916,
"name": "Stickyloom",
"icon": 61125,
"classjob": 0
},
{
"id": 4917,
"name": "Recharge",
"icon": 61127,
"classjob": 0
},
{
"id": 4918,
"name": "Cetacean Rage",
"icon": 405,
"classjob": -1
},
{
"id": 4919,
"name": "Perpetual Ray",
"icon": 405,
"classjob": -1
},
{
"id": 4920,
"name": "Perpetual Ray",
"icon": 405,
"classjob": -1
},
{
"id": 4921,
"name": "Laser Diffusion",
"icon": 405,
"classjob": -1
},
{
"id": 4922,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 4923,
"name": "Panzerfaust",
"icon": 405,
"classjob": -1
},
{
"id": 4924,
"name": "Primal Tears",
"icon": 405,
"classjob": -1
},
{
"id": 4925,
"name": "Breach Blast",
"icon": 405,
"classjob": -1
},
{
"id": 4927,
"name": "Deep Draught",
"icon": 405,
"classjob": -1
},
{
"id": 4928,
"name": "Howling Wing",
"icon": 405,
"classjob": -1
},
{
"id": 4929,
"name": "Extreme Wind",
"icon": 405,
"classjob": -1
},
{
"id": 4930,
"name": "Silencing Cant",
"icon": 61118,
"classjob": 0
},
{
"id": 4931,
"name": "Buffet",
"icon": 61129,
"classjob": 0
},
{
"id": 4932,
"name": "Baleen Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 4933,
"name": "Vacuum Wave",
"icon": 405,
"classjob": -1
},
{
"id": 4934,
"name": "Atmospheric Disruption",
"icon": 405,
"classjob": -1
},
{
"id": 4935,
"name": "Thunderhead",
"icon": 405,
"classjob": -1
},
{
"id": 4936,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 4937,
"name": "Frozen Mist",
"icon": 405,
"classjob": -1
},
{
"id": 4938,
"name": "Buffet",
"icon": 405,
"classjob": -1
},
{
"id": 4939,
"name": "Northerlies",
"icon": 405,
"classjob": -1
},
{
"id": 4940,
"name": "Trunk Tawse",
"icon": 405,
"classjob": -1
},
{
"id": 4941,
"name": "Rock Of Ages",
"icon": 405,
"classjob": -1
},
{
"id": 4942,
"name": "Wooly Inspiration",
"icon": 405,
"classjob": -1
},
{
"id": 4943,
"name": "Rout",
"icon": 405,
"classjob": -1
},
{
"id": 4944,
"name": "Overbite",
"icon": 405,
"classjob": -1
},
{
"id": 4945,
"name": "Razor Scales",
"icon": 405,
"classjob": -1
},
{
"id": 4946,
"name": "Ensnare",
"icon": 405,
"classjob": -1
},
{
"id": 4947,
"name": "Blazing Trail",
"icon": 405,
"classjob": -1
},
{
"id": 4948,
"name": "Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 4949,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 4950,
"name": "Goblin Attack",
"icon": 405,
"classjob": -1
},
{
"id": 4951,
"name": "Bravado",
"icon": 405,
"classjob": -1
},
{
"id": 4952,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 4953,
"name": "Gobskin",
"icon": 405,
"classjob": -1
},
{
"id": 4954,
"name": "Reckless Abandon",
"icon": 405,
"classjob": -1
},
{
"id": 4955,
"name": "Chirp",
"icon": 405,
"classjob": -1
},
{
"id": 4956,
"name": "Straight Punch",
"icon": 405,
"classjob": -1
},
{
"id": 4957,
"name": "Firewater",
"icon": 405,
"classjob": -1
},
{
"id": 4958,
"name": "Elbow Drop",
"icon": 405,
"classjob": -1
},
{
"id": 4959,
"name": "Feral Peck",
"icon": 405,
"classjob": -1
},
{
"id": 4960,
"name": "Reaving Wind",
"icon": 405,
"classjob": -1
},
{
"id": 4961,
"name": "Warped Wail",
"icon": 405,
"classjob": -1
},
{
"id": 4962,
"name": "Carpomission",
"icon": 405,
"classjob": -1
},
{
"id": 4963,
"name": "Isle Drop",
"icon": 405,
"classjob": -1
},
{
"id": 4964,
"name": "Neck Splinter",
"icon": 405,
"classjob": -1
},
{
"id": 4965,
"name": "Fin Rays",
"icon": 405,
"classjob": -1
},
{
"id": 4966,
"name": "74 Degrees",
"icon": 405,
"classjob": -1
},
{
"id": 4967,
"name": "Overflow",
"icon": 405,
"classjob": -1
},
{
"id": 4968,
"name": "The Serpent's Apple",
"icon": 405,
"classjob": -1
},
{
"id": 4969,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 4970,
"name": "Fall Of Man",
"icon": 405,
"classjob": -1
},
{
"id": 4971,
"name": "Bloody Caress",
"icon": 405,
"classjob": -1
},
{
"id": 4972,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 4973,
"name": "Viscid Emission",
"icon": 405,
"classjob": -1
},
{
"id": 4974,
"name": "Rotten Stench",
"icon": 405,
"classjob": -1
},
{
"id": 4976,
"name": "Air Combat Maneuver",
"icon": 64166,
"classjob": 0
},
{
"id": 4977,
"name": "Raiton",
"icon": 405,
"classjob": 0
},
{
"id": 4978,
"name": "Death Blossom",
"icon": 405,
"classjob": -1
},
{
"id": 4979,
"name": "Advent",
"icon": 405,
"classjob": -1
},
{
"id": 4980,
"name": "Advent",
"icon": 405,
"classjob": -1
},
{
"id": 4981,
"name": "Summon Familiar",
"icon": 405,
"classjob": -1
},
{
"id": 4982,
"name": "Voidblood",
"icon": 405,
"classjob": -1
},
{
"id": 4983,
"name": "Triclip",
"icon": 405,
"classjob": -1
},
{
"id": 4984,
"name": "Pupate",
"icon": 405,
"classjob": -1
},
{
"id": 4985,
"name": "Wriggle",
"icon": 405,
"classjob": -1
},
{
"id": 4986,
"name": "Blades Of Carnage And Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 4987,
"name": "Makibishi",
"icon": 405,
"classjob": -1
},
{
"id": 4988,
"name": "Feral Lunge",
"icon": 405,
"classjob": -1
},
{
"id": 4989,
"name": "Throwing Dagger",
"icon": 405,
"classjob": -1
},
{
"id": 4990,
"name": "Aether Charge",
"icon": 405,
"classjob": -1
},
{
"id": 4991,
"name": "Deathly Cadenza",
"icon": 405,
"classjob": -1
},
{
"id": 4992,
"name": "Lunatic Voice",
"icon": 405,
"classjob": -1
},
{
"id": 4993,
"name": "Shadow Flare",
"icon": 405,
"classjob": -1
},
{
"id": 4994,
"name": "Third Leg Forward",
"icon": 405,
"classjob": -1
},
{
"id": 4995,
"name": "The Last Song",
"icon": 405,
"classjob": -1
},
{
"id": 4996,
"name": "Falling Sky",
"icon": 405,
"classjob": -1
},
{
"id": 4997,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 4998,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 4999,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 5000,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5001,
"name": "Flamethrower",
"icon": 405,
"classjob": -1
},
{
"id": 5002,
"name": "Acorn Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 5003,
"name": "Arboreal Storm",
"icon": 405,
"classjob": -1
},
{
"id": 5004,
"name": "Acid Shower",
"icon": 405,
"classjob": -1
},
{
"id": 5007,
"name": "Weighing Of The Heart",
"icon": 405,
"classjob": -1
},
{
"id": 5008,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5009,
"name": "Floral Trap",
"icon": 405,
"classjob": -1
},
{
"id": 5010,
"name": "Devour",
"icon": 405,
"classjob": -1
},
{
"id": 5011,
"name": "Spit",
"icon": 405,
"classjob": -1
},
{
"id": 5012,
"name": "Spit",
"icon": 405,
"classjob": -1
},
{
"id": 5013,
"name": "Sweet Scent",
"icon": 405,
"classjob": -1
},
{
"id": 5015,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 5016,
"name": "Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 5017,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 5018,
"name": "Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 5019,
"name": "Hell Slash",
"icon": 405,
"classjob": -1
},
{
"id": 5020,
"name": "Bloody Caress",
"icon": 405,
"classjob": -1
},
{
"id": 5021,
"name": "Floral Trap",
"icon": 405,
"classjob": -1
},
{
"id": 5022,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 5023,
"name": "Rotten Stench",
"icon": 405,
"classjob": -1
},
{
"id": 5024,
"name": "Sharp Sting",
"icon": 405,
"classjob": -1
},
{
"id": 5025,
"name": "Tail Slap",
"icon": 405,
"classjob": -1
},
{
"id": 5026,
"name": "Circle Of Flames",
"icon": 405,
"classjob": -1
},
{
"id": 5027,
"name": "Circle Blade",
"icon": 405,
"classjob": -1
},
{
"id": 5028,
"name": "Petrifaction",
"icon": 405,
"classjob": -1
},
{
"id": 5029,
"name": "Diffusion Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5030,
"name": "Brainjack",
"icon": 405,
"classjob": -1
},
{
"id": 5031,
"name": "Homing Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5032,
"name": "Atomic Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5033,
"name": "Plummet",
"icon": 405,
"classjob": -1
},
{
"id": 5034,
"name": "Death Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 5035,
"name": "Liquid Heaven",
"icon": 405,
"classjob": -1
},
{
"id": 5036,
"name": "Aetheric Profusion",
"icon": 405,
"classjob": -1
},
{
"id": 5037,
"name": "Gustnado",
"icon": 405,
"classjob": -1
},
{
"id": 5038,
"name": "Gustnado",
"icon": 405,
"classjob": -1
},
{
"id": 5039,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 5040,
"name": "Salivous Snap",
"icon": 405,
"classjob": -1
},
{
"id": 5041,
"name": "Evil Eye",
"icon": 405,
"classjob": -1
},
{
"id": 5042,
"name": "Sheet Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 5043,
"name": "Roast",
"icon": 405,
"classjob": -1
},
{
"id": 5044,
"name": "Plasma Release",
"icon": 405,
"classjob": -1
},
{
"id": 5045,
"name": "Granite Rain",
"icon": 405,
"classjob": -1
},
{
"id": 5046,
"name": "Perpetual Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5047,
"name": "Perpetual Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5048,
"name": "Dragon Stomp",
"icon": 405,
"classjob": -1
},
{
"id": 5049,
"name": "Dark Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 5050,
"name": "Reflect",
"icon": 405,
"classjob": -1
},
{
"id": 5051,
"name": "Double",
"icon": 405,
"classjob": -1
},
{
"id": 5053,
"name": "Judgment Nisi",
"icon": 405,
"classjob": -1
},
{
"id": 5054,
"name": "Judgment Nisi",
"icon": 405,
"classjob": -1
},
{
"id": 5058,
"name": "Death Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5061,
"name": "Breach Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5062,
"name": "Breach Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5063,
"name": "Atmospheric Disruption",
"icon": 405,
"classjob": -1
},
{
"id": 5064,
"name": "Atmospheric Disruption",
"icon": 405,
"classjob": -1
},
{
"id": 5065,
"name": "Levinfang",
"icon": 405,
"classjob": -1
},
{
"id": 5067,
"name": "Howl",
"icon": 405,
"classjob": -1
},
{
"id": 5068,
"name": "Sanguine Bite",
"icon": 405,
"classjob": -1
},
{
"id": 5069,
"name": "Raiton",
"icon": 405,
"classjob": 0
},
{
"id": 5070,
"name": "Brainshaker",
"icon": 405,
"classjob": -1
},
{
"id": 5071,
"name": "Brainshaker",
"icon": 405,
"classjob": -1
},
{
"id": 5072,
"name": "Seed Of The Sky",
"icon": 405,
"classjob": -1
},
{
"id": 5073,
"name": "Cure",
"icon": 405,
"classjob": -1
},
{
"id": 5075,
"name": "Cetacean Rage",
"icon": 405,
"classjob": -1
},
{
"id": 5076,
"name": "Primal Tears",
"icon": 405,
"classjob": -1
},
{
"id": 5077,
"name": "Breach Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5079,
"name": "Howling Wing",
"icon": 405,
"classjob": -1
},
{
"id": 5080,
"name": "Extreme Wind",
"icon": 405,
"classjob": -1
},
{
"id": 5081,
"name": "Baleen Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 5082,
"name": "Vacuum Wave",
"icon": 405,
"classjob": -1
},
{
"id": 5083,
"name": "Atmospheric Disruption",
"icon": 405,
"classjob": -1
},
{
"id": 5084,
"name": "Thunderhead",
"icon": 405,
"classjob": -1
},
{
"id": 5085,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 5086,
"name": "Breach Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5087,
"name": "Atmospheric Disruption",
"icon": 405,
"classjob": -1
},
{
"id": 5088,
"name": "Falling Sky",
"icon": 405,
"classjob": -1
},
{
"id": 5089,
"name": "Dry Fin",
"icon": 405,
"classjob": -1
},
{
"id": 5090,
"name": "Wet Fin",
"icon": 405,
"classjob": -1
},
{
"id": 5091,
"name": "Bubo Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5092,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5093,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5094,
"name": "Aero",
"icon": 405,
"classjob": -1
},
{
"id": 5095,
"name": "Mortal Revolution",
"icon": 405,
"classjob": -1
},
{
"id": 5096,
"name": "Mortal Revolution",
"icon": 405,
"classjob": -1
},
{
"id": 5097,
"name": "Key Item",
"icon": 405,
"classjob": 0
},
{
"id": 5098,
"name": "Blinding Blade",
"icon": 405,
"classjob": -1
},
{
"id": 5099,
"name": "The Seeing Tail",
"icon": 405,
"classjob": -1
},
{
"id": 5100,
"name": "The Seeing Wing",
"icon": 405,
"classjob": -1
},
{
"id": 5101,
"name": "Revengeance",
"icon": 405,
"classjob": -1
},
{
"id": 5102,
"name": "Prelude To Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5103,
"name": "Prelude To Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5104,
"name": "Prelude To Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5105,
"name": "Prelude To Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5106,
"name": "Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5107,
"name": "Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5108,
"name": "Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5109,
"name": "Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5110,
"name": "Tapasya",
"icon": 405,
"classjob": -1
},
{
"id": 5111,
"name": "Tapasya",
"icon": 405,
"classjob": -1
},
{
"id": 5112,
"name": "Atma-Linga",
"icon": 405,
"classjob": -1
},
{
"id": 5113,
"name": "Bloody Fuller",
"icon": 405,
"classjob": -1
},
{
"id": 5116,
"name": "Laughing Moon",
"icon": 405,
"classjob": -1
},
{
"id": 5117,
"name": "Chandrahas",
"icon": 405,
"classjob": -1
},
{
"id": 5118,
"name": "The Rose Of Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 5119,
"name": "The Rose Of Conquest",
"icon": 405,
"classjob": -1
},
{
"id": 5120,
"name": "Pillars Of Heaven",
"icon": 405,
"classjob": -1
},
{
"id": 5121,
"name": "Surpanakha",
"icon": 405,
"classjob": -1
},
{
"id": 5122,
"name": "The Rose Of Hate",
"icon": 405,
"classjob": -1
},
{
"id": 5123,
"name": "Swift Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5124,
"name": "Swift Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5125,
"name": "Laughing Moon",
"icon": 405,
"classjob": -1
},
{
"id": 5126,
"name": "Swift Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5127,
"name": "Swift Slaughter",
"icon": 405,
"classjob": -1
},
{
"id": 5128,
"name": "Blades Of Carnage And Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 5129,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 5130,
"name": "Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 5134,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5135,
"name": "Final Liberation",
"icon": 405,
"classjob": -1
},
{
"id": 5136,
"name": "Starry Heavens",
"icon": 405,
"classjob": 0
},
{
"id": 5137,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 5138,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 5140,
"name": "Stone Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 5141,
"name": "Syrup",
"icon": 405,
"classjob": -1
},
{
"id": 5142,
"name": "Sickle Slash",
"icon": 405,
"classjob": -1
},
{
"id": 5143,
"name": "Sickle Slash",
"icon": 405,
"classjob": -1
},
{
"id": 5144,
"name": "Abyssal Reaper",
"icon": 405,
"classjob": -1
},
{
"id": 5145,
"name": "Nemesis Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5146,
"name": "Demonic Descent",
"icon": 405,
"classjob": -1
},
{
"id": 5147,
"name": "Bloody Harvest",
"icon": 405,
"classjob": -1
},
{
"id": 5148,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5149,
"name": "Flame Wreath",
"icon": 405,
"classjob": -1
},
{
"id": 5150,
"name": "Serpentine Strike",
"icon": 405,
"classjob": -1
},
{
"id": 5152,
"name": "Gehenna",
"icon": 405,
"classjob": -1
},
{
"id": 5153,
"name": "Sickle Strike",
"icon": 405,
"classjob": -1
},
{
"id": 5154,
"name": "Petrifaction",
"icon": 405,
"classjob": -1
},
{
"id": 5155,
"name": "Hydrocannon",
"icon": 405,
"classjob": -1
},
{
"id": 5156,
"name": "Electric Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 5157,
"name": "Symbiosis",
"icon": 405,
"classjob": -1
},
{
"id": 5158,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 5159,
"name": "Immersion",
"icon": 405,
"classjob": -1
},
{
"id": 5160,
"name": "Expulsion",
"icon": 405,
"classjob": -1
},
{
"id": 5161,
"name": "Electric Whorl",
"icon": 405,
"classjob": -1
},
{
"id": 5162,
"name": "Hydrobomb",
"icon": 405,
"classjob": -1
},
{
"id": 5163,
"name": "Feeding Call",
"icon": 405,
"classjob": -1
},
{
"id": 5164,
"name": "Feeding Call",
"icon": 405,
"classjob": -1
},
{
"id": 5165,
"name": "Jaws",
"icon": 405,
"classjob": -1
},
{
"id": 5166,
"name": "Bite And Run",
"icon": 405,
"classjob": -1
},
{
"id": 5167,
"name": "Alpine Draft",
"icon": 405,
"classjob": -1
},
{
"id": 5168,
"name": "Water",
"icon": 405,
"classjob": -1
},
{
"id": 5169,
"name": "Hydroburst",
"icon": 405,
"classjob": -1
},
{
"id": 5170,
"name": "Hydrobomb",
"icon": 405,
"classjob": -1
},
{
"id": 5171,
"name": "Jaws",
"icon": 405,
"classjob": -1
},
{
"id": 5172,
"name": "Ambush",
"icon": 405,
"classjob": -1
},
{
"id": 5174,
"name": "Corrosive Bile",
"icon": 405,
"classjob": -1
},
{
"id": 5175,
"name": "Corrosive Bile",
"icon": 405,
"classjob": -1
},
{
"id": 5176,
"name": "Malaise",
"icon": 405,
"classjob": -1
},
{
"id": 5177,
"name": "Bile Bombardment",
"icon": 405,
"classjob": -1
},
{
"id": 5178,
"name": "Flailing Tentacles",
"icon": 405,
"classjob": -1
},
{
"id": 5179,
"name": "Flailing Tentacles",
"icon": 405,
"classjob": -1
},
{
"id": 5180,
"name": "Idol Of Impurity",
"icon": 405,
"classjob": -1
},
{
"id": 5181,
"name": "Bile Below",
"icon": 405,
"classjob": -1
},
{
"id": 5182,
"name": "Black Lung",
"icon": 405,
"classjob": -1
},
{
"id": 5183,
"name": "Void Pact",
"icon": 405,
"classjob": -1
},
{
"id": 5184,
"name": "Beckon",
"icon": 405,
"classjob": -1
},
{
"id": 5185,
"name": "Devour",
"icon": 405,
"classjob": -1
},
{
"id": 5186,
"name": "Expel",
"icon": 405,
"classjob": -1
},
{
"id": 5187,
"name": "Expel",
"icon": 405,
"classjob": -1
},
{
"id": 5188,
"name": "Pestilence",
"icon": 405,
"classjob": -1
},
{
"id": 5189,
"name": "Death Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5190,
"name": "Impure Pulse",
"icon": 405,
"classjob": -1
},
{
"id": 5191,
"name": "Corruption",
"icon": 405,
"classjob": -1
},
{
"id": 5192,
"name": "Grand Corruption",
"icon": 405,
"classjob": -1
},
{
"id": 5193,
"name": "Void Slash",
"icon": 405,
"classjob": -1
},
{
"id": 5194,
"name": "Void Trap",
"icon": 405,
"classjob": -1
},
{
"id": 5195,
"name": "Deathstrike",
"icon": 405,
"classjob": -1
},
{
"id": 5196,
"name": "Ravenous Bite",
"icon": 405,
"classjob": -1
},
{
"id": 5197,
"name": "Abyssal Cry",
"icon": 405,
"classjob": -1
},
{
"id": 5198,
"name": "Desolation",
"icon": 405,
"classjob": -1
},
{
"id": 5199,
"name": "Attack",
"icon": 405,
"classjob": 0
},
{
"id": 5200,
"name": "Cryptic Poem",
"icon": 405,
"classjob": -1
},
{
"id": 5201,
"name": "Miracle Flash",
"icon": 405,
"classjob": -1
},
{
"id": 5202,
"name": "Director's Order",
"icon": 405,
"classjob": -1
},
{
"id": 5203,
"name": "Void Wall",
"icon": 405,
"classjob": -1
},
{
"id": 5204,
"name": "Void Ward",
"icon": 405,
"classjob": -1
},
{
"id": 5205,
"name": "Mucus Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 5206,
"name": "Mucus Spray",
"icon": 405,
"classjob": -1
},
{
"id": 5207,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5208,
"name": "White Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5209,
"name": "Mean Thrash",
"icon": 405,
"classjob": -1
},
{
"id": 5210,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5211,
"name": "Pulse Of The Void",
"icon": 405,
"classjob": -1
},
{
"id": 5212,
"name": "Rootstorm",
"icon": 405,
"classjob": -1
},
{
"id": 5213,
"name": "Shockwave Stomp",
"icon": 405,
"classjob": -1
},
{
"id": 5214,
"name": "Full Bloom",
"icon": 405,
"classjob": -1
},
{
"id": 5215,
"name": "Atropine Spore",
"icon": 405,
"classjob": -1
},
{
"id": 5216,
"name": "Frond Fatale",
"icon": 405,
"classjob": -1
},
{
"id": 5217,
"name": "Petal Shower",
"icon": 405,
"classjob": -1
},
{
"id": 5218,
"name": "Petal",
"icon": 405,
"classjob": -1
},
{
"id": 5219,
"name": "Deracinator",
"icon": 405,
"classjob": -1
},
{
"id": 5220,
"name": "Frond Fatale",
"icon": 405,
"classjob": -1
},
{
"id": 5221,
"name": "Soul Vacuum",
"icon": 405,
"classjob": -1
},
{
"id": 5222,
"name": "Mildew",
"icon": 405,
"classjob": -1
},
{
"id": 5223,
"name": "Decay",
"icon": 405,
"classjob": -1
},
{
"id": 5224,
"name": "Extremely Bad Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5225,
"name": "Extremely Bad Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5226,
"name": "Schizocarps",
"icon": 405,
"classjob": -1
},
{
"id": 5227,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 5228,
"name": "Vine Probe",
"icon": 405,
"classjob": -1
},
{
"id": 5229,
"name": "Burr Fester",
"icon": 405,
"classjob": -1
},
{
"id": 5230,
"name": "Extremely Bad Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5231,
"name": "Earthy Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5232,
"name": "Earthy Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5233,
"name": "Avail",
"icon": 405,
"classjob": -1
},
{
"id": 5234,
"name": "Explosive Dehiscence",
"icon": 405,
"classjob": -1
},
{
"id": 5235,
"name": "Pheromone Leak",
"icon": 405,
"classjob": -1
},
{
"id": 5236,
"name": "Stinger Cell",
"icon": 405,
"classjob": -1
},
{
"id": 5237,
"name": "Apitoxin",
"icon": 405,
"classjob": -1
},
{
"id": 5238,
"name": "Assail",
"icon": 405,
"classjob": -1
},
{
"id": 5239,
"name": "Ally",
"icon": 405,
"classjob": -1
},
{
"id": 5240,
"name": "Straight Spindle",
"icon": 405,
"classjob": -1
},
{
"id": 5241,
"name": "Sharp Spindle",
"icon": 405,
"classjob": -1
},
{
"id": 5242,
"name": "Crossfire",
"icon": 405,
"classjob": -1
},
{
"id": 5243,
"name": "Crossfire",
"icon": 405,
"classjob": -1
},
{
"id": 5244,
"name": "Thunderstrike",
"icon": 405,
"classjob": -1
},
{
"id": 5245,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5246,
"name": "Ascalon's Might",
"icon": 405,
"classjob": -1
},
{
"id": 5247,
"name": "Ascalon's Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 5248,
"name": "Ascalon's Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 5249,
"name": "Lightning Storm",
"icon": 405,
"classjob": -1
},
{
"id": 5250,
"name": "Lightning Storm",
"icon": 405,
"classjob": -1
},
{
"id": 5251,
"name": "Meteorain",
"icon": 405,
"classjob": -1
},
{
"id": 5252,
"name": "Meteorain",
"icon": 405,
"classjob": -1
},
{
"id": 5253,
"name": "Ancient Quaga",
"icon": 405,
"classjob": -1
},
{
"id": 5254,
"name": "Ancient Quaga",
"icon": 405,
"classjob": -1
},
{
"id": 5255,
"name": "Heavenly Heel",
"icon": 405,
"classjob": -1
},
{
"id": 5256,
"name": "The Dragon's Eye",
"icon": 405,
"classjob": -1
},
{
"id": 5257,
"name": "The Dragon's Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 5258,
"name": "The Dragon's Glory",
"icon": 405,
"classjob": -1
},
{
"id": 5259,
"name": "The Dragon's Rage",
"icon": 405,
"classjob": -1
},
{
"id": 5260,
"name": "Knights Of The Round",
"icon": 405,
"classjob": -1
},
{
"id": 5261,
"name": "Ultimate End",
"icon": 405,
"classjob": -1
},
{
"id": 5262,
"name": "Ultimate End",
"icon": 405,
"classjob": -1
},
{
"id": 5263,
"name": "The Light Of Ascalon",
"icon": 405,
"classjob": -1
},
{
"id": 5264,
"name": "Sacred Cross",
"icon": 405,
"classjob": -1
},
{
"id": 5265,
"name": "Sacred Cross",
"icon": 405,
"classjob": -1
},
{
"id": 5266,
"name": "Spear Of The Fury",
"icon": 405,
"classjob": -1
},
{
"id": 5267,
"name": "Divine Right",
"icon": 405,
"classjob": -1
},
{
"id": 5268,
"name": "Heavenly Slash",
"icon": 405,
"classjob": -1
},
{
"id": 5269,
"name": "Holiest Of Holy",
"icon": 405,
"classjob": -1
},
{
"id": 5270,
"name": "Holy Bladedance",
"icon": 405,
"classjob": -1
},
{
"id": 5271,
"name": "Holy Shield Bash",
"icon": 405,
"classjob": -1
},
{
"id": 5272,
"name": "Sacred Cross",
"icon": 405,
"classjob": -1
},
{
"id": 5273,
"name": "Dimensional Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 5274,
"name": "Dimensional Collapse",
"icon": 405,
"classjob": -1
},
{
"id": 5275,
"name": "Faith Unmoving",
"icon": 405,
"classjob": -1
},
{
"id": 5276,
"name": "Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 5277,
"name": "Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 5278,
"name": "Eternal Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 5279,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 5280,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 5281,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 5282,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 5283,
"name": "Heavy Impact",
"icon": 405,
"classjob": -1
},
{
"id": 5284,
"name": "Absolute Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 5285,
"name": "Absolute Conviction",
"icon": 405,
"classjob": -1
},
{
"id": 5286,
"name": "Spiral Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 5287,
"name": "Spiral Pierce",
"icon": 405,
"classjob": -1
},
{
"id": 5288,
"name": "Skyward Leap",
"icon": 405,
"classjob": -1
},
{
"id": 5289,
"name": "Skyward Leap",
"icon": 405,
"classjob": -1
},
{
"id": 5290,
"name": "Heavensward Leap",
"icon": 405,
"classjob": -1
},
{
"id": 5291,
"name": "Heavensflame",
"icon": 405,
"classjob": -1
},
{
"id": 5292,
"name": "Heavensflame",
"icon": 405,
"classjob": -1
},
{
"id": 5293,
"name": "Holy Chain",
"icon": 405,
"classjob": -1
},
{
"id": 5294,
"name": "Hiemal Storm",
"icon": 405,
"classjob": -1
},
{
"id": 5295,
"name": "Hiemal Storm",
"icon": 405,
"classjob": -1
},
{
"id": 5296,
"name": "Holy Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 5297,
"name": "Pure Of Soul",
"icon": 405,
"classjob": -1
},
{
"id": 5298,
"name": "Pure Of Soul",
"icon": 405,
"classjob": -1
},
{
"id": 5299,
"name": "Comet Impact",
"icon": 405,
"classjob": -1
},
{
"id": 5300,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 5301,
"name": "Comet",
"icon": 405,
"classjob": -1
},
{
"id": 5302,
"name": "Clearout",
"icon": 405,
"classjob": -1
},
{
"id": 5303,
"name": "Wallop",
"icon": 405,
"classjob": -1
},
{
"id": 5304,
"name": "Acid Spray",
"icon": 405,
"classjob": -1
},
{
"id": 5305,
"name": "Targeting",
"icon": 405,
"classjob": -1
},
{
"id": 5306,
"name": "Aetheric Mimicry",
"icon": 405,
"classjob": -1
},
{
"id": 5307,
"name": "Vorpal Blade",
"icon": 405,
"classjob": -1
},
{
"id": 5308,
"name": "Luminous Lancet",
"icon": 405,
"classjob": -1
},
{
"id": 5309,
"name": "Luminous Lancet",
"icon": 405,
"classjob": -1
},
{
"id": 5310,
"name": "Damnation Dive",
"icon": 405,
"classjob": -1
},
{
"id": 5311,
"name": "Luminous Laceration",
"icon": 405,
"classjob": -1
},
{
"id": 5312,
"name": "Vorpal Blade",
"icon": 405,
"classjob": -1
},
{
"id": 5314,
"name": "Titan's Anger",
"icon": 405,
"classjob": -1
},
{
"id": 5315,
"name": "Loose Screw",
"icon": 405,
"classjob": -1
},
{
"id": 5316,
"name": "Earthy Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5317,
"name": "Strip Mine",
"icon": 405,
"classjob": -1
},
{
"id": 5318,
"name": "Corrupture",
"icon": 405,
"classjob": -1
},
{
"id": 5319,
"name": "Frack",
"icon": 405,
"classjob": -1
},
{
"id": 5320,
"name": "Batter",
"icon": 405,
"classjob": -1
},
{
"id": 5321,
"name": "Incubation",
"icon": 405,
"classjob": -1
},
{
"id": 5322,
"name": "Scalding Scolding",
"icon": 405,
"classjob": -1
},
{
"id": 5323,
"name": "Sap",
"icon": 405,
"classjob": -1
},
{
"id": 5324,
"name": "Bombshell Drop",
"icon": 405,
"classjob": -1
},
{
"id": 5325,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 5326,
"name": "Big Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5327,
"name": "Big Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5328,
"name": "Big Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5329,
"name": "Blue Flame",
"icon": 405,
"classjob": -1
},
{
"id": 5330,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 5331,
"name": "Big Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5333,
"name": "Extremely Bad Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5334,
"name": "Matter Shift",
"icon": 405,
"classjob": -1
},
{
"id": 5335,
"name": "Matter Shift",
"icon": 405,
"classjob": -1
},
{
"id": 5336,
"name": "Matter Shift",
"icon": 405,
"classjob": -1
},
{
"id": 5337,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 5340,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 5341,
"name": "Sickle Slash",
"icon": 405,
"classjob": -1
},
{
"id": 5350,
"name": "Mind Of Its Own",
"icon": 405,
"classjob": -1
},
{
"id": 5351,
"name": "Champ",
"icon": 405,
"classjob": -1
},
{
"id": 5352,
"name": "Hurl",
"icon": 405,
"classjob": -1
},
{
"id": 5353,
"name": "The Wood Remembers",
"icon": 405,
"classjob": -1
},
{
"id": 5354,
"name": "Buller's Drop",
"icon": 405,
"classjob": -1
},
{
"id": 5355,
"name": "Spiritus",
"icon": 405,
"classjob": -1
},
{
"id": 5357,
"name": "Spin",
"icon": 405,
"classjob": -1
},
{
"id": 5358,
"name": "Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 5359,
"name": "Scorch",
"icon": 405,
"classjob": -1
},
{
"id": 5360,
"name": "Disaster",
"icon": 405,
"classjob": -1
},
{
"id": 5361,
"name": "Great Ball Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 5362,
"name": "Brow Horn",
"icon": 405,
"classjob": -1
},
{
"id": 5363,
"name": "Horrid Horn",
"icon": 405,
"classjob": -1
},
{
"id": 5364,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 5365,
"name": "Shock",
"icon": 405,
"classjob": -1
},
{
"id": 5366,
"name": "Foregone Gleam",
"icon": 405,
"classjob": -1
},
{
"id": 5367,
"name": "Mucin",
"icon": 405,
"classjob": -1
},
{
"id": 5369,
"name": "Sticky Thread",
"icon": 405,
"classjob": -1
},
{
"id": 5370,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5371,
"name": "Big Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5372,
"name": "Venom Puff",
"icon": 405,
"classjob": -1
},
{
"id": 5373,
"name": "Venom Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5374,
"name": "Petrifaction",
"icon": 405,
"classjob": -1
},
{
"id": 5376,
"name": "Aether Detonation",
"icon": 405,
"classjob": -1
},
{
"id": 5377,
"name": "Aether Detonation",
"icon": 405,
"classjob": -1
},
{
"id": 5380,
"name": "Damnation Dive",
"icon": 405,
"classjob": -1
},
{
"id": 5381,
"name": "10-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 5382,
"name": "10-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 5383,
"name": "Wild Horn",
"icon": 405,
"classjob": -1
},
{
"id": 5384,
"name": "Hanadoki",
"icon": 405,
"classjob": -1
},
{
"id": 5385,
"name": "Gachirin",
"icon": 405,
"classjob": -1
},
{
"id": 5386,
"name": "Amatsu: Kyo-uri",
"icon": 405,
"classjob": -1
},
{
"id": 5387,
"name": "Venom Storm",
"icon": 405,
"classjob": -1
},
{
"id": 5388,
"name": "Stasis",
"icon": 405,
"classjob": -1
},
{
"id": 5390,
"name": "The Hammer",
"icon": 405,
"classjob": -1
},
{
"id": 5391,
"name": "The Hammer",
"icon": 405,
"classjob": -1
},
{
"id": 5392,
"name": "The Hammer",
"icon": 405,
"classjob": -1
},
{
"id": 5393,
"name": "Incubus",
"icon": 405,
"classjob": -1
},
{
"id": 5394,
"name": "Birdlime",
"icon": 405,
"classjob": -1
},
{
"id": 5395,
"name": "Feeding Call",
"icon": 405,
"classjob": -1
},
{
"id": 5396,
"name": "Incubation",
"icon": 405,
"classjob": -1
},
{
"id": 5397,
"name": "Bomb Spark",
"icon": 405,
"classjob": -1
},
{
"id": 5398,
"name": "Targeting",
"icon": 405,
"classjob": -1
},
{
"id": 5399,
"name": "Scorched Earth",
"icon": 405,
"classjob": -1
},
{
"id": 5400,
"name": "Loose Screw",
"icon": 405,
"classjob": -1
},
{
"id": 5401,
"name": "The Hammer",
"icon": 405,
"classjob": -1
},
{
"id": 5402,
"name": "The Hammer",
"icon": 405,
"classjob": -1
},
{
"id": 5403,
"name": "Carpomission",
"icon": 405,
"classjob": -1
},
{
"id": 5404,
"name": "Isle Drop",
"icon": 405,
"classjob": -1
},
{
"id": 5405,
"name": "Neck Splinter",
"icon": 405,
"classjob": -1
},
{
"id": 5406,
"name": "Underbite",
"icon": 405,
"classjob": -1
},
{
"id": 5407,
"name": "Primordial Bark",
"icon": 405,
"classjob": -1
},
{
"id": 5408,
"name": "Third Leg Forward",
"icon": 405,
"classjob": -1
},
{
"id": 5409,
"name": "Topple",
"icon": 405,
"classjob": -1
},
{
"id": 5410,
"name": "Third Leg Back",
"icon": 405,
"classjob": -1
},
{
"id": 5411,
"name": "Sticky Web",
"icon": 405,
"classjob": -1
},
{
"id": 5412,
"name": "Caustic Spray",
"icon": 405,
"classjob": -1
},
{
"id": 5413,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 5414,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 5415,
"name": "Realm Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 5416,
"name": "Silkscreen",
"icon": 405,
"classjob": -1
},
{
"id": 5417,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 5418,
"name": "Hammer Beak",
"icon": 405,
"classjob": -1
},
{
"id": 5419,
"name": "Petribreath",
"icon": 405,
"classjob": -1
},
{
"id": 5420,
"name": "Numbing Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5421,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5422,
"name": "Slumber Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5423,
"name": "Fin Rays",
"icon": 405,
"classjob": -1
},
{
"id": 5424,
"name": "74 Degrees",
"icon": 405,
"classjob": -1
},
{
"id": 5425,
"name": "Overflow",
"icon": 405,
"classjob": -1
},
{
"id": 5426,
"name": "Bloody Caress",
"icon": 405,
"classjob": -1
},
{
"id": 5427,
"name": "Floral Trap",
"icon": 405,
"classjob": -1
},
{
"id": 5428,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 5429,
"name": "Rotten Stench",
"icon": 405,
"classjob": -1
},
{
"id": 5430,
"name": "Devil Eye",
"icon": 405,
"classjob": -1
},
{
"id": 5431,
"name": "Petrifaction",
"icon": 405,
"classjob": -1
},
{
"id": 5432,
"name": "Bull Charge",
"icon": 405,
"classjob": -1
},
{
"id": 5433,
"name": "Cold Stare",
"icon": 405,
"classjob": -1
},
{
"id": 5434,
"name": "Jettatura",
"icon": 405,
"classjob": -1
},
{
"id": 5435,
"name": "Bestial Roar",
"icon": 405,
"classjob": -1
},
{
"id": 5436,
"name": "Canopy",
"icon": 405,
"classjob": -1
},
{
"id": 5437,
"name": "Arboreal Storm",
"icon": 405,
"classjob": -1
},
{
"id": 5438,
"name": "Acorn Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 5439,
"name": "Backhand Blow",
"icon": 405,
"classjob": -1
},
{
"id": 5440,
"name": "Rise And Fall",
"icon": 405,
"classjob": -1
},
{
"id": 5442,
"name": "Sand Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5443,
"name": "Sandstorm",
"icon": 405,
"classjob": -1
},
{
"id": 5444,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5445,
"name": "Earthquake",
"icon": 405,
"classjob": -1
},
{
"id": 5446,
"name": "Sand Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 5447,
"name": "Bottomless Desert",
"icon": 405,
"classjob": -1
},
{
"id": 5448,
"name": "Sand Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 5449,
"name": "Pulverizing Pound",
"icon": 405,
"classjob": -1
},
{
"id": 5450,
"name": "Horrisonous Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5451,
"name": "Seismic Rift",
"icon": 405,
"classjob": -1
},
{
"id": 5452,
"name": "Khoomii",
"icon": 405,
"classjob": -1
},
{
"id": 5453,
"name": "Sonorous Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5455,
"name": "Encierro",
"icon": 405,
"classjob": -1
},
{
"id": 5456,
"name": "Transonic Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5457,
"name": "Flying Frenzy",
"icon": 405,
"classjob": -1
},
{
"id": 5458,
"name": "Breath Wing",
"icon": 405,
"classjob": -1
},
{
"id": 5459,
"name": "Sonic Storm",
"icon": 405,
"classjob": -1
},
{
"id": 5460,
"name": "Sonic Boom",
"icon": 405,
"classjob": -1
},
{
"id": 5461,
"name": "Drench",
"icon": 405,
"classjob": -1
},
{
"id": 5462,
"name": "Douse",
"icon": 405,
"classjob": -1
},
{
"id": 5463,
"name": "Douse",
"icon": 405,
"classjob": -1
},
{
"id": 5464,
"name": "Scale Ripple",
"icon": 405,
"classjob": -1
},
{
"id": 5465,
"name": "Scale Ripple",
"icon": 405,
"classjob": -1
},
{
"id": 5466,
"name": "Fin Rays",
"icon": 405,
"classjob": -1
},
{
"id": 5467,
"name": "Turbine",
"icon": 405,
"classjob": -1
},
{
"id": 5468,
"name": "Spite Of The Sky Elders",
"icon": 405,
"classjob": -1
},
{
"id": 5469,
"name": "Scorn Of The Sky Elders",
"icon": 405,
"classjob": -1
},
{
"id": 5470,
"name": "Warm Light",
"icon": 405,
"classjob": -1
},
{
"id": 5471,
"name": "Dark Chill",
"icon": 405,
"classjob": -1
},
{
"id": 5472,
"name": "Mucus Spray",
"icon": 405,
"classjob": -1
},
{
"id": 5473,
"name": "Acid Spray",
"icon": 405,
"classjob": -1
},
{
"id": 5474,
"name": "Big Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5475,
"name": "Browbeat",
"icon": 61130,
"classjob": 0
},
{
"id": 5476,
"name": "Apothecary",
"icon": 61132,
"classjob": 0
},
{
"id": 5477,
"name": "Wing Cutter",
"icon": 61131,
"classjob": 0
},
{
"id": 5478,
"name": "Triple Trial",
"icon": 405,
"classjob": -1
},
{
"id": 5479,
"name": "Chesed",
"icon": 405,
"classjob": -1
},
{
"id": 5480,
"name": "Tiferet",
"icon": 405,
"classjob": -1
},
{
"id": 5481,
"name": "Ain",
"icon": 405,
"classjob": -1
},
{
"id": 5482,
"name": "Ratzon",
"icon": 405,
"classjob": -1
},
{
"id": 5483,
"name": "Ratzon",
"icon": 405,
"classjob": -1
},
{
"id": 5484,
"name": "Ratzon",
"icon": 405,
"classjob": -1
},
{
"id": 5485,
"name": "Fiendish Rage",
"icon": 405,
"classjob": -1
},
{
"id": 5486,
"name": "Ein Sof",
"icon": 405,
"classjob": -1
},
{
"id": 5487,
"name": "Ein Sof",
"icon": 405,
"classjob": -1
},
{
"id": 5488,
"name": "Ein Sof Ohr",
"icon": 405,
"classjob": -1
},
{
"id": 5489,
"name": "Ein Sof Ohr",
"icon": 405,
"classjob": -1
},
{
"id": 5490,
"name": "Da'at",
"icon": 405,
"classjob": -1
},
{
"id": 5491,
"name": "Da'at",
"icon": 405,
"classjob": -1
},
{
"id": 5492,
"name": "Da'at",
"icon": 405,
"classjob": -1
},
{
"id": 5493,
"name": "Fiendish Wail",
"icon": 405,
"classjob": -1
},
{
"id": 5494,
"name": "Fiendish Wail",
"icon": 405,
"classjob": -1
},
{
"id": 5495,
"name": "Fiendish Wail",
"icon": 405,
"classjob": -1
},
{
"id": 5496,
"name": "Gevurah Chesed",
"icon": 405,
"classjob": -1
},
{
"id": 5497,
"name": "Chesed Gevurah",
"icon": 405,
"classjob": -1
},
{
"id": 5498,
"name": "Life Force",
"icon": 405,
"classjob": -1
},
{
"id": 5499,
"name": "Spirit",
"icon": 405,
"classjob": -1
},
{
"id": 5500,
"name": "Earth Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 5501,
"name": "Earth Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 5502,
"name": "Yesod",
"icon": 405,
"classjob": -1
},
{
"id": 5503,
"name": "Pillar Of Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 5504,
"name": "Pillar Of Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 5505,
"name": "Pillar Of Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 5506,
"name": "Malkuth",
"icon": 405,
"classjob": -1
},
{
"id": 5507,
"name": "Revelation",
"icon": 405,
"classjob": -1
},
{
"id": 5508,
"name": "Ascension",
"icon": 405,
"classjob": -1
},
{
"id": 5509,
"name": "Pillar Of Severity",
"icon": 405,
"classjob": -1
},
{
"id": 5510,
"name": "Pillar Of Severity",
"icon": 405,
"classjob": -1
},
{
"id": 5511,
"name": "Force Field",
"icon": 405,
"classjob": -1
},
{
"id": 5512,
"name": "Empty Hand",
"icon": 405,
"classjob": -1
},
{
"id": 5513,
"name": "Solid Stone",
"icon": 405,
"classjob": -1
},
{
"id": 5514,
"name": "Genesis",
"icon": 405,
"classjob": -1
},
{
"id": 5515,
"name": "Genesis",
"icon": 405,
"classjob": -1
},
{
"id": 5516,
"name": "Regorge",
"icon": 405,
"classjob": -1
},
{
"id": 5517,
"name": "Steel Scales",
"icon": 405,
"classjob": -1
},
{
"id": 5518,
"name": "Tetra Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5519,
"name": "Therapeutic Shock",
"icon": 405,
"classjob": -1
},
{
"id": 5520,
"name": "Bomb's Away",
"icon": 405,
"classjob": -1
},
{
"id": 5521,
"name": "Big Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5522,
"name": "Boost",
"icon": 405,
"classjob": -1
},
{
"id": 5523,
"name": "Gobswing",
"icon": 405,
"classjob": -1
},
{
"id": 5524,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5525,
"name": "Gobjab",
"icon": 405,
"classjob": -1
},
{
"id": 5526,
"name": "Gobstraight",
"icon": 405,
"classjob": -1
},
{
"id": 5527,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5528,
"name": "Guzzle",
"icon": 405,
"classjob": -1
},
{
"id": 5530,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5531,
"name": "Relaxant",
"icon": 405,
"classjob": -1
},
{
"id": 5532,
"name": "Shock Therapy",
"icon": 405,
"classjob": -1
},
{
"id": 5533,
"name": "Shock Therapy",
"icon": 405,
"classjob": -1
},
{
"id": 5534,
"name": "Glupgloop",
"icon": 405,
"classjob": -1
},
{
"id": 5535,
"name": "Gobdash",
"icon": 405,
"classjob": -1
},
{
"id": 5536,
"name": "Gobhook",
"icon": 405,
"classjob": -1
},
{
"id": 5537,
"name": "Water Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 5538,
"name": "Water Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 5539,
"name": "Toy Hammer",
"icon": 405,
"classjob": -1
},
{
"id": 5540,
"name": "Odious Croak",
"icon": 405,
"classjob": -1
},
{
"id": 5541,
"name": "Frog Song",
"icon": 405,
"classjob": -1
},
{
"id": 5543,
"name": "Discordant Harmony",
"icon": 405,
"classjob": -1
},
{
"id": 5545,
"name": "Jittering Glare",
"icon": 405,
"classjob": -1
},
{
"id": 5546,
"name": "Jittering Jounce",
"icon": 405,
"classjob": -1
},
{
"id": 5547,
"name": "Gyrating Glare",
"icon": 405,
"classjob": -1
},
{
"id": 5549,
"name": "Mystic Light",
"icon": 405,
"classjob": -1
},
{
"id": 5550,
"name": "Deep Fracture",
"icon": 405,
"classjob": -1
},
{
"id": 5551,
"name": "Heat Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 5552,
"name": "Heat Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 5556,
"name": "Knockout",
"icon": 405,
"classjob": -1
},
{
"id": 5557,
"name": "Brace",
"icon": 405,
"classjob": -1
},
{
"id": 5558,
"name": "Breach",
"icon": 405,
"classjob": -1
},
{
"id": 5559,
"name": "Terrifying Glance",
"icon": 405,
"classjob": -1
},
{
"id": 5560,
"name": "Slapstick",
"icon": 405,
"classjob": -1
},
{
"id": 5561,
"name": "Dollhouse",
"icon": 405,
"classjob": -1
},
{
"id": 5565,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5566,
"name": "Zoomdoom",
"icon": 405,
"classjob": -1
},
{
"id": 5567,
"name": "Flashthoom",
"icon": 405,
"classjob": -1
},
{
"id": 5568,
"name": "Gobbie Grab",
"icon": 405,
"classjob": -1
},
{
"id": 5569,
"name": "Gobbie Lob",
"icon": 405,
"classjob": -1
},
{
"id": 5570,
"name": "Perfect Landing",
"icon": 405,
"classjob": -1
},
{
"id": 5571,
"name": "Enthrallment",
"icon": 405,
"classjob": -1
},
{
"id": 5572,
"name": "Proboscis",
"icon": 405,
"classjob": -1
},
{
"id": 5573,
"name": "Neuro Squama",
"icon": 405,
"classjob": -1
},
{
"id": 5574,
"name": "Psycho Squama",
"icon": 405,
"classjob": -1
},
{
"id": 5575,
"name": "Toxic Squama",
"icon": 405,
"classjob": -1
},
{
"id": 5576,
"name": "Dissipate",
"icon": 405,
"classjob": -1
},
{
"id": 5577,
"name": "Ancient Holy",
"icon": 405,
"classjob": -1
},
{
"id": 5578,
"name": "Ancient Holy",
"icon": 405,
"classjob": -1
},
{
"id": 5580,
"name": "Holy",
"icon": 405,
"classjob": -1
},
{
"id": 5581,
"name": "Ancient Holy",
"icon": 405,
"classjob": -1
},
{
"id": 5582,
"name": "Ancient Aero",
"icon": 405,
"classjob": -1
},
{
"id": 5583,
"name": "Ancient Aero",
"icon": 405,
"classjob": -1
},
{
"id": 5584,
"name": "Ancient Aero",
"icon": 405,
"classjob": -1
},
{
"id": 5585,
"name": "Aero",
"icon": 405,
"classjob": -1
},
{
"id": 5586,
"name": "Ancient Stone",
"icon": 405,
"classjob": -1
},
{
"id": 5587,
"name": "Ancient Stone",
"icon": 405,
"classjob": -1
},
{
"id": 5588,
"name": "Stone",
"icon": 405,
"classjob": -1
},
{
"id": 5589,
"name": "Scratch",
"icon": 405,
"classjob": -1
},
{
"id": 5590,
"name": "Ancient Libra",
"icon": 405,
"classjob": -1
},
{
"id": 5591,
"name": "Ancient Libra",
"icon": 405,
"classjob": -1
},
{
"id": 5592,
"name": "Reverse",
"icon": 405,
"classjob": -1
},
{
"id": 5593,
"name": "Cure III",
"icon": 405,
"classjob": -1
},
{
"id": 5594,
"name": "Cure III",
"icon": 405,
"classjob": -1
},
{
"id": 5595,
"name": "Cure III",
"icon": 405,
"classjob": -1
},
{
"id": 5596,
"name": "Regen",
"icon": 405,
"classjob": -1
},
{
"id": 5597,
"name": "Regen",
"icon": 405,
"classjob": -1
},
{
"id": 5598,
"name": "Transference",
"icon": 405,
"classjob": -1
},
{
"id": 5599,
"name": "Cure IV",
"icon": 405,
"classjob": -1
},
{
"id": 5600,
"name": "Cure IV",
"icon": 405,
"classjob": -1
},
{
"id": 5601,
"name": "Decoy",
"icon": 405,
"classjob": -1
},
{
"id": 5602,
"name": "Decoy",
"icon": 405,
"classjob": -1
},
{
"id": 5603,
"name": "Rebirth",
"icon": 405,
"classjob": -1
},
{
"id": 5604,
"name": "Glory",
"icon": 405,
"classjob": -1
},
{
"id": 5605,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 5606,
"name": "Pressure Increase",
"icon": 405,
"classjob": -1
},
{
"id": 5607,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 5608,
"name": "Reducible Complexity",
"icon": 405,
"classjob": -1
},
{
"id": 5609,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 5610,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 5611,
"name": "Panzer Vor",
"icon": 405,
"classjob": -1
},
{
"id": 5612,
"name": "Undying Affection",
"icon": 405,
"classjob": -1
},
{
"id": 5613,
"name": "Corporal Punishment",
"icon": 405,
"classjob": -1
},
{
"id": 5614,
"name": "Sizzlebeam",
"icon": 405,
"classjob": -1
},
{
"id": 5615,
"name": "Sizzlespark",
"icon": 405,
"classjob": -1
},
{
"id": 5616,
"name": "Uplander Doom",
"icon": 405,
"classjob": -1
},
{
"id": 5617,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5618,
"name": "Brute Force",
"icon": 405,
"classjob": -1
},
{
"id": 5619,
"name": "Mind Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5620,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5621,
"name": "Minefield",
"icon": 405,
"classjob": -1
},
{
"id": 5622,
"name": "Mine",
"icon": 405,
"classjob": -1
},
{
"id": 5623,
"name": "Hidden Minefield",
"icon": 405,
"classjob": -1
},
{
"id": 5624,
"name": "Hidden Mine",
"icon": 405,
"classjob": -1
},
{
"id": 5625,
"name": "Hidden Mine Shrapnel",
"icon": 405,
"classjob": -1
},
{
"id": 5626,
"name": "Mirage",
"icon": 405,
"classjob": -1
},
{
"id": 5627,
"name": "Supercharge",
"icon": 405,
"classjob": -1
},
{
"id": 5628,
"name": "Blinder",
"icon": 405,
"classjob": -1
},
{
"id": 5629,
"name": "Power Tackle",
"icon": 405,
"classjob": -1
},
{
"id": 5630,
"name": "Mind Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5631,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5632,
"name": "Magicked Mark",
"icon": 405,
"classjob": -1
},
{
"id": 5633,
"name": "Attachment",
"icon": 405,
"classjob": -1
},
{
"id": 5634,
"name": "Single Buster",
"icon": 405,
"classjob": -1
},
{
"id": 5635,
"name": "Double Buster",
"icon": 405,
"classjob": -1
},
{
"id": 5636,
"name": "Rocket Drill",
"icon": 405,
"classjob": -1
},
{
"id": 5637,
"name": "Double Drill Crush",
"icon": 405,
"classjob": -1
},
{
"id": 5638,
"name": "Drill Drive",
"icon": 405,
"classjob": -1
},
{
"id": 5639,
"name": "Heart Of The Chakram",
"icon": 405,
"classjob": -1
},
{
"id": 5640,
"name": "Super Ultra Power Plasma Alpha",
"icon": 405,
"classjob": -1
},
{
"id": 5641,
"name": "Ultra Power Plasma",
"icon": 405,
"classjob": -1
},
{
"id": 5642,
"name": "Power Plasma",
"icon": 405,
"classjob": -1
},
{
"id": 5643,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5644,
"name": "Magicked Mark",
"icon": 405,
"classjob": -1
},
{
"id": 5645,
"name": "Height",
"icon": 405,
"classjob": -1
},
{
"id": 5646,
"name": "Height Error",
"icon": 405,
"classjob": -1
},
{
"id": 5647,
"name": "Enumeration",
"icon": 405,
"classjob": -1
},
{
"id": 5648,
"name": "Bio-arithmeticks",
"icon": 405,
"classjob": -1
},
{
"id": 5649,
"name": "Auxilliary Power",
"icon": 405,
"classjob": -1
},
{
"id": 5650,
"name": "Bodyhurt Breakblock",
"icon": 405,
"classjob": -1
},
{
"id": 5651,
"name": "Brainhurt Breakblock",
"icon": 405,
"classjob": -1
},
{
"id": 5652,
"name": "Gobbieboom",
"icon": 405,
"classjob": -1
},
{
"id": 5653,
"name": "Snapcannon",
"icon": 405,
"classjob": -1
},
{
"id": 5654,
"name": "Meltyspume",
"icon": 405,
"classjob": -1
},
{
"id": 5655,
"name": "Snipethoom",
"icon": 405,
"classjob": -1
},
{
"id": 5656,
"name": "Forward Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 5657,
"name": "Brute Force",
"icon": 405,
"classjob": -1
},
{
"id": 5658,
"name": "Ultra Flash",
"icon": 405,
"classjob": -1
},
{
"id": 5659,
"name": "Elemental Jammer",
"icon": 405,
"classjob": -1
},
{
"id": 5660,
"name": "Crashing Wave",
"icon": 405,
"classjob": -1
},
{
"id": 5661,
"name": "Crashing Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 5662,
"name": "Punishing Wave",
"icon": 405,
"classjob": -1
},
{
"id": 5663,
"name": "Punishing Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 5664,
"name": "Drainage",
"icon": 405,
"classjob": -1
},
{
"id": 5665,
"name": "Severe Contamination",
"icon": 405,
"classjob": -1
},
{
"id": 5666,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5667,
"name": "Earth Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5668,
"name": "Ice Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5669,
"name": "Fire Beam",
"icon": 405,
"classjob": -1
},
{
"id": 5670,
"name": "Fire Beam",
"icon": 405,
"classjob": -1
},
{
"id": 5671,
"name": "Super Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 5672,
"name": "Final Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 5673,
"name": "Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 5674,
"name": "Hydrothermal Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5675,
"name": "Perpetual Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5676,
"name": "Perpetual Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5677,
"name": "Seed Of The Sky",
"icon": 405,
"classjob": -1
},
{
"id": 5678,
"name": "Mega Beam",
"icon": 405,
"classjob": -1
},
{
"id": 5679,
"name": "Discoid",
"icon": 405,
"classjob": -1
},
{
"id": 5680,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 5681,
"name": "Legislation",
"icon": 405,
"classjob": -1
},
{
"id": 5682,
"name": "Execution",
"icon": 405,
"classjob": -1
},
{
"id": 5683,
"name": "Retribution",
"icon": 405,
"classjob": -1
},
{
"id": 5684,
"name": "Retribution",
"icon": 405,
"classjob": -1
},
{
"id": 5685,
"name": "100-megatonze Shock",
"icon": 405,
"classjob": -1
},
{
"id": 5687,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5688,
"name": "Brute Force",
"icon": 405,
"classjob": -1
},
{
"id": 5689,
"name": "Mind Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5690,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5691,
"name": "Magicked Mark",
"icon": 405,
"classjob": -1
},
{
"id": 5692,
"name": "Attachment",
"icon": 405,
"classjob": -1
},
{
"id": 5693,
"name": "Single Buster",
"icon": 405,
"classjob": -1
},
{
"id": 5694,
"name": "Double Buster",
"icon": 405,
"classjob": -1
},
{
"id": 5695,
"name": "Rocket Drill",
"icon": 405,
"classjob": -1
},
{
"id": 5696,
"name": "Double Drill Crush",
"icon": 405,
"classjob": -1
},
{
"id": 5697,
"name": "Drill Drive",
"icon": 405,
"classjob": -1
},
{
"id": 5698,
"name": "Super Ultra Power Plasma Alpha",
"icon": 405,
"classjob": -1
},
{
"id": 5699,
"name": "Ultra Power Plasma",
"icon": 405,
"classjob": -1
},
{
"id": 5700,
"name": "Power Plasma",
"icon": 405,
"classjob": -1
},
{
"id": 5701,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5702,
"name": "Magicked Mark",
"icon": 405,
"classjob": -1
},
{
"id": 5703,
"name": "Height",
"icon": 405,
"classjob": -1
},
{
"id": 5704,
"name": "Height Error",
"icon": 405,
"classjob": -1
},
{
"id": 5705,
"name": "Enumeration",
"icon": 405,
"classjob": -1
},
{
"id": 5706,
"name": "Bio-arithmeticks",
"icon": 405,
"classjob": -1
},
{
"id": 5707,
"name": "Auxilliary Power",
"icon": 405,
"classjob": -1
},
{
"id": 5708,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5709,
"name": "Brute Force",
"icon": 405,
"classjob": -1
},
{
"id": 5710,
"name": "Crashing Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 5711,
"name": "Punishing Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 5712,
"name": "Ballistic Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5713,
"name": "Earth Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5714,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 5715,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 5716,
"name": "Eye Of The Chakram",
"icon": 405,
"classjob": -1
},
{
"id": 5717,
"name": "Ice Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5718,
"name": "Ultra Flash",
"icon": 405,
"classjob": -1
},
{
"id": 5719,
"name": "Super Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 5720,
"name": "Mirage",
"icon": 405,
"classjob": -1
},
{
"id": 5721,
"name": "Supercharge",
"icon": 405,
"classjob": -1
},
{
"id": 5722,
"name": "Blinder",
"icon": 405,
"classjob": -1
},
{
"id": 5723,
"name": "Power Tackle",
"icon": 405,
"classjob": -1
},
{
"id": 5724,
"name": "Minefield",
"icon": 405,
"classjob": -1
},
{
"id": 5725,
"name": "Mine",
"icon": 405,
"classjob": -1
},
{
"id": 5726,
"name": "Hidden Minefield",
"icon": 405,
"classjob": -1
},
{
"id": 5727,
"name": "Hidden Mine",
"icon": 405,
"classjob": -1
},
{
"id": 5728,
"name": "Hidden Mine Shrapnel",
"icon": 405,
"classjob": -1
},
{
"id": 5729,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5730,
"name": "Flarethrower",
"icon": 405,
"classjob": -1
},
{
"id": 5731,
"name": "Double Rocket Punch",
"icon": 405,
"classjob": -1
},
{
"id": 5732,
"name": "Mega Beam",
"icon": 405,
"classjob": -1
},
{
"id": 5733,
"name": "Super Jump",
"icon": 405,
"classjob": -1
},
{
"id": 5734,
"name": "Apocalyptic Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5735,
"name": "Apocalyptic Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5736,
"name": "Missile Command",
"icon": 405,
"classjob": -1
},
{
"id": 5737,
"name": "Short Needle",
"icon": 405,
"classjob": -1
},
{
"id": 5738,
"name": "Long Needle",
"icon": 405,
"classjob": -1
},
{
"id": 5739,
"name": "Long Needle",
"icon": 405,
"classjob": -1
},
{
"id": 5740,
"name": "Long Needle",
"icon": 405,
"classjob": -1
},
{
"id": 5741,
"name": "J Kick",
"icon": 405,
"classjob": -1
},
{
"id": 5742,
"name": "Justice",
"icon": 405,
"classjob": -1
},
{
"id": 5743,
"name": "Verdict",
"icon": 405,
"classjob": -1
},
{
"id": 5744,
"name": "Gavel",
"icon": 405,
"classjob": -1
},
{
"id": 5745,
"name": "Gale Force",
"icon": 405,
"classjob": -1
},
{
"id": 5746,
"name": "Hurricane Force",
"icon": 405,
"classjob": -1
},
{
"id": 5747,
"name": "Link-up",
"icon": 405,
"classjob": -1
},
{
"id": 5748,
"name": "J Storm",
"icon": 405,
"classjob": -1
},
{
"id": 5749,
"name": "J Wave",
"icon": 405,
"classjob": -1
},
{
"id": 5750,
"name": "Crashing Wave",
"icon": 405,
"classjob": -1
},
{
"id": 5751,
"name": "Punishing Wave",
"icon": 405,
"classjob": -1
},
{
"id": 5752,
"name": "Drainage",
"icon": 405,
"classjob": -1
},
{
"id": 5753,
"name": "Severe Contamination",
"icon": 405,
"classjob": -1
},
{
"id": 5754,
"name": "Final Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 5755,
"name": "Ancient Stone",
"icon": 405,
"classjob": -1
},
{
"id": 5756,
"name": "Transform",
"icon": 405,
"classjob": -1
},
{
"id": 5757,
"name": "Ancient Libra",
"icon": 405,
"classjob": -1
},
{
"id": 5758,
"name": "Elemental Jammer",
"icon": 405,
"classjob": -1
},
{
"id": 5759,
"name": "The Bull Of Ala Mhigo",
"icon": 405,
"classjob": -1
},
{
"id": 5761,
"name": "Demoralize",
"icon": 405,
"classjob": -1
},
{
"id": 5762,
"name": "Flaming Tizona",
"icon": 405,
"classjob": -1
},
{
"id": 5763,
"name": "Flaming Tizona",
"icon": 405,
"classjob": -1
},
{
"id": 5764,
"name": "The Curse",
"icon": 405,
"classjob": -1
},
{
"id": 5765,
"name": "The Curse",
"icon": 405,
"classjob": -1
},
{
"id": 5766,
"name": "Immortal Flame",
"icon": 405,
"classjob": -1
},
{
"id": 5768,
"name": "Bomb Spread",
"icon": 405,
"classjob": -1
},
{
"id": 5769,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5770,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 5771,
"name": "Holy Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5772,
"name": "Holy Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5773,
"name": "Diamond Storm",
"icon": 405,
"classjob": -1
},
{
"id": 5774,
"name": "Sphere Shatter",
"icon": 405,
"classjob": -1
},
{
"id": 5775,
"name": "Tail End",
"icon": 405,
"classjob": -1
},
{
"id": 5776,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5777,
"name": "Gallop",
"icon": 405,
"classjob": -1
},
{
"id": 5778,
"name": "Gallop",
"icon": 405,
"classjob": -1
},
{
"id": 5779,
"name": "Spellsword",
"icon": 405,
"classjob": -1
},
{
"id": 5780,
"name": "Overpower",
"icon": 405,
"classjob": -1
},
{
"id": 5781,
"name": "Rive",
"icon": 405,
"classjob": -1
},
{
"id": 5782,
"name": "Holmgang",
"icon": 266,
"classjob": -1
},
{
"id": 5783,
"name": "Iron Tempest",
"icon": 405,
"classjob": -1
},
{
"id": 5784,
"name": "Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 5785,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5786,
"name": "Feast",
"icon": 405,
"classjob": -1
},
{
"id": 5787,
"name": "Disorienting Groan",
"icon": 405,
"classjob": -1
},
{
"id": 5788,
"name": "Oogle",
"icon": 405,
"classjob": -1
},
{
"id": 5789,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 5790,
"name": "Nutshell",
"icon": 405,
"classjob": -1
},
{
"id": 5791,
"name": "Somersault Slash",
"icon": 405,
"classjob": -1
},
{
"id": 5792,
"name": "10-tonze Slash",
"icon": 405,
"classjob": -1
},
{
"id": 5793,
"name": "Regorge",
"icon": 405,
"classjob": -1
},
{
"id": 5794,
"name": "Steel Scales",
"icon": 405,
"classjob": -1
},
{
"id": 5795,
"name": "Tetra Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5796,
"name": "Therapeutic Shock",
"icon": 405,
"classjob": -1
},
{
"id": 5797,
"name": "Big Burst",
"icon": 405,
"classjob": -1
},
{
"id": 5798,
"name": "Boost",
"icon": 405,
"classjob": -1
},
{
"id": 5799,
"name": "Gobswing",
"icon": 405,
"classjob": -1
},
{
"id": 5800,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 5801,
"name": "Gobjab",
"icon": 405,
"classjob": -1
},
{
"id": 5802,
"name": "Gobstraight",
"icon": 405,
"classjob": -1
},
{
"id": 5803,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5804,
"name": "Gobcut",
"icon": 405,
"classjob": -1
},
{
"id": 5805,
"name": "Therapeutic Shock",
"icon": 405,
"classjob": -1
},
{
"id": 5806,
"name": "Glupgloop",
"icon": 405,
"classjob": -1
},
{
"id": 5807,
"name": "Gobdash",
"icon": 405,
"classjob": -1
},
{
"id": 5808,
"name": "Spellsword",
"icon": 405,
"classjob": -1
},
{
"id": 5809,
"name": "Gobstraight",
"icon": 405,
"classjob": -1
},
{
"id": 5811,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 5812,
"name": "Cermet Drill",
"icon": 405,
"classjob": -1
},
{
"id": 5813,
"name": "Panzerfaust",
"icon": 405,
"classjob": -1
},
{
"id": 5814,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5815,
"name": "Kugelblitz",
"icon": 405,
"classjob": -1
},
{
"id": 5816,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 5817,
"name": "Heavy Swing",
"icon": 405,
"classjob": -1
},
{
"id": 5818,
"name": "Skull Sunder",
"icon": 405,
"classjob": -1
},
{
"id": 5819,
"name": "Cure",
"icon": 405,
"classjob": -1
},
{
"id": 5820,
"name": "Triple Threat",
"icon": 405,
"classjob": -1
},
{
"id": 5821,
"name": "Fast Blade",
"icon": 405,
"classjob": -1
},
{
"id": 5822,
"name": "Savage Blade",
"icon": 405,
"classjob": -1
},
{
"id": 5823,
"name": "Gallop",
"icon": 405,
"classjob": -1
},
{
"id": 5824,
"name": "Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 5825,
"name": "Rhino Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5826,
"name": "Rhino Guard",
"icon": 405,
"classjob": -1
},
{
"id": 5827,
"name": "Holy",
"icon": 405,
"classjob": -1
},
{
"id": 5828,
"name": "Fire IV",
"icon": 405,
"classjob": -1
},
{
"id": 5829,
"name": "Sucker",
"icon": 405,
"classjob": -1
},
{
"id": 5830,
"name": "Flood",
"icon": 405,
"classjob": -1
},
{
"id": 5831,
"name": "Water III",
"icon": 405,
"classjob": -1
},
{
"id": 5832,
"name": "Mysterious Light",
"icon": 405,
"classjob": -1
},
{
"id": 5833,
"name": "Double Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5834,
"name": "Enochian",
"icon": 2658,
"classjob": -1
},
{
"id": 5835,
"name": "Wild Horn",
"icon": 405,
"classjob": -1
},
{
"id": 5836,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 5837,
"name": "Pressure Increase",
"icon": 405,
"classjob": -1
},
{
"id": 5838,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 5839,
"name": "Reducible Complexity",
"icon": 405,
"classjob": -1
},
{
"id": 5840,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 5841,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 5842,
"name": "Panzer Vor",
"icon": 405,
"classjob": -1
},
{
"id": 5843,
"name": "Bodyhurt Breakblock",
"icon": 405,
"classjob": -1
},
{
"id": 5844,
"name": "Brainhurt Breakblock",
"icon": 405,
"classjob": -1
},
{
"id": 5845,
"name": "オーケストリオン譜入手",
"icon": 405,
"classjob": 0
},
{
"id": 5846,
"name": "Attack",
"icon": 405,
"classjob": 0
},
{
"id": 5847,
"name": "Cure",
"icon": 405,
"classjob": -1
},
{
"id": 5848,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 5849,
"name": "Banish III",
"icon": 405,
"classjob": -1
},
{
"id": 5850,
"name": "Triple Trial",
"icon": 405,
"classjob": -1
},
{
"id": 5851,
"name": "Chesed",
"icon": 405,
"classjob": -1
},
{
"id": 5852,
"name": "Tiferet",
"icon": 405,
"classjob": -1
},
{
"id": 5853,
"name": "Ain",
"icon": 405,
"classjob": -1
},
{
"id": 5854,
"name": "Ratzon",
"icon": 405,
"classjob": -1
},
{
"id": 5855,
"name": "Fiendish Rage",
"icon": 405,
"classjob": -1
},
{
"id": 5856,
"name": "Ein Sof Ohr",
"icon": 405,
"classjob": -1
},
{
"id": 5857,
"name": "Da'at",
"icon": 405,
"classjob": -1
},
{
"id": 5858,
"name": "Da'at",
"icon": 405,
"classjob": -1
},
{
"id": 5859,
"name": "Fiendish Wail",
"icon": 405,
"classjob": -1
},
{
"id": 5860,
"name": "Fiendish Wail",
"icon": 405,
"classjob": -1
},
{
"id": 5861,
"name": "Life Force",
"icon": 405,
"classjob": -1
},
{
"id": 5862,
"name": "Spirit",
"icon": 405,
"classjob": -1
},
{
"id": 5863,
"name": "Earth Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 5864,
"name": "Yesod",
"icon": 405,
"classjob": -1
},
{
"id": 5865,
"name": "Pillar Of Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 5866,
"name": "Pillar Of Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 5867,
"name": "Malkuth",
"icon": 405,
"classjob": -1
},
{
"id": 5868,
"name": "Revelation",
"icon": 405,
"classjob": -1
},
{
"id": 5869,
"name": "Ascension",
"icon": 405,
"classjob": -1
},
{
"id": 5870,
"name": "Pillar Of Severity",
"icon": 405,
"classjob": -1
},
{
"id": 5871,
"name": "Empty Hand",
"icon": 405,
"classjob": -1
},
{
"id": 5872,
"name": "Fumigate",
"icon": 61133,
"classjob": 0
},
{
"id": 5873,
"name": "Flamethrower",
"icon": 405,
"classjob": -1
},
{
"id": 5874,
"name": "Stickyloom",
"icon": 405,
"classjob": 0
},
{
"id": 5875,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5876,
"name": "Zoomdoom",
"icon": 405,
"classjob": -1
},
{
"id": 5877,
"name": "Flashthoom",
"icon": 405,
"classjob": -1
},
{
"id": 5878,
"name": "Corporal Punishment",
"icon": 405,
"classjob": -1
},
{
"id": 5879,
"name": "Sizzlebeam",
"icon": 405,
"classjob": -1
},
{
"id": 5880,
"name": "Sizzlespark",
"icon": 405,
"classjob": -1
},
{
"id": 5881,
"name": "Uplander Doom",
"icon": 405,
"classjob": -1
},
{
"id": 5882,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 5883,
"name": "Cermet Drill",
"icon": 405,
"classjob": -1
},
{
"id": 5884,
"name": "Panzerfaust",
"icon": 405,
"classjob": -1
},
{
"id": 5885,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5886,
"name": "Kugelblitz",
"icon": 405,
"classjob": -1
},
{
"id": 5887,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 5888,
"name": "Berserk",
"icon": 405,
"classjob": -1
},
{
"id": 5889,
"name": "Rear",
"icon": 405,
"classjob": -1
},
{
"id": 5890,
"name": "Smash",
"icon": 405,
"classjob": -1
},
{
"id": 5891,
"name": "Raging Axe",
"icon": 405,
"classjob": -1
},
{
"id": 5892,
"name": "Starstorm",
"icon": 405,
"classjob": -1
},
{
"id": 5893,
"name": "Lightning Spark",
"icon": 405,
"classjob": -1
},
{
"id": 5894,
"name": "Holy",
"icon": 405,
"classjob": -1
},
{
"id": 5895,
"name": "Aero",
"icon": 405,
"classjob": -1
},
{
"id": 5896,
"name": "Fast Blade",
"icon": 405,
"classjob": -1
},
{
"id": 5897,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5898,
"name": "Brute Force",
"icon": 405,
"classjob": -1
},
{
"id": 5899,
"name": "Mind Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5900,
"name": "Final Punch",
"icon": 405,
"classjob": -1
},
{
"id": 5901,
"name": "Minefield",
"icon": 405,
"classjob": -1
},
{
"id": 5902,
"name": "Mine",
"icon": 405,
"classjob": -1
},
{
"id": 5903,
"name": "Hidden Minefield",
"icon": 405,
"classjob": -1
},
{
"id": 5904,
"name": "Hidden Mine",
"icon": 405,
"classjob": -1
},
{
"id": 5905,
"name": "Hidden Mine Shrapnel",
"icon": 405,
"classjob": -1
},
{
"id": 5906,
"name": "Mirage",
"icon": 405,
"classjob": -1
},
{
"id": 5907,
"name": "Supercharge",
"icon": 405,
"classjob": -1
},
{
"id": 5908,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5909,
"name": "Magicked Mark",
"icon": 405,
"classjob": -1
},
{
"id": 5910,
"name": "Final Apocalypse",
"icon": 405,
"classjob": -1
},
{
"id": 5911,
"name": "Single Buster",
"icon": 405,
"classjob": -1
},
{
"id": 5912,
"name": "Double Buster",
"icon": 405,
"classjob": -1
},
{
"id": 5913,
"name": "Rocket Drill",
"icon": 405,
"classjob": -1
},
{
"id": 5914,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5915,
"name": "Magicked Mark",
"icon": 405,
"classjob": -1
},
{
"id": 5916,
"name": "Height",
"icon": 405,
"classjob": -1
},
{
"id": 5917,
"name": "Height Error",
"icon": 405,
"classjob": -1
},
{
"id": 5918,
"name": "Enumeration",
"icon": 405,
"classjob": -1
},
{
"id": 5919,
"name": "Bio-arithmeticks",
"icon": 405,
"classjob": -1
},
{
"id": 5920,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5921,
"name": "Brute Force",
"icon": 405,
"classjob": -1
},
{
"id": 5922,
"name": "Ultra Flash",
"icon": 405,
"classjob": -1
},
{
"id": 5923,
"name": "Final Apocalypse",
"icon": 405,
"classjob": -1
},
{
"id": 5924,
"name": "Crashing Wave",
"icon": 405,
"classjob": -1
},
{
"id": 5925,
"name": "Final Beam",
"icon": 405,
"classjob": -1
},
{
"id": 5926,
"name": "Earth Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5927,
"name": "Ice Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5928,
"name": "Super Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 5929,
"name": "Final Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 5930,
"name": "Uplander Doom",
"icon": 405,
"classjob": -1
},
{
"id": 5931,
"name": "Sizzlespark",
"icon": 405,
"classjob": -1
},
{
"id": 5932,
"name": "Impact Of Hod",
"icon": 405,
"classjob": -1
},
{
"id": 5933,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5934,
"name": "Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 5935,
"name": "Hydrothermal Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5936,
"name": "Perpetual Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5937,
"name": "Seed Of The Sky",
"icon": 405,
"classjob": -1
},
{
"id": 5938,
"name": "Mega Beam",
"icon": 405,
"classjob": -1
},
{
"id": 5939,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 5940,
"name": "Retribution",
"icon": 405,
"classjob": -1
},
{
"id": 5941,
"name": "Retribution",
"icon": 405,
"classjob": -1
},
{
"id": 5942,
"name": "100-megatonze Shock",
"icon": 405,
"classjob": -1
},
{
"id": 5943,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5944,
"name": "Brute Force",
"icon": 405,
"classjob": -1
},
{
"id": 5945,
"name": "Mind Blast",
"icon": 405,
"classjob": -1
},
{
"id": 5946,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5947,
"name": "Magicked Mark",
"icon": 405,
"classjob": -1
},
{
"id": 5948,
"name": "Single Buster",
"icon": 405,
"classjob": -1
},
{
"id": 5949,
"name": "Double Buster",
"icon": 405,
"classjob": -1
},
{
"id": 5950,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5951,
"name": "Magicked Mark",
"icon": 405,
"classjob": -1
},
{
"id": 5952,
"name": "Height",
"icon": 405,
"classjob": -1
},
{
"id": 5953,
"name": "Height Error",
"icon": 405,
"classjob": -1
},
{
"id": 5954,
"name": "Enumeration",
"icon": 405,
"classjob": -1
},
{
"id": 5955,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5956,
"name": "Brute Force",
"icon": 405,
"classjob": -1
},
{
"id": 5957,
"name": "Earth Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5958,
"name": "Ice Missile",
"icon": 405,
"classjob": -1
},
{
"id": 5959,
"name": "Super Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 5960,
"name": "Mirage",
"icon": 405,
"classjob": -1
},
{
"id": 5961,
"name": "Supercharge",
"icon": 405,
"classjob": -1
},
{
"id": 5962,
"name": "Minefield",
"icon": 405,
"classjob": -1
},
{
"id": 5963,
"name": "Mine",
"icon": 405,
"classjob": -1
},
{
"id": 5964,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 5965,
"name": "Flarethrower",
"icon": 405,
"classjob": -1
},
{
"id": 5966,
"name": "Double Rocket Punch",
"icon": 405,
"classjob": -1
},
{
"id": 5967,
"name": "Mega Beam",
"icon": 405,
"classjob": -1
},
{
"id": 5968,
"name": "Super Jump",
"icon": 405,
"classjob": -1
},
{
"id": 5969,
"name": "Apocalyptic Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5970,
"name": "Apocalyptic Ray",
"icon": 405,
"classjob": -1
},
{
"id": 5971,
"name": "Short Needle",
"icon": 405,
"classjob": -1
},
{
"id": 5972,
"name": "Long Needle",
"icon": 405,
"classjob": -1
},
{
"id": 5973,
"name": "Long Needle",
"icon": 405,
"classjob": -1
},
{
"id": 5974,
"name": "J Kick",
"icon": 405,
"classjob": -1
},
{
"id": 5975,
"name": "Final Sentence",
"icon": 405,
"classjob": -1
},
{
"id": 5976,
"name": "Transform",
"icon": 405,
"classjob": -1
},
{
"id": 5977,
"name": "Water Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 5978,
"name": "Palsynyxis",
"icon": 405,
"classjob": -1
},
{
"id": 5979,
"name": "Water Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 5980,
"name": "Aqua Vitae",
"icon": 405,
"classjob": -1
},
{
"id": 5981,
"name": "Fowl Stench",
"icon": 405,
"classjob": -1
},
{
"id": 5982,
"name": "Moldy Sneeze",
"icon": 405,
"classjob": -1
},
{
"id": 5983,
"name": "Moldy Phlegm",
"icon": 405,
"classjob": -1
},
{
"id": 5984,
"name": "Ancient Aero",
"icon": 405,
"classjob": -1
},
{
"id": 5985,
"name": "Ancient Aero",
"icon": 405,
"classjob": -1
},
{
"id": 5986,
"name": "Iron Tempest",
"icon": 405,
"classjob": -1
},
{
"id": 5987,
"name": "Triple Trial",
"icon": 405,
"classjob": -1
},
{
"id": 5988,
"name": "Chesed",
"icon": 405,
"classjob": -1
},
{
"id": 5989,
"name": "Tiferet",
"icon": 405,
"classjob": -1
},
{
"id": 5990,
"name": "Ein",
"icon": 405,
"classjob": -1
},
{
"id": 5991,
"name": "Ratzon",
"icon": 405,
"classjob": -1
},
{
"id": 5992,
"name": "Fiendish Rage",
"icon": 405,
"classjob": -1
},
{
"id": 5993,
"name": "Ein Sof Ohr",
"icon": 405,
"classjob": -1
},
{
"id": 5994,
"name": "Da'at",
"icon": 405,
"classjob": -1
},
{
"id": 5995,
"name": "Da'at",
"icon": 405,
"classjob": -1
},
{
"id": 5996,
"name": "Fiendish Wail",
"icon": 405,
"classjob": -1
},
{
"id": 5997,
"name": "Fiendish Wail",
"icon": 405,
"classjob": -1
},
{
"id": 5998,
"name": "Life Force",
"icon": 405,
"classjob": -1
},
{
"id": 5999,
"name": "Spirit",
"icon": 405,
"classjob": -1
},
{
"id": 6000,
"name": "Earth Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 6001,
"name": "Yesod",
"icon": 405,
"classjob": -1
},
{
"id": 6002,
"name": "Pillar Of Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 6003,
"name": "Pillar Of Mercy",
"icon": 405,
"classjob": -1
},
{
"id": 6004,
"name": "Malkuth",
"icon": 405,
"classjob": -1
},
{
"id": 6005,
"name": "Revelation",
"icon": 405,
"classjob": -1
},
{
"id": 6006,
"name": "Ascension",
"icon": 405,
"classjob": -1
},
{
"id": 6007,
"name": "Pillar Of Severity",
"icon": 405,
"classjob": -1
},
{
"id": 6008,
"name": "Empty Hand",
"icon": 405,
"classjob": -1
},
{
"id": 6009,
"name": "Cloud Call",
"icon": 405,
"classjob": -1
},
{
"id": 6010,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 6011,
"name": "Quasar",
"icon": 405,
"classjob": -1
},
{
"id": 6012,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 6013,
"name": "Rear Hoof",
"icon": 405,
"classjob": -1
},
{
"id": 6014,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6015,
"name": "Pom Praise",
"icon": 405,
"classjob": -1
},
{
"id": 6016,
"name": "Pom Praise",
"icon": 405,
"classjob": -1
},
{
"id": 6017,
"name": "Demoniacal Mogcane",
"icon": 405,
"classjob": -1
},
{
"id": 6018,
"name": "Pom-bom",
"icon": 405,
"classjob": -1
},
{
"id": 6019,
"name": "1000-kuponze Charge",
"icon": 405,
"classjob": -1
},
{
"id": 6020,
"name": "Pom Holy",
"icon": 405,
"classjob": -1
},
{
"id": 6021,
"name": "Terminus Est",
"icon": 405,
"classjob": -1
},
{
"id": 6022,
"name": "Terminus Est",
"icon": 405,
"classjob": -1
},
{
"id": 6023,
"name": "Terminus Est",
"icon": 405,
"classjob": -1
},
{
"id": 6025,
"name": "Bastardbluss",
"icon": 405,
"classjob": -1
},
{
"id": 6026,
"name": "Magitek Slug",
"icon": 405,
"classjob": -1
},
{
"id": 6027,
"name": "Magitek Spread",
"icon": 405,
"classjob": -1
},
{
"id": 6028,
"name": "Quickstep",
"icon": 405,
"classjob": -1
},
{
"id": 6029,
"name": "Magitek Turret",
"icon": 405,
"classjob": -1
},
{
"id": 6030,
"name": "Aetherochemical Laser",
"icon": 405,
"classjob": -1
},
{
"id": 6031,
"name": "Aetherochemical Grenado",
"icon": 405,
"classjob": -1
},
{
"id": 6032,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6033,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6034,
"name": "Aetherial Pulse",
"icon": 405,
"classjob": -1
},
{
"id": 6035,
"name": "Servant Enkindle",
"icon": 405,
"classjob": -1
},
{
"id": 6036,
"name": "Servant Enkindle",
"icon": 405,
"classjob": -1
},
{
"id": 6037,
"name": "The Scarlet Whisper",
"icon": 405,
"classjob": -1
},
{
"id": 6038,
"name": "Deafening Bellow",
"icon": 405,
"classjob": -1
},
{
"id": 6039,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 6040,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 6042,
"name": "Horrid Roar",
"icon": 405,
"classjob": -1
},
{
"id": 6043,
"name": "Horrid Roar",
"icon": 405,
"classjob": -1
},
{
"id": 6044,
"name": "Hot Wing",
"icon": 405,
"classjob": -1
},
{
"id": 6045,
"name": "Hot Wing",
"icon": 405,
"classjob": -1
},
{
"id": 6046,
"name": "Hot Tail",
"icon": 405,
"classjob": -1
},
{
"id": 6047,
"name": "Hot Tail",
"icon": 405,
"classjob": -1
},
{
"id": 6048,
"name": "Electric Predation",
"icon": 405,
"classjob": -1
},
{
"id": 6049,
"name": "Darkdragon Dive",
"icon": 405,
"classjob": -1
},
{
"id": 6050,
"name": "Darkdragon Dive",
"icon": 405,
"classjob": -1
},
{
"id": 6051,
"name": "The Serpent's Apple",
"icon": 405,
"classjob": -1
},
{
"id": 6052,
"name": "Original Sin",
"icon": 405,
"classjob": -1
},
{
"id": 6053,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 6054,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 6055,
"name": "Dark Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 6056,
"name": "Bone Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 6057,
"name": "Final Chorus",
"icon": 405,
"classjob": -1
},
{
"id": 6058,
"name": "Final Chorus",
"icon": 405,
"classjob": -1
},
{
"id": 6060,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 6061,
"name": "Eye Of The Tyrant",
"icon": 405,
"classjob": -1
},
{
"id": 6062,
"name": "High Jump",
"icon": 405,
"classjob": -1
},
{
"id": 6063,
"name": "Darkdragon Dive",
"icon": 405,
"classjob": -1
},
{
"id": 6064,
"name": "Darkdragon Dive",
"icon": 405,
"classjob": -1
},
{
"id": 6065,
"name": "Darkdragon Dive",
"icon": 405,
"classjob": -1
},
{
"id": 6066,
"name": "Geirskogul",
"icon": 405,
"classjob": -1
},
{
"id": 6067,
"name": "Soul Tether",
"icon": 405,
"classjob": -1
},
{
"id": 6068,
"name": "Ala Morn",
"icon": 405,
"classjob": -1
},
{
"id": 6069,
"name": "Drachenlance",
"icon": 405,
"classjob": -1
},
{
"id": 6071,
"name": "Deadly Curse",
"icon": 405,
"classjob": -1
},
{
"id": 6072,
"name": "Akh Morn",
"icon": 405,
"classjob": -1
},
{
"id": 6073,
"name": "Akh Morn",
"icon": 405,
"classjob": -1
},
{
"id": 6075,
"name": "Flame Blast",
"icon": 405,
"classjob": -1
},
{
"id": 6076,
"name": "Deafening Bellow",
"icon": 405,
"classjob": -1
},
{
"id": 6077,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6078,
"name": "Necropurge",
"icon": 405,
"classjob": -1
},
{
"id": 6079,
"name": "Necropurge",
"icon": 405,
"classjob": -1
},
{
"id": 6080,
"name": "Megiddo Flame",
"icon": 405,
"classjob": -1
},
{
"id": 6081,
"name": "Megiddo Flame",
"icon": 405,
"classjob": -1
},
{
"id": 6082,
"name": "Dark Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 6083,
"name": "Dark Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 6084,
"name": "Punishing Ray",
"icon": 405,
"classjob": -1
},
{
"id": 6085,
"name": "Evil Mist",
"icon": 405,
"classjob": -1
},
{
"id": 6086,
"name": "Void Call",
"icon": 405,
"classjob": -1
},
{
"id": 6088,
"name": "Mana Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 6089,
"name": "Mana Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 6090,
"name": "Mega Death",
"icon": 405,
"classjob": -1
},
{
"id": 6091,
"name": "Hell Wind",
"icon": 405,
"classjob": -1
},
{
"id": 6092,
"name": "Brand Of The Fallen",
"icon": 405,
"classjob": -1
},
{
"id": 6093,
"name": "Sweet Steel",
"icon": 405,
"classjob": -1
},
{
"id": 6094,
"name": "Beguiling Mist",
"icon": 405,
"classjob": -1
},
{
"id": 6095,
"name": "Void Fire IV",
"icon": 405,
"classjob": -1
},
{
"id": 6096,
"name": "Rotten Breath",
"icon": 405,
"classjob": -1
},
{
"id": 6097,
"name": "Tail Drive",
"icon": 405,
"classjob": -1
},
{
"id": 6098,
"name": "Mow",
"icon": 405,
"classjob": -1
},
{
"id": 6099,
"name": "Voidblood",
"icon": 405,
"classjob": -1
},
{
"id": 6100,
"name": "Mortal Ray",
"icon": 405,
"classjob": -1
},
{
"id": 6101,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 6102,
"name": "Spontaneous Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 6103,
"name": "Necropurge",
"icon": 405,
"classjob": -1
},
{
"id": 6104,
"name": "Necropurge",
"icon": 405,
"classjob": -1
},
{
"id": 6105,
"name": "Super Jump",
"icon": 405,
"classjob": -1
},
{
"id": 6106,
"name": "Super Jump",
"icon": 405,
"classjob": -1
},
{
"id": 6107,
"name": "Breath Wing",
"icon": 405,
"classjob": -1
},
{
"id": 6109,
"name": "Overpower",
"icon": 405,
"classjob": -1
},
{
"id": 6110,
"name": "Dead Or Alive",
"icon": 405,
"classjob": -1
},
{
"id": 6111,
"name": "Pounce",
"icon": 405,
"classjob": -1
},
{
"id": 6112,
"name": "Cannonfire",
"icon": 405,
"classjob": -1
},
{
"id": 6115,
"name": "Excretion",
"icon": 405,
"classjob": -1
},
{
"id": 6116,
"name": "Excretion",
"icon": 405,
"classjob": -1
},
{
"id": 6117,
"name": "Megavolt",
"icon": 405,
"classjob": -1
},
{
"id": 6118,
"name": "Megavolt",
"icon": 405,
"classjob": -1
},
{
"id": 6119,
"name": "Flash Freeze",
"icon": 405,
"classjob": -1
},
{
"id": 6120,
"name": "Iceberg",
"icon": 405,
"classjob": -1
},
{
"id": 6121,
"name": "Iceberg",
"icon": 405,
"classjob": -1
},
{
"id": 6122,
"name": "Shardstorm",
"icon": 405,
"classjob": -1
},
{
"id": 6123,
"name": "Head Snatch",
"icon": 405,
"classjob": -1
},
{
"id": 6124,
"name": "Blanket Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 6125,
"name": "Lightning Chain",
"icon": 405,
"classjob": -1
},
{
"id": 6129,
"name": "Galadion Ram",
"icon": 405,
"classjob": -1
},
{
"id": 6130,
"name": "Maelstrike",
"icon": 405,
"classjob": -1
},
{
"id": 6131,
"name": "Ghomoro Splitter",
"icon": 405,
"classjob": -1
},
{
"id": 6132,
"name": "Ghomoro Splitter",
"icon": 405,
"classjob": -1
},
{
"id": 6133,
"name": "Spread Shot",
"icon": 405,
"classjob": -1
},
{
"id": 6134,
"name": "Leg Graze",
"icon": 405,
"classjob": -1
},
{
"id": 6135,
"name": "Grenado Shot",
"icon": 405,
"classjob": -1
},
{
"id": 6136,
"name": "Poison Mist",
"icon": 405,
"classjob": -1
},
{
"id": 6137,
"name": "Bullet Hell",
"icon": 405,
"classjob": -1
},
{
"id": 6138,
"name": "Theriac",
"icon": 405,
"classjob": -1
},
{
"id": 6139,
"name": "Blast Trap",
"icon": 405,
"classjob": -1
},
{
"id": 6141,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 6142,
"name": "Lead Shot",
"icon": 405,
"classjob": -1
},
{
"id": 6143,
"name": "Saturate",
"icon": 61113,
"classjob": 0
},
{
"id": 6144,
"name": "Black Hole",
"icon": 405,
"classjob": -1
},
{
"id": 6145,
"name": "Doomsday",
"icon": 405,
"classjob": -1
},
{
"id": 6146,
"name": "Assimilation",
"icon": 405,
"classjob": -1
},
{
"id": 6147,
"name": "Transfiguration",
"icon": 405,
"classjob": -1
},
{
"id": 6148,
"name": "Transfiguration",
"icon": 405,
"classjob": -1
},
{
"id": 6149,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 6150,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 6151,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 6152,
"name": "Aethernova",
"icon": 405,
"classjob": -1
},
{
"id": 6153,
"name": "Death Grip",
"icon": 405,
"classjob": -1
},
{
"id": 6154,
"name": "Coif Change",
"icon": 405,
"classjob": -1
},
{
"id": 6155,
"name": "Haircut",
"icon": 405,
"classjob": -1
},
{
"id": 6156,
"name": "Split End",
"icon": 405,
"classjob": -1
},
{
"id": 6158,
"name": "Coif Change",
"icon": 405,
"classjob": -1
},
{
"id": 6159,
"name": "Haircut",
"icon": 405,
"classjob": -1
},
{
"id": 6160,
"name": "Split End",
"icon": 405,
"classjob": -1
},
{
"id": 6162,
"name": "Extension",
"icon": 405,
"classjob": -1
},
{
"id": 6163,
"name": "Extension",
"icon": 405,
"classjob": -1
},
{
"id": 6164,
"name": "Super Jump",
"icon": 405,
"classjob": -1
},
{
"id": 6165,
"name": "Evil Switch",
"icon": 405,
"classjob": -1
},
{
"id": 6166,
"name": "Evil Curl",
"icon": 405,
"classjob": -1
},
{
"id": 6167,
"name": "Evil Tress",
"icon": 405,
"classjob": -1
},
{
"id": 6168,
"name": "Dancing Mad",
"icon": 405,
"classjob": -1
},
{
"id": 6169,
"name": "Mana Drain",
"icon": 405,
"classjob": -1
},
{
"id": 6170,
"name": "Dancing Mad",
"icon": 405,
"classjob": -1
},
{
"id": 6171,
"name": "Dancing Mad",
"icon": 405,
"classjob": -1
},
{
"id": 6172,
"name": "Graft",
"icon": 405,
"classjob": -1
},
{
"id": 6174,
"name": "Garrotte",
"icon": 405,
"classjob": -1
},
{
"id": 6175,
"name": "Bloodied Nail",
"icon": 405,
"classjob": -1
},
{
"id": 6176,
"name": "Depth Charge",
"icon": 405,
"classjob": -1
},
{
"id": 6177,
"name": "Aura Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6178,
"name": "Penetration",
"icon": 405,
"classjob": -1
},
{
"id": 6179,
"name": "Dark Spike",
"icon": 405,
"classjob": -1
},
{
"id": 6180,
"name": "Silken Spray",
"icon": 405,
"classjob": -1
},
{
"id": 6181,
"name": "Pitfall",
"icon": 405,
"classjob": -1
},
{
"id": 6182,
"name": "Transfiguration",
"icon": 405,
"classjob": -1
},
{
"id": 6183,
"name": "Transfiguration",
"icon": 405,
"classjob": -1
},
{
"id": 6184,
"name": "Execration",
"icon": 405,
"classjob": -1
},
{
"id": 6185,
"name": "Execration",
"icon": 405,
"classjob": -1
},
{
"id": 6186,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 6187,
"name": "Debris Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6188,
"name": "Earthen Heart",
"icon": 405,
"classjob": -1
},
{
"id": 6189,
"name": "Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 6190,
"name": "Holy",
"icon": 405,
"classjob": -1
},
{
"id": 6191,
"name": "Acceleration Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 6192,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6193,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6194,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6195,
"name": "Implosion",
"icon": 405,
"classjob": -1
},
{
"id": 6196,
"name": "Arachne Web",
"icon": 405,
"classjob": -1
},
{
"id": 6197,
"name": "Tremblor",
"icon": 405,
"classjob": -1
},
{
"id": 6198,
"name": "Tremblor",
"icon": 405,
"classjob": -1
},
{
"id": 6199,
"name": "Tremblor",
"icon": 405,
"classjob": -1
},
{
"id": 6200,
"name": "Shadow Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6201,
"name": "Spider Thread",
"icon": 405,
"classjob": -1
},
{
"id": 6202,
"name": "Frond Affeared",
"icon": 405,
"classjob": -1
},
{
"id": 6203,
"name": "Caustic Spray",
"icon": 405,
"classjob": -1
},
{
"id": 6204,
"name": "Silkscreen",
"icon": 405,
"classjob": -1
},
{
"id": 6205,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 6206,
"name": "Realm Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 6207,
"name": "Sticky Wicket",
"icon": 405,
"classjob": -1
},
{
"id": 6208,
"name": "Digestive Fluid",
"icon": 405,
"classjob": -1
},
{
"id": 6209,
"name": "Hatch",
"icon": 405,
"classjob": -1
},
{
"id": 6210,
"name": "The Widow's Kiss",
"icon": 405,
"classjob": -1
},
{
"id": 6211,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6212,
"name": "Pom-bom",
"icon": 405,
"classjob": -1
},
{
"id": 6213,
"name": "Pitfall",
"icon": 405,
"classjob": -1
},
{
"id": 6214,
"name": "Bitter Bile",
"icon": 405,
"classjob": -1
},
{
"id": 6215,
"name": "Sticky Wicket",
"icon": 405,
"classjob": -1
},
{
"id": 6216,
"name": "Critical Bite",
"icon": 405,
"classjob": -1
},
{
"id": 6217,
"name": "Silkscreen",
"icon": 405,
"classjob": -1
},
{
"id": 6218,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 6219,
"name": "Realm Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 6220,
"name": "Digestive Fluid",
"icon": 405,
"classjob": -1
},
{
"id": 6221,
"name": "Inner Demons",
"icon": 405,
"classjob": -1
},
{
"id": 6222,
"name": "Dark II",
"icon": 405,
"classjob": -1
},
{
"id": 6223,
"name": "Enochian",
"icon": 2658,
"classjob": -1
},
{
"id": 6224,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 6225,
"name": "Fire IV",
"icon": 405,
"classjob": -1
},
{
"id": 6226,
"name": "Epigraph",
"icon": 405,
"classjob": -1
},
{
"id": 6227,
"name": "Fiery Epigraph",
"icon": 405,
"classjob": -1
},
{
"id": 6228,
"name": "Flaming Epigraph",
"icon": 405,
"classjob": -1
},
{
"id": 6229,
"name": "Trembling Epigraph",
"icon": 405,
"classjob": -1
},
{
"id": 6230,
"name": "Flaring Epigraph",
"icon": 405,
"classjob": -1
},
{
"id": 6231,
"name": "Tail Slap",
"icon": 405,
"classjob": -1
},
{
"id": 6232,
"name": "Murderous Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 6233,
"name": "Big Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6234,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6235,
"name": "Electric Cachexia",
"icon": 405,
"classjob": -1
},
{
"id": 6236,
"name": "Dark Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 6237,
"name": "Tight Tornado",
"icon": 405,
"classjob": -1
},
{
"id": 6238,
"name": "Arachne Web",
"icon": 405,
"classjob": -1
},
{
"id": 6241,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 6242,
"name": "Horrisonous Blast",
"icon": 405,
"classjob": -1
},
{
"id": 6243,
"name": "Khoomii",
"icon": 405,
"classjob": -1
},
{
"id": 6244,
"name": "Seismic Rift",
"icon": 405,
"classjob": -1
},
{
"id": 6245,
"name": "Excretion",
"icon": 405,
"classjob": -1
},
{
"id": 6246,
"name": "Head Snatch",
"icon": 405,
"classjob": -1
},
{
"id": 6247,
"name": "Spinning Edge",
"icon": 405,
"classjob": -1
},
{
"id": 6248,
"name": "Gust Slash",
"icon": 405,
"classjob": -1
},
{
"id": 6249,
"name": "Aeolian Edge",
"icon": 405,
"classjob": -1
},
{
"id": 6250,
"name": "Triple Slash",
"icon": 405,
"classjob": -1
},
{
"id": 6251,
"name": "Hide",
"icon": 405,
"classjob": -1
},
{
"id": 6252,
"name": "Sneak Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6253,
"name": "Poisoned Blade",
"icon": 405,
"classjob": -1
},
{
"id": 6254,
"name": "Throwing Dagger",
"icon": 405,
"classjob": -1
},
{
"id": 6255,
"name": "Butcher's Block",
"icon": 405,
"classjob": -1
},
{
"id": 6256,
"name": "Storm's Eye",
"icon": 405,
"classjob": -1
},
{
"id": 6257,
"name": "Raging Rush",
"icon": 405,
"classjob": -1
},
{
"id": 6258,
"name": "Madness",
"icon": 405,
"classjob": -1
},
{
"id": 6259,
"name": "Pomander Of Safety",
"icon": 405,
"classjob": 0
},
{
"id": 6260,
"name": "Pomander Of Sight",
"icon": 405,
"classjob": 0
},
{
"id": 6262,
"name": "Pomander Of Strength",
"icon": 405,
"classjob": 0
},
{
"id": 6263,
"name": "Pomander Of Steel",
"icon": 405,
"classjob": 0
},
{
"id": 6264,
"name": "Pomander Of Affluence",
"icon": 405,
"classjob": 0
},
{
"id": 6265,
"name": "Pomander Of Flight",
"icon": 405,
"classjob": 0
},
{
"id": 6266,
"name": "Pomander Of Alteration",
"icon": 405,
"classjob": 0
},
{
"id": 6267,
"name": "Pomander Of Purity",
"icon": 405,
"classjob": 0
},
{
"id": 6268,
"name": "Pomander Of Fortune",
"icon": 405,
"classjob": 0
},
{
"id": 6269,
"name": "Pomander Of Witching",
"icon": 405,
"classjob": 0
},
{
"id": 6270,
"name": "Pomander Of Serenity",
"icon": 405,
"classjob": 0
},
{
"id": 6271,
"name": "Pomander Of Rage",
"icon": 405,
"classjob": 0
},
{
"id": 6272,
"name": "Pomander Of Lust",
"icon": 405,
"classjob": 0
},
{
"id": 6273,
"name": "Pummel",
"icon": 61136,
"classjob": 0
},
{
"id": 6274,
"name": "Void Fire II",
"icon": 61137,
"classjob": 0
},
{
"id": 6275,
"name": "Landmine",
"icon": 405,
"classjob": -1
},
{
"id": 6276,
"name": "Luring Trap",
"icon": 405,
"classjob": -1
},
{
"id": 6277,
"name": "Enfeebling Trap",
"icon": 405,
"classjob": -1
},
{
"id": 6278,
"name": "Impeding Trap",
"icon": 405,
"classjob": -1
},
{
"id": 6279,
"name": "Toading Trap",
"icon": 405,
"classjob": -1
},
{
"id": 6280,
"name": "The Widow's Embrace",
"icon": 405,
"classjob": -1
},
{
"id": 6282,
"name": "Mortal Chorus",
"icon": 405,
"classjob": -1
},
{
"id": 6284,
"name": "Detonator",
"icon": 405,
"classjob": -1
},
{
"id": 6285,
"name": "Raise",
"icon": 405,
"classjob": -1
},
{
"id": 6286,
"name": "Ultra Power Special",
"icon": 405,
"classjob": -1
},
{
"id": 6287,
"name": "Ranger Rage",
"icon": 405,
"classjob": -1
},
{
"id": 6288,
"name": "Rainbow Dynamo",
"icon": 405,
"classjob": -1
},
{
"id": 6289,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6290,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6291,
"name": "Weapon Enhancement",
"icon": 405,
"classjob": -1
},
{
"id": 6292,
"name": "Gear Enhancement",
"icon": 405,
"classjob": -1
},
{
"id": 6293,
"name": "Roar",
"icon": 61135,
"classjob": 0
},
{
"id": 6294,
"name": "Seed",
"icon": 61134,
"classjob": 0
},
{
"id": 6295,
"name": "Buffet",
"icon": 61129,
"classjob": 0
},
{
"id": 6296,
"name": "Fumigate",
"icon": 61133,
"classjob": 0
},
{
"id": 6297,
"name": "Seed",
"icon": 64167,
"classjob": 0
},
{
"id": 6298,
"name": "The Scarlet Whisper",
"icon": 405,
"classjob": -1
},
{
"id": 6299,
"name": "Deafening Bellow",
"icon": 405,
"classjob": -1
},
{
"id": 6300,
"name": "Cauterize",
"icon": 405,
"classjob": -1
},
{
"id": 6301,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 6302,
"name": "Horrid Roar",
"icon": 405,
"classjob": -1
},
{
"id": 6303,
"name": "Hot Wing",
"icon": 405,
"classjob": -1
},
{
"id": 6304,
"name": "Hot Tail",
"icon": 405,
"classjob": -1
},
{
"id": 6305,
"name": "Electric Predation",
"icon": 405,
"classjob": -1
},
{
"id": 6306,
"name": "The Serpent's Apple",
"icon": 405,
"classjob": -1
},
{
"id": 6307,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 6308,
"name": "Final Chorus",
"icon": 405,
"classjob": -1
},
{
"id": 6309,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 6310,
"name": "Eye Of The Tyrant",
"icon": 405,
"classjob": -1
},
{
"id": 6311,
"name": "High Jump",
"icon": 405,
"classjob": -1
},
{
"id": 6312,
"name": "Geirskogul",
"icon": 405,
"classjob": -1
},
{
"id": 6313,
"name": "Ala Morn",
"icon": 405,
"classjob": -1
},
{
"id": 6314,
"name": "Drachenlance",
"icon": 405,
"classjob": -1
},
{
"id": 6315,
"name": "Akh Morn",
"icon": 405,
"classjob": -1
},
{
"id": 6316,
"name": "Akh Morn",
"icon": 405,
"classjob": -1
},
{
"id": 6317,
"name": "Flame Blast",
"icon": 405,
"classjob": -1
},
{
"id": 6318,
"name": "Super Jump",
"icon": 405,
"classjob": -1
},
{
"id": 6319,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6320,
"name": "Mortal Chorus",
"icon": 405,
"classjob": -1
},
{
"id": 6321,
"name": "Loom",
"icon": 405,
"classjob": -1
},
{
"id": 6322,
"name": "Paralyze III",
"icon": 405,
"classjob": -1
},
{
"id": 6323,
"name": "Summon II",
"icon": 405,
"classjob": -1
},
{
"id": 6324,
"name": "Mogatory Mog Dance",
"icon": 64168,
"classjob": 0
},
{
"id": 6326,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 6327,
"name": "Scamper",
"icon": 405,
"classjob": -1
},
{
"id": 6328,
"name": "Hoofkick",
"icon": 405,
"classjob": -1
},
{
"id": 6329,
"name": "Blood Drain",
"icon": 405,
"classjob": -1
},
{
"id": 6330,
"name": "Ultrasonics",
"icon": 405,
"classjob": -1
},
{
"id": 6331,
"name": "Shatter",
"icon": 405,
"classjob": -1
},
{
"id": 6332,
"name": "Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 6333,
"name": "Spoil",
"icon": 405,
"classjob": -1
},
{
"id": 6334,
"name": "Final Sting",
"icon": 405,
"classjob": -1
},
{
"id": 6335,
"name": "Corrosive Spit",
"icon": 405,
"classjob": -1
},
{
"id": 6336,
"name": "Slumber Breath",
"icon": 405,
"classjob": -1
},
{
"id": 6337,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 6338,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 6339,
"name": "Rhino Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6340,
"name": "Gas Shell",
"icon": 405,
"classjob": -1
},
{
"id": 6341,
"name": "Sticky Tongue",
"icon": 405,
"classjob": -1
},
{
"id": 6342,
"name": "Labored Leap",
"icon": 405,
"classjob": -1
},
{
"id": 6343,
"name": "Digest",
"icon": 405,
"classjob": -1
},
{
"id": 6344,
"name": "Rapture",
"icon": 405,
"classjob": -1
},
{
"id": 6345,
"name": "Brackish Drop",
"icon": 405,
"classjob": -1
},
{
"id": 6346,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 6347,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6348,
"name": "Bad Breath",
"icon": 405,
"classjob": -1
},
{
"id": 6349,
"name": "Golden Tongue",
"icon": 405,
"classjob": -1
},
{
"id": 6350,
"name": "Thunder",
"icon": 405,
"classjob": -1
},
{
"id": 6351,
"name": "Stone Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 6352,
"name": "The Wood Remembers",
"icon": 405,
"classjob": -1
},
{
"id": 6353,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 6354,
"name": "Smoldering Scales",
"icon": 405,
"classjob": -1
},
{
"id": 6355,
"name": "Tortoise Stomp",
"icon": 405,
"classjob": -1
},
{
"id": 6356,
"name": "Stone Gaze",
"icon": 405,
"classjob": -1
},
{
"id": 6357,
"name": "Horrid Horn",
"icon": 405,
"classjob": -1
},
{
"id": 6358,
"name": "Haste",
"icon": 405,
"classjob": -1
},
{
"id": 6359,
"name": "Berserk",
"icon": 405,
"classjob": -1
},
{
"id": 6360,
"name": "Rear",
"icon": 405,
"classjob": -1
},
{
"id": 6361,
"name": "Wild Horn",
"icon": 405,
"classjob": -1
},
{
"id": 6362,
"name": "Dark Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 6363,
"name": "Iron Justice",
"icon": 405,
"classjob": -1
},
{
"id": 6364,
"name": "111-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 6365,
"name": "Chirp",
"icon": 405,
"classjob": -1
},
{
"id": 6366,
"name": "Curse",
"icon": 405,
"classjob": -1
},
{
"id": 6367,
"name": "Hex Eye",
"icon": 405,
"classjob": -1
},
{
"id": 6368,
"name": "Heartburn",
"icon": 405,
"classjob": -1
},
{
"id": 6369,
"name": "Rotting Bandages",
"icon": 405,
"classjob": -1
},
{
"id": 6370,
"name": "Eyes On Me",
"icon": 405,
"classjob": -1
},
{
"id": 6371,
"name": "Tail Drive",
"icon": 405,
"classjob": -1
},
{
"id": 6372,
"name": "Sucker",
"icon": 405,
"classjob": -1
},
{
"id": 6373,
"name": "Flood",
"icon": 405,
"classjob": -1
},
{
"id": 6374,
"name": "Dark",
"icon": 405,
"classjob": -1
},
{
"id": 6375,
"name": "Voidblood",
"icon": 405,
"classjob": -1
},
{
"id": 6376,
"name": "Triclip",
"icon": 405,
"classjob": -1
},
{
"id": 6377,
"name": "Void Fire II",
"icon": 452,
"classjob": -1
},
{
"id": 6378,
"name": "Dark Mist",
"icon": 405,
"classjob": -1
},
{
"id": 6379,
"name": "Quarry Lake",
"icon": 405,
"classjob": -1
},
{
"id": 6380,
"name": "Dirty Sneeze",
"icon": 405,
"classjob": -1
},
{
"id": 6381,
"name": "Beatdown",
"icon": 405,
"classjob": -1
},
{
"id": 6382,
"name": "Thunderstrike",
"icon": 405,
"classjob": -1
},
{
"id": 6383,
"name": "Dark Dome",
"icon": 405,
"classjob": -1
},
{
"id": 6384,
"name": "Grim Reaper",
"icon": 405,
"classjob": -1
},
{
"id": 6385,
"name": "Ossify",
"icon": 405,
"classjob": -1
},
{
"id": 6386,
"name": "Paralyze II",
"icon": 405,
"classjob": -1
},
{
"id": 6387,
"name": "Ravenous Bite",
"icon": 405,
"classjob": -1
},
{
"id": 6388,
"name": "Paralyze III",
"icon": 405,
"classjob": -1
},
{
"id": 6389,
"name": "Void Slash",
"icon": 405,
"classjob": -1
},
{
"id": 6390,
"name": "Void Trap",
"icon": 405,
"classjob": -1
},
{
"id": 6391,
"name": "Chaos Breath",
"icon": 405,
"classjob": -1
},
{
"id": 6392,
"name": "Dark Thorn",
"icon": 405,
"classjob": -1
},
{
"id": 6393,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 6394,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 6395,
"name": "Heirloom Scream",
"icon": 405,
"classjob": -1
},
{
"id": 6396,
"name": "Deathtrap",
"icon": 405,
"classjob": -1
},
{
"id": 6397,
"name": "Infatuation",
"icon": 405,
"classjob": -1
},
{
"id": 6398,
"name": "In Health",
"icon": 405,
"classjob": -1
},
{
"id": 6399,
"name": "In Health",
"icon": 405,
"classjob": -1
},
{
"id": 6400,
"name": "Dark Harvest",
"icon": 405,
"classjob": -1
},
{
"id": 6401,
"name": "In Sickness",
"icon": 405,
"classjob": -1
},
{
"id": 6402,
"name": "Black Honeymoon",
"icon": 405,
"classjob": -1
},
{
"id": 6403,
"name": "Cold Feet",
"icon": 405,
"classjob": -1
},
{
"id": 6404,
"name": "Desolation",
"icon": 405,
"classjob": -1
},
{
"id": 6405,
"name": "Terror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 6406,
"name": "Suction",
"icon": 405,
"classjob": -1
},
{
"id": 6407,
"name": "Garrotte",
"icon": 405,
"classjob": -1
},
{
"id": 6408,
"name": "Pounce",
"icon": 405,
"classjob": -1
},
{
"id": 6410,
"name": "Scream",
"icon": 405,
"classjob": -1
},
{
"id": 6411,
"name": "Nail In The Coffin",
"icon": 405,
"classjob": -1
},
{
"id": 6412,
"name": "Vengeful Soul",
"icon": 405,
"classjob": -1
},
{
"id": 6413,
"name": "Tornado",
"icon": 405,
"classjob": -1
},
{
"id": 6414,
"name": "Dripping Fang",
"icon": 405,
"classjob": -1
},
{
"id": 6416,
"name": "Whipcrack",
"icon": 405,
"classjob": -1
},
{
"id": 6417,
"name": "Stormwind",
"icon": 405,
"classjob": -1
},
{
"id": 6418,
"name": "Bombination",
"icon": 405,
"classjob": -1
},
{
"id": 6419,
"name": "Lumisphere",
"icon": 405,
"classjob": -1
},
{
"id": 6420,
"name": "Aero Blast",
"icon": 405,
"classjob": -1
},
{
"id": 6421,
"name": "Bloody Caress",
"icon": 405,
"classjob": -1
},
{
"id": 6422,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 6423,
"name": "Gold Dust",
"icon": 405,
"classjob": -1
},
{
"id": 6424,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 6425,
"name": "Rotten Stench",
"icon": 405,
"classjob": -1
},
{
"id": 6426,
"name": "Dissever",
"icon": 405,
"classjob": -1
},
{
"id": 6427,
"name": "Ball Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 6428,
"name": "Ball Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 6429,
"name": "Fear Itself",
"icon": 405,
"classjob": -1
},
{
"id": 6430,
"name": "Ancient Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 6431,
"name": "Entropic Flame",
"icon": 405,
"classjob": -1
},
{
"id": 6432,
"name": "Shadow Flare",
"icon": 405,
"classjob": -1
},
{
"id": 6433,
"name": "Scream",
"icon": 405,
"classjob": -1
},
{
"id": 6434,
"name": "Accursed Pox",
"icon": 405,
"classjob": -1
},
{
"id": 6435,
"name": "Tornado",
"icon": 405,
"classjob": -1
},
{
"id": 6436,
"name": "Iron Justice",
"icon": 405,
"classjob": -1
},
{
"id": 6437,
"name": "Recharge",
"icon": 405,
"classjob": -1
},
{
"id": 6438,
"name": "Recharge",
"icon": 405,
"classjob": -1
},
{
"id": 6439,
"name": "Feint Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 6440,
"name": "Feint Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 6441,
"name": "Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 6442,
"name": "Stone",
"icon": 405,
"classjob": -1
},
{
"id": 6443,
"name": "Water",
"icon": 405,
"classjob": -1
},
{
"id": 6444,
"name": "Eye Of The Stunted",
"icon": 405,
"classjob": -1
},
{
"id": 6445,
"name": "Eye Of The Wildered",
"icon": 405,
"classjob": -1
},
{
"id": 6446,
"name": "Eye Of The Slithered",
"icon": 405,
"classjob": -1
},
{
"id": 6447,
"name": "Ram",
"icon": 405,
"classjob": -1
},
{
"id": 6448,
"name": "Teary Twirl",
"icon": 405,
"classjob": -1
},
{
"id": 6449,
"name": "Pluck And Prune",
"icon": 405,
"classjob": -1
},
{
"id": 6450,
"name": "Pungent Pirouette",
"icon": 405,
"classjob": -1
},
{
"id": 6451,
"name": "Heirloom Scream",
"icon": 405,
"classjob": -1
},
{
"id": 6452,
"name": "Pollen",
"icon": 405,
"classjob": -1
},
{
"id": 6453,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 6454,
"name": "Debris Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6455,
"name": "Rhino Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6456,
"name": "Rhino Guard",
"icon": 405,
"classjob": -1
},
{
"id": 6457,
"name": "Rotting Bandages",
"icon": 405,
"classjob": -1
},
{
"id": 6458,
"name": "Triclip",
"icon": 405,
"classjob": -1
},
{
"id": 6459,
"name": "Frightful Roar",
"icon": 405,
"classjob": -1
},
{
"id": 6460,
"name": "Folio",
"icon": 405,
"classjob": -1
},
{
"id": 6461,
"name": "Issue",
"icon": 405,
"classjob": -1
},
{
"id": 6462,
"name": "Issue",
"icon": 405,
"classjob": -1
},
{
"id": 6463,
"name": "Issue",
"icon": 405,
"classjob": -1
},
{
"id": 6464,
"name": "Discontinue",
"icon": 405,
"classjob": -1
},
{
"id": 6465,
"name": "Issue",
"icon": 405,
"classjob": -1
},
{
"id": 6466,
"name": "Discontinue",
"icon": 405,
"classjob": -1
},
{
"id": 6467,
"name": "Discontinue",
"icon": 405,
"classjob": -1
},
{
"id": 6468,
"name": "Searing Wind",
"icon": 405,
"classjob": -1
},
{
"id": 6469,
"name": "Bibliocide",
"icon": 405,
"classjob": -1
},
{
"id": 6470,
"name": "Sea Of Flames",
"icon": 405,
"classjob": -1
},
{
"id": 6471,
"name": "Slosh",
"icon": 405,
"classjob": -1
},
{
"id": 6472,
"name": "Searing Wind",
"icon": 405,
"classjob": -1
},
{
"id": 6473,
"name": "Seal Of Night And Day",
"icon": 405,
"classjob": -1
},
{
"id": 6474,
"name": "Seal Of Night And Day",
"icon": 405,
"classjob": -1
},
{
"id": 6475,
"name": "Ferrofluid",
"icon": 405,
"classjob": -1
},
{
"id": 6476,
"name": "Magnetism",
"icon": 405,
"classjob": -1
},
{
"id": 6477,
"name": "Repel",
"icon": 405,
"classjob": -1
},
{
"id": 6478,
"name": "Check Out",
"icon": 405,
"classjob": -1
},
{
"id": 6479,
"name": "On The Properties Of Levitation",
"icon": 405,
"classjob": -1
},
{
"id": 6480,
"name": "On The Properties Of Gravity",
"icon": 405,
"classjob": -1
},
{
"id": 6483,
"name": "Seal Of Night And Day",
"icon": 405,
"classjob": -1
},
{
"id": 6484,
"name": "On The Properties Of Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 6485,
"name": "On The Properties Of Darkness II",
"icon": 405,
"classjob": -1
},
{
"id": 6486,
"name": "On The Properties Of Quakes",
"icon": 405,
"classjob": -1
},
{
"id": 6487,
"name": "On The Properties Of Tornados",
"icon": 405,
"classjob": -1
},
{
"id": 6488,
"name": "On The Properties Of Tornados",
"icon": 405,
"classjob": -1
},
{
"id": 6489,
"name": "On The Properties Of Imps",
"icon": 405,
"classjob": -1
},
{
"id": 6490,
"name": "On The Properties Of Thunder III",
"icon": 405,
"classjob": -1
},
{
"id": 6491,
"name": "On The Properties Of Thunder III",
"icon": 405,
"classjob": -1
},
{
"id": 6492,
"name": "Ecliptic Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 6493,
"name": "Ecliptic Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 6494,
"name": "Meteor Impact",
"icon": 405,
"classjob": -1
},
{
"id": 6497,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6498,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6499,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6500,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6501,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6502,
"name": "100-tonze Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 6503,
"name": "100-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 6504,
"name": "Sea Of Flames",
"icon": 405,
"classjob": -1
},
{
"id": 6505,
"name": "Comet",
"icon": 405,
"classjob": -1
},
{
"id": 6506,
"name": "Bloodrage",
"icon": 405,
"classjob": -1
},
{
"id": 6507,
"name": "Bloodrage",
"icon": 405,
"classjob": -1
},
{
"id": 6509,
"name": "Stool Pelt",
"icon": 405,
"classjob": -1
},
{
"id": 6510,
"name": "Quasar",
"icon": 405,
"classjob": -1
},
{
"id": 6511,
"name": "Quasar",
"icon": 405,
"classjob": -1
},
{
"id": 6514,
"name": "Thunder III",
"icon": 405,
"classjob": -1
},
{
"id": 6515,
"name": "Aero II",
"icon": 405,
"classjob": -1
},
{
"id": 6516,
"name": "Thunder II",
"icon": 405,
"classjob": -1
},
{
"id": 6517,
"name": "Dischordant Damnation",
"icon": 405,
"classjob": -1
},
{
"id": 6518,
"name": "Dischordant Cleansing",
"icon": 405,
"classjob": -1
},
{
"id": 6519,
"name": "Dischordant Damnation",
"icon": 405,
"classjob": -1
},
{
"id": 6520,
"name": "Dischordant Cleansing",
"icon": 405,
"classjob": -1
},
{
"id": 6521,
"name": "Divine Spark",
"icon": 405,
"classjob": -1
},
{
"id": 6522,
"name": "Cure II",
"icon": 405,
"classjob": -1
},
{
"id": 6523,
"name": "Gnostic Spear",
"icon": 405,
"classjob": -1
},
{
"id": 6524,
"name": "Ring Of Pain",
"icon": 405,
"classjob": -1
},
{
"id": 6525,
"name": "Vertical Kenoma",
"icon": 405,
"classjob": -1
},
{
"id": 6526,
"name": "Horizontal Kenoma",
"icon": 405,
"classjob": -1
},
{
"id": 6527,
"name": "Revengeance",
"icon": 405,
"classjob": -1
},
{
"id": 6528,
"name": "Cloudy Heavens",
"icon": 405,
"classjob": -1
},
{
"id": 6529,
"name": "The Scales Of Wisdom",
"icon": 405,
"classjob": -1
},
{
"id": 6530,
"name": "Light Dew",
"icon": 405,
"classjob": -1
},
{
"id": 6533,
"name": "Onrush",
"icon": 405,
"classjob": -1
},
{
"id": 6534,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6535,
"name": "Cintamani",
"icon": 405,
"classjob": -1
},
{
"id": 6536,
"name": "Infusion",
"icon": 405,
"classjob": -1
},
{
"id": 6538,
"name": "Batter",
"icon": 405,
"classjob": -1
},
{
"id": 6539,
"name": "Smite Of Gloom",
"icon": 405,
"classjob": -1
},
{
"id": 6540,
"name": "Desolation",
"icon": 405,
"classjob": -1
},
{
"id": 6541,
"name": "Condensed Libra",
"icon": 405,
"classjob": -1
},
{
"id": 6542,
"name": "Triple Hit",
"icon": 405,
"classjob": -1
},
{
"id": 6543,
"name": "Page Tear",
"icon": 405,
"classjob": -1
},
{
"id": 6544,
"name": "Magic Hammer",
"icon": 405,
"classjob": -1
},
{
"id": 6545,
"name": "Tail Smash",
"icon": 405,
"classjob": -1
},
{
"id": 6546,
"name": "Bone Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 6547,
"name": "Ripples Of Gloom",
"icon": 405,
"classjob": -1
},
{
"id": 6548,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6549,
"name": "Aetherochemical Laser",
"icon": 405,
"classjob": -1
},
{
"id": 6550,
"name": "Aetherochemical Laser",
"icon": 405,
"classjob": -1
},
{
"id": 6551,
"name": "Aetherochemical Laser",
"icon": 405,
"classjob": -1
},
{
"id": 6552,
"name": "Aether Bend",
"icon": 405,
"classjob": -1
},
{
"id": 6553,
"name": "Light Spear",
"icon": 405,
"classjob": -1
},
{
"id": 6554,
"name": "Citadel Buster",
"icon": 405,
"classjob": -1
},
{
"id": 6555,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 6556,
"name": "Supernova",
"icon": 405,
"classjob": -1
},
{
"id": 6557,
"name": "Integrated Aetheromodulator",
"icon": 405,
"classjob": -1
},
{
"id": 6558,
"name": "Diffractive Laser",
"icon": 405,
"classjob": -1
},
{
"id": 6562,
"name": "Aetherial Pool",
"icon": 405,
"classjob": -1
},
{
"id": 6563,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 6564,
"name": "Light Spear",
"icon": 405,
"classjob": -1
},
{
"id": 6565,
"name": "Aetherial Absorbption",
"icon": 405,
"classjob": -1
},
{
"id": 6566,
"name": "Aetherial Release",
"icon": 405,
"classjob": -1
},
{
"id": 6567,
"name": "Quasar",
"icon": 405,
"classjob": -1
},
{
"id": 6568,
"name": "Quasar",
"icon": 405,
"classjob": -1
},
{
"id": 6569,
"name": "Quasar",
"icon": 405,
"classjob": -1
},
{
"id": 6570,
"name": "Execute",
"icon": 405,
"classjob": -1
},
{
"id": 6571,
"name": "Duplicate",
"icon": 405,
"classjob": -1
},
{
"id": 6572,
"name": "Thunder III",
"icon": 405,
"classjob": -1
},
{
"id": 6573,
"name": "Execute",
"icon": 405,
"classjob": -1
},
{
"id": 6574,
"name": "Aero III",
"icon": 405,
"classjob": -1
},
{
"id": 6575,
"name": "Execute",
"icon": 405,
"classjob": -1
},
{
"id": 6576,
"name": "Thunder II",
"icon": 405,
"classjob": -1
},
{
"id": 6577,
"name": "Execute",
"icon": 405,
"classjob": -1
},
{
"id": 6578,
"name": "Dischordant Damnation",
"icon": 405,
"classjob": -1
},
{
"id": 6579,
"name": "Dischordant Cleansing",
"icon": 405,
"classjob": -1
},
{
"id": 6580,
"name": "Dischordant Damnation",
"icon": 405,
"classjob": -1
},
{
"id": 6581,
"name": "Dischordant Cleansing",
"icon": 405,
"classjob": -1
},
{
"id": 6582,
"name": "Divine Spark",
"icon": 405,
"classjob": -1
},
{
"id": 6583,
"name": "Cure II",
"icon": 405,
"classjob": -1
},
{
"id": 6584,
"name": "Gnostic Rant",
"icon": 405,
"classjob": -1
},
{
"id": 6585,
"name": "Gnostic Spear",
"icon": 405,
"classjob": -1
},
{
"id": 6586,
"name": "Ring Of Pain",
"icon": 405,
"classjob": -1
},
{
"id": 6587,
"name": "Vertical Kenoma",
"icon": 405,
"classjob": -1
},
{
"id": 6588,
"name": "Horizontal Kenoma",
"icon": 405,
"classjob": -1
},
{
"id": 6589,
"name": "Revengeance",
"icon": 405,
"classjob": -1
},
{
"id": 6590,
"name": "Cloudy Heavens",
"icon": 405,
"classjob": -1
},
{
"id": 6591,
"name": "Light Dew",
"icon": 405,
"classjob": -1
},
{
"id": 6592,
"name": "Light Dew",
"icon": 405,
"classjob": -1
},
{
"id": 6593,
"name": "Onrush",
"icon": 405,
"classjob": -1
},
{
"id": 6594,
"name": "Gnosis",
"icon": 405,
"classjob": -1
},
{
"id": 6595,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6596,
"name": "Arms Of Wisdom",
"icon": 405,
"classjob": -1
},
{
"id": 6597,
"name": "Cintamani",
"icon": 405,
"classjob": -1
},
{
"id": 6598,
"name": "Short Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6599,
"name": "Wind Blast",
"icon": 405,
"classjob": -1
},
{
"id": 6600,
"name": "Long Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6601,
"name": "Lift",
"icon": 405,
"classjob": -1
},
{
"id": 6602,
"name": "Air Raid",
"icon": 405,
"classjob": -1
},
{
"id": 6603,
"name": "Short Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6604,
"name": "Hot Blast",
"icon": 405,
"classjob": -1
},
{
"id": 6605,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6606,
"name": "On Low",
"icon": 405,
"classjob": -1
},
{
"id": 6607,
"name": "On High",
"icon": 405,
"classjob": -1
},
{
"id": 6608,
"name": "Dark Wings",
"icon": 405,
"classjob": -1
},
{
"id": 6609,
"name": "Swiftfeather",
"icon": 405,
"classjob": -1
},
{
"id": 6610,
"name": "Terrible Flurry",
"icon": 405,
"classjob": -1
},
{
"id": 6611,
"name": "Ixali Aero",
"icon": 405,
"classjob": -1
},
{
"id": 6612,
"name": "Ixali Aero II",
"icon": 405,
"classjob": -1
},
{
"id": 6613,
"name": "Ixali Aero III",
"icon": 405,
"classjob": -1
},
{
"id": 6614,
"name": "Hawk",
"icon": 405,
"classjob": -1
},
{
"id": 6615,
"name": "Summon Garuda",
"icon": 405,
"classjob": -1
},
{
"id": 6616,
"name": "Ingurgitate",
"icon": 405,
"classjob": -1
},
{
"id": 6617,
"name": "Ingurgitate",
"icon": 405,
"classjob": -1
},
{
"id": 6618,
"name": "Bill",
"icon": 405,
"classjob": -1
},
{
"id": 6619,
"name": "Eye Of The Storm",
"icon": 405,
"classjob": -1
},
{
"id": 6620,
"name": "Mistral Song",
"icon": 405,
"classjob": -1
},
{
"id": 6621,
"name": "Wicked Wheel",
"icon": 405,
"classjob": -1
},
{
"id": 6622,
"name": "Aerial Blast",
"icon": 405,
"classjob": -1
},
{
"id": 6623,
"name": "Dark",
"icon": 405,
"classjob": -1
},
{
"id": 6624,
"name": "Falling Rock",
"icon": 405,
"classjob": -1
},
{
"id": 6625,
"name": "Sneeze",
"icon": 405,
"classjob": -1
},
{
"id": 6626,
"name": "Breakbeak",
"icon": 405,
"classjob": -1
},
{
"id": 6627,
"name": "Gust",
"icon": 405,
"classjob": -1
},
{
"id": 6628,
"name": "Ixali Aero II",
"icon": 405,
"classjob": -1
},
{
"id": 6629,
"name": "Ixali Aero III",
"icon": 405,
"classjob": -1
},
{
"id": 6630,
"name": "Light Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 6632,
"name": "Divine Spear",
"icon": 405,
"classjob": -1
},
{
"id": 6633,
"name": "Punishing Heat",
"icon": 405,
"classjob": -1
},
{
"id": 6634,
"name": "Incinerating Heat",
"icon": 405,
"classjob": -1
},
{
"id": 6635,
"name": "Sacrament",
"icon": 405,
"classjob": -1
},
{
"id": 6636,
"name": "Sacrament",
"icon": 405,
"classjob": -1
},
{
"id": 6637,
"name": "Radiant Sacrament",
"icon": 405,
"classjob": -1
},
{
"id": 6638,
"name": "Mega Holy",
"icon": 405,
"classjob": -1
},
{
"id": 6639,
"name": "Blazing Scourge",
"icon": 405,
"classjob": -1
},
{
"id": 6640,
"name": "Blazing Scourge",
"icon": 405,
"classjob": -1
},
{
"id": 6641,
"name": "Gravitational Anomaly",
"icon": 405,
"classjob": -1
},
{
"id": 6642,
"name": "Gravitational Anomaly",
"icon": 405,
"classjob": -1
},
{
"id": 6643,
"name": "Smash",
"icon": 405,
"classjob": -1
},
{
"id": 6644,
"name": "Will Of The Creator",
"icon": 405,
"classjob": -1
},
{
"id": 6645,
"name": "Half Gravity",
"icon": 405,
"classjob": -1
},
{
"id": 6646,
"name": "Will Of The Creator",
"icon": 405,
"classjob": -1
},
{
"id": 6647,
"name": "Almost Holy",
"icon": 405,
"classjob": -1
},
{
"id": 6648,
"name": "Will Of The Creator",
"icon": 405,
"classjob": -1
},
{
"id": 6649,
"name": "Divine Judgment",
"icon": 405,
"classjob": -1
},
{
"id": 6650,
"name": "Chronofoil",
"icon": 405,
"classjob": -1
},
{
"id": 6651,
"name": "Temporal Stasis",
"icon": 405,
"classjob": -1
},
{
"id": 6652,
"name": "Plaint Of Obloquy",
"icon": 405,
"classjob": -1
},
{
"id": 6653,
"name": "Plaint Of Severity",
"icon": 405,
"classjob": -1
},
{
"id": 6654,
"name": "Plaint Of Solidarity",
"icon": 405,
"classjob": -1
},
{
"id": 6655,
"name": "Plaint Of Surety",
"icon": 405,
"classjob": -1
},
{
"id": 6656,
"name": "Smash",
"icon": 405,
"classjob": -1
},
{
"id": 6657,
"name": "Half Gravity",
"icon": 405,
"classjob": -1
},
{
"id": 6658,
"name": "Almost Holy",
"icon": 405,
"classjob": -1
},
{
"id": 6659,
"name": "Timegate",
"icon": 405,
"classjob": -1
},
{
"id": 6660,
"name": "Judgment Crystal",
"icon": 405,
"classjob": -1
},
{
"id": 6661,
"name": "Judgment Crystal",
"icon": 405,
"classjob": -1
},
{
"id": 6662,
"name": "Tetrashatter",
"icon": 405,
"classjob": -1
},
{
"id": 6663,
"name": "Cast Judgment",
"icon": 405,
"classjob": -1
},
{
"id": 6664,
"name": "Inception",
"icon": 405,
"classjob": -1
},
{
"id": 6665,
"name": "Sacrament",
"icon": 405,
"classjob": -1
},
{
"id": 6666,
"name": "Summon Alexander",
"icon": 405,
"classjob": -1
},
{
"id": 6667,
"name": "Holy Scourge",
"icon": 405,
"classjob": -1
},
{
"id": 6668,
"name": "Holy Scourge",
"icon": 405,
"classjob": -1
},
{
"id": 6669,
"name": "Chastening Heat",
"icon": 405,
"classjob": -1
},
{
"id": 6670,
"name": "Void Of Repentance",
"icon": 405,
"classjob": -1
},
{
"id": 6671,
"name": "Repentance",
"icon": 405,
"classjob": -1
},
{
"id": 6672,
"name": "Repentance",
"icon": 405,
"classjob": -1
},
{
"id": 6673,
"name": "Repentance",
"icon": 405,
"classjob": -1
},
{
"id": 6674,
"name": "Confession",
"icon": 405,
"classjob": -1
},
{
"id": 6675,
"name": "Holy Bleed",
"icon": 405,
"classjob": -1
},
{
"id": 6676,
"name": "Holy Bleed",
"icon": 405,
"classjob": -1
},
{
"id": 6677,
"name": "Communion",
"icon": 405,
"classjob": -1
},
{
"id": 6678,
"name": "Goblin Rush",
"icon": 405,
"classjob": -1
},
{
"id": 6679,
"name": "Goblin Rush",
"icon": 405,
"classjob": -1
},
{
"id": 6680,
"name": "Divine Judgment",
"icon": 405,
"classjob": -1
},
{
"id": 6681,
"name": "Eternal Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 6682,
"name": "Heavy Swing",
"icon": 405,
"classjob": -1
},
{
"id": 6683,
"name": "Overpower",
"icon": 405,
"classjob": -1
},
{
"id": 6684,
"name": "Unlit Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 6685,
"name": "Unlit Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 6686,
"name": "Skydrive",
"icon": 405,
"classjob": -1
},
{
"id": 6687,
"name": "Skydrive",
"icon": 405,
"classjob": -1
},
{
"id": 6688,
"name": "Unlit Chain",
"icon": 405,
"classjob": -1
},
{
"id": 6689,
"name": "Utter Destruction",
"icon": 405,
"classjob": -1
},
{
"id": 6690,
"name": "Utter Destruction",
"icon": 405,
"classjob": -1
},
{
"id": 6691,
"name": "Rolling Blade",
"icon": 405,
"classjob": -1
},
{
"id": 6692,
"name": "Rolling Blade",
"icon": 405,
"classjob": -1
},
{
"id": 6693,
"name": "Cover",
"icon": 405,
"classjob": -1
},
{
"id": 6699,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 6700,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 6701,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 6702,
"name": "Right Arm Reassembly",
"icon": 405,
"classjob": -1
},
{
"id": 6703,
"name": "Left Arm Reassembly",
"icon": 405,
"classjob": -1
},
{
"id": 6704,
"name": "Heat Shielding Reassembly",
"icon": 405,
"classjob": -1
},
{
"id": 6705,
"name": "Snapcannon",
"icon": 405,
"classjob": -1
},
{
"id": 6706,
"name": "Boomcannon",
"icon": 405,
"classjob": -1
},
{
"id": 6707,
"name": "Cermet Drill",
"icon": 405,
"classjob": -1
},
{
"id": 6708,
"name": "Needle Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6709,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 6710,
"name": "Energy Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 6711,
"name": "Scorched Earth",
"icon": 405,
"classjob": -1
},
{
"id": 6712,
"name": "Stockpile",
"icon": 405,
"classjob": -1
},
{
"id": 6713,
"name": "Scrap",
"icon": 405,
"classjob": -1
},
{
"id": 6714,
"name": "Scrap Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6715,
"name": "Scrap Storm",
"icon": 405,
"classjob": -1
},
{
"id": 6716,
"name": "Scrapline",
"icon": 405,
"classjob": -1
},
{
"id": 6717,
"name": "Double Scrapline",
"icon": 405,
"classjob": -1
},
{
"id": 6718,
"name": "Scrap Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 6719,
"name": "Scrap Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 6720,
"name": "Boomcannon",
"icon": 405,
"classjob": -1
},
{
"id": 6721,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 6722,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 6723,
"name": "Beam Saber",
"icon": 405,
"classjob": -1
},
{
"id": 6724,
"name": "Beam Saber",
"icon": 405,
"classjob": -1
},
{
"id": 6725,
"name": "Beam Saber",
"icon": 405,
"classjob": -1
},
{
"id": 6726,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6727,
"name": "Plummet",
"icon": 405,
"classjob": -1
},
{
"id": 6728,
"name": "Blastoff",
"icon": 405,
"classjob": -1
},
{
"id": 6729,
"name": "Transform",
"icon": 405,
"classjob": -1
},
{
"id": 6731,
"name": "Pumpkin",
"icon": 405,
"classjob": -1
},
{
"id": 6733,
"name": "Blassty Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 6734,
"name": "Transform",
"icon": 405,
"classjob": -1
},
{
"id": 6735,
"name": "Perfect Landing",
"icon": 405,
"classjob": -1
},
{
"id": 6736,
"name": "Optical Sight",
"icon": 405,
"classjob": -1
},
{
"id": 6737,
"name": "Optical Sight",
"icon": 405,
"classjob": -1
},
{
"id": 6738,
"name": "Optical Sight",
"icon": 405,
"classjob": -1
},
{
"id": 6739,
"name": "Hawk Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 6740,
"name": "Super Hawk Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 6741,
"name": "Hawk Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 6742,
"name": "Photon",
"icon": 405,
"classjob": -1
},
{
"id": 6743,
"name": "Photon",
"icon": 405,
"classjob": -1
},
{
"id": 6744,
"name": "Propeller Wind",
"icon": 405,
"classjob": -1
},
{
"id": 6745,
"name": "GA-100",
"icon": 405,
"classjob": -1
},
{
"id": 6748,
"name": "Assault Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 6749,
"name": "Right Laser Sword",
"icon": 405,
"classjob": -1
},
{
"id": 6750,
"name": "Left Laser Sword",
"icon": 405,
"classjob": -1
},
{
"id": 6751,
"name": "Blassty Charge",
"icon": 405,
"classjob": -1
},
{
"id": 6752,
"name": "Spin Crusher",
"icon": 405,
"classjob": -1
},
{
"id": 6753,
"name": "Beam Saber",
"icon": 405,
"classjob": -1
},
{
"id": 6754,
"name": "Beam Saber",
"icon": 405,
"classjob": -1
},
{
"id": 6755,
"name": "Beam Saber",
"icon": 405,
"classjob": -1
},
{
"id": 6756,
"name": "Overboost",
"icon": 405,
"classjob": -1
},
{
"id": 6757,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6758,
"name": "Blastoff",
"icon": 405,
"classjob": -1
},
{
"id": 6759,
"name": "GA-100",
"icon": 405,
"classjob": -1
},
{
"id": 6760,
"name": "GA-100",
"icon": 405,
"classjob": -1
},
{
"id": 6761,
"name": "Blassty Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 6763,
"name": "Perfect Landing",
"icon": 405,
"classjob": -1
},
{
"id": 6764,
"name": "Optical Sight",
"icon": 405,
"classjob": -1
},
{
"id": 6765,
"name": "Optical Sight",
"icon": 405,
"classjob": -1
},
{
"id": 6766,
"name": "Optical Sight",
"icon": 405,
"classjob": -1
},
{
"id": 6767,
"name": "Hawk Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 6768,
"name": "Hawk Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 6769,
"name": "Super Hawk Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 6770,
"name": "Hawk Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 6771,
"name": "Photon",
"icon": 405,
"classjob": -1
},
{
"id": 6772,
"name": "Photon",
"icon": 405,
"classjob": -1
},
{
"id": 6773,
"name": "Propeller Wind",
"icon": 405,
"classjob": -1
},
{
"id": 6774,
"name": "GA-100",
"icon": 405,
"classjob": -1
},
{
"id": 6775,
"name": "GA-100",
"icon": 405,
"classjob": -1
},
{
"id": 6776,
"name": "Assault Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 6777,
"name": "Right Laser Sword",
"icon": 405,
"classjob": -1
},
{
"id": 6778,
"name": "Left Laser Sword",
"icon": 405,
"classjob": -1
},
{
"id": 6780,
"name": "Aetheroplasm",
"icon": 405,
"classjob": -1
},
{
"id": 6781,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6782,
"name": "Electromagnetic Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6783,
"name": "Laser X Sword",
"icon": 405,
"classjob": -1
},
{
"id": 6784,
"name": "Limit Cut",
"icon": 405,
"classjob": -1
},
{
"id": 6785,
"name": "Alpha Sword",
"icon": 405,
"classjob": -1
},
{
"id": 6786,
"name": "Super Blassty Charge",
"icon": 405,
"classjob": -1
},
{
"id": 6787,
"name": "Blassty Charge",
"icon": 405,
"classjob": -1
},
{
"id": 6788,
"name": "Whirlwind",
"icon": 405,
"classjob": -1
},
{
"id": 6789,
"name": "Spin Crusher",
"icon": 405,
"classjob": -1
},
{
"id": 6790,
"name": "Quasar",
"icon": 405,
"classjob": -1
},
{
"id": 6791,
"name": "Quasar",
"icon": 405,
"classjob": -1
},
{
"id": 6792,
"name": "Quasar",
"icon": 405,
"classjob": -1
},
{
"id": 6793,
"name": "Aetheric Sever",
"icon": 405,
"classjob": -1
},
{
"id": 6794,
"name": "Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 6795,
"name": "Impact",
"icon": 405,
"classjob": -1
},
{
"id": 6796,
"name": "Impact",
"icon": 405,
"classjob": -1
},
{
"id": 6797,
"name": "Frostbite",
"icon": 405,
"classjob": -1
},
{
"id": 6798,
"name": "Frostbite",
"icon": 405,
"classjob": -1
},
{
"id": 6799,
"name": "Gobspin Zoomdrops",
"icon": 405,
"classjob": -1
},
{
"id": 6800,
"name": "Gobspin Unstops",
"icon": 405,
"classjob": -1
},
{
"id": 6801,
"name": "Gobspin Zoomdrops",
"icon": 405,
"classjob": -1
},
{
"id": 6802,
"name": "Gobslice Mooncrops",
"icon": 405,
"classjob": -1
},
{
"id": 6803,
"name": "Gobslice Mooncrops",
"icon": 405,
"classjob": -1
},
{
"id": 6804,
"name": "Laceration",
"icon": 405,
"classjob": -1
},
{
"id": 6805,
"name": "Steam Roller",
"icon": 405,
"classjob": -1
},
{
"id": 6806,
"name": "Steam Roller",
"icon": 405,
"classjob": -1
},
{
"id": 6807,
"name": "Single Charge",
"icon": 405,
"classjob": -1
},
{
"id": 6808,
"name": "Double Charge",
"icon": 405,
"classjob": -1
},
{
"id": 6809,
"name": "Triple Charge",
"icon": 405,
"classjob": -1
},
{
"id": 6810,
"name": "Gobswipe Conklops",
"icon": 405,
"classjob": -1
},
{
"id": 6811,
"name": "Gobspin Whooshdrops",
"icon": 405,
"classjob": -1
},
{
"id": 6812,
"name": "Critical Wrath",
"icon": 405,
"classjob": -1
},
{
"id": 6813,
"name": "Critical Wrath",
"icon": 405,
"classjob": -1
},
{
"id": 6814,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 6815,
"name": "Gobrush Rushgob",
"icon": 405,
"classjob": -1
},
{
"id": 6816,
"name": "Gobsway Rumblerocks",
"icon": 405,
"classjob": -1
},
{
"id": 6817,
"name": "Gobslash Slicetops",
"icon": 405,
"classjob": -1
},
{
"id": 6819,
"name": "Gobswish Spraymops",
"icon": 405,
"classjob": -1
},
{
"id": 6820,
"name": "Gobsnick Leghops",
"icon": 405,
"classjob": -1
},
{
"id": 6821,
"name": "Gobsnick Leghops",
"icon": 405,
"classjob": -1
},
{
"id": 6822,
"name": "Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 6823,
"name": "Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 6824,
"name": "Illuminati Hand Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 6825,
"name": "Brighteyes",
"icon": 405,
"classjob": -1
},
{
"id": 6826,
"name": "Brighteyes",
"icon": 405,
"classjob": -1
},
{
"id": 6827,
"name": "Gobbieboom",
"icon": 405,
"classjob": -1
},
{
"id": 6828,
"name": "Gobskin",
"icon": 405,
"classjob": -1
},
{
"id": 6829,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6830,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6832,
"name": "Trap",
"icon": 405,
"classjob": -1
},
{
"id": 6833,
"name": "Trap",
"icon": 405,
"classjob": -1
},
{
"id": 6834,
"name": "Trap",
"icon": 405,
"classjob": -1
},
{
"id": 6835,
"name": "Steam Roller",
"icon": 405,
"classjob": -1
},
{
"id": 6836,
"name": "Steam Roller",
"icon": 405,
"classjob": -1
},
{
"id": 6844,
"name": "Benediction",
"icon": 405,
"classjob": -1
},
{
"id": 6845,
"name": "Aetherochemical Flare",
"icon": 405,
"classjob": -1
},
{
"id": 6848,
"name": "Supernova",
"icon": 405,
"classjob": -1
},
{
"id": 6849,
"name": "Diffractive Laser",
"icon": 405,
"classjob": -1
},
{
"id": 6850,
"name": "Flamethrower",
"icon": 405,
"classjob": -1
},
{
"id": 6851,
"name": "Flamethrower",
"icon": 405,
"classjob": -1
},
{
"id": 6852,
"name": "Falling Rock",
"icon": 405,
"classjob": -1
},
{
"id": 6853,
"name": "Gobsway Rumblerocks",
"icon": 405,
"classjob": -1
},
{
"id": 6854,
"name": "Impact",
"icon": 405,
"classjob": -1
},
{
"id": 6855,
"name": "Frostbite",
"icon": 405,
"classjob": -1
},
{
"id": 6856,
"name": "Laceration",
"icon": 405,
"classjob": -1
},
{
"id": 6857,
"name": "Steam Roller",
"icon": 405,
"classjob": -1
},
{
"id": 6858,
"name": "Steam Roller",
"icon": 405,
"classjob": -1
},
{
"id": 6859,
"name": "Gobswipe Conklops",
"icon": 405,
"classjob": -1
},
{
"id": 6860,
"name": "Gobspin Whooshdrops",
"icon": 405,
"classjob": -1
},
{
"id": 6861,
"name": "Critical Wrath",
"icon": 405,
"classjob": -1
},
{
"id": 6862,
"name": "Bomb Toss",
"icon": 405,
"classjob": -1
},
{
"id": 6863,
"name": "Gobrush Rushgob",
"icon": 405,
"classjob": -1
},
{
"id": 6864,
"name": "Gobsway Rumblerocks",
"icon": 405,
"classjob": -1
},
{
"id": 6865,
"name": "Gobslash Slicetops",
"icon": 405,
"classjob": -1
},
{
"id": 6866,
"name": "Illuminati Hand Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 6867,
"name": "Gobbieboom",
"icon": 405,
"classjob": -1
},
{
"id": 6868,
"name": "Pomander Of Raising",
"icon": 405,
"classjob": 0
},
{
"id": 6869,
"name": "Pomander Of Resolution",
"icon": 405,
"classjob": 0
},
{
"id": 6870,
"name": "Pomander Of Intuition",
"icon": 405,
"classjob": 0
},
{
"id": 6871,
"name": "Heavenly Judge",
"icon": 61141,
"classjob": 0
},
{
"id": 6872,
"name": "Abyss",
"icon": 405,
"classjob": -1
},
{
"id": 6873,
"name": "Word Of Pain",
"icon": 405,
"classjob": -1
},
{
"id": 6874,
"name": "Shackle",
"icon": 405,
"classjob": -1
},
{
"id": 6875,
"name": "Doom",
"icon": 405,
"classjob": -1
},
{
"id": 6876,
"name": "Summon Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 6877,
"name": "Glass Punch",
"icon": 405,
"classjob": -1
},
{
"id": 6878,
"name": "Catapult",
"icon": 405,
"classjob": -1
},
{
"id": 6879,
"name": "Butterfly Float",
"icon": 405,
"classjob": -1
},
{
"id": 6880,
"name": "Cintamani",
"icon": 405,
"classjob": -1
},
{
"id": 6881,
"name": "The Scales Of Wisdom",
"icon": 405,
"classjob": -1
},
{
"id": 6883,
"name": "Divine Spear",
"icon": 405,
"classjob": -1
},
{
"id": 6884,
"name": "Punishing Heat",
"icon": 405,
"classjob": -1
},
{
"id": 6885,
"name": "Sacrament",
"icon": 405,
"classjob": -1
},
{
"id": 6886,
"name": "Sacrament",
"icon": 405,
"classjob": -1
},
{
"id": 6887,
"name": "Mega Holy",
"icon": 405,
"classjob": -1
},
{
"id": 6888,
"name": "Blazing Scourge",
"icon": 405,
"classjob": -1
},
{
"id": 6889,
"name": "Blazing Scourge",
"icon": 405,
"classjob": -1
},
{
"id": 6890,
"name": "Gravitational Anomaly",
"icon": 405,
"classjob": -1
},
{
"id": 6891,
"name": "Gravitational Anomaly",
"icon": 405,
"classjob": -1
},
{
"id": 6892,
"name": "Smash",
"icon": 405,
"classjob": -1
},
{
"id": 6893,
"name": "Almost Holy",
"icon": 405,
"classjob": -1
},
{
"id": 6894,
"name": "Will Of The Creator",
"icon": 405,
"classjob": -1
},
{
"id": 6895,
"name": "Divine Judgment",
"icon": 405,
"classjob": -1
},
{
"id": 6896,
"name": "Temporal Stasis",
"icon": 405,
"classjob": -1
},
{
"id": 6897,
"name": "Plaint Of Severity",
"icon": 405,
"classjob": -1
},
{
"id": 6898,
"name": "Plaint Of Solidarity",
"icon": 405,
"classjob": -1
},
{
"id": 6899,
"name": "Incinerating Heat",
"icon": 405,
"classjob": -1
},
{
"id": 6900,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 6902,
"name": "Seedvolley",
"icon": 405,
"classjob": -1
},
{
"id": 6903,
"name": "Swift Sough",
"icon": 405,
"classjob": -1
},
{
"id": 6904,
"name": "Glass Punch",
"icon": 405,
"classjob": -1
},
{
"id": 6905,
"name": "Butterfly Float",
"icon": 405,
"classjob": -1
},
{
"id": 6906,
"name": "Devour",
"icon": 405,
"classjob": -1
},
{
"id": 6908,
"name": "Communion",
"icon": 405,
"classjob": -1
},
{
"id": 6911,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 6912,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 6913,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 6914,
"name": "Right Arm Reassembly",
"icon": 405,
"classjob": -1
},
{
"id": 6915,
"name": "Left Arm Reassembly",
"icon": 405,
"classjob": -1
},
{
"id": 6916,
"name": "Heat Shielding Reassembly",
"icon": 405,
"classjob": -1
},
{
"id": 6917,
"name": "Snapcannon",
"icon": 405,
"classjob": -1
},
{
"id": 6918,
"name": "Boomcannon",
"icon": 405,
"classjob": -1
},
{
"id": 6919,
"name": "Cermet Drill",
"icon": 405,
"classjob": -1
},
{
"id": 6920,
"name": "Needle Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6921,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 6922,
"name": "Energy Discharge",
"icon": 405,
"classjob": -1
},
{
"id": 6923,
"name": "Scorched Earth",
"icon": 405,
"classjob": -1
},
{
"id": 6924,
"name": "Stockpile",
"icon": 405,
"classjob": -1
},
{
"id": 6925,
"name": "Scrap",
"icon": 405,
"classjob": -1
},
{
"id": 6926,
"name": "Scrap Burst",
"icon": 405,
"classjob": -1
},
{
"id": 6927,
"name": "Scrap Storm",
"icon": 405,
"classjob": -1
},
{
"id": 6928,
"name": "Scrapline",
"icon": 405,
"classjob": -1
},
{
"id": 6929,
"name": "Double Scrapline",
"icon": 405,
"classjob": -1
},
{
"id": 6930,
"name": "Scrap Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 6931,
"name": "Scrap Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 6932,
"name": "Boomcannon",
"icon": 405,
"classjob": -1
},
{
"id": 6933,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 6934,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 6935,
"name": "Citadel Buster",
"icon": 405,
"classjob": -1
},
{
"id": 6937,
"name": "Compression Beam",
"icon": 405,
"classjob": -1
},
{
"id": 6938,
"name": "Eikonizer",
"icon": 405,
"classjob": -1
},
{
"id": 6939,
"name": "Hypnotize",
"icon": 405,
"classjob": -1
},
{
"id": 6940,
"name": "Optical Intrusion",
"icon": 405,
"classjob": -1
},
{
"id": 6941,
"name": "Bad-mouth",
"icon": 405,
"classjob": -1
},
{
"id": 6942,
"name": "Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 6943,
"name": "Ice Spikes",
"icon": 405,
"classjob": -1
},
{
"id": 6944,
"name": "Spellsword",
"icon": 405,
"classjob": -1
},
{
"id": 6945,
"name": "Mind Blast",
"icon": 405,
"classjob": -1
},
{
"id": 6946,
"name": "Canker",
"icon": 405,
"classjob": -1
},
{
"id": 6947,
"name": "Frightful Roar",
"icon": 405,
"classjob": -1
},
{
"id": 6948,
"name": "Abyssal Swing",
"icon": 405,
"classjob": -1
},
{
"id": 6949,
"name": "Abyssal Transfixion",
"icon": 405,
"classjob": -1
},
{
"id": 6950,
"name": "Terror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 6951,
"name": "Carpomission",
"icon": 405,
"classjob": -1
},
{
"id": 6952,
"name": "Neck Splinter",
"icon": 405,
"classjob": -1
},
{
"id": 6953,
"name": "Mysterious Light",
"icon": 405,
"classjob": -1
},
{
"id": 6954,
"name": "Foul Breath",
"icon": 405,
"classjob": -1
},
{
"id": 6955,
"name": "Underbite",
"icon": 405,
"classjob": -1
},
{
"id": 6956,
"name": "Primordial Bark",
"icon": 405,
"classjob": -1
},
{
"id": 6957,
"name": "Foregone Gleam",
"icon": 405,
"classjob": -1
},
{
"id": 6958,
"name": "Batterhorn",
"icon": 405,
"classjob": -1
},
{
"id": 6959,
"name": "Caudal Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 6960,
"name": "Flatten",
"icon": 405,
"classjob": -1
},
{
"id": 6961,
"name": "Slowball",
"icon": 405,
"classjob": -1
},
{
"id": 6962,
"name": "Acid Shower",
"icon": 405,
"classjob": -1
},
{
"id": 6963,
"name": "Critical Bite",
"icon": 405,
"classjob": -1
},
{
"id": 6964,
"name": "Third Leg Forward",
"icon": 405,
"classjob": -1
},
{
"id": 6965,
"name": "Third Leg Back",
"icon": 405,
"classjob": -1
},
{
"id": 6966,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 6967,
"name": "Catching Claws",
"icon": 405,
"classjob": -1
},
{
"id": 6968,
"name": "Seismic Rift",
"icon": 405,
"classjob": -1
},
{
"id": 6969,
"name": "Filoplumes",
"icon": 405,
"classjob": -1
},
{
"id": 6970,
"name": "Revelation",
"icon": 405,
"classjob": -1
},
{
"id": 6971,
"name": "100-tonze Swing",
"icon": 405,
"classjob": -1
},
{
"id": 6972,
"name": "Eye Of The Beholder",
"icon": 405,
"classjob": -1
},
{
"id": 6973,
"name": "Ripe Banana",
"icon": 405,
"classjob": -1
},
{
"id": 6974,
"name": "Stool Pelt",
"icon": 405,
"classjob": -1
},
{
"id": 6975,
"name": "Savage Swipe",
"icon": 405,
"classjob": -1
},
{
"id": 6976,
"name": "Megablaster",
"icon": 405,
"classjob": -1
},
{
"id": 6977,
"name": "Whiplash",
"icon": 405,
"classjob": -1
},
{
"id": 6978,
"name": "Whistle",
"icon": 405,
"classjob": -1
},
{
"id": 6979,
"name": "Pounce",
"icon": 405,
"classjob": -1
},
{
"id": 6980,
"name": "Cry",
"icon": 405,
"classjob": -1
},
{
"id": 6981,
"name": "Sonic Boom",
"icon": 405,
"classjob": -1
},
{
"id": 6982,
"name": "Flying Frenzy",
"icon": 405,
"classjob": -1
},
{
"id": 6983,
"name": "Sanguine Bite",
"icon": 405,
"classjob": -1
},
{
"id": 6984,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 6985,
"name": "Cannonball",
"icon": 405,
"classjob": -1
},
{
"id": 6986,
"name": "Granite Rain",
"icon": 405,
"classjob": -1
},
{
"id": 6987,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 6988,
"name": "Sand Breath",
"icon": 405,
"classjob": -1
},
{
"id": 6989,
"name": "Sand Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 6990,
"name": "Impale",
"icon": 405,
"classjob": -1
},
{
"id": 6991,
"name": "Inspire",
"icon": 405,
"classjob": -1
},
{
"id": 6992,
"name": "Incinerate",
"icon": 405,
"classjob": -1
},
{
"id": 6993,
"name": "Flash Evaporation",
"icon": 405,
"classjob": -1
},
{
"id": 6994,
"name": "Straight Punch",
"icon": 405,
"classjob": -1
},
{
"id": 6995,
"name": "Elbow Drop",
"icon": 405,
"classjob": -1
},
{
"id": 6996,
"name": "Poison Dust",
"icon": 405,
"classjob": -1
},
{
"id": 6997,
"name": "The Lion's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 6998,
"name": "The Ram's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 6999,
"name": "The Dragon's Breath",
"icon": 405,
"classjob": -1
},
{
"id": 7000,
"name": "Scamper",
"icon": 405,
"classjob": -1
},
{
"id": 7001,
"name": "Big Horn",
"icon": 405,
"classjob": -1
},
{
"id": 7002,
"name": "Scratch Fever",
"icon": 405,
"classjob": -1
},
{
"id": 7003,
"name": "Yowl",
"icon": 405,
"classjob": -1
},
{
"id": 7004,
"name": "Final Sting",
"icon": 405,
"classjob": -1
},
{
"id": 7005,
"name": "Corrosive Spit",
"icon": 405,
"classjob": -1
},
{
"id": 7006,
"name": "Numbing Breath",
"icon": 405,
"classjob": -1
},
{
"id": 7007,
"name": "Goblin Rush",
"icon": 405,
"classjob": -1
},
{
"id": 7008,
"name": "Rhino Guard",
"icon": 405,
"classjob": -1
},
{
"id": 7009,
"name": "Drowning Mist",
"icon": 405,
"classjob": -1
},
{
"id": 7010,
"name": "Palsynyxis",
"icon": 405,
"classjob": -1
},
{
"id": 7011,
"name": "Sticky Tongue",
"icon": 405,
"classjob": -1
},
{
"id": 7012,
"name": "Rupture",
"icon": 405,
"classjob": -1
},
{
"id": 7013,
"name": "Acid Spray",
"icon": 405,
"classjob": -1
},
{
"id": 7014,
"name": "Mucin",
"icon": 405,
"classjob": -1
},
{
"id": 7015,
"name": "Gold Dust",
"icon": 405,
"classjob": -1
},
{
"id": 7016,
"name": "Bad Breath",
"icon": 405,
"classjob": -1
},
{
"id": 7017,
"name": "Sweet Breath",
"icon": 405,
"classjob": -1
},
{
"id": 7018,
"name": "Amorphic Flail",
"icon": 405,
"classjob": -1
},
{
"id": 7019,
"name": "Regorge",
"icon": 405,
"classjob": -1
},
{
"id": 7020,
"name": "Stoneskin",
"icon": 405,
"classjob": -1
},
{
"id": 7021,
"name": "Tail Chase",
"icon": 405,
"classjob": -1
},
{
"id": 7022,
"name": "Levinfang",
"icon": 405,
"classjob": -1
},
{
"id": 7023,
"name": "Electrify",
"icon": 405,
"classjob": -1
},
{
"id": 7024,
"name": "Harden Shell",
"icon": 405,
"classjob": -1
},
{
"id": 7025,
"name": "Body Slam",
"icon": 405,
"classjob": -1
},
{
"id": 7026,
"name": "Brow Horn",
"icon": 405,
"classjob": -1
},
{
"id": 7027,
"name": "Fast Boulder",
"icon": 405,
"classjob": -1
},
{
"id": 7028,
"name": "Tornado",
"icon": 405,
"classjob": -1
},
{
"id": 7029,
"name": "Blade Of Suffering",
"icon": 405,
"classjob": -1
},
{
"id": 7030,
"name": "Rotting Bandages",
"icon": 405,
"classjob": -1
},
{
"id": 7031,
"name": "Level 5 Petrify",
"icon": 405,
"classjob": -1
},
{
"id": 7032,
"name": "Rotten Breath",
"icon": 405,
"classjob": -1
},
{
"id": 7033,
"name": "Flood",
"icon": 405,
"classjob": -1
},
{
"id": 7034,
"name": "Eye Of The Stunted",
"icon": 405,
"classjob": -1
},
{
"id": 7035,
"name": "Jettatura",
"icon": 405,
"classjob": -1
},
{
"id": 7036,
"name": "Inhale",
"icon": 405,
"classjob": -1
},
{
"id": 7037,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 7038,
"name": "Corrupted Tail",
"icon": 405,
"classjob": -1
},
{
"id": 7039,
"name": "Grim Fate",
"icon": 405,
"classjob": -1
},
{
"id": 7040,
"name": "Skullsplinter",
"icon": 405,
"classjob": -1
},
{
"id": 7041,
"name": "Void Fire IV",
"icon": 405,
"classjob": -1
},
{
"id": 7042,
"name": "Miasma Breath",
"icon": 405,
"classjob": -1
},
{
"id": 7043,
"name": "Evil Eye",
"icon": 405,
"classjob": -1
},
{
"id": 7044,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 7045,
"name": "Bloodboil",
"icon": 405,
"classjob": -1
},
{
"id": 7046,
"name": "Crushing Fangs",
"icon": 405,
"classjob": -1
},
{
"id": 7047,
"name": "Slowball",
"icon": 405,
"classjob": -1
},
{
"id": 7048,
"name": "Snow Flurry",
"icon": 405,
"classjob": -1
},
{
"id": 7049,
"name": "Void Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 7050,
"name": "Death's Door",
"icon": 405,
"classjob": -1
},
{
"id": 7051,
"name": "Ice Dispenser",
"icon": 405,
"classjob": -1
},
{
"id": 7052,
"name": "Drain Touch",
"icon": 405,
"classjob": -1
},
{
"id": 7053,
"name": "Abyssal Transfixion",
"icon": 405,
"classjob": -1
},
{
"id": 7054,
"name": "Triumphant Roar",
"icon": 405,
"classjob": -1
},
{
"id": 7055,
"name": "Isle Drop",
"icon": 405,
"classjob": -1
},
{
"id": 7056,
"name": "Double Ray",
"icon": 405,
"classjob": -1
},
{
"id": 7057,
"name": "Chilling Cyclone",
"icon": 405,
"classjob": -1
},
{
"id": 7058,
"name": "Horrisonous Blast",
"icon": 405,
"classjob": -1
},
{
"id": 7059,
"name": "Khoomii",
"icon": 405,
"classjob": -1
},
{
"id": 7060,
"name": "Tropical Wind",
"icon": 405,
"classjob": -1
},
{
"id": 7061,
"name": "Glower",
"icon": 405,
"classjob": -1
},
{
"id": 7062,
"name": "Browbeat",
"icon": 405,
"classjob": -1
},
{
"id": 7063,
"name": "Chest Thump",
"icon": 405,
"classjob": -1
},
{
"id": 7064,
"name": "Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 7065,
"name": "Mark Of The Beast",
"icon": 405,
"classjob": -1
},
{
"id": 7066,
"name": "Sanguine Bite",
"icon": 405,
"classjob": -1
},
{
"id": 7067,
"name": "Hypothermal Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 7068,
"name": "Sheet Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 7069,
"name": "Tremblor",
"icon": 405,
"classjob": -1
},
{
"id": 7070,
"name": "Bottomless Desert",
"icon": 405,
"classjob": -1
},
{
"id": 7071,
"name": "Sand Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 7072,
"name": "Tail Screw",
"icon": 405,
"classjob": -1
},
{
"id": 7073,
"name": "Sticky Thread",
"icon": 405,
"classjob": -1
},
{
"id": 7074,
"name": "Poison Breath",
"icon": 405,
"classjob": -1
},
{
"id": 7075,
"name": "Freezeover",
"icon": 405,
"classjob": -1
},
{
"id": 7076,
"name": "Plain Pound",
"icon": 405,
"classjob": -1
},
{
"id": 7077,
"name": "Exuviation",
"icon": 405,
"classjob": -1
},
{
"id": 7078,
"name": "The Ram's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 7079,
"name": "The Dragon's Voice",
"icon": 405,
"classjob": -1
},
{
"id": 7080,
"name": "Catapult",
"icon": 405,
"classjob": -1
},
{
"id": 7081,
"name": "Lifeless Wail",
"icon": 405,
"classjob": -1
},
{
"id": 7082,
"name": "Death Spiral",
"icon": 405,
"classjob": -1
},
{
"id": 7083,
"name": "Sleetvolley",
"icon": 405,
"classjob": -1
},
{
"id": 7084,
"name": "Level 5 Death",
"icon": 405,
"classjob": -1
},
{
"id": 7085,
"name": "Beak Snap",
"icon": 405,
"classjob": -1
},
{
"id": 7086,
"name": "Accursed Pox",
"icon": 405,
"classjob": -1
},
{
"id": 7087,
"name": "Geirrothr",
"icon": 405,
"classjob": -1
},
{
"id": 7088,
"name": "Hall Of Sorrow",
"icon": 405,
"classjob": -1
},
{
"id": 7089,
"name": "Valfodr",
"icon": 405,
"classjob": -1
},
{
"id": 7090,
"name": "Infatuation",
"icon": 405,
"classjob": -1
},
{
"id": 7091,
"name": "Douse",
"icon": 405,
"classjob": -1
},
{
"id": 7092,
"name": "Fang's End",
"icon": 405,
"classjob": -1
},
{
"id": 7093,
"name": "Drench",
"icon": 405,
"classjob": -1
},
{
"id": 7094,
"name": "Electrogenesis",
"icon": 405,
"classjob": -1
},
{
"id": 7095,
"name": "Thunderbolt",
"icon": 405,
"classjob": -1
},
{
"id": 7096,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 7097,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 7098,
"name": "Trounce",
"icon": 405,
"classjob": -1
},
{
"id": 7099,
"name": "Ecliptic Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 7100,
"name": "Scalding Scolding",
"icon": 405,
"classjob": -1
},
{
"id": 7101,
"name": "Sap",
"icon": 405,
"classjob": -1
},
{
"id": 7102,
"name": "Massive Burst",
"icon": 405,
"classjob": -1
},
{
"id": 7103,
"name": "Massive Burst",
"icon": 405,
"classjob": -1
},
{
"id": 7104,
"name": "Hypothermal Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 7105,
"name": "Burst",
"icon": 405,
"classjob": -1
},
{
"id": 7106,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 7107,
"name": "Summon Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 7108,
"name": "Dark Mist",
"icon": 405,
"classjob": -1
},
{
"id": 7109,
"name": "Void Fire IV",
"icon": 405,
"classjob": -1
},
{
"id": 7110,
"name": "Fatal Allure",
"icon": 405,
"classjob": -1
},
{
"id": 7111,
"name": "Blood Sword",
"icon": 405,
"classjob": -1
},
{
"id": 7112,
"name": "Desolation",
"icon": 405,
"classjob": -1
},
{
"id": 7113,
"name": "Terror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 7114,
"name": "Death Throes",
"icon": 405,
"classjob": -1
},
{
"id": 7115,
"name": "Slowball",
"icon": 405,
"classjob": -1
},
{
"id": 7116,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 7117,
"name": "Dark Thorn",
"icon": 405,
"classjob": -1
},
{
"id": 7118,
"name": "Brackish Drop",
"icon": 405,
"classjob": -1
},
{
"id": 7119,
"name": "Fast Boulder",
"icon": 405,
"classjob": -1
},
{
"id": 7120,
"name": "Jettatura",
"icon": 405,
"classjob": -1
},
{
"id": 7121,
"name": "Void Fire IV",
"icon": 405,
"classjob": -1
},
{
"id": 7122,
"name": "Terror Eye",
"icon": 405,
"classjob": -1
},
{
"id": 7123,
"name": "Lightning Bolt",
"icon": 405,
"classjob": -1
},
{
"id": 7124,
"name": "Sand Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 7125,
"name": "Accursed Pox",
"icon": 405,
"classjob": -1
},
{
"id": 7126,
"name": "Gobskin",
"icon": 405,
"classjob": -1
},
{
"id": 7127,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 7128,
"name": "Whipcrack",
"icon": 405,
"classjob": -1
},
{
"id": 7129,
"name": "Stormwind",
"icon": 405,
"classjob": -1
},
{
"id": 7130,
"name": "Bombination",
"icon": 405,
"classjob": -1
},
{
"id": 7131,
"name": "Lumisphere",
"icon": 405,
"classjob": -1
},
{
"id": 7132,
"name": "Aero Blast",
"icon": 405,
"classjob": -1
},
{
"id": 7133,
"name": "Bloody Caress",
"icon": 405,
"classjob": -1
},
{
"id": 7134,
"name": "Acid Mist",
"icon": 405,
"classjob": -1
},
{
"id": 7135,
"name": "Gold Dust",
"icon": 405,
"classjob": -1
},
{
"id": 7136,
"name": "Leafstorm",
"icon": 405,
"classjob": -1
},
{
"id": 7137,
"name": "Rotten Stench",
"icon": 405,
"classjob": -1
},
{
"id": 7138,
"name": "Dissever",
"icon": 405,
"classjob": -1
},
{
"id": 7139,
"name": "Ball Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 7140,
"name": "Ball Of Ice",
"icon": 405,
"classjob": -1
},
{
"id": 7141,
"name": "Fear Itself",
"icon": 405,
"classjob": -1
},
{
"id": 7142,
"name": "Ancient Eruption",
"icon": 405,
"classjob": -1
},
{
"id": 7143,
"name": "Entropic Flame",
"icon": 405,
"classjob": -1
},
{
"id": 7144,
"name": "Shadow Flare",
"icon": 405,
"classjob": -1
},
{
"id": 7145,
"name": "Scream",
"icon": 405,
"classjob": -1
},
{
"id": 7146,
"name": "Accursed Pox",
"icon": 405,
"classjob": -1
},
{
"id": 7147,
"name": "Tornado",
"icon": 405,
"classjob": -1
},
{
"id": 7148,
"name": "Sweet Steel",
"icon": 405,
"classjob": -1
},
{
"id": 7149,
"name": "Dark Mist",
"icon": 405,
"classjob": -1
},
{
"id": 7150,
"name": "Void Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 7153,
"name": "Blood Rain",
"icon": 405,
"classjob": -1
},
{
"id": 7154,
"name": "Geirrothr",
"icon": 405,
"classjob": -1
},
{
"id": 7155,
"name": "Hall Of Sorrow",
"icon": 405,
"classjob": -1
},
{
"id": 7156,
"name": "Valfodr",
"icon": 405,
"classjob": -1
},
{
"id": 7157,
"name": "Infatuation",
"icon": 405,
"classjob": -1
},
{
"id": 7158,
"name": "Douse",
"icon": 405,
"classjob": -1
},
{
"id": 7159,
"name": "Fang's End",
"icon": 405,
"classjob": -1
},
{
"id": 7160,
"name": "Drench",
"icon": 405,
"classjob": -1
},
{
"id": 7161,
"name": "Electrogenesis",
"icon": 405,
"classjob": -1
},
{
"id": 7162,
"name": "Thunderbolt",
"icon": 405,
"classjob": -1
},
{
"id": 7163,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 7164,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 7165,
"name": "Trounce",
"icon": 405,
"classjob": -1
},
{
"id": 7166,
"name": "Ecliptic Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 7167,
"name": "Charybdis",
"icon": 405,
"classjob": -1
},
{
"id": 7168,
"name": "Scalding Scolding",
"icon": 405,
"classjob": -1
},
{
"id": 7169,
"name": "Sap",
"icon": 405,
"classjob": -1
},
{
"id": 7170,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 7171,
"name": "Hypothermal Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 7172,
"name": "Hypothermal Combustion",
"icon": 405,
"classjob": -1
},
{
"id": 7173,
"name": "Panzer Vor",
"icon": 405,
"classjob": -1
},
{
"id": 7174,
"name": "Kaltstrahl",
"icon": 405,
"classjob": -1
},
{
"id": 7175,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 7176,
"name": "Panzerschreck",
"icon": 405,
"classjob": -1
},
{
"id": 7177,
"name": "Aero",
"icon": 405,
"classjob": -1
},
{
"id": 7178,
"name": "Acid Rain",
"icon": 405,
"classjob": -1
},
{
"id": 7179,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 7180,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 7181,
"name": "Camisado",
"icon": 405,
"classjob": -1
},
{
"id": 7182,
"name": "Nightmare",
"icon": 405,
"classjob": -1
},
{
"id": 7183,
"name": "Noctoshield",
"icon": 405,
"classjob": -1
},
{
"id": 7184,
"name": "Ruinous Omen",
"icon": 405,
"classjob": -1
},
{
"id": 7185,
"name": "Ruinous Omen",
"icon": 405,
"classjob": -1
},
{
"id": 7186,
"name": "Ultimate Terror",
"icon": 405,
"classjob": -1
},
{
"id": 7187,
"name": "Night Terror",
"icon": 405,
"classjob": -1
},
{
"id": 7188,
"name": "Void Call",
"icon": 405,
"classjob": -1
},
{
"id": 7189,
"name": "Deep Flow",
"icon": 405,
"classjob": -1
},
{
"id": 7191,
"name": "Ruinous Omen",
"icon": 405,
"classjob": -1
},
{
"id": 7193,
"name": "Hollow Camisado",
"icon": 405,
"classjob": -1
},
{
"id": 7194,
"name": "Shadethrust",
"icon": 405,
"classjob": -1
},
{
"id": 7195,
"name": "Nox",
"icon": 405,
"classjob": -1
},
{
"id": 7196,
"name": "Nox",
"icon": 405,
"classjob": -1
},
{
"id": 7197,
"name": "Hollow Night",
"icon": 405,
"classjob": -1
},
{
"id": 7198,
"name": "Hollowshield",
"icon": 405,
"classjob": -1
},
{
"id": 7199,
"name": "Pavor Inanis",
"icon": 405,
"classjob": -1
},
{
"id": 7200,
"name": "Hollow Nightmare",
"icon": 405,
"classjob": -1
},
{
"id": 7201,
"name": "Hollow Terror",
"icon": 405,
"classjob": -1
},
{
"id": 7202,
"name": "Hollow Omen",
"icon": 405,
"classjob": -1
},
{
"id": 7203,
"name": "Hollow Omen",
"icon": 405,
"classjob": -1
},
{
"id": 7204,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 7205,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 7206,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 7207,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 7208,
"name": "Blindside",
"icon": 405,
"classjob": -1
},
{
"id": 7209,
"name": "Earth Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 7210,
"name": "Earth Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 7211,
"name": "Double Edge",
"icon": 405,
"classjob": -1
},
{
"id": 7212,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 7213,
"name": "Wild Horn",
"icon": 405,
"classjob": -1
},
{
"id": 7214,
"name": "Excretion",
"icon": 405,
"classjob": -1
},
{
"id": 7215,
"name": "Spore Sac",
"icon": 405,
"classjob": -1
},
{
"id": 7216,
"name": "Inflammable Fumes",
"icon": 405,
"classjob": -1
},
{
"id": 7217,
"name": "Inflammable Fumes",
"icon": 405,
"classjob": -1
},
{
"id": 7218,
"name": "Glorious Blaze",
"icon": 405,
"classjob": -1
},
{
"id": 7219,
"name": "Glorious Blaze",
"icon": 405,
"classjob": -1
},
{
"id": 7220,
"name": "Volcanic Howl",
"icon": 405,
"classjob": -1
},
{
"id": 7221,
"name": "Tail Smash",
"icon": 405,
"classjob": -1
},
{
"id": 7222,
"name": "Tail Swing",
"icon": 405,
"classjob": -1
},
{
"id": 7223,
"name": "Ripper Claw",
"icon": 405,
"classjob": -1
},
{
"id": 7224,
"name": "Wind Slash",
"icon": 405,
"classjob": -1
},
{
"id": 7225,
"name": "Wild Charge",
"icon": 405,
"classjob": -1
},
{
"id": 7226,
"name": "Hot Charge",
"icon": 405,
"classjob": -1
},
{
"id": 7227,
"name": "Fireball",
"icon": 405,
"classjob": -1
},
{
"id": 7228,
"name": "Lava Flow",
"icon": 405,
"classjob": -1
},
{
"id": 7229,
"name": "Lava Flow",
"icon": 405,
"classjob": -1
},
{
"id": 7230,
"name": "Flying Press",
"icon": 405,
"classjob": -1
},
{
"id": 7231,
"name": "Volcanic Activity",
"icon": 405,
"classjob": -1
},
{
"id": 7232,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 7233,
"name": "Realm Shaker",
"icon": 405,
"classjob": -1
},
{
"id": 7234,
"name": "Molten Silk",
"icon": 405,
"classjob": -1
},
{
"id": 7235,
"name": "Molten Silk",
"icon": 405,
"classjob": -1
},
{
"id": 7236,
"name": "Molten Silk",
"icon": 405,
"classjob": -1
},
{
"id": 7237,
"name": "Hiss",
"icon": 405,
"classjob": -1
},
{
"id": 7238,
"name": "Borehole",
"icon": 405,
"classjob": -1
},
{
"id": 7239,
"name": "Tremblor",
"icon": 405,
"classjob": -1
},
{
"id": 7240,
"name": "Deadly Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 7242,
"name": "Blaze",
"icon": 405,
"classjob": -1
},
{
"id": 7243,
"name": "Abacinate",
"icon": 405,
"classjob": -1
},
{
"id": 7244,
"name": "Ring Of Fire",
"icon": 405,
"classjob": -1
},
{
"id": 7245,
"name": "Lava Breath",
"icon": 405,
"classjob": -1
},
{
"id": 7246,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 7247,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 7248,
"name": "The Purge",
"icon": 405,
"classjob": -1
},
{
"id": 7249,
"name": "Sarva",
"icon": 405,
"classjob": -1
},
{
"id": 7250,
"name": "Twin Spirit",
"icon": 405,
"classjob": -1
},
{
"id": 7251,
"name": "Twin Spirit",
"icon": 405,
"classjob": -1
},
{
"id": 7252,
"name": "Flaming Halberd",
"icon": 405,
"classjob": -1
},
{
"id": 7253,
"name": "Demonic Dive",
"icon": 405,
"classjob": -1
},
{
"id": 7254,
"name": "Cool Flame",
"icon": 405,
"classjob": -1
},
{
"id": 7255,
"name": "Sarva",
"icon": 405,
"classjob": -1
},
{
"id": 7256,
"name": "Ice And Fire",
"icon": 405,
"classjob": -1
},
{
"id": 7257,
"name": "Biting Halberd",
"icon": 405,
"classjob": -1
},
{
"id": 7258,
"name": "Tail End",
"icon": 405,
"classjob": -1
},
{
"id": 7259,
"name": "Ciclicle",
"icon": 405,
"classjob": -1
},
{
"id": 7260,
"name": "Southern Cross",
"icon": 405,
"classjob": -1
},
{
"id": 7261,
"name": "Southern Cross",
"icon": 405,
"classjob": -1
},
{
"id": 7262,
"name": "鬼神：履行技スタート：演出アクション：極",
"icon": 405,
"classjob": -1
},
{
"id": 7263,
"name": "Sarva",
"icon": 405,
"classjob": -1
},
{
"id": 7264,
"name": "Ahura Mazda",
"icon": 405,
"classjob": -1
},
{
"id": 7265,
"name": "Hard Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 7266,
"name": "Berserk",
"icon": 405,
"classjob": -1
},
{
"id": 7267,
"name": "Meracydian Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 7268,
"name": "Comet",
"icon": 405,
"classjob": -1
},
{
"id": 7269,
"name": "Meracydian Fire",
"icon": 405,
"classjob": -1
},
{
"id": 7270,
"name": "Meracydian Fear",
"icon": 405,
"classjob": -1
},
{
"id": 7271,
"name": "Infinite Fire",
"icon": 405,
"classjob": -1
},
{
"id": 7272,
"name": "Infinite Ice",
"icon": 405,
"classjob": -1
},
{
"id": 7273,
"name": "The South Star",
"icon": 405,
"classjob": -1
},
{
"id": 7274,
"name": "The North Star",
"icon": 405,
"classjob": -1
},
{
"id": 7275,
"name": "The South Star",
"icon": 405,
"classjob": -1
},
{
"id": 7276,
"name": "The North Star",
"icon": 405,
"classjob": -1
},
{
"id": 7277,
"name": "Tyrfing",
"icon": 405,
"classjob": -1
},
{
"id": 7278,
"name": "Tyrfing",
"icon": 405,
"classjob": -1
},
{
"id": 7279,
"name": "Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 7280,
"name": "Metal Cutter",
"icon": 405,
"classjob": -1
},
{
"id": 7281,
"name": "The Demon's Claw",
"icon": 405,
"classjob": -1
},
{
"id": 7282,
"name": "Wave Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 7283,
"name": "Wave Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 7284,
"name": "Void Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 7285,
"name": "Void Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 7286,
"name": "Void Blizzard IV",
"icon": 405,
"classjob": -1
},
{
"id": 7287,
"name": "Void Blizzard IV",
"icon": 405,
"classjob": -1
},
{
"id": 7288,
"name": "Void Aero II",
"icon": 405,
"classjob": -1
},
{
"id": 7289,
"name": "Void Aero II",
"icon": 405,
"classjob": -1
},
{
"id": 7290,
"name": "Void Aero III",
"icon": 405,
"classjob": -1
},
{
"id": 7291,
"name": "Void Aero III",
"icon": 405,
"classjob": -1
},
{
"id": 7292,
"name": "Void Aero IV",
"icon": 405,
"classjob": -1
},
{
"id": 7293,
"name": "Void Aero IV",
"icon": 405,
"classjob": -1
},
{
"id": 7294,
"name": "Void Death",
"icon": 405,
"classjob": -1
},
{
"id": 7295,
"name": "Void Death",
"icon": 405,
"classjob": -1
},
{
"id": 7298,
"name": "Void Death IV",
"icon": 405,
"classjob": -1
},
{
"id": 7299,
"name": "Void Death IV",
"icon": 405,
"classjob": -1
},
{
"id": 7300,
"name": "Doom",
"icon": 405,
"classjob": -1
},
{
"id": 7301,
"name": "Doom",
"icon": 405,
"classjob": -1
},
{
"id": 7302,
"name": "Bolt Of Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 7303,
"name": "Bolt Of Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 7306,
"name": "Void Blizzard III",
"icon": 405,
"classjob": -1
},
{
"id": 7307,
"name": "Void Blizzard IV",
"icon": 405,
"classjob": -1
},
{
"id": 7308,
"name": "Void Aero II",
"icon": 405,
"classjob": -1
},
{
"id": 7309,
"name": "Void Aero III",
"icon": 405,
"classjob": -1
},
{
"id": 7311,
"name": "Void Aero IV",
"icon": 405,
"classjob": -1
},
{
"id": 7312,
"name": "Void Death",
"icon": 405,
"classjob": -1
},
{
"id": 7315,
"name": "Bolt Of Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 7317,
"name": "Biting Wind",
"icon": 405,
"classjob": -1
},
{
"id": 7318,
"name": "Dark II",
"icon": 405,
"classjob": -1
},
{
"id": 7320,
"name": "Jongleur's X",
"icon": 405,
"classjob": -1
},
{
"id": 7321,
"name": "Sleight",
"icon": 405,
"classjob": -1
},
{
"id": 7322,
"name": "Wormhole",
"icon": 405,
"classjob": -1
},
{
"id": 7327,
"name": "Juggling Sphere",
"icon": 405,
"classjob": -1
},
{
"id": 7328,
"name": "Juggling Sphere",
"icon": 405,
"classjob": -1
},
{
"id": 7329,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 7330,
"name": "Explosion",
"icon": 405,
"classjob": -1
},
{
"id": 7331,
"name": "Jester's Reward",
"icon": 405,
"classjob": -1
},
{
"id": 7332,
"name": "Jester's Jig",
"icon": 405,
"classjob": -1
},
{
"id": 7333,
"name": "Jester's Jig",
"icon": 405,
"classjob": -1
},
{
"id": 7334,
"name": "Debilitator",
"icon": 405,
"classjob": -1
},
{
"id": 7335,
"name": "Flameflow",
"icon": 405,
"classjob": -1
},
{
"id": 7336,
"name": "Flameflow",
"icon": 405,
"classjob": -1
},
{
"id": 7337,
"name": "Flameflow",
"icon": 405,
"classjob": -1
},
{
"id": 7338,
"name": "Blackfire",
"icon": 405,
"classjob": -1
},
{
"id": 7339,
"name": "Blackfire",
"icon": 405,
"classjob": -1
},
{
"id": 7340,
"name": "Black Wind",
"icon": 405,
"classjob": -1
},
{
"id": 7341,
"name": "Blackbolt",
"icon": 405,
"classjob": -1
},
{
"id": 7342,
"name": "Lucky Pierrot",
"icon": 405,
"classjob": -1
},
{
"id": 7343,
"name": "Lucky Pierrot",
"icon": 405,
"classjob": -1
},
{
"id": 7344,
"name": "Icefall",
"icon": 405,
"classjob": -1
},
{
"id": 7345,
"name": "Death Scythe",
"icon": 405,
"classjob": -1
},
{
"id": 7346,
"name": "Magitek Claw",
"icon": 405,
"classjob": -1
},
{
"id": 7347,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 7348,
"name": "Magitek Missile",
"icon": 405,
"classjob": -1
},
{
"id": 7349,
"name": "Magitek Hook",
"icon": 405,
"classjob": -1
},
{
"id": 7350,
"name": "Magitek Hook",
"icon": 405,
"classjob": -1
},
{
"id": 7352,
"name": "Magitek Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 7353,
"name": "Dynamic Sensory Jammer",
"icon": 405,
"classjob": -1
},
{
"id": 7354,
"name": "Dynamic Sensory Jammer",
"icon": 405,
"classjob": -1
},
{
"id": 7355,
"name": "Diffractive Laser",
"icon": 405,
"classjob": -1
},
{
"id": 7356,
"name": "Launcher",
"icon": 405,
"classjob": -1
},
{
"id": 7357,
"name": "Magitek Bit",
"icon": 405,
"classjob": -1
},
{
"id": 7358,
"name": "Distress Beacon",
"icon": 405,
"classjob": -1
},
{
"id": 7360,
"name": "Assault Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 7361,
"name": "Dull Blade",
"icon": 405,
"classjob": -1
},
{
"id": 7362,
"name": "Claw Of The Griffin",
"icon": 405,
"classjob": -1
},
{
"id": 7363,
"name": "Beak Of The Griffin",
"icon": 405,
"classjob": -1
},
{
"id": 7364,
"name": "Flash Powder",
"icon": 405,
"classjob": -1
},
{
"id": 7365,
"name": "Sanguine Blade",
"icon": 405,
"classjob": -1
},
{
"id": 7367,
"name": "Big Boot",
"icon": 405,
"classjob": -1
},
{
"id": 7368,
"name": "Restraint Collar",
"icon": 405,
"classjob": -1
},
{
"id": 7369,
"name": "Restraint Collar",
"icon": 405,
"classjob": -1
},
{
"id": 7370,
"name": "Lionshead",
"icon": 405,
"classjob": -1
},
{
"id": 7371,
"name": "Gull Dive",
"icon": 405,
"classjob": -1
},
{
"id": 7372,
"name": "Corrosion",
"icon": 405,
"classjob": -1
},
{
"id": 7373,
"name": "Magitek Hook",
"icon": 405,
"classjob": -1
},
{
"id": 7374,
"name": "Carpet Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 7375,
"name": "Carpet Bomb",
"icon": 405,
"classjob": -1
},
{
"id": 7377,
"name": "Pitfall",
"icon": 405,
"classjob": -1
},
{
"id": 7378,
"name": "Full Swing",
"icon": 405,
"classjob": -1
},
{
"id": 7379,
"name": "Manos",
"icon": 405,
"classjob": -1
},
{
"id": 7380,
"name": "Shadow Release",
"icon": 405,
"classjob": -1
},
{
"id": 7451,
"name": "Soar",
"icon": 405,
"classjob": -1
},
{
"id": 7453,
"name": "Shadesmite",
"icon": 405,
"classjob": -1
},
{
"id": 7454,
"name": "Shadespin",
"icon": 405,
"classjob": -1
},
{
"id": 7455,
"name": "Shadespin",
"icon": 405,
"classjob": -1
},
{
"id": 7456,
"name": "Shadespin",
"icon": 405,
"classjob": -1
},
{
"id": 7457,
"name": "Nox",
"icon": 405,
"classjob": -1
},
{
"id": 7458,
"name": "Nox",
"icon": 405,
"classjob": -1
},
{
"id": 7459,
"name": "Shadethrust",
"icon": 405,
"classjob": -1
},
{
"id": 7460,
"name": "Shred",
"icon": 405,
"classjob": -1
},
{
"id": 7461,
"name": "Unhand",
"icon": 405,
"classjob": -1
},
{
"id": 7462,
"name": "Void Spark",
"icon": 405,
"classjob": -1
},
{
"id": 7463,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 7464,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 7465,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 7466,
"name": "Particle Beam",
"icon": 405,
"classjob": -1
},
{
"id": 7467,
"name": "Thirty Thorns",
"icon": 405,
"classjob": -1
},
{
"id": 7468,
"name": "Thirty Thorns",
"icon": 405,
"classjob": -1
},
{
"id": 7469,
"name": "Thirty Thorns",
"icon": 405,
"classjob": -1
},
{
"id": 7470,
"name": "Thirty Thorns",
"icon": 405,
"classjob": -1
},
{
"id": 7471,
"name": "Thirty Arrows",
"icon": 405,
"classjob": -1
},
{
"id": 7472,
"name": "Thirty Arrows",
"icon": 405,
"classjob": -1
},
{
"id": 7473,
"name": "Thirty Sickles",
"icon": 405,
"classjob": -1
},
{
"id": 7474,
"name": "Thirty Souls",
"icon": 405,
"classjob": -1
},
{
"id": 7475,
"name": "Thirty Cries",
"icon": 405,
"classjob": -1
},
{
"id": 7476,
"name": "Blinding Shadow",
"icon": 405,
"classjob": -1
},
{
"id": 7573,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 7574,
"name": "Aetherochemical Laser",
"icon": 405,
"classjob": -1
},
{
"id": 7575,
"name": "Aetherochemical Laser",
"icon": 405,
"classjob": -1
},
{
"id": 7576,
"name": "Aetherochemical Laser",
"icon": 405,
"classjob": -1
},
{
"id": 7577,
"name": "Aether Bend",
"icon": 405,
"classjob": -1
},
{
"id": 7578,
"name": "Light Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 7579,
"name": "Citadel Buster",
"icon": 405,
"classjob": -1
},
{
"id": 7580,
"name": "Touchdown",
"icon": 405,
"classjob": -1
},
{
"id": 7581,
"name": "Supernova",
"icon": 405,
"classjob": -1
},
{
"id": 7582,
"name": "Integrated Aetheromodulator",
"icon": 405,
"classjob": -1
},
{
"id": 7583,
"name": "Diffractive Laser",
"icon": 405,
"classjob": -1
},
{
"id": 7587,
"name": "Aetherial Pool",
"icon": 405,
"classjob": -1
},
{
"id": 7588,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 7589,
"name": "Light Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 7590,
"name": "Aetherial Absorbption",
"icon": 405,
"classjob": -1
},
{
"id": 7591,
"name": "Aetherial Release",
"icon": 405,
"classjob": -1
},
{
"id": 7592,
"name": "Light Pillar",
"icon": 405,
"classjob": -1
},
{
"id": 7593,
"name": "Supernova",
"icon": 405,
"classjob": -1
},
{
"id": 7594,
"name": "Diffractive Laser",
"icon": 405,
"classjob": -1
},
{
"id": 7595,
"name": "Citadel Buster",
"icon": 405,
"classjob": -1
},
{
"id": 7597,
"name": "Eikonizer",
"icon": 405,
"classjob": -1
},
{
"id": 7598,
"name": "Blinding Shadow",
"icon": 405,
"classjob": -1
},
{
"id": 7599,
"name": "Shockobo",
"icon": 61144,
"classjob": 0
},
{
"id": 7600,
"name": "Shockobo",
"icon": 64169,
"classjob": 0
},
{
"id": 7601,
"name": "Dream Shroud",
"icon": 405,
"classjob": -1
},
{
"id": 7602,
"name": "Tsujikaze",
"icon": 405,
"classjob": -1
},
{
"id": 7603,
"name": "Yukikaze",
"icon": 405,
"classjob": -1
},
{
"id": 7604,
"name": "Hanakaze",
"icon": 405,
"classjob": -1
},
{
"id": 7605,
"name": "Iai Shoten",
"icon": 405,
"classjob": -1
},
{
"id": 7606,
"name": "Ichi No Tachi",
"icon": 405,
"classjob": -1
},
{
"id": 7607,
"name": "Augmented Suffering",
"icon": 405,
"classjob": -1
},
{
"id": 7608,
"name": "Augmented Uprising",
"icon": 405,
"classjob": -1
},
{
"id": 7609,
"name": "Augmented Shatter",
"icon": 405,
"classjob": -1
},
{
"id": 7610,
"name": "Firebomb",
"icon": 405,
"classjob": -1
},
{
"id": 7611,
"name": "Magitek Missiles",
"icon": 405,
"classjob": -1
},
{
"id": 7612,
"name": "Magitek Missiles",
"icon": 405,
"classjob": -1
},
{
"id": 7613,
"name": "Shrapnel Shell",
"icon": 405,
"classjob": -1
},
{
"id": 7614,
"name": "Shrapnel Shell",
"icon": 405,
"classjob": -1
},
{
"id": 7615,
"name": "Grand Sword",
"icon": 405,
"classjob": -1
},
{
"id": 7616,
"name": "Grand Strike",
"icon": 405,
"classjob": -1
},
{
"id": 7617,
"name": "Magitek Ray",
"icon": 405,
"classjob": -1
},
{
"id": 7618,
"name": "Self-destruct",
"icon": 405,
"classjob": -1
},
{
"id": 7619,
"name": "Magitek Cannon",
"icon": 61108,
"classjob": 0
},
{
"id": 7620,
"name": "Photon Stream",
"icon": 61109,
"classjob": 0
},
{
"id": 7621,
"name": "Diffractive Magitek Cannon",
"icon": 61142,
"classjob": 0
},
{
"id": 7622,
"name": "High-powered Magitek Cannon",
"icon": 61143,
"classjob": 0
},
{
"id": 7623,
"name": "Broken Seal",
"icon": 405,
"classjob": -1
},
{
"id": 7624,
"name": "Needle Burst",
"icon": 405,
"classjob": -1
},
{
"id": 7625,
"name": "Deadly Vapor",
"icon": 405,
"classjob": -1
},
{
"id": 7626,
"name": "Deeproot",
"icon": 405,
"classjob": -1
},
{
"id": 7627,
"name": "Odious Air",
"icon": 405,
"classjob": -1
},
{
"id": 7628,
"name": "Gobslash Slicetops",
"icon": 405,
"classjob": -1
},
{
"id": 7629,
"name": "Gobslash Slicetops",
"icon": 405,
"classjob": -1
},
{
"id": 7630,
"name": "Snuggle",
"icon": 405,
"classjob": -1
},
{
"id": 7631,
"name": "Big Hug",
"icon": 405,
"classjob": -1
},
{
"id": 7636,
"name": "Shadesmite",
"icon": 405,
"classjob": -1
},
{
"id": 7637,
"name": "Shadesmite",
"icon": 405,
"classjob": -1
},
{
"id": 7638,
"name": "Pounce",
"icon": 405,
"classjob": -1
},
{
"id": 7639,
"name": "Howl",
"icon": 405,
"classjob": -1
},
{
"id": 7640,
"name": "Incinerating Lahar",
"icon": 405,
"classjob": -1
},
{
"id": 7641,
"name": "Incinerating Lahar",
"icon": 405,
"classjob": -1
},
{
"id": 7642,
"name": "Inferno Blast",
"icon": 405,
"classjob": -1
},
{
"id": 7643,
"name": "Comet",
"icon": 405,
"classjob": -1
},
{
"id": 7644,
"name": "Diffusion Beam",
"icon": 405,
"classjob": -1
},
{
"id": 7645,
"name": "Fire",
"icon": 405,
"classjob": -1
},
{
"id": 7646,
"name": "Fire II",
"icon": 405,
"classjob": -1
},
{
"id": 7647,
"name": "Ravenous Bite",
"icon": 405,
"classjob": -1
},
{
"id": 7648,
"name": "Abyssal Cry",
"icon": 405,
"classjob": -1
},
{
"id": 7649,
"name": "Frumious Jaws",
"icon": 405,
"classjob": -1
},
{
"id": 7650,
"name": "Howl",
"icon": 405,
"classjob": -1
},
{
"id": 7651,
"name": "Eyeshine",
"icon": 405,
"classjob": -1
},
{
"id": 7652,
"name": "Absolute Zero",
"icon": 405,
"classjob": -1
},
{
"id": 7653,
"name": "Ice Break",
"icon": 405,
"classjob": -1
},
{
"id": 7654,
"name": "Butcher",
"icon": 405,
"classjob": -1
},
{
"id": 7655,
"name": "Twister",
"icon": 405,
"classjob": -1
},
{
"id": 7656,
"name": "Twister",
"icon": 405,
"classjob": -1
},
{
"id": 7657,
"name": "Crosswind",
"icon": 405,
"classjob": -1
},
{
"id": 7658,
"name": "Twister",
"icon": 405,
"classjob": -1
},
{
"id": 7659,
"name": "Butcher",
"icon": 405,
"classjob": -1
},
{
"id": 7660,
"name": "Howl",
"icon": 405,
"classjob": -1
},
{
"id": 7661,
"name": "Sparkstorm",
"icon": 405,
"classjob": -1
},
{
"id": 7662,
"name": "Sparkstorm",
"icon": 405,
"classjob": -1
},
{
"id": 7663,
"name": "Spark",
"icon": 405,
"classjob": -1
},
{
"id": 7664,
"name": "Spark",
"icon": 405,
"classjob": -1
},
{
"id": 7665,
"name": "Trembling Epigraph",
"icon": 405,
"classjob": -1
},
{
"id": 7666,
"name": "Flaring Epigraph",
"icon": 405,
"classjob": -1
},
{
"id": 7667,
"name": "Dark",
"icon": 405,
"classjob": -1
},
{
"id": 7668,
"name": "Dark",
"icon": 405,
"classjob": -1
},
{
"id": 7669,
"name": "Void Call",
"icon": 405,
"classjob": -1
},
{
"id": 7670,
"name": "Tail Slap",
"icon": 405,
"classjob": -1
},
{
"id": 7671,
"name": "Murderous Shriek",
"icon": 405,
"classjob": -1
},
{
"id": 7672,
"name": "Petrifying Eye",
"icon": 405,
"classjob": -1
},
{
"id": 7673,
"name": "Miasma Breath",
"icon": 405,
"classjob": -1
},
{
"id": 7674,
"name": "Dark Thorn",
"icon": 405,
"classjob": -1
},
{
"id": 7675,
"name": "Evil Eye",
"icon": 405,
"classjob": -1
},
{
"id": 7676,
"name": "Sweet Steel",
"icon": 405,
"classjob": -1
},
{
"id": 7677,
"name": "Void Fire IV",
"icon": 405,
"classjob": -1
},
{
"id": 7678,
"name": "Void Fire IV",
"icon": 405,
"classjob": -1
},
{
"id": 7679,
"name": "Void Thunder IV",
"icon": 405,
"classjob": -1
},
{
"id": 7680,
"name": "Void Call",
"icon": 405,
"classjob": -1
},
{
"id": 7681,
"name": "Slimer",
"icon": 405,
"classjob": -1
},
{
"id": 7682,
"name": "Blood Sword",
"icon": 405,
"classjob": -1
},
{
"id": 7683,
"name": "Blood Rain",
"icon": 405,
"classjob": -1
},
{
"id": 7684,
"name": "Beguiling Mist",
"icon": 405,
"classjob": -1
},
{
"id": 7685,
"name": "Dark Mist",
"icon": 405,
"classjob": -1
},
{
"id": 7686,
"name": "Purple Haze",
"icon": 405,
"classjob": -1
},
{
"id": 7687,
"name": "Ravenous Bite",
"icon": 405,
"classjob": -1
},
{
"id": 7688,
"name": "Abyssal Cry",
"icon": 405,
"classjob": -1
},
{
"id": 7689,
"name": "Soar",
"icon": 405,
"classjob": -1
},
{
"id": 7692,
"name": "Fire IV",
"icon": 405,
"classjob": -1
},
{
"id": 7693,
"name": "Scathe",
"icon": 405,
"classjob": -1
},
{
"id": 7694,
"name": "Rock Of Ages",
"icon": 405,
"classjob": -1
},
{
"id": 7695,
"name": "Trunk Tawse",
"icon": 405,
"classjob": -1
},
{
"id": 7696,
"name": "Razor Fang",
"icon": 405,
"classjob": -1
},
{
"id": 7697,
"name": "Scythe Tail",
"icon": 405,
"classjob": -1
},
{
"id": 7698,
"name": "Butcher",
"icon": 405,
"classjob": -1
},
{
"id": 7699,
"name": "Rip",
"icon": 405,
"classjob": -1
},
{
"id": 7700,
"name": "Pounce",
"icon": 405,
"classjob": -1
},
{
"id": 7701,
"name": "Mark Of The Beast",
"icon": 405,
"classjob": -1
},
{
"id": 7702,
"name": "Howling Wail",
"icon": 405,
"classjob": -1
},
{
"id": 7703,
"name": "Alicorn",
"icon": 405,
"classjob": -1
},
{
"id": 7704,
"name": "Innocence",
"icon": 405,
"classjob": -1
},
{
"id": 7705,
"name": "Spin",
"icon": 405,
"classjob": -1
},
{
"id": 7706,
"name": "Scorch",
"icon": 405,
"classjob": -1
},
{
"id": 7707,
"name": "Dark Wave",
"icon": 405,
"classjob": -1
},
{
"id": 7710,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 7711,
"name": "Flare Star",
"icon": 405,
"classjob": -1
},
{
"id": 7712,
"name": "The Purge",
"icon": 405,
"classjob": -1
},
{
"id": 7713,
"name": "Sarva",
"icon": 405,
"classjob": -1
},
{
"id": 7714,
"name": "Twin Spirit",
"icon": 405,
"classjob": -1
},
{
"id": 7715,
"name": "Twin Spirit",
"icon": 405,
"classjob": -1
},
{
"id": 7716,
"name": "Flaming Halberd",
"icon": 405,
"classjob": -1
},
{
"id": 7717,
"name": "Demonic Dive",
"icon": 405,
"classjob": -1
},
{
"id": 7718,
"name": "Cool Flame",
"icon": 405,
"classjob": -1
},
{
"id": 7719,
"name": "Sarva",
"icon": 405,
"classjob": -1
},
{
"id": 7720,
"name": "Ice And Fire",
"icon": 405,
"classjob": -1
},
{
"id": 7721,
"name": "Biting Halberd",
"icon": 405,
"classjob": -1
},
{
"id": 7722,
"name": "Tail End",
"icon": 405,
"classjob": -1
},
{
"id": 7723,
"name": "Ciclicle",
"icon": 405,
"classjob": -1
},
{
"id": 7724,
"name": "Southern Cross",
"icon": 405,
"classjob": -1
},
{
"id": 7725,
"name": "Southern Cross",
"icon": 405,
"classjob": -1
},
{
"id": 7726,
"name": "鬼神：履行技スタート：演出アクション：ノーマル",
"icon": 405,
"classjob": -1
},
{
"id": 7727,
"name": "Sarva",
"icon": 405,
"classjob": -1
},
{
"id": 7728,
"name": "Ahura Mazda",
"icon": 405,
"classjob": -1
},
{
"id": 7729,
"name": "Hard Thrust",
"icon": 405,
"classjob": -1
},
{
"id": 7730,
"name": "Berserk",
"icon": 405,
"classjob": -1
},
{
"id": 7731,
"name": "Meracydian Meteor",
"icon": 405,
"classjob": -1
},
{
"id": 7732,
"name": "Comet",
"icon": 405,
"classjob": -1
},
{
"id": 7733,
"name": "Meracydian Fire",
"icon": 405,
"classjob": -1
},
{
"id": 7734,
"name": "Meracydian Fear",
"icon": 405,
"classjob": -1
},
{
"id": 7735,
"name": "Tyrfing",
"icon": 405,
"classjob": -1
},
{
"id": 7736,
"name": "Tyrfing",
"icon": 405,
"classjob": -1
},
{
"id": 7737,
"name": "Fire III",
"icon": 405,
"classjob": -1
},
{
"id": 7738,
"name": "Metal Cutter",
"icon": 405,
"classjob": -1
},
{
"id": 7739,
"name": "The Demon's Claw",
"icon": 405,
"classjob": -1
},
{
"id": 7740,
"name": "Wave Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 7741,
"name": "Wave Cannon",
"icon": 405,
"classjob": -1
},
{
"id": 7742,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 7743,
"name": "Metal Cutter",
"icon": 405,
"classjob": -1
},
{
"id": 7744,
"name": "Metal Cutter",
"icon": 405,
"classjob": -1
},
{
"id": 7745,
"name": "Jester's Reap",
"icon": 405,
"classjob": -1
},
{
"id": 7746,
"name": "Hurl",
"icon": 405,
"classjob": -1
},
{
"id": 7747,
"name": "Bestial Bay",
"icon": 405,
"classjob": -1
},
{
"id": 7748,
"name": "The Wood Remembers",
"icon": 405,
"classjob": -1
},
{
"id": 7749,
"name": "Filoplumes",
"icon": 405,
"classjob": -1
},
{
"id": 7750,
"name": "Revelation",
"icon": 405,
"classjob": -1
},
{
"id": 7751,
"name": "Redfire",
"icon": 405,
"classjob": -1
},
{
"id": 7752,
"name": "Megablaster",
"icon": 405,
"classjob": -1
},
{
"id": 7753,
"name": "Blaster",
"icon": 405,
"classjob": -1
},
{
"id": 7754,
"name": "Charged Whisker",
"icon": 405,
"classjob": -1
},
{
"id": 7755,
"name": "Quasar",
"icon": 405,
"classjob": -1
},
{
"id": 7756,
"name": "Rear Hoof",
"icon": 405,
"classjob": -1
},
{
"id": 7757,
"name": "Nicker",
"icon": 405,
"classjob": -1
},
{
"id": 7758,
"name": "Ni No Tachi",
"icon": 405,
"classjob": -1
},
{
"id": 7759,
"name": "San No Tachi",
"icon": 405,
"classjob": -1
},
{
"id": 7760,
"name": "Attack",
"icon": 405,
"classjob": -1
},
{
"id": 7761,
"name": "Spike Of Darkness",
"icon": 405,
"classjob": -1
},
{
"id": 7762,
"name": "Aetherochemical Flare",
"icon": 405,
"classjob": -1
},
{
"id": 7764,
"name": "Supernova",
"icon": 405,
"classjob": -1
},
{
"id": 7765,
"name": "Suiyaku",
"icon": 405,
"classjob": -1
},
{
"id": 7767,
"name": "Critical Gravity",
"icon": 405,
"classjob": -1
},
{
"id": 7768,
"name": "Flame Halberd",
"icon": 405,
"classjob": -1
},
{
"id": 7769,
"name": "Flame Halberd",
"icon": 405,
"classjob": -1
},
{
"id": 7770,
"name": "Infinite Fire",
"icon": 405,
"classjob": -1
},
{
"id": 7771,
"name": "Infinite Ice",
"icon": 405,
"classjob": -1
},
{
"id": 7772,
"name": "The South Star",
"icon": 405,
"classjob": -1
},
{
"id": 7773,
"name": "The North Star",
"icon": 405,
"classjob": -1
},
{
"id": 7774,
"name": "The South Star",
"icon": 405,
"classjob": -1
},
{
"id": 7775,
"name": "The North Star",
"icon": 405,
"classjob": -1
},
{
"id": 7776,
"name": "Broken Seal",
"icon": 405,
"classjob": -1
},
{
"id": 7777,
"name": "Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 7778,
"name": "Void Blizzard",
"icon": 405,
"classjob": -1
},
{
"id": 7779,
"name": "Petrifying Eye",
"icon": 405,
"classjob": -1
},
{
"id": 7780,
"name": "The South Star",
"icon": 405,
"classjob": -1
},
{
"id": 7781,
"name": "The North Star",
"icon": 405,
"classjob": -1
},
{
"id": 7808,
"name": "Surface Breach",
"icon": 405,
"classjob": -1
},
{
"id": 7818,
"name": "Tornado",
"icon": 405,
"classjob": -1
},
{
"id": 7820,
"name": "Stone Cold",
"icon": 405,
"classjob": -1
},
{
"id": 7821,
"name": "Tropical Wind",
"icon": 405,
"classjob": -1
},
{
"id": 8007,
"name": "Incinerating Lahar",
"icon": 405,
"classjob": -1
},
{
"id": 8008,
"name": "Incinerating Lahar",
"icon": 405,
"classjob": -1
},
{
"id": 8736,
"name": "Rock Of Ages",
"icon": 405,
"classjob": -1
},
{
"id": 8737,
"name": "Trunk Tawse",
"icon": 405,
"classjob": -1
},
{
"id": 8738,
"name": "Scythe Tail",
"icon": 405,
"classjob": -1
},
{
"id": 8739,
"name": "Butcher",
"icon": 405,
"classjob": -1
},
{
"id": 8740,
"name": "Rip",
"icon": 405,
"classjob": -1
},
{
"id": 8741,
"name": "Mark Of The Beast",
"icon": 405,
"classjob": -1
},
{
"id": 8742,
"name": "Howling Wail",
"icon": 405,
"classjob": -1
},
{
"id": 8743,
"name": "Innocence",
"icon": 405,
"classjob": -1
},
{
"id": 8744,
"name": "Spin",
"icon": 405,
"classjob": -1
},
{
"id": 8745,
"name": "Scorch",
"icon": 405,
"classjob": -1
},
{
"id": 9201,
"name": "Aqua Vitae",
"icon": 405,
"classjob": -1
},
{
"id": 50001,
"name": "Enhanced Vitality",
"icon": 5130,
"classjob": 1
},
{
"id": 50002,
"name": "Enhanced Rampart",
"icon": 5201,
"classjob": 1
},
{
"id": 50003,
"name": "Enhanced Vitality II",
"icon": 5131,
"classjob": 1
},
{
"id": 50004,
"name": "Enhanced Awareness",
"icon": 5208,
"classjob": 1
},
{
"id": 50005,
"name": "Enhanced Vitality III",
"icon": 5132,
"classjob": 1
},
{
"id": 50006,
"name": "Enhanced Flash",
"icon": 5203,
"classjob": 1
},
{
"id": 50007,
"name": "Enhanced Convalescence",
"icon": 5206,
"classjob": 1
},
{
"id": 50008,
"name": "Enhanced Sentinel",
"icon": 5202,
"classjob": 1
},
{
"id": 50009,
"name": "Enhanced Rage Of Halone",
"icon": 5207,
"classjob": 1
},
{
"id": 50010,
"name": "Enhanced Shield Bash",
"icon": 5204,
"classjob": 1
},
{
"id": 50011,
"name": "Enhanced Fight Or Flight",
"icon": 5205,
"classjob": 1
},
{
"id": 50012,
"name": "Enhanced Vitality",
"icon": 5130,
"classjob": 3
},
{
"id": 50013,
"name": "Enhanced Vitality II",
"icon": 5131,
"classjob": 3
},
{
"id": 50014,
"name": "Bloodshower",
"icon": 5252,
"classjob": 3
},
{
"id": 50015,
"name": "Enhanced Foresight",
"icon": 5251,
"classjob": 3
},
{
"id": 50016,
"name": "Enhanced Vitality III",
"icon": 5132,
"classjob": 3
},
{
"id": 50017,
"name": "Enhanced Maim",
"icon": 5254,
"classjob": 3
},
{
"id": 50018,
"name": "Enhanced Berserk",
"icon": 5253,
"classjob": 3
},
{
"id": 50019,
"name": "Enhanced Brutal Swing",
"icon": 5255,
"classjob": 3
},
{
"id": 50020,
"name": "Enhanced Mercy Stroke",
"icon": 5257,
"classjob": 3
},
{
"id": 50021,
"name": "Enhanced Fracture",
"icon": 5256,
"classjob": 3
},
{
"id": 50022,
"name": "Enhanced Thrill Of Battle",
"icon": 5258,
"classjob": 3
},
{
"id": 50023,
"name": "Enhanced Strength",
"icon": 5110,
"classjob": 2
},
{
"id": 50024,
"name": "Enhanced Strength II",
"icon": 5111,
"classjob": 2
},
{
"id": 50025,
"name": "Enhanced Strength III",
"icon": 5112,
"classjob": 2
},
{
"id": 50026,
"name": "Enhanced Greased Lightning",
"icon": 5230,
"classjob": 2
},
{
"id": 50027,
"name": "Enhanced Internal Release",
"icon": 5229,
"classjob": 2
},
{
"id": 50028,
"name": "Enhanced Featherfoot",
"icon": 5227,
"classjob": 2
},
{
"id": 50029,
"name": "Third Wind",
"icon": 5226,
"classjob": 2
},
{
"id": 50030,
"name": "Mythril Peak",
"icon": 5232,
"classjob": 2
},
{
"id": 50031,
"name": "Enhanced Greased Lightning II",
"icon": 5231,
"classjob": 2
},
{
"id": 50032,
"name": "Enhanced Twin Snakes",
"icon": 5228,
"classjob": 2
},
{
"id": 50033,
"name": "Enhanced Mantra",
"icon": 5233,
"classjob": 2
},
{
"id": 50034,
"name": "Enhanced Strength",
"icon": 5110,
"classjob": 4
},
{
"id": 50035,
"name": "Keener Flurry",
"icon": 5280,
"classjob": 4
},
{
"id": 50036,
"name": "Enhanced Feint",
"icon": 5279,
"classjob": 4
},
{
"id": 50037,
"name": "Enhanced Strength II",
"icon": 5111,
"classjob": 4
},
{
"id": 50038,
"name": "Enhanced Strength III",
"icon": 5112,
"classjob": 4
},
{
"id": 50039,
"name": "Exhilarate",
"icon": 5276,
"classjob": 4
},
{
"id": 50040,
"name": "Enhanced Leg Sweep",
"icon": 5282,
"classjob": 4
},
{
"id": 50041,
"name": "Enhanced Life Surge",
"icon": 5277,
"classjob": 4
},
{
"id": 50042,
"name": "Enhanced Blood For Blood",
"icon": 5278,
"classjob": 4
},
{
"id": 50043,
"name": "Heavier Thrust",
"icon": 5281,
"classjob": 4
},
{
"id": 50044,
"name": "Exenterate",
"icon": 5283,
"classjob": 4
},
{
"id": 50045,
"name": "Enhanced Dexterity",
"icon": 5120,
"classjob": 5
},
{
"id": 50046,
"name": "Enhanced Dexterity II",
"icon": 5121,
"classjob": 5
},
{
"id": 50047,
"name": "Heavier Shot",
"icon": 5306,
"classjob": 5
},
{
"id": 50048,
"name": "Increased Action Damage",
"icon": 5302,
"classjob": 5
},
{
"id": 50049,
"name": "Enhanced Venomous Bite",
"icon": 5305,
"classjob": 5
},
{
"id": 50050,
"name": "Enhanced Raging Strikes",
"icon": 5307,
"classjob": 5
},
{
"id": 50051,
"name": "Enhanced Dexterity III",
"icon": 5122,
"classjob": 5
},
{
"id": 50052,
"name": "Enhanced Quick Nock",
"icon": 5304,
"classjob": 5
},
{
"id": 50053,
"name": "Increased Action Damage II",
"icon": 5303,
"classjob": 5
},
{
"id": 50054,
"name": "Enhanced Barrage",
"icon": 5301,
"classjob": 5
},
{
"id": 50055,
"name": "River Of Blood",
"icon": 5308,
"classjob": 5
},
{
"id": 50056,
"name": "Enhanced Mind",
"icon": 5150,
"classjob": 6
},
{
"id": 50057,
"name": "Enhanced Mind II",
"icon": 5151,
"classjob": 6
},
{
"id": 50058,
"name": "Enhanced Medica",
"icon": 5332,
"classjob": 6
},
{
"id": 50059,
"name": "Maim And Mend",
"icon": 5185,
"classjob": 6
},
{
"id": 50060,
"name": "Enhanced Mind III",
"icon": 5152,
"classjob": 6
},
{
"id": 50061,
"name": "Enhanced Raise",
"icon": 5327,
"classjob": 6
},
{
"id": 50062,
"name": "Freecure",
"icon": 5330,
"classjob": 6
},
{
"id": 50063,
"name": "Overcure",
"icon": 5331,
"classjob": 6
},
{
"id": 50064,
"name": "Maim And Mend II",
"icon": 5186,
"classjob": 6
},
{
"id": 50065,
"name": "Quick Stoneskin",
"icon": 5328,
"classjob": 6
},
{
"id": 50066,
"name": "Enhanced Shroud Of Saints",
"icon": 5326,
"classjob": 6
},
{
"id": 50067,
"name": "Enhanced Intelligence",
"icon": 5140,
"classjob": 7
},
{
"id": 50068,
"name": "Enhanced Intelligence II",
"icon": 5141,
"classjob": 7
},
{
"id": 50069,
"name": "Enhanced Surecast",
"icon": 5353,
"classjob": 7
},
{
"id": 50070,
"name": "Magick And Mend",
"icon": 5185,
"classjob": 7
},
{
"id": 50071,
"name": "Enhanced Scathe",
"icon": 5354,
"classjob": 7
},
{
"id": 50072,
"name": "Deep Sleep",
"icon": 5351,
"classjob": 7
},
{
"id": 50073,
"name": "Enhanced Intelligence III",
"icon": 5142,
"classjob": 7
},
{
"id": 50074,
"name": "Enhanced Manaward",
"icon": 5356,
"classjob": 7
},
{
"id": 50075,
"name": "Magick And Mend II",
"icon": 5186,
"classjob": 7
},
{
"id": 50076,
"name": "Firestarter",
"icon": 5352,
"classjob": 7
},
{
"id": 50077,
"name": "Thundercloud",
"icon": 5355,
"classjob": 7
},
{
"id": 50078,
"name": "Auto Triangulate",
"icon": 5451,
"classjob": 17
},
{
"id": 50080,
"name": "Enhanced Stealth",
"icon": 5452,
"classjob": 17
},
{
"id": 50081,
"name": "Enhanced Stealth II",
"icon": 5453,
"classjob": 17
},
{
"id": 50083,
"name": "Enhanced Stealth III",
"icon": 5454,
"classjob": 17
},
{
"id": 50086,
"name": "Auto Prospect",
"icon": 5426,
"classjob": 16
},
{
"id": 50088,
"name": "Enhanced Stealth",
"icon": 5427,
"classjob": 16
},
{
"id": 50089,
"name": "Enhanced Stealth II",
"icon": 5428,
"classjob": 16
},
{
"id": 50091,
"name": "Enhanced Stealth III",
"icon": 5429,
"classjob": 16
},
{
"id": 50094,
"name": "Tree Whisperer",
"icon": 5455,
"classjob": 17
},
{
"id": 50095,
"name": "Tree Whisperer II",
"icon": 5456,
"classjob": 17
},
{
"id": 50096,
"name": "Tree Whisperer III",
"icon": 5457,
"classjob": 17
},
{
"id": 50097,
"name": "Tree Whisperer IV",
"icon": 5458,
"classjob": 17
},
{
"id": 50098,
"name": "Ward Of The Twelve",
"icon": 5459,
"classjob": 17
},
{
"id": 50099,
"name": "Ward Of The Twelve II",
"icon": 5460,
"classjob": 17
},
{
"id": 50100,
"name": "Stone Whisperer",
"icon": 5430,
"classjob": 16
},
{
"id": 50101,
"name": "Stone Whisperer II",
"icon": 5431,
"classjob": 16
},
{
"id": 50102,
"name": "Stone Whisperer III",
"icon": 5432,
"classjob": 16
},
{
"id": 50103,
"name": "Stone Whisperer IV",
"icon": 5433,
"classjob": 16
},
{
"id": 50104,
"name": "Ward Of The Twelve",
"icon": 5434,
"classjob": 16
},
{
"id": 50105,
"name": "Ward Of The Twelve II",
"icon": 5435,
"classjob": 16
},
{
"id": 50106,
"name": "Dunefishing",
"icon": 5483,
"classjob": 18
},
{
"id": 50107,
"name": "Skyfishing",
"icon": 5484,
"classjob": 18
},
{
"id": 50108,
"name": "Enhanced Stealth",
"icon": 5476,
"classjob": 18
},
{
"id": 50109,
"name": "Enhanced Stealth II",
"icon": 5477,
"classjob": 18
},
{
"id": 50110,
"name": "Enhanced Stealth III",
"icon": 5478,
"classjob": 18
},
{
"id": 50111,
"name": "Gulleye",
"icon": 5479,
"classjob": 18
},
{
"id": 50112,
"name": "Gulleye II",
"icon": 5480,
"classjob": 18
},
{
"id": 50113,
"name": "Gulleye III",
"icon": 5481,
"classjob": 18
},
{
"id": 50114,
"name": "Double Mooching",
"icon": 5482,
"classjob": 18
},
{
"id": 50115,
"name": "Aetherdam",
"icon": 5384,
"classjob": 26
},
{
"id": 50116,
"name": "Enhanced Intelligence",
"icon": 5140,
"classjob": 26
},
{
"id": 50117,
"name": "Enhanced Intelligence II",
"icon": 5141,
"classjob": 26
},
{
"id": 50118,
"name": "Maim And Mend",
"icon": 5185,
"classjob": 26
},
{
"id": 50119,
"name": "Aetherdam II",
"icon": 5385,
"classjob": 26
},
{
"id": 50120,
"name": "Enhanced Pet Actions",
"icon": 5387,
"classjob": 26
},
{
"id": 50121,
"name": "Supervirus",
"icon": 5388,
"classjob": 26
},
{
"id": 50122,
"name": "Enhanced Intelligence III",
"icon": 5142,
"classjob": 26
},
{
"id": 50123,
"name": "Energy Siphon",
"icon": 5389,
"classjob": 26
},
{
"id": 50124,
"name": "Maim And Mend II",
"icon": 5186,
"classjob": 26
},
{
"id": 50125,
"name": "Aetherdam III",
"icon": 5386,
"classjob": 26
},
{
"id": 50126,
"name": "Enhanced Eye For An Eye",
"icon": 5390,
"classjob": 26
},
{
"id": 50127,
"name": "Enhanced Rouse",
"icon": 5391,
"classjob": 26
},
{
"id": 50128,
"name": "Enhanced Strength",
"icon": 9004,
"classjob": 0
},
{
"id": 50129,
"name": "Increased HP",
"icon": 9001,
"classjob": 0
},
{
"id": 50130,
"name": "Enhanced Accuracy",
"icon": 9010,
"classjob": 0
},
{
"id": 50131,
"name": "Enhanced Critical Hit Rate",
"icon": 9012,
"classjob": 0
},
{
"id": 50132,
"name": "Enhanced Strength",
"icon": 9004,
"classjob": 0
},
{
"id": 50133,
"name": "Increased HP",
"icon": 9001,
"classjob": 0
},
{
"id": 50134,
"name": "Enhanced Strength",
"icon": 9004,
"classjob": 0
},
{
"id": 50135,
"name": "Increased HP",
"icon": 9001,
"classjob": 0
},
{
"id": 50136,
"name": "Enhanced Accuracy",
"icon": 9010,
"classjob": 0
},
{
"id": 50137,
"name": "Enhanced Critical Hit Rate",
"icon": 9012,
"classjob": 0
},
{
"id": 50138,
"name": "Enhanced Strength",
"icon": 9004,
"classjob": 0
},
{
"id": 50139,
"name": "Increase Attack Speed",
"icon": 9013,
"classjob": 0
},
{
"id": 50140,
"name": "Enhanced Mind",
"icon": 9008,
"classjob": 0
},
{
"id": 50141,
"name": "Increased HP",
"icon": 9001,
"classjob": 0
},
{
"id": 50142,
"name": "Enhanced Accuracy",
"icon": 9010,
"classjob": 0
},
{
"id": 50143,
"name": "Enhanced Critical Hit Rate",
"icon": 9012,
"classjob": 0
},
{
"id": 50144,
"name": "Enhanced Mind",
"icon": 9008,
"classjob": 0
},
{
"id": 50145,
"name": "Increased HP",
"icon": 9001,
"classjob": 0
},
{
"id": 50146,
"name": "Enhanced Strength (PvP)",
"icon": 9801,
"classjob": 0
},
{
"id": 50147,
"name": "Enhanced Strength II (PvP)",
"icon": 9802,
"classjob": 0
},
{
"id": 50148,
"name": "Enhanced Strength III (PvP)",
"icon": 9803,
"classjob": 0
},
{
"id": 50149,
"name": "Enhanced Dexterity (PvP)",
"icon": 9811,
"classjob": 0
},
{
"id": 50150,
"name": "Enhanced Dexterity II (PvP)",
"icon": 9812,
"classjob": 0
},
{
"id": 50151,
"name": "Enhanced Dexterity III (PvP)",
"icon": 9813,
"classjob": 0
},
{
"id": 50152,
"name": "Enhanced Vitality (PvP)",
"icon": 9821,
"classjob": 0
},
{
"id": 50153,
"name": "Enhanced Vitality II (PvP)",
"icon": 9822,
"classjob": 0
},
{
"id": 50154,
"name": "Enhanced Vitality III (PvP)",
"icon": 9823,
"classjob": 0
},
{
"id": 50155,
"name": "Enhanced Intelligence (PvP)",
"icon": 9831,
"classjob": 0
},
{
"id": 50156,
"name": "Enhanced Intelligence II (PvP)",
"icon": 9832,
"classjob": 0
},
{
"id": 50157,
"name": "Enhanced Intelligence III (PvP)",
"icon": 9833,
"classjob": 0
},
{
"id": 50158,
"name": "Enhanced Mind (PvP)",
"icon": 9841,
"classjob": 0
},
{
"id": 50159,
"name": "Enhanced Mind II (PvP)",
"icon": 9842,
"classjob": 0
},
{
"id": 50160,
"name": "Enhanced Mind III (PvP)",
"icon": 9843,
"classjob": 0
},
{
"id": 50161,
"name": "Enhanced Piety (PvP)",
"icon": 9851,
"classjob": 0
},
{
"id": 50162,
"name": "Enhanced Piety II (PvP)",
"icon": 9852,
"classjob": 0
},
{
"id": 50163,
"name": "Enhanced Piety III (PvP)",
"icon": 9853,
"classjob": 0
},
{
"id": 50164,
"name": "Enhanced Testudo",
"icon": 0,
"classjob": 1
},
{
"id": 50165,
"name": "Enhanced Testudo II",
"icon": 0,
"classjob": 1
},
{
"id": 50166,
"name": "Enhanced Testudo III",
"icon": 0,
"classjob": 1
},
{
"id": 50167,
"name": "Enhanced Glory Slash",
"icon": 0,
"classjob": 1
},
{
"id": 50168,
"name": "Enhanced Glory Slash II",
"icon": 0,
"classjob": 1
},
{
"id": 50169,
"name": "Enhanced Mythril Tempest",
"icon": 0,
"classjob": 3
},
{
"id": 50170,
"name": "Enhanced Mythril Tempest II",
"icon": 0,
"classjob": 3
},
{
"id": 50171,
"name": "Enhanced Mythril Tempest III",
"icon": 0,
"classjob": 3
},
{
"id": 50172,
"name": "Enhanced Thrill Of War",
"icon": 0,
"classjob": 3
},
{
"id": 50173,
"name": "Enhanced Thrill Of War II",
"icon": 0,
"classjob": 3
},
{
"id": 50174,
"name": "Enhanced Thrill Of War III",
"icon": 0,
"classjob": 3
},
{
"id": 50175,
"name": "Enhanced Full Swing",
"icon": 0,
"classjob": 1
},
{
"id": 50176,
"name": "Enhanced Full Swing II",
"icon": 0,
"classjob": 1
},
{
"id": 50177,
"name": "Enhanced Full Swing III",
"icon": 0,
"classjob": 1
},
{
"id": 50178,
"name": "Enhanced Axe Kick",
"icon": 0,
"classjob": 2
},
{
"id": 50179,
"name": "Enhanced Axe Kick II",
"icon": 0,
"classjob": 2
},
{
"id": 50180,
"name": "Enhanced Axe Kick III",
"icon": 0,
"classjob": 2
},
{
"id": 50181,
"name": "Enhanced Somersault",
"icon": 0,
"classjob": 2
},
{
"id": 50182,
"name": "Enhanced Somersault II",
"icon": 0,
"classjob": 2
},
{
"id": 50183,
"name": "Enhanced Somersault III",
"icon": 0,
"classjob": 2
},
{
"id": 50184,
"name": "Enhanced Fetter Ward",
"icon": 0,
"classjob": 2
},
{
"id": 50185,
"name": "Enhanced Fetter Ward II",
"icon": 0,
"classjob": 2
},
{
"id": 50186,
"name": "Enhanced Impulse Rush",
"icon": 0,
"classjob": 4
},
{
"id": 50187,
"name": "Enhanced Impulse Rush II",
"icon": 0,
"classjob": 4
},
{
"id": 50188,
"name": "Enhanced Impulse Rush III",
"icon": 0,
"classjob": 4
},
{
"id": 50189,
"name": "Enhanced Skewer",
"icon": 0,
"classjob": 4
},
{
"id": 50190,
"name": "Enhanced Skewer II",
"icon": 0,
"classjob": 4
},
{
"id": 50191,
"name": "Enhanced Skewer III",
"icon": 0,
"classjob": 4
},
{
"id": 50192,
"name": "Enhanced Manasong",
"icon": 0,
"classjob": 5
},
{
"id": 50193,
"name": "Enhanced Manasong II",
"icon": 0,
"classjob": 5
},
{
"id": 50194,
"name": "Enhanced Farshot",
"icon": 0,
"classjob": 5
},
{
"id": 50195,
"name": "Enhanced Farshot II",
"icon": 0,
"classjob": 5
},
{
"id": 50196,
"name": "Enhanced Farshot III",
"icon": 0,
"classjob": 5
},
{
"id": 50197,
"name": "Enhanced Blast Shot",
"icon": 0,
"classjob": 5
},
{
"id": 50198,
"name": "Enhanced Blast Shot II",
"icon": 0,
"classjob": 5
},
{
"id": 50199,
"name": "Enhanced Blast Shot III",
"icon": 0,
"classjob": 5
},
{
"id": 50200,
"name": "Enhanced Sacred Prism",
"icon": 0,
"classjob": 6
},
{
"id": 50201,
"name": "Enhanced Sacred Prism II",
"icon": 0,
"classjob": 6
},
{
"id": 50202,
"name": "Enhanced Sacred Prism III",
"icon": 0,
"classjob": 6
},
{
"id": 50203,
"name": "Enhanced Divine Breath",
"icon": 0,
"classjob": 6
},
{
"id": 50204,
"name": "Enhanced Divine Breath II",
"icon": 0,
"classjob": 6
},
{
"id": 50205,
"name": "Enhanced Night Wing",
"icon": 0,
"classjob": 7
},
{
"id": 50206,
"name": "Enhanced Night Wing II",
"icon": 0,
"classjob": 7
},
{
"id": 50207,
"name": "Enhanced Phantom Dart",
"icon": 0,
"classjob": 7
},
{
"id": 50208,
"name": "Enhanced Phantom Dart II",
"icon": 0,
"classjob": 7
},
{
"id": 50209,
"name": "Enhanced Phantom Dart III",
"icon": 0,
"classjob": 7
},
{
"id": 50210,
"name": "Enhanced Misty Veil",
"icon": 0,
"classjob": 26
},
{
"id": 50211,
"name": "Enhanced Misty Veil II",
"icon": 0,
"classjob": 26
},
{
"id": 50212,
"name": "Enhanced Misty Veil III",
"icon": 0,
"classjob": 26
},
{
"id": 50213,
"name": "Enhanced Wither",
"icon": 0,
"classjob": 26
},
{
"id": 50216,
"name": "Enhanced Aura Blast",
"icon": 0,
"classjob": 28
},
{
"id": 50217,
"name": "Enhanced Aura Blast II",
"icon": 0,
"classjob": 28
},
{
"id": 50218,
"name": "Enhanced Aura Blast III",
"icon": 0,
"classjob": 28
},
{
"id": 50219,
"name": "Enhanced Focalization",
"icon": 0,
"classjob": 6
},
{
"id": 50220,
"name": "Enhanced Focalization II",
"icon": 0,
"classjob": 6
},
{
"id": 50221,
"name": "Enhanced Focalization III",
"icon": 0,
"classjob": 6
},
{
"id": 50222,
"name": "Enhanced Weapon Throw",
"icon": 0,
"classjob": 1
},
{
"id": 50223,
"name": "Enhanced Weapon Throw II",
"icon": 0,
"classjob": 1
},
{
"id": 50224,
"name": "Enhanced Weapon Throw III",
"icon": 0,
"classjob": 1
},
{
"id": 50225,
"name": "Enhanced Enliven",
"icon": 0,
"classjob": 2
},
{
"id": 50226,
"name": "Enhanced Enliven II",
"icon": 0,
"classjob": 2
},
{
"id": 50227,
"name": "Enhanced Aetheric Burst",
"icon": 0,
"classjob": 6
},
{
"id": 50228,
"name": "Enhanced Aetheric Burst II",
"icon": 0,
"classjob": 6
},
{
"id": 50229,
"name": "Enhanced Aetheric Burst III",
"icon": 0,
"classjob": 6
},
{
"id": 50230,
"name": "Enhanced Equanimity",
"icon": 0,
"classjob": 6
},
{
"id": 50231,
"name": "Enhanced Equanimity II",
"icon": 0,
"classjob": 6
},
{
"id": 50232,
"name": "Enhanced Mana Draw",
"icon": 0,
"classjob": 5
},
{
"id": 50233,
"name": "Enhanced Mana Draw II",
"icon": 0,
"classjob": 5
},
{
"id": 50234,
"name": "Enhanced Purify",
"icon": 0,
"classjob": 0
},
{
"id": 50235,
"name": "Enhanced Attunement",
"icon": 0,
"classjob": 6
},
{
"id": 50236,
"name": "Enhanced Dexterity",
"icon": 5120,
"classjob": 29
},
{
"id": 50237,
"name": "All Fours",
"icon": 5401,
"classjob": 29
},
{
"id": 50238,
"name": "Enhanced Dexterity II",
"icon": 5121,
"classjob": 29
},
{
"id": 50239,
"name": "Enhanced Sneak Attack",
"icon": 5402,
"classjob": 29
},
{
"id": 50240,
"name": "Enhanced Dexterity III",
"icon": 5122,
"classjob": 29
},
{
"id": 50241,
"name": "Fleet Of Foot",
"icon": 5403,
"classjob": 29
},
{
"id": 50242,
"name": "Enhanced Wasp Venom",
"icon": 5404,
"classjob": 29
},
{
"id": 50243,
"name": "Enhanced Goad",
"icon": 5406,
"classjob": 29
},
{
"id": 50244,
"name": "Enhanced Viper Venom",
"icon": 5405,
"classjob": 29
},
{
"id": 50245,
"name": "Enhanced Mutilate",
"icon": 5407,
"classjob": 29
},
{
"id": 50246,
"name": "Enhanced Death Blossom",
"icon": 5408,
"classjob": 29
},
{
"id": 50247,
"name": "Enhanced Overwhelm",
"icon": 0,
"classjob": 29
},
{
"id": 50248,
"name": "Enhanced Overwhelm II",
"icon": 0,
"classjob": 29
},
{
"id": 50249,
"name": "Enhanced Overwhelm III",
"icon": 0,
"classjob": 29
},
{
"id": 50250,
"name": "Enhanced Ill Wind",
"icon": 0,
"classjob": 29
},
{
"id": 50251,
"name": "Enhanced Ill Wind II",
"icon": 0,
"classjob": 29
},
{
"id": 50252,
"name": "Enhanced Ill Wind III",
"icon": 0,
"classjob": 29
},
{
"id": 50253,
"name": "Enhanced Malmsight",
"icon": 0,
"classjob": 29
},
{
"id": 50254,
"name": "Enhanced Detect",
"icon": 0,
"classjob": 5
},
{
"id": 50255,
"name": "Enhanced Recuperate",
"icon": 0,
"classjob": 2
},
{
"id": 50256,
"name": "Enhanced Recuperate II",
"icon": 0,
"classjob": 2
},
{
"id": 50257,
"name": "Nymeia's Ward",
"icon": 5436,
"classjob": 16
},
{
"id": 50258,
"name": "Stone Whisperer V",
"icon": 5437,
"classjob": 16
},
{
"id": 50259,
"name": "Enhanced Stealth IV",
"icon": 5438,
"classjob": 16
},
{
"id": 50260,
"name": "Enhanced Stealth V",
"icon": 5439,
"classjob": 16
},
{
"id": 50261,
"name": "Enhanced Stealth VI",
"icon": 5440,
"classjob": 16
},
{
"id": 50262,
"name": "Nymeia's Ward",
"icon": 5461,
"classjob": 17
},
{
"id": 50263,
"name": "Tree Whisperer V",
"icon": 5462,
"classjob": 17
},
{
"id": 50264,
"name": "Enhanced Stealth IV",
"icon": 5463,
"classjob": 17
},
{
"id": 50265,
"name": "Enhanced Stealth V",
"icon": 5464,
"classjob": 17
},
{
"id": 50266,
"name": "Enhanced Stealth VI",
"icon": 5465,
"classjob": 17
},
{
"id": 50267,
"name": "Gulleye IV",
"icon": 5491,
"classjob": 18
},
{
"id": 50268,
"name": "Gulleye V",
"icon": 5492,
"classjob": 18
},
{
"id": 50269,
"name": "Cloudfishing",
"icon": 5488,
"classjob": 18
},
{
"id": 50270,
"name": "Enhanced Stealth IV",
"icon": 5485,
"classjob": 18
},
{
"id": 50271,
"name": "Enhanced Stealth V",
"icon": 5486,
"classjob": 18
},
{
"id": 50272,
"name": "Enhanced Stealth VI",
"icon": 5487,
"classjob": 18
},
{
"id": 50273,
"name": "Hellfishing",
"icon": 5489,
"classjob": 18
},
{
"id": 50274,
"name": "Aetherfishing",
"icon": 5490,
"classjob": 18
},
{
"id": 50275,
"name": "Enhanced Vitality",
"icon": 5130,
"classjob": 32
},
{
"id": 50276,
"name": "Enhanced Shadowskin",
"icon": 6051,
"classjob": 32
},
{
"id": 50277,
"name": "Enhanced Vitality II",
"icon": 5131,
"classjob": 32
},
{
"id": 50278,
"name": "Enhanced Scourge",
"icon": 6052,
"classjob": 32
},
{
"id": 50279,
"name": "Enhanced Vitality III",
"icon": 5132,
"classjob": 32
},
{
"id": 50280,
"name": "Clean Weapon",
"icon": 6053,
"classjob": 32
},
{
"id": 50281,
"name": "Low Blows",
"icon": 6054,
"classjob": 32
},
{
"id": 50282,
"name": "Hasty Reprisal",
"icon": 6055,
"classjob": 32
},
{
"id": 50283,
"name": "Enhanced Unmend",
"icon": 6056,
"classjob": 32
},
{
"id": 50284,
"name": "Enhanced Dark Dance",
"icon": 6057,
"classjob": 32
},
{
"id": 50285,
"name": "Soul Devourer",
"icon": 6058,
"classjob": 32
},
{
"id": 50286,
"name": "Enhanced Dexterity",
"icon": 5120,
"classjob": 31
},
{
"id": 50287,
"name": "Enhanced Reassemble",
"icon": 6001,
"classjob": 31
},
{
"id": 50288,
"name": "Enhanced Dexterity II",
"icon": 5121,
"classjob": 31
},
{
"id": 50289,
"name": "Increased Action Damage",
"icon": 6002,
"classjob": 31
},
{
"id": 50290,
"name": "Enhanced Dexterity III",
"icon": 5122,
"classjob": 31
},
{
"id": 50291,
"name": "Lodged Lead",
"icon": 6004,
"classjob": 31
},
{
"id": 50292,
"name": "Quicker Reload",
"icon": 6005,
"classjob": 31
},
{
"id": 50293,
"name": "Enhanced Spread Shot",
"icon": 6006,
"classjob": 31
},
{
"id": 50294,
"name": "Increased Action Damage II",
"icon": 6003,
"classjob": 31
},
{
"id": 50295,
"name": "Enhanced Rapid Fire",
"icon": 6007,
"classjob": 31
},
{
"id": 50296,
"name": "Enhanced Wildfire",
"icon": 6008,
"classjob": 31
},
{
"id": 50297,
"name": "Enhanced Mind",
"icon": 5150,
"classjob": 33
},
{
"id": 50298,
"name": "Enhanced Mind II",
"icon": 5151,
"classjob": 33
},
{
"id": 50299,
"name": "Enhanced Lightspeed",
"icon": 6101,
"classjob": 33
},
{
"id": 50300,
"name": "Magick And Mend",
"icon": 6102,
"classjob": 33
},
{
"id": 50301,
"name": "Enhanced Mind III",
"icon": 5152,
"classjob": 33
},
{
"id": 50302,
"name": "Enhanced Ascension",
"icon": 6104,
"classjob": 33
},
{
"id": 50303,
"name": "Enhanced Benefic",
"icon": 6105,
"classjob": 33
},
{
"id": 50304,
"name": "Enhanced Essential Dignity",
"icon": 6106,
"classjob": 33
},
{
"id": 50305,
"name": "Magick And Mend II",
"icon": 6103,
"classjob": 33
},
{
"id": 50306,
"name": "Enhanced Disable",
"icon": 6107,
"classjob": 33
},
{
"id": 50307,
"name": "Enhanced Luminiferous Aether",
"icon": 6108,
"classjob": 33
},
{
"id": 50308,
"name": "Enhanced Between The Eyes",
"icon": 0,
"classjob": 31
},
{
"id": 50309,
"name": "Enhanced Between The Eyes II",
"icon": 0,
"classjob": 31
},
{
"id": 50310,
"name": "Enhanced Between The Eyes III",
"icon": 0,
"classjob": 31
},
{
"id": 50311,
"name": "Enhanced Stun Gun",
"icon": 0,
"classjob": 31
},
{
"id": 50312,
"name": "Enhanced Stun Gun II",
"icon": 0,
"classjob": 31
},
{
"id": 50313,
"name": "Enhanced Stun Gun III",
"icon": 0,
"classjob": 31
},
{
"id": 50314,
"name": "Enhanced Report",
"icon": 0,
"classjob": 31
},
{
"id": 50315,
"name": "Enhanced Report II",
"icon": 0,
"classjob": 31
},
{
"id": 50316,
"name": "Enhanced Retrogradation",
"icon": 0,
"classjob": 33
},
{
"id": 50317,
"name": "Enhanced Retrogradation II",
"icon": 0,
"classjob": 33
},
{
"id": 50318,
"name": "Enhanced Retrogradation III",
"icon": 0,
"classjob": 33
},
{
"id": 50319,
"name": "Enhanced Tar Pit",
"icon": 0,
"classjob": 32
},
{
"id": 50320,
"name": "Enhanced Tar Pit II",
"icon": 0,
"classjob": 32
},
{
"id": 50321,
"name": "Enhanced Tar Pit III",
"icon": 0,
"classjob": 32
},
{
"id": 50322,
"name": "Enhanced Carnal Chill",
"icon": 0,
"classjob": 32
},
{
"id": 50323,
"name": "Enhanced Carnal Chill II",
"icon": 0,
"classjob": 32
},
{
"id": 50324,
"name": "Enhanced Carnal Chill III",
"icon": 0,
"classjob": 32
},
{
"id": 50325,
"name": "Enhanced Push Back",
"icon": 0,
"classjob": 1
},
{
"id": 50326,
"name": "Enhanced Push Back II",
"icon": 0,
"classjob": 1
},
{
"id": 50327,
"name": "Enhanced Push Back III",
"icon": 0,
"classjob": 1
},
{
"id": 50328,
"name": "Enhanced Wither II",
"icon": 0,
"classjob": 26
},
{
"id": 50329,
"name": "Enhanced Glory Slash III",
"icon": 0,
"classjob": 1
},
{
"id": 100001,
"name": "Basic Synthesis",
"icon": 1501,
"classjob": 8
},
{
"id": 100002,
"name": "Basic Touch",
"icon": 1502,
"classjob": 8
},
{
"id": 100003,
"name": "Master's Mend",
"icon": 1507,
"classjob": 8
},
{
"id": 100004,
"name": "Standard Touch",
"icon": 1516,
"classjob": 8
},
{
"id": 100005,
"name": "Master's Mend II",
"icon": 1520,
"classjob": 8
},
{
"id": 100006,
"name": "Brand of Wind",
"icon": 1509,
"classjob": 8
},
{
"id": 100007,
"name": "Standard Synthesis",
"icon": 1515,
"classjob": 8
},
{
"id": 100008,
"name": "Advanced Touch",
"icon": 1517,
"classjob": 8
},
{
"id": 100009,
"name": "Byregot's Blessing",
"icon": 1521,
"classjob": 8
},
{
"id": 100010,
"name": "Observe",
"icon": 1518,
"classjob": 8
},
{
"id": 100015,
"name": "Basic Synthesis",
"icon": 1551,
"classjob": 9
},
{
"id": 100016,
"name": "Basic Touch",
"icon": 1552,
"classjob": 9
},
{
"id": 100017,
"name": "Master's Mend",
"icon": 1557,
"classjob": 9
},
{
"id": 100018,
"name": "Standard Touch",
"icon": 1566,
"classjob": 9
},
{
"id": 100019,
"name": "Master's Mend II",
"icon": 1570,
"classjob": 9
},
{
"id": 100020,
"name": "Brand of Fire",
"icon": 1559,
"classjob": 9
},
{
"id": 100021,
"name": "Standard Synthesis",
"icon": 1565,
"classjob": 9
},
{
"id": 100022,
"name": "Advanced Touch",
"icon": 1567,
"classjob": 9
},
{
"id": 100023,
"name": "Observe",
"icon": 1568,
"classjob": 9
},
{
"id": 100030,
"name": "Basic Synthesis",
"icon": 1601,
"classjob": 10
},
{
"id": 100031,
"name": "Basic Touch",
"icon": 1602,
"classjob": 10
},
{
"id": 100032,
"name": "Master's Mend",
"icon": 1607,
"classjob": 10
},
{
"id": 100033,
"name": "Rapid Synthesis",
"icon": 1619,
"classjob": 10
},
{
"id": 100034,
"name": "Standard Touch",
"icon": 1616,
"classjob": 10
},
{
"id": 100035,
"name": "Master's Mend II",
"icon": 1621,
"classjob": 10
},
{
"id": 100036,
"name": "Brand of Ice",
"icon": 1609,
"classjob": 10
},
{
"id": 100037,
"name": "Standard Synthesis",
"icon": 1615,
"classjob": 10
},
{
"id": 100038,
"name": "Advanced Touch",
"icon": 1617,
"classjob": 10
},
{
"id": 100039,
"name": "Piece by Piece",
"icon": 1622,
"classjob": 10
},
{
"id": 100040,
"name": "Observe",
"icon": 1618,
"classjob": 10
},
{
"id": 100045,
"name": "Basic Synthesis",
"icon": 1701,
"classjob": 12
},
{
"id": 100046,
"name": "Basic Touch",
"icon": 1702,
"classjob": 12
},
{
"id": 100047,
"name": "Master's Mend",
"icon": 1707,
"classjob": 12
},
{
"id": 100048,
"name": "Standard Touch",
"icon": 1716,
"classjob": 12
},
{
"id": 100049,
"name": "Master's Mend II",
"icon": 1720,
"classjob": 12
},
{
"id": 100050,
"name": "Brand of Earth",
"icon": 1709,
"classjob": 12
},
{
"id": 100051,
"name": "Standard Synthesis",
"icon": 1715,
"classjob": 12
},
{
"id": 100052,
"name": "Advanced Touch",
"icon": 1717,
"classjob": 12
},
{
"id": 100053,
"name": "Observe",
"icon": 1718,
"classjob": 12
},
{
"id": 100060,
"name": "Basic Synthesis",
"icon": 1751,
"classjob": 13
},
{
"id": 100061,
"name": "Basic Touch",
"icon": 1752,
"classjob": 13
},
{
"id": 100062,
"name": "Master's Mend",
"icon": 1757,
"classjob": 13
},
{
"id": 100063,
"name": "Careful Synthesis",
"icon": 1768,
"classjob": 13
},
{
"id": 100064,
"name": "Standard Touch",
"icon": 1765,
"classjob": 13
},
{
"id": 100065,
"name": "Master's Mend II",
"icon": 1770,
"classjob": 13
},
{
"id": 100066,
"name": "Brand of Lightning",
"icon": 1758,
"classjob": 13
},
{
"id": 100067,
"name": "Standard Synthesis",
"icon": 1764,
"classjob": 13
},
{
"id": 100068,
"name": "Advanced Touch",
"icon": 1766,
"classjob": 13
},
{
"id": 100069,
"name": "Careful Synthesis II",
"icon": 1771,
"classjob": 13
},
{
"id": 100070,
"name": "Observe",
"icon": 1767,
"classjob": 13
},
{
"id": 100075,
"name": "Basic Synthesis",
"icon": 1651,
"classjob": 11
},
{
"id": 100076,
"name": "Basic Touch",
"icon": 1652,
"classjob": 11
},
{
"id": 100077,
"name": "Master's Mend",
"icon": 1657,
"classjob": 11
},
{
"id": 100078,
"name": "Standard Touch",
"icon": 1665,
"classjob": 11
},
{
"id": 100079,
"name": "Master's Mend II",
"icon": 1670,
"classjob": 11
},
{
"id": 100080,
"name": "Standard Synthesis",
"icon": 1664,
"classjob": 11
},
{
"id": 100081,
"name": "Advanced Touch",
"icon": 1666,
"classjob": 11
},
{
"id": 100082,
"name": "Observe",
"icon": 1667,
"classjob": 11
},
{
"id": 100083,
"name": "Flawless Synthesis",
"icon": 1673,
"classjob": 11
},
{
"id": 100090,
"name": "Basic Synthesis",
"icon": 1801,
"classjob": 14
},
{
"id": 100091,
"name": "Basic Touch",
"icon": 1802,
"classjob": 14
},
{
"id": 100092,
"name": "Master's Mend",
"icon": 1807,
"classjob": 14
},
{
"id": 100093,
"name": "Standard Touch",
"icon": 1816,
"classjob": 14
},
{
"id": 100094,
"name": "Master's Mend II",
"icon": 1821,
"classjob": 14
},
{
"id": 100095,
"name": "Brand of Water",
"icon": 1809,
"classjob": 14
},
{
"id": 100096,
"name": "Standard Synthesis",
"icon": 1815,
"classjob": 14
},
{
"id": 100097,
"name": "Advanced Touch",
"icon": 1817,
"classjob": 14
},
{
"id": 100098,
"name": "Tricks of the Trade",
"icon": 1819,
"classjob": 14
},
{
"id": 100099,
"name": "Observe",
"icon": 1818,
"classjob": 14
},
{
"id": 100105,
"name": "Basic Synthesis",
"icon": 1851,
"classjob": 15
},
{
"id": 100106,
"name": "Basic Touch",
"icon": 1852,
"classjob": 15
},
{
"id": 100107,
"name": "Master's Mend",
"icon": 1857,
"classjob": 15
},
{
"id": 100108,
"name": "Hasty Touch",
"icon": 1868,
"classjob": 15
},
{
"id": 100109,
"name": "Standard Touch",
"icon": 1865,
"classjob": 15
},
{
"id": 100110,
"name": "Master's Mend II",
"icon": 1870,
"classjob": 15
},
{
"id": 100111,
"name": "Standard Synthesis",
"icon": 1864,
"classjob": 15
},
{
"id": 100112,
"name": "Advanced Touch",
"icon": 1866,
"classjob": 15
},
{
"id": 100113,
"name": "Observe",
"icon": 1867,
"classjob": 15
},
{
"id": 100120,
"name": "Byregot's Brow",
"icon": 1523,
"classjob": 8
},
{
"id": 100121,
"name": "Byregot's Brow",
"icon": 1573,
"classjob": 9
},
{
"id": 100122,
"name": "Byregot's Brow",
"icon": 1624,
"classjob": 10
},
{
"id": 100123,
"name": "Byregot's Brow",
"icon": 1675,
"classjob": 11
},
{
"id": 100124,
"name": "Byregot's Brow",
"icon": 1723,
"classjob": 12
},
{
"id": 100125,
"name": "Byregot's Brow",
"icon": 1773,
"classjob": 13
},
{
"id": 100126,
"name": "Byregot's Brow",
"icon": 1824,
"classjob": 14
},
{
"id": 100127,
"name": "Byregot's Brow",
"icon": 1874,
"classjob": 15
},
{
"id": 100128,
"name": "Precise Touch",
"icon": 1524,
"classjob": 8
},
{
"id": 100129,
"name": "Precise Touch",
"icon": 1574,
"classjob": 9
},
{
"id": 100130,
"name": "Precise Touch",
"icon": 1625,
"classjob": 10
},
{
"id": 100131,
"name": "Precise Touch",
"icon": 1676,
"classjob": 11
},
{
"id": 100132,
"name": "Precise Touch",
"icon": 1724,
"classjob": 12
},
{
"id": 100133,
"name": "Precise Touch",
"icon": 1774,
"classjob": 13
},
{
"id": 100134,
"name": "Precise Touch",
"icon": 1825,
"classjob": 14
},
{
"id": 100135,
"name": "Precise Touch",
"icon": 1875,
"classjob": 15
},
{
"id": 100136,
"name": "Muscle Memory",
"icon": 1876,
"classjob": 15
},
{
"id": 100137,
"name": "Innovative Touch",
"icon": 1526,
"classjob": 8
},
{
"id": 100138,
"name": "Innovative Touch",
"icon": 1576,
"classjob": 9
},
{
"id": 100139,
"name": "Innovative Touch",
"icon": 1627,
"classjob": 10
},
{
"id": 100140,
"name": "Innovative Touch",
"icon": 1678,
"classjob": 11
},
{
"id": 100141,
"name": "Innovative Touch",
"icon": 1726,
"classjob": 12
},
{
"id": 100142,
"name": "Innovative Touch",
"icon": 1776,
"classjob": 13
},
{
"id": 100143,
"name": "Innovative Touch",
"icon": 1827,
"classjob": 14
},
{
"id": 100144,
"name": "Innovative Touch",
"icon": 1877,
"classjob": 15
},
{
"id": 100145,
"name": "Byregot's Miracle",
"icon": 1527,
"classjob": 8
},
{
"id": 100146,
"name": "Byregot's Miracle",
"icon": 1577,
"classjob": 9
},
{
"id": 100147,
"name": "Byregot's Miracle",
"icon": 1628,
"classjob": 10
},
{
"id": 100148,
"name": "Byregot's Miracle",
"icon": 1679,
"classjob": 11
},
{
"id": 100149,
"name": "Byregot's Miracle",
"icon": 1727,
"classjob": 12
},
{
"id": 100150,
"name": "Byregot's Miracle",
"icon": 1777,
"classjob": 13
},
{
"id": 100151,
"name": "Byregot's Miracle",
"icon": 1828,
"classjob": 14
},
{
"id": 100152,
"name": "Byregot's Miracle",
"icon": 1878,
"classjob": 15
},
{
"id": 100153,
"name": "Nymeia's Wheel",
"icon": 1531,
"classjob": 8
},
{
"id": 100154,
"name": "Nymeia's Wheel",
"icon": 1581,
"classjob": 9
},
{
"id": 100155,
"name": "Nymeia's Wheel",
"icon": 1632,
"classjob": 10
},
{
"id": 100156,
"name": "Nymeia's Wheel",
"icon": 1683,
"classjob": 11
},
{
"id": 100157,
"name": "Nymeia's Wheel",
"icon": 1731,
"classjob": 12
},
{
"id": 100158,
"name": "Nymeia's Wheel",
"icon": 1781,
"classjob": 13
},
{
"id": 100159,
"name": "Nymeia's Wheel",
"icon": 1832,
"classjob": 14
},
{
"id": 100160,
"name": "Nymeia's Wheel",
"icon": 1882,
"classjob": 15
},
{
"id": 100161,
"name": "Trained Hand",
"icon": 1532,
"classjob": 8
},
{
"id": 100162,
"name": "Trained Hand",
"icon": 1582,
"classjob": 9
},
{
"id": 100163,
"name": "Trained Hand",
"icon": 1633,
"classjob": 10
},
{
"id": 100164,
"name": "Trained Hand",
"icon": 1684,
"classjob": 11
},
{
"id": 100165,
"name": "Trained Hand",
"icon": 1732,
"classjob": 12
},
{
"id": 100166,
"name": "Trained Hand",
"icon": 1782,
"classjob": 13
},
{
"id": 100167,
"name": "Trained Hand",
"icon": 1833,
"classjob": 14
},
{
"id": 100168,
"name": "Trained Hand",
"icon": 1883,
"classjob": 15
},
{
"id": 100169,
"name": "Satisfaction",
"icon": 1530,
"classjob": 8
},
{
"id": 100170,
"name": "Satisfaction",
"icon": 1580,
"classjob": 9
},
{
"id": 100171,
"name": "Satisfaction",
"icon": 1631,
"classjob": 10
},
{
"id": 100172,
"name": "Satisfaction",
"icon": 1682,
"classjob": 11
},
{
"id": 100173,
"name": "Satisfaction",
"icon": 1730,
"classjob": 12
},
{
"id": 100174,
"name": "Satisfaction",
"icon": 1780,
"classjob": 13
},
{
"id": 100175,
"name": "Satisfaction",
"icon": 1831,
"classjob": 14
},
{
"id": 100176,
"name": "Satisfaction",
"icon": 1881,
"classjob": 15
},
{
"id": 100177,
"name": "Finishing Touches",
"icon": 1529,
"classjob": -1
},
{
"id": 100178,
"name": "Maker's Mark",
"icon": 1677,
"classjob": 11
},
{
"id": 100179,
"name": "Heart of the Carpenter",
"icon": 1533,
"classjob": 8
},
{
"id": 100180,
"name": "Heart of the Blacksmith",
"icon": 1533,
"classjob": 9
},
{
"id": 100181,
"name": "Heart of the Armorer",
"icon": 1533,
"classjob": 10
},
{
"id": 100182,
"name": "Heart of the Goldsmith",
"icon": 1533,
"classjob": 11
},
{
"id": 100183,
"name": "Heart of the Leatherworker",
"icon": 1533,
"classjob": 12
},
{
"id": 100184,
"name": "Heart of the Weaver",
"icon": 1533,
"classjob": 13
},
{
"id": 100185,
"name": "Heart of the Alchemist",
"icon": 1533,
"classjob": 14
},
{
"id": 100186,
"name": "Heart of the Culinarian",
"icon": 1533,
"classjob": 15
},
{
"id": 100187,
"name": "Whistle While You Work",
"icon": 1528,
"classjob": 8
},
{
"id": 100188,
"name": "Whistle While You Work",
"icon": 1578,
"classjob": 9
},
{
"id": 100189,
"name": "Whistle While You Work",
"icon": 1629,
"classjob": 10
},
{
"id": 100190,
"name": "Whistle While You Work",
"icon": 1680,
"classjob": 11
},
{
"id": 100191,
"name": "Whistle While You Work",
"icon": 1778,
"classjob": 12
},
{
"id": 100192,
"name": "Whistle While You Work",
"icon": 1728,
"classjob": 13
},
{
"id": 100193,
"name": "Whistle While You Work",
"icon": 1829,
"classjob": 14
},
{
"id": 100194,
"name": "Whistle While You Work",
"icon": 1879,
"classjob": 15
}
];

export default ActionList;