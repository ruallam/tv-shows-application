import viewCategory from '@/views/viewCategory'
import { shallowMount } from '@vue/test-utils'
import {mockedShowData} from '../mockedData/mocked-data'
import { createStore } from 'vuex'

let getters = {
    getShowsByCat: (genreName) => jest.fn()
};
const store = createStore({
    getters,
});

const mockRoute = {
    params: {
      genreName:'Action'
    }
}

const mockRouter = {
    push: jest.fn()
}

describe('In View Category', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(viewCategory,{
            global:{
                plugins:[store],
                mocks: {
                    $route: mockRoute,
                    $router: mockRouter
                }
            },
            data() {
                return{
                    categoryName: ""
                }
            },
            
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