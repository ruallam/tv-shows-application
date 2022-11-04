import castCard from "@/components/CastCard";
import { shallowMount } from '@vue/test-utils'
import { createStore } from "vuex"
import {mockedCastData} from '../mockedData/mocked-data'

let mockState = {castDetails:[mockedCastData,mockedCastData]}

const store = createStore({
  state() {return mockState}
});

describe('In cast card Component', () => {
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
})