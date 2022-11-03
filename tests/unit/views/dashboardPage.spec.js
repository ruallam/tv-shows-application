import dashboardPage from '@/views/DashboardPage'
import { shallowMount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from "vue-router"
import routes from '@/router/routes'
import {mockedShowData} from '../mockedData/mocked-data'
import panelComponent from '@/components/PanelComponent'
import carouselComponent from '@/components/carouselComponent'
import { createStore } from 'vuex'

let mockState = {showsCategorized:[{GenreName:'Action',showsList:[mockedShowData,mockedShowData]},{GenreName:'Action',showsList:[mockedShowData,mockedShowData]}]}

const store = createStore({
    state() {return mockState}
  });
  const mockRoute = {
    params: {
        genreName: 'Action'
    }
}

const mockRouter = {
    push: jest.fn()
}
describe('In Dashboard Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(dashboardPage,{
            global:{
                plugins: [store],
                mocks: {
                    $route: mockRoute,
                    $router: mockRouter
                }
            }
        })
    });
    afterEach(() => {
        wrapper.unmount()
    })
    it("Is a vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    }); 
})