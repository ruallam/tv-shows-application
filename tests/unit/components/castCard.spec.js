import castCard from "@/components/CastCard";
import { shallowMount } from '@vue/test-utils'
import { createStore } from "vuex"
import {mockedCastData} from '../mockedData/mocked-data'
import cardComponent from '@/components/cardComponent'

let mockState = {castDetails:[mockedCastData,mockedCastData]}

const store = createStore({
  state() {return mockState}
});

describe('In panel Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(castCard, {
            global:{
                plugins: [store]
            },
            
        })
    });
    afterEach(() => {
        wrapper.unmount()
    });
    it("Is a vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("It renders the correct markup", () => {
        expect(wrapper.html()).toContain("</div>");
    });

    // it("It renders no shows to display if castDetails is empty", ()=> {
    //     // wrapper.setData({ castDetails: [] });
    //     mockState = {castDetails:[mockedCastData,mockedCastData]}
    //     expect(wrapper.html()).toContain("Sorry")
    // })

    

    // it("It loads Panel Component with Show Data", () => {
    //     expect(wrapper.vm.randomCarouselShows.length).toEqual(3);
    // });
})