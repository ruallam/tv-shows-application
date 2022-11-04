import mutations from '@/store/mutations'
import { mockedShowData ,mockedCastData} from '../mockedData/mocked-data'

describe('in mutations', ()=>{
    let state;
    beforeEach(()=>{
        state = {
            showsCategorized: [],
            searchedShows: [],
            error: false,
            randomCarouselShows: [],
            castDetails:[],
            show:{}
        }
    })
    afterEach(()=> {
        state = null
    })

    it("should set showsCategorized when SET_SHOW_CATEGORIEZED is called", () => {
        const expected = 'ShowsList';
        mutations.SET_SHOW_CATEGORIEZED(state,expected)
        expect(state.showsCategorized).toEqual(expected)
    })

    it("should set error when SET_ERROR is called", () => {
        mutations.SET_ERROR(state)
        expect(state.error).toBeTruthy()
    })

    it("should set error to false when SET_ERROR_TO_FALSE is called", () => {
        mutations.SET_ERROR_TO_FALSE(state)
        expect(state.error).toBeFalsy()
    })

    it("should set error when SET_ERROR is called", () => {
        const expected = mockedShowData
        mutations.SET_SHOW(state,expected)
        expect(state.show).toEqual(expected)
    })

    it("should set searchedShows when SET_SEARCHEDSHOWS is called", () => {
        const expected = [mockedShowData,mockedShowData]
        mutations.SET_SEARCHEDSHOWS(state,expected)
        expect(state.searchedShows).toEqual(expected)
    })

    it("should set randomCorouselShows when SET_CAROUSELSHOWS is called", () => {
        const expected = [{id:1},{id:2},{id:3}]
        mutations.SET_CAROUSELSHOWS(state,expected)
        expect(state.randomCarouselShows).toEqual(expected)
    })

    it("should set castDetails when SET_CASTDETAILS is called", () => {
        const expected = [mockedCastData,mockedCastData]
        mutations.SET_CASTDETAILS(state,expected)
        expect(state.castDetails).toEqual(expected)
    })
})
