const _ = require("lodash");

const zen = {
  "element": [
    "earth",
    "wind",
    "fire",
    "water"
  ],
  "bodyOfWater": [
    "sea",
    "ocean",
    "pond",
    "lake",
    "river",
    "holy water",
    "sacred seabed"
  ],
  "person": [
    "man",
    "woman",
    "boy",
    "girl",
    "{size} man",
    "{size} woman",
    "{size} boy",
    "{size} girl"
  ],
  "place": [
    "{bodyOfWater}",
    "mountain",
    "holy mountain",
    "tall mountain",
    "{element} mountain",
    "village",
    "forest",
    "wood",
    "woods",
    "field",
    "long grass",
    "grass {size} area",
    "{size} grass area",
    "plain",
    "{localPlace}"
  ],
  "time": [
    "morning",
    "noon",
    "afternoon",
    "night",
    "dawn",
    "dusk"
  ],
  "weather": [
    "sun",
    "rain",
    "fog",
    "snow",
    "hail",
    "storm"
  ],
  "weathery": [
    "sunny",
    "rainy",
    "foggy",
    "snowy"
  ],
  "weathering": [
    "raining",
    "snowing",
    "hailing",
    "storming"
  ],
  "size": [
    "small",
    "little",
    "big",
    "large",
    "tiny",
    "mini",
    "huge"
  ],
  "sense": [
    "see",
    "hear",
    "smell",
    "taste",
    "feel"
  ],
  "volumer": [
    "louder",
    "quieter",
    "silenter",
    "voice bigger"
  ],
  "lightness": [
    "dark",
    "light",
    "mid way between pitch black and pitch white"
  ],
  "verbing": [
    "walking",
    "sitting",
    "lying down",
    "playing",
    "eating",
    "running",
    "stopping",
    "jogging",
    "dying",
    "{sense}ing",
  ],
  "organ": [
    "thyroid",
    "trachea",
    "superior vena cava",
    "lung",
    "liver",
    "inferior vena cava",
    "gallbladder",
    "kidney",
    "ureter",
    "appendix",
    "bladder",
    "urethra",
    "aorta",
    "heart",
    "esophagus",
    "diaphragm",
    "aorta",
    "spleen",
    "stomach",
    "pancreas",
    "small intestine",
    "large intestine",
    "rectum"
  ],
  "localPlace": [
    "home",
    "house",
    "where you live",
    "where you are live",
    "shop",
    "super market",
    "{place}"
  ],
  "punctuation": [
    ".",
    ",",
    "....",
    ", . ,",
    " ,",
    " , . ",
    " .  ,"
  ]
};

const r = types => _.replace(_.sample(zen[_.flatten([types])]), /\{(\w+)\}/gi, _.rearg(r, [1]));

module.exports = () => _.replace(_.sample([
  "{person} like {element} {punctuation}",
  "i will hike {punctuation} on journey to {place} {punctuation}",
  "at {time} it is same as {time} {punctuation}",
  "discover who you are {punctuation} maybe perhap you really are just {person} {punctuation}",
  "quiet your {size} mind and your {weathery} soul will speak {punctuation}",
  "climb to top of {place} {punctuation} you will awakened {punctuation}",
  "the {volumer} you are become {punctuation} the more you can {sense} {punctuation}",
  "{person} stands in own shadow {punctuation} wonder why it {lightness} {punctuation}",
  "do not follow idea of other {punctuation} learn to listen to voice within you're {person} mind {punctuation}",
  "not thinking about anything it is zen {punctuation} once you know {punctuation} {verbing} {punctuation} {verbing} or {verbing} everything you do is zen {punctuation}",
  "if light in your {organ} you will find your way to {localPlace} {punctuation}",
  "when you reach the top of it {punctuation} the {place} {punctuation} more climbing {punctuation}",
  "stop think before speak {size} mind {punctuation}",
  "not to advance is to go {place} {punctuation}"
]), /\{(\w+)\}/gi, _.rearg(r, [1]));
