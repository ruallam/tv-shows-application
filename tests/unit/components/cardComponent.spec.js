import cardComponent from "@/components/CardComponent"
import { shallowMount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from "vue-router"
import routes from '@/router/routes'
import {mockedShowData} from '../mockedData/mocked-data'

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes
})

describe('In Card Component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(cardComponent, {
            global: {
                plugins: [router]
            },
            props: {
                showDetails: mockedShowData
            },
        })
    })
    afterEach(() => {
        wrapper.unmount()
    })

    it("Is a vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });
})

