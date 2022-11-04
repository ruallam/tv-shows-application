import actions from '@/store/actions';
import showServices from '@/services/index';
import { mockedShowData, mockedCastData, mockImageData, mockedShowsDataArray } from '../mockedData/mocked-data'


const filteredArrayExpected = [
    {
        "genreName": "Action",
        "showsList": [
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
    }
]

jest.mock('@/services/index')
jest.mock('@/store/state.js')

describe("In Actions", () => {
    let commit;
    let dispatch;
    beforeAll(() => {
        commit = jest.fn(),
            dispatch = jest.fn()
    });

    it('it should dispatch filterShowsBasedOnGenres when getShows is called', async () => {
        await showServices.getShows.mockResolvedValue([mockedShowData])
        await actions.getShows({ commit, dispatch });
        expect(dispatch).toHaveBeenCalledWith('filterShowsBasedOnGenres', [mockedShowData])
    })

    it('it should commit SET_ERROR when there is error in getShows', async () => {
        const error = new Error("Async error");
        await showServices.getShows.mockRejectedValue(error)
        await actions.getShows({ commit, dispatch });
        expect(commit).toHaveBeenCalledWith('SET_ERROR', error)
    })

    it('it should dispatch sortGenreByName when filterShoesBasedOnGenres() is called', async () => {
        await actions.filterShowsBasedOnGenres({ dispatch }, mockedShowsDataArray);
        expect(dispatch).toHaveBeenCalledWith('sortGenreByName', filteredArrayExpected)
    })

    it('should commit SET_SHOW_CATEGORIEZED when sortGenreByName() is called', async () => {
        await actions.sortGenreByName({ commit }, { showsArrayList: [{ genreName: 'Action', showsList: [mockedShowData, mockedShowData] }, { genreName: 'Drama', showsList: [mockedShowData, mockedShowData] }], popularShows: [mockedShowData, mockedShowData] });
        expect(commit).toHaveBeenCalledWith('SET_SHOW_CATEGORIEZED', [{ genreName: 'Top 50 Shows', showsList: [mockedShowData, mockedShowData] }, { genreName: 'Action', showsList: [mockedShowData, mockedShowData] }, { genreName: 'Drama', showsList: [mockedShowData, mockedShowData] }])
    })

    it('it should commit SET_ERROR when there is error in getShowsById', async () => {
        const error = new Error("Async error");
        await showServices.getShowById.mockRejectedValue(error)
        await actions.getShowById({ commit, dispatch });
        expect(commit).toHaveBeenCalledWith('SET_ERROR', error)
    })

    it('should commit SET_SHOW when getShowById() is called', async () => {
        await showServices.getShowById.mockResolvedValue([mockedShowData])
        await actions.getShowById({ commit, dispatch });
        expect(commit).toHaveBeenCalledWith('SET_SHOW', [mockedShowData])
    })

    it('should commit SET_SEARCHEDSHOWS when getSearchResults() is called', async () => {
        await showServices.getShowsByKeyword.mockResolvedValue([mockedShowData])
        await actions.getSearchResults({ commit });
        expect(commit).toHaveBeenCalledWith('SET_SEARCHEDSHOWS', [mockedShowData])
    })

    it('it should commit SET_ERROR when there is error in getSearchResults', async () => {
        const error = new Error("Async error");
        await showServices.getShowsByKeyword.mockRejectedValue(error)
        await actions.getSearchResults({ commit });
        expect(commit).toHaveBeenCalledWith('SET_ERROR', error)
    })

    it('it should commit SET_ERROR when there is error in getCastById', async () => {
        const error = new Error("Async error");
        await showServices.getCastById.mockRejectedValue(error)
        await actions.getCastById({ commit, dispatch });
        expect(commit).toHaveBeenCalledWith('SET_ERROR', error)
    })

    it('should commit SET_CASTDETAILS when getCastById() is called', async () => {
        await showServices.getCastById.mockResolvedValue([mockedCastData])
        await actions.getCastById({ commit, dispatch });
        expect(commit).toHaveBeenCalledWith('SET_CASTDETAILS', [mockedCastData])
    })

    it('it should commit SET_ERROR when there is error in getCarouselImages', async () => {
        const error = new Error("Async error");
        await showServices.getImagesById.mockRejectedValue(error)
        await actions.getCorouselImages({ commit });
        expect(commit).toHaveBeenCalledWith('SET_ERROR', error)
    })

    it('should call commit when getCorouselImages() is called', async () => {
        await showServices.getImagesById.mockResolvedValue(mockImageData)
        await actions.getCorouselImages({ commit });
        expect(commit).toHaveBeenCalled()
    })
})