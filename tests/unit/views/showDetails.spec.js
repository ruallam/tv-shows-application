import showDetails from '@/views/ShowDetails'
import { shallowMount } from '@vue/test-utils'
import {mockedShowData} from '../mockedData/mocked-data'
import { createStore } from 'vuex'

let mockState = {show:mockedShowData,error:false}

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
describe('In Show Details', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(showDetails,{
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