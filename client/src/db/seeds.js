use space_oddity;
db.dropDatabase();

db.planets.insertMany([
  {
    name: 'Sun',
    radius: 401, // In pixels, 1 px = 3474.2 km.
    numMoons: 0,
    image: '\/images\/mercury.png',
    dayLength: 0, // In hours.
    yearLength: 0, // In Earth days.
    composition: {
      Hydrogen: 73.46, // Percentages.
      Helium: 24.85,
      Oxygen: 0.77,
      Carbon: 0.29,
      Iron: 0.16,
      Neon: 0.12,
      Nitrogen: 0.09,
      Silicon: 0.07,
      Magnesium: 0.05,
      Sulfur: 0.04,
    },
    distance: 0, // In pixels from the sun.
    gravity: 27.94 // In g, Earth gravities.
  },
  {
    name: 'Mercury',
    radius: 1.5,
    numMoons: 0,
    image: '\/images\/mercury.png',
    dayLength: 1408,
    yearLength: 88,
    composition: {
      Oxygen: 42,
      Sodium: 29,
      Hydrogen: 22,
      Helium: 6,
      Potassium: 0.5,
      Others: 0.5
    },
    distance: 16713,
    gravity: 0.38,
  },
  {
    name: 'Venus',
    radius: 3.5,
    numMoons: 0,
    image: '\/images\/venus.png',
    dayLength: 5832,
    yearLength: 225,
    composition: {
      Carbon_Dioxide: 96.5,
      Nitrogen: 3.5
    },
    distance: 31230,
    gravity: 0.904,
  },
  {
    name: 'Earth',
    radius: 3.5,
    numMoons: 1,
    image: '\/images\/earth.png',
    dayLength: 24,
    yearLength: 365,
    composition: {
      Nitrogen: 78.1,
      Oxygen: 20.9,
      Argon: 0.93,
      Carbon_Dioxide: 0.04
    },
    distance: 43060,
    gravity: 1,
  },
  {
    name: 'Moon',
    radius: 1,
    numMoons: 0,
    image: '\/images\/moon.png',
    dayLength: 648,
    yearLength: 27,
    composition: {
    },
    distance: 43171, // When furthest from sun around Earth.
    gravity: 0.165,
  },
  {
    name: 'Mars',
    radius: 2,
    numMoons: 2,
    image: '\/images\/mars.png',
    dayLength: 25,
    yearLength: 687,
    composition: {
      Carbon_Dioxide: 95.97,
      Argon: 1.93,
      Nitrogen: 1.89,
      Oxygen: 0.15,
      Carbon_Monoxide: 0.06
    },
    distance: 65786,
    gravity: 0.376,
  },
  {
    name: 'Jupiter',
    radius: 40,
    numMoons: 53,
    image: '\/images\/jupiter.png',
    dayLength: 10,
    yearLength: 4333,
    composition: {
      hydrogen: 92,
      helium: 8,
    },
    distance: 224101,
    gravity: 2.528,
  },
  {
    name: 'Saturn',
    radius: 33.5,
    numMoons: 53,
    image: '\/images\/saturn.png',
    dayLength: 11,
    yearLength: 10756,
    composition: {
      hydrogen: 96.3,
      helium: 3.25,
      methane: 0.45,
    },
    distance: 412620,
    gravity: 1.065,
  },
  {
    name: 'Uranus',
    radius: 14.5,
    numMoons: 27,
    image: '\/images\/uranus.png',
    dayLength: 17,
    yearLength: 30687,
    composition: {
      hydrogen: 83,
      helium: 15,
      methane: 2,
    },
    distance: 829831,
    gravity: 0.89,
  },
  {
    name: 'Neptune',
    radius: 14,
    numMoons: 13,
    image: '\/images\/neptune.png',
    dayLength: 16,
    yearLength: 60190,
    composition: {
      Hydrogen: 80,
      Helium: 19,
      Methane: 1
    },
    distance: 1300443,
    gravity: 1.14,
  },
  {
    name: 'Pluto',
    radius: 0.5,
    numMoons: 5,
    image: '\/images\/pluto.png',
    dayLength: 154,
    yearLength: 90520,
    composition: {
      Nitrogen: 90,
      Methane: 10,
    },
    distance: 1704630,
    gravity: 0.063,
  }
]);
