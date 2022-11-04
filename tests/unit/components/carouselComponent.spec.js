import carouselComponent from "@/components/carouselComponent"
import { shallowMount } from '@vue/test-utils'
import { createStore } from "vuex"

let mockState = {
    randomCarouselShows:
        [{ id: 7, imageUrl: 'https://static.tvmaze.com/uploads/images/original_untouched/248/621149.jpg' },
        { id: 87, imageUrl: 'https://static.tvmaze.com/uploads/images/original_untouched/298/746872.jpg' },
        { id: 79, imageUrl: 'https://static.tvmaze.com/uploads/images/original_untouched/359/898236.jpg' }
        ]
}

const store = createStore({
    state() { return mockState }
});

describe('In panel Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(carouselComponent, {
            global: {
                plugins: [store]
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