import viewCategory from '@/views/viewCategory'
import { shallowMount } from '@vue/test-utils'
import {mockedShowData} from '../mockedData/mocked-data'
import { createStore } from 'vuex'



let mockGetters = {
    getShowsByCat: () => [mockedShowData,mockedShowData,mockedShowData]
};
const store = createStore({
    getters:mockGetters,
});

describe('In Dashboard Component Component', () => {
    let wrapper;
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