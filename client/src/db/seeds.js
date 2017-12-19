use space_oddity;
db.dropDatabase();

db.planets.insertMany([
  {
    name: 'Sun',
    radius: 401, // In pixels, 1 px = 3474.2 km.
    numMoons: 0,
    image: '\/images\/sun.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/6tmbeLTHC_0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 0, // In hours.
    yearLength: 0, // In Earth days.
    composition: [
      {name: "Hydrogen", y: 73.46}, // Percentages.
      {name: "Helium", y: 24.85},
      {name: "Oxygen", y: 0.77},
      {name: "Carbon", y: 0.29},
      {name: "Iron", y: 0.16},
      {name: "Neon", y: 0.12},
      {name: "Nitrogen", y: 0.09},
      {name: "Silicon", y: 0.07},
      {name: "Magnesium", y: 0.05},
      {name: "Sulfur", y: 0.04}
    ],
    distance: 0, // In pixels from the Sun.
    distanceFromLast: 140.5, // In pixels from last object.
    gravity: 27.94,// In g, Earth gravities.
    colour: '#fde301',
    homepageRadius: 150,
    volume: 1304000,
    mass: 333000,
    description: '<p>The Sun is the star at the centre of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometers, i.e. 109 times that of Earth, and its mass is about 330,000 times that of Earth, accounting for about 99.86% of the total mass of the Solar System. About three quarters of the Sun\'s mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon, and iron.</p>',
    quiz: {
      questions:[
        {
          question:"How is the magnetic field generated?",
          correctAnswer: "Internal convective motion",
          allAnswers: ["Radio frequency transmission", "Electrical conduction", "External convective motion", "Internal convective motion"]
        },
        {
          question:"How many Earths fit in the diameter?",
          correctAnswer: 109,
          allAnswers: [1, 23, 406, 109]
        },
        {
          question:"Which gas makes up most of the Sun?",
          correctAnswer: "Hydrogen",
          allAnswers: ["Methane", "Oxygen", "Helium", "Hydrogen"]
        },
        {
          question:"How many Earths make up the Sun\'s mass?",
          correctAnswer: 333000,
          allAnswers: [555000, 222000, 444000, 333000]
        },
        {
          question:"How many Earths fit inside the Sun?",
          correctAnswer: 1304000,
          allAnswers: [5, 14030000, 1500000, 1304000]
        }
      ]
  }
  },
  {
    name: 'Mercury',
    radius: 1.5,
    numMoons: 0,
    image: '\/images\/mercury.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/m3ZUhpisWeQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 1408,
    yearLength: 88,
    composition: [
      {name: "Oxygen", y: 42},
      {name: "Sodium", y: 29},
      {name: "Hydrogen", y: 22},
      {name: "Helium", y: 6},
      {name: "Potassium", y: 0.5},
      {name: "Others", y: 0.5}
    ],
    distance: 16713,
    distanceFromLast: 16713,
    gravity: 0.38,
    colour: '#ffcc00',
    homepageRadius: 15,
    volume: 0.06,
    mass: 0.06,
    description: 'Mercury is the smallest planet in the Solar System. It is the closest planet to the sun. It makes one trip around the Sun once every 87.969 days. Mercury is bright when it is visible from Earth, ranging from −2.0 to 5.5 in apparent magnitude. It cannot be easily seen as it is usually too close to the Sun. Because Mercury is normally lost in the glare of the Sun (except during a solar eclipse), Mercury can only be seen in the morning or evening twilight.',
    quiz: {
      questions:[
        {
          question:"How long is a day on Mercury in Earth hours?",
          correctAnswer: 1408,
          allAnswers: [1504, 1, 1306, 1408]
        },
        {
          question:"How long is a year on Mercury in Earth days?",
          correctAnswer: 88,
          allAnswers: [66, 77, 99, 88]
        },
        {
          question:"When is the best time to see Mercury?",
          correctAnswer: "During a Solar Eclipse",
          allAnswers: ["At night", "Winter time", "Anytime", "During a Solar Eclipse"]
        },
        {
          question:"Which gas makes up most of Mercury\'s atmosphere?",
          correctAnswer: "Oxygen",
          allAnswers: ["Methane", "Helium", "Hydrogen", "Oxygen"]
        },
        {
          question:"How many Mercury days are there in a Mercury year?",
          correctAnswer: "0.5",
          allAnswers: ["417", "29", "203", "0.5"]
        }
      ]
    }
  },
  {
    name: 'Venus',
    radius: 3.5,
    numMoons: 0,
    image: '\/images\/venus.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/yzqbN6z8ncc?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 5832,
    yearLength: 225,
    composition: [
      {name: "Carbon Dioxide", y: 96.5},
      {name: "Nitrogen", y: 3.5}
    ],
    distance: 31230,
    distanceFromLast: 14517,
    gravity: 0.904,
    colour: '#86ffca',
    homepageRadius: 35,
    volume: 0.87,
    mass: 0.82,
    description: 'Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 days) of any planet in the Solar System and rotates in the opposite direction to most other planets. It has no natural satellites. It is named after the Roman goddess of love and beauty. It is the second-brightest natural object in the night sky after the Moon, reaching an apparent magnitude of −4.6 – bright enough to cast shadows at night and, rarely, visible to the naked eye in broad daylight. Orbiting within Earth\'s orbit, Venus is an inferior planet and never appears to venture far from the Sun; its maximum angular distance from the Sun (elongation) is 47.8°.',
    quiz: {
      questions:[
        {
          question:"What makes Venus unique in the Solar System?",
          correctAnswer: "It has the longest rotation period",
          allAnswers: ["It is red", "It is the biggest planet", "It has the shortest day", "It has the longest rotation period"]
        },
        {
          question:"Venus is named after the Roman Goddess of?",
          correctAnswer: "Love and beauty",
          allAnswers: ["Thunder and lightning", "Lost animals", "War", "Love and beauty"]
        },
        {
          question:"How long is a day on Venus in Earth hours?",
          correctAnswer: "5832",
          allAnswers: [365, 15005, 24, 5832]
        },
        {
          question:"Which position is Venus from the sun?",
          correctAnswer: "2nd",
          allAnswers: ["4th", "3rd", "1st", "2nd"]
        },
        {
          question:"Who sent the first robotic space probe to Venus?",
          correctAnswer: "The Russians",
          allAnswers: ["The Americans", "The UK", "The Russians", "India"]
        }
      ]
    }
  },
  {
    name: 'Earth',
    radius: 3.5,
    numMoons: 1,
    image: '\/images\/earth.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/JrGuomu9NGY?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 24,
    yearLength: 365,
    composition: [
      {name: "Nitrogen", y: 78.1},
      {name: "Oxygen", y: 20.9},
      {name: "Argon", y: 0.93},
      {name: "Carbon Dioxide", y: 0.04}
    ],
    distance: 43060,
    distanceFromLast: 11830,
    gravity: 1,
    colour: '#01fdfa',
    homepageRadius: 35,
    volume: 1,
    mass: 1,
    description: 'Earth is the third planet from the Sun and the only object in the Universe known to harbour life. According to radiometric dating and other sources of evidence, Earth formed over 4 billion years ago. Earth\'s gravity interacts with other objects in space, especially the Sun and the Moon, Earth\'s only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year. During this time, Earth rotates about its axis about 366.26 times.',
    quiz: {
      questions:[
        {
          question:"How long ago was the Earth formed?",
          correctAnswer: "4 Billion years",
          allAnswers: ["500 BC", "It\'s always been there", "Yesterday", "4 Billion years"]
        },
        {
          question:"What makes the Earth unique?",
          correctAnswer: "It harbours life",
          allAnswers: ["It\'s the biggest planet", "It has clouds", "It is blue", "It harbours life"]
        },
        {
          question:"Which gas makes up most of the atmsophere?",
          correctAnswer: "Nitrogen",
          allAnswers: ["Methane", "Oxygen", "Helium", "Nitrogen"]
        },
        {
          question:"How many moons does the Earth have?",
          correctAnswer: 1,
          allAnswers: [11, 25, 4, 1]
        },
        {
          question:"What shape is the Earth?",
          correctAnswer: 'a Sphere',
          allAnswers: ['a Disc', 'a Square', 'a Circle', 'a Sphere']
        }
      ]
    }
  },
  {
    name: 'Moon',
    radius: 1,
    numMoons: 0,
    image: '\/images\/moon.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/2iSZMv64wuU?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 648,
    yearLength: 27,
    composition: [{name: "Cheese", y: 100, color: "yellow"}],
    distance: 43171, // When furthest from sun around Earth.
    distanceFromLast: 111,
    gravity: 0.165,
    colour: 'grey',
    homepageRadius: 10,
    volume: 0.02,
    mass: 0.01,
    description: 'The Moon is an astronomical body that orbits planet Earth, being Earth\'s only permanent natural satellite. It is the fifth-largest natural satellite in the Solar System, and the largest among planetary satellites relative to the size of the planet that it orbits (its primary). Following Jupiter\'s satellite Io, the Moon is second-densest satellite among those whose densities are known. The Moon is thought to have formed about 4.51 billion years ago, not long after Earth. The most widely accepted explanation is that the Moon formed from the debris left over after a giant impact between Earth and a Mars-sized body called Theia.',
    quiz: {
      questions:[
        {
          question:"What is the moon\'s parent planet?",
          correctAnswer: "Earth",
          allAnswers: ["Saturn", "Venus", "Mars", "Earth"]
        },
        {
          question:"How old is the moon?",
          correctAnswer: "4.51 Billion years",
          allAnswers: ["1000 years", "5.41 Billion years", "100 years", "4.51 Billion years"]
        },
        {
          question:"How was the moon formed",
          correctAnswer: "Giant impact between a body and the Earth",
          allAnswers: ["Black hole", "It\'s a rogue asteroid", "Cut from cheese", "Giant impact between a body and the Earth"]
        },
        {
          question:"Which is the only satellite denser than the moon?",
          correctAnswer: "Io",
          allAnswers: ["Phobos", "Europa", "Titan", "Io"]
        },
        {
          question:"How far does the Moon move away from Earth every year?",
          correctAnswer: "3.8cm",
          allAnswers: ['3.8cm', '50cm', '2metres', '0.2mm']
        }
      ]
    }
  },
  {
    name: 'Mars',
    radius: 2,
    numMoons: 2,
    image: '\/images\/mars.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/NXbCNAIIAxw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 25,
    yearLength: 687,
    composition: [
      {name: "Carbon Dioxide", y: 95.97},
      {name: "Argon", y: 1.93},
      {name: "Nitrogen", y: 1.89},
      {name: "Oxygen", y: 0.15},
      {name: "Carbon Monoxide", y: 0.06}
    ],
    distance: 65786,
    distanceFromLast: 22615,
    gravity: 0.376,
    colour: '#ff7443',
    homepageRadius: 20,
    volume: 0.15,
    mass: 0.11,
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet" because the reddish iron oxide prevalent on its surface gives it a reddish appearance that is distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.',
    quiz: {
      questions:[
        {
          question:"What colour is Mars?",
          correctAnswer: "Red",
          allAnswers: ["Yellow", "Green", "Blue", "Red"]
        },
        {
          question:"Mars is named after the Roman god of?",
          correctAnswer: "War",
          allAnswers: ["Dogs", "Love", "Peace", "War"]
        },
        {
          question:"What is formed at the polar extremes of Mars?",
          correctAnswer: "Ice",
          allAnswers: ["Methane", "Pyramids", "Grass", "Ice"]
        },
        {
          question:"What compound gives Mars it\'s colour?",
          correctAnswer: "Iron oxide",
          allAnswers: ["Rainbow", "Paint", "Carbon dioxide", "Iron oxide"]
        },
        {
          question:"How many moons does Mars have?",
          correctAnswer: 2,
          allAnswers: [0, 1, 2, 3]
        }
      ]
    }
  },
  {
    name: 'Jupiter',
    radius: 40,
    numMoons: 53,
    image: '\/images\/jupiter.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/aFnNCwTkYo8?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 10,
    yearLength: 4333,
    composition: [
      {name: "Hydrogen", y: 92},
      {name: "Helium", y: 8}
    ],
    distance: 224101,
    distanceFromLast: 158315,
    gravity: 2.528,
    colour: '#ffa043' ,
    homepageRadius: 80,
    volume: 1321,
    mass: 318,
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter and Saturn are gas giants; the other two giant planets, Uranus and Neptune are ice giants. Jupiter has been known to astronomers since antiquity. The Romans named it after their god Jupiter. When viewed from Earth, Jupiter can reach an apparent magnitude of −2.94, bright enough for its reflected light to cast shadows, and making it on average the third-brightest object in the night sky after the Moon and Venus.',
    quiz: {
      questions:[
        {
          question:"What makes Jupiter unique?",
          correctAnswer: "It\'s the largest planet in the solar system",
          allAnswers: ["It\'s made of chocolate", "It\'s the only planet in the solar system", "It\'s the lightest planet in the solar system", "It\'s the largest planet in the solar system"]
        },
        {
          question:"Jupiter is known as...?",
          correctAnswer: "A gas giant",
          allAnswers: ["An asteroid", "An ice giant", "A dwarf planet", "A gas giant"]
        },
        {
          question:"Who named Jupiter after one of their Gods?",
          correctAnswer: "The Romans",
          allAnswers: ["The Americans", "The Egyptians", "The Mayans", "The Romans"]
        },
        {
          question:"How long is a day on Jupiter in Earth hours?",
          correctAnswer: 10,
          allAnswers: [110, 24, 365, 10]
        },
        {
          question:"How many moons does Jupiter have?",
          correctAnswer: 69,
          allAnswers: [12, 137, 69, 58]
        }
      ]
    }
  },
  {
    name: 'Saturn',
    radius: 33.5,
    numMoons: 53,
    image: '\/images\/saturn.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/AyFMPdHU1n0?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 11,
    yearLength: 10756,
    composition: [
      {name: "Hydrogen", y: 96.3},
      {name: "Helium", y: 3.25},
      {name: "Methane", y: 0.45}
    ],
    distance: 412620,
    distanceFromLast: 188519,
    gravity: 1.065,
    colour: '#f9d293',
    homepageRadius: 67,
    volume: 764,
    mass: 96,
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth, but with its larger volume Saturn is over 95 times more massive. Saturn is named after the Roman god of agriculture; its astronomical symbol represents the god\'s sickle.',
    quiz: {
      questions:[
        {
          question:"Which object does the astronomical symbol of Saturn represent?",
          correctAnswer: "Saturn\'s sickle",
          allAnswers: ["Saturn\'s inflatable whale", "Saturn\'s rake", "Saturn\'s hammer", "Saturn\'s sickle"]
        },
        {
          question:"What number from the sun is Saturn?",
          correctAnswer: "6th",
          allAnswers: ["9th", "4th", "5th", "6th"]
        },
        {
          question:"Which gas is Saturn mostly made of?",
          correctAnswer: "Hydrogen",
          allAnswers: ["Methane", "Oxygen", "Helium", "Hydrogen"]
        },
        {
          question:"Which planet is bigger than Saturn?",
          correctAnswer: "Jupiter",
          allAnswers: ["Pluto", "Mars", "Earth", "Jupiter"]
        },
        {
          question:"What shape is the cloud at the north pole of Saturn?",
          correctAnswer: "Hexagon",
          allAnswers: ["Circle", "Square", "Hexagon", "Ellipse"]
        }
      ]
    }
  },
  {
    name: 'Uranus',
    radius: 14.5,
    numMoons: 27,
    image: '\/images\/uranus.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/_aRAoM1i0D4?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 17,
    yearLength: 30687,
    composition: [
      {name: "Hydrogen", y: 83},
      {name: "Helium", y: 15},
      {name: "Methane", y: 2}
    ],
    distance: 829831,
    distanceFromLast: 417211,
    gravity: 0.89,
    colour: '#18E6FF',
    homepageRadius: 29,
    volume: 63,
    mass: 15,
    description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as "ice giants" to distinguish them from the gas giants. Uranus\'s atmosphere is similar to Jupiter\'s and Saturn\'s in its primary composition of hydrogen and helium, but it contains more "ices" such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds.The interior of Uranus is mainly composed of ices and rock.',
    quiz: {
      questions:[
        {
          question:"What makes Uranus unique?",
          correctAnswer: "It has the coldest atmosphere",
          allAnswers: ["It has no atmosphere", "It has the thinnest atmosphere", "It has the hottest atmosphere", "It has the coldest atmosphere"]
        },
        {
          question:"What is Uranus popularly known as?",
          correctAnswer: "An ice giant",
          allAnswers: ["A dwarf planet", "A jolly green giant", "A gas giant", "An ice giant"]
        },
        {
          question:"Which gas makes up most of Uranus?",
          correctAnswer: "Hydrogen",
          allAnswers: ["Methane", "Oxygen", "Helium", "Hydrogen"]
        },
        {
          question:"How many moons does Uranus have?",
          correctAnswer: 27,
          allAnswers: [2, 120, 30, 27]
        },
        {
          question:"Where does the word Uranus come from?",
          correctAnswer: 'Greek',
          allAnswers: ['Greek', 'Roman', 'Sanskrit', 'Sumerian']
        }
      ]
    }
  },
  {
    name: 'Neptune',
    radius: 14,
    numMoons: 13,
    image: '\/images\/neptune.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/faKnto4Pb6c?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 16,
    yearLength: 60190,
    composition: [
      {name: "Hydrogen", y: 80},
      {name: "Helium", y: 19},
      {name: "Methane", y: 1}
    ],
    distance: 1300443,
    distanceFromLast: 470612,
    gravity: 1.14,
    colour: '#45B9FF',
    homepageRadius: 28,
    volume: 58,
    mass: 17,
    description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth and slightly larger than Neptune. Neptune orbits the Sun once every 164.8 years at an average distance of 30.1 astronomical units (4.50 billion km). It is named after the Roman god of the sea and its astronomical symbol represents a stylised version of the god Neptune\'s trident.',
    quiz: {
      questions:[
        {
          question:"What makes Neptune unique?",
          correctAnswer: "It is the densest giant planet",
          allAnswers: ["It is the warmest giant planet", "It is the greenest giant planet", "It is the largest giant planet", "It is the densest giant planet"]
        },
        {
          question:"How far is Neptune from the sun?",
          correctAnswer: "4.50 Billion km",
          allAnswers: ["100 Million km", "3.6 Million km", "5.40 Billion km", "4.50 Billion km"]
        },
        {
          question:"How long is a day on Neptune in Earth hours?",
          correctAnswer: 16,
          allAnswers: [4, 300, 24, 16]
        },
        {
          question:"What is Neptune\'s symbol?",
          correctAnswer: "Trident",
          allAnswers: ["Fishing rod", "Hammer", "Sickle", "Trident"]
        },
        {
          question:"How was Neptune discovered?",
          correctAnswer: "Mathematical prediction",
          allAnswers: ["Telescopic Observation", "Astrology", "Mathematical prediction", "Unaided Observation"]
        }
      ]
    }
  },
  {
    name: 'Pluto',
    radius: 0.5,
    numMoons: 5,
    image: '\/images\/pluto.png',
    youtubeEmbed: '<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/-iZio70bd-M?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>',
    dayLength: 154,
    yearLength: 90520,
    composition: [
      {name: "Nitrogen", y: 90},
      {name: "Methane", y: 10}
    ],
    distance: 1704630,
    distanceFromLast: 404187,
    gravity: 0.063,
    colour: '#D9F5FF',
    homepageRadius: 5,
    volume: 0.01,
    mass: 0.002,
    description: 'Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in the Kuiper belt, a ring of bodies beyond Neptune. It was the first Kuiper belt object to be discovered. Pluto was discovered by Clyde Tombaugh in 1930 and was originally considered to be the ninth planet from the Sun. After 1992, its status as a planet was questioned following the discovery of several objects of similar size in the Kuiper belt. In 2005, Eris, a dwarf planet in the scattered disc which is 27% more massive than Pluto, was discovered. This led the International Astronomical Union (IAU) to define the term "planet" formally in 2006, during their 26th General Assembly. That definition excluded Pluto and reclassified it as a dwarf planet.',
    quiz: {
      questions:[
        {
          question:"What is Pluto known as?",
          correctAnswer: "A dwarf planet",
          allAnswers: ["An asteroid", "An ice giant", "A gas giant", "A dwarf planet"]
        },
        {
          question:"What is the name of the body Pluto is a part of?",
          correctAnswer: "The Kuiper Belt",
          allAnswers: ["The Interstellar Belt", "The Van Alan Belt", "The Asteroid Belt", "The Kuiper Belt"]
        },
        {
          question:"Who discovered Pluto?",
          correctAnswer: "Clyde Tombaugh",
          allAnswers: ["Simon Cowell", "Walt Disney", "Arthur C Clarke", "Clyde Tombaugh"]
        },
        {
          question:"When did Pluto cease to be known as a planet?",
          correctAnswer: 2006,
          allAnswers: [1986, 1935, 2017, 2006]
        },
        {
          question:"How much of Pluto is water?",
          correctAnswer: 'a third',
          allAnswers: ['half', 'a third', 'a quarter', 'none']
        }
      ]
    }
  }
]);
