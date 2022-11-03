import getters from '@/store/getters';
import { mockedShowData} from '../mockedData/mocked-data'


describe('In getters', () => {
    let state;
    beforeAll(()=> {
        state = {
            showsCategorized: [{genreName:'Drama',showsList:[mockedShowData]}]
        }
    })
    afterAll(()=> {
        state = null
    })

    it('in getters it should do something', ()=> {
        const expected = getters.getShowsByCat(state)('Drama');
        console.log(expected)
        expect(expected).toEqual([mockedShowData])

        // console.log(expected).toBe(genreMapName)
    })
    it('in getters it should do something', ()=> {
        const expected = getters.getShowsByCat(state)('Action');
        console.log(expected)
        expect(expected).toEqual([])
    })
})