import actions from '@/store/actions';
import showServices from '@/services/index';
import { mockedShowData,showsData, mockedCastData, mockImageData, mockedFilterGenres,popularShows } from '../mockedData/mocked-data'


const expectedFilterGenres = [
    {
        genreName: 'Top 50 Shows',
        showsList: popularShows
    },
    {
        genreName: 'Action',
        showsList: mockedFilterGenres[0].showsList
    },
    {
        genreName: 'Drama',
        showsList: mockedFilterGenres[1].showsList
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
        await actions.filterShowsBasedOnGenres({ dispatch }, showsData );
        expect(dispatch).toHaveBeenCalledWith('sortGenreByName', {mockedFilterGenres,popularShows})
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