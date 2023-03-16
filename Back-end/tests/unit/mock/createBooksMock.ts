import * as json from '../../../db.json';

const createMockAll = [ { id: "640fe9898e99d59a9cb98047", ...json } ]

const foundBy = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
]

const filterByPeriod = [
  {
    "author": "Samuel Beckett",
    "country": "Republic of Ireland",
    "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
    "language": "French, English",
    "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    "pages": 256,
    "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
    "year": 1952
  },
]

export default {
  createMockAll,
  foundBy,
  filterByPeriod,
};