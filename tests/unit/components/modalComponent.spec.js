import modalComponent from "@/components/modalComponent"
import { shallowMount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from "vue-router"
import routes from '@/router/routes'
import mockedData from '../mockedData/mocked-data'
import castCardComponent from '@/components/castCard'


describe('In panel Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(modalComponent)
    })
    afterEach(() => {
        wrapper.unmount()
    })
    it("Is a vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("It renders the correct markup", () => {
        expect(wrapper.html()).toContain("Cast Information");
    });

    describe("It should load card component", () => {
        it("It should load the card", () => {
            expect(castCardComponent).toBeTruthy();
        });
    });
})