const mockedShowData = {
  id: 1,
  url: "http://www.tvmaze.com/shows/1/under-the-dome",
  name: "Under the Dome",
  type: "Scripted",
  language: "English",
  genres: ["Drama", "Science-Fiction", "Thriller"],
  status: "Ended",
  runtime: 60,
  premiered: "2013-06-24",
  officialSite: "http://www.cbs.com/shows/under-the-dome/",
  schedule: {
    time: "22:00",
    days: ["Thursday"]
  },
  rating: {
    average: 6.5
  },
  weight: 97,
  network: {
    id: 2,
    name: "CBS",
    country: {
      name: "United States",
      code: "US",
      timezone: "America/New_York"
    }
  },
  webChannel: null,
  externals: {
    tvrage: 25988,
    thetvdb: 264492,
    imdb: "tt1553656"
  },
  image: {
    medium:
      "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    original:
      "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
  },
  summary:
    "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
  updated: 1573667713,
  _links: {
    self: {
      href: "http://api.tvmaze.com/shows/1"
    },
    previousepisode: {
      href: "http://api.tvmaze.com/episodes/185054"
    }
  }
}

const mockedShowsDataArray = [
  {
    "id": 2,
    "url": "https://www.tvmaze.com/shows/2/person-of-interest",
    "name": "Person of Interest",
    "type": "Scripted",
    "language": "English",
    "genres": [
      "Action"
    ],
    "status": "Ended",
    "runtime": 60,
    "averageRuntime": 60,
    "premiered": "2011-09-22",
    "ended": "2016-06-21",
    "officialSite": "http://www.cbs.com/shows/person_of_interest/",
    "schedule": {
      "time": "22:00",
      "days": [
        "Tuesday"
      ]
    },
    "rating": {
      "average": 8.8
    },
    "weight": 98,
    "network": {
      "id": 2,
      "name": "CBS",
      "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
      },
      "officialSite": "https://www.cbs.com/"
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
      "tvrage": 28376,
      "thetvdb": 248742,
      "imdb": "tt1839578"
    },
    "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
    },
    "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    "updated": 1631565378,
    "_links": {
      "self": {
        "href": "https://api.tvmaze.com/shows/2"
      },
      "previousepisode": {
        "href": "https://api.tvmaze.com/episodes/659372"
      }
    }
  },
  {
    "id": 2,
    "url": "https://www.tvmaze.com/shows/2/person-of-interest",
    "name": "Person of Interest",
    "type": "Scripted",
    "language": "English",
    "genres": [
      "Action"
    ],
    "status": "Ended",
    "runtime": 60,
    "averageRuntime": 60,
    "premiered": "2011-09-22",
    "ended": "2016-06-21",
    "officialSite": "http://www.cbs.com/shows/person_of_interest/",
    "schedule": {
      "time": "22:00",
      "days": [
        "Tuesday"
      ]
    },
    "rating": {
      "average": 8.8
    },
    "weight": 98,
    "network": {
      "id": 2,
      "name": "CBS",
      "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
      },
      "officialSite": "https://www.cbs.com/"
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
      "tvrage": 28376,
      "thetvdb": 248742,
      "imdb": "tt1839578"
    },
    "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
    },
    "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    "updated": 1631565378,
    "_links": {
      "self": {
        "href": "https://api.tvmaze.com/shows/2"
      },
      "previousepisode": {
        "href": "https://api.tvmaze.com/episodes/659372"
      }
    }
  }
]


const mockedCastData = {
  character: {
    id: 1,
    name: "White"

  },
  person: {
    id: 2,
    birthday: "1956-03-07",
    gender: "Male",
    image: {
      medium: "https://static.tvmaze.com/uploads/images/medium_portrait/195/488839.jpg",
      original: "https://static.tvmaze.com/uploads/images/original_untouched/195/488839.jpg"
    },

  }

}

const mockImageData =
  [
    { "id": 890102, "type": "banner", "main": false, "resolutions": { "original": { "url": "https://static.tvmaze.com/uploads/images/original_untouched/358/895855.jpg", "width": 758, "height": 140 }, "medium": { "url": "https://static.tvmaze.com/uploads/images/medium_leaderboard/358/895855.jpg", "width": 758, "height": 140 } } }

  ]


export { mockedShowData, mockedCastData, mockedShowsDataArray, mockImageData };