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
    "id": 1,
    "genres": ["Action"],
    "rating": {
      "average": 8.8
    }
  },
  {
    "id": 2,
    "genres": ["Drama"],
    "rating": {
      "average": 8.2
    }
  },
]

const showsData = [{
  "id": 1,
  "genres": ["Action"],
  "rating": {
    "average": 8.8
  }
},
{
  "id": 2,
  "genres": ["Drama"],
  "rating": {
    "average": 8.1
  }
}
]

const mockedFilterGenres = [
  {
    genreName: 'Action', showsList: [{
      "id": 1,
      "genres": ["Action"],
      "rating": {
        "average": 8.8
      }
    },]
  },
  {
    genreName: 'Drama', showsList: [{
      "id": 2,
      "genres": ["Drama"],
      "rating": {
        "average": 8.1
      }
    },]
  }
]

const popularShows = [
  {
    "id": 1,
    "genres": ["Action"],
    "rating": {
      "average": 8.8
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


export { showsData, mockedShowData, mockedCastData, mockedShowsDataArray, mockImageData, mockedFilterGenres, popularShows };