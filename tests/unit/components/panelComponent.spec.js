import panelComponent from "@/components/panelComponent"
import { shallowMount } from '@vue/test-utils'
import mockedData from '../mockedData/mocked-data'
import cardComponent from '@/components/cardComponent'

describe('In Panel Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(panelComponent, {
            props: {
                showsList: [mockedData, mockedData, mockedData]
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

    describe("It should load card component", () => {
        it("It should load the card", () => {
            expect(cardComponent).toBeTruthy();
        });
    });

    it("It loads Panel Component with Show Data", () => {
        expect(wrapper.vm.showsList.length).toEqual(3);
    });
})