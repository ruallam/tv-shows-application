import viewCategory from '@/views/viewCategory'
import { shallowMount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from "vue-router"
import routes from '@/router/routes'
import {mockedShowData} from '../mockedData/mocked-data'
import panelComponent from '@/components/PanelComponent'
import carouselComponent from '@/components/carouselComponent'
import { createStore } from 'vuex'
import { getShowsByCat } from '@/store/index'



let mockGetters = {
    getShowsByCat: () => [mockedShowData,mockedShowData,mockedShowData]
};
const store = createStore({
    getters:mockGetters,
});

describe('In Dashboard Component Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(viewCategory,{
            global:{
                plugins:[store]
            },
            data() {
                return{
                    categoryName: ""
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