import searchResults from '@/views/SearchResults'
import { shallowMount } from '@vue/test-utils'
import {mockedShowData} from '../mockedData/mocked-data'
import { createStore } from 'vuex'

let mockState = {searchedShows:[{show:mockedShowData},{show:mockedShowData},{show:mockedShowData}]}

const store = createStore({
    state() {return mockState}
  });


  const mockRoute = {
    params: {
      id: 1
    }
}

const mockRouter = {
    push: jest.fn()
}
describe('In Dashboard', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(searchResults,{
            global:{
                plugins: [store],
                mocks: {
                    $route: mockRoute,
                    $router: mockRouter
                }
            }
        })
    })
    
    afterEach(() => {
        wrapper.unmount()
    })

    it("Is a vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("It renders the correct markup", () => {
        
        expect(wrapper.html()).toContain("</div>");
    });
})