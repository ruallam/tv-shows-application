import headerComponent from "@/components/headerComponent"
import { shallowMount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from "vue-router"
import routes from '@/router/routes'

// const router = createRouter({
//     history: createMemoryHistory(),
//     routes: routes
// })

const mockRoute = {
    params: {
      id: 1
    }
}

const mockRouter = {
    push: jest.fn()
}

describe('Header Component', () => {
    let wrapper
    beforeEach(()=> {
        
        wrapper = shallowMount(headerComponent, {
            global:{
                    mocks: {
                        $route: mockRoute,
                        $router: mockRouter
                    }
            },

        })
    })

    afterEach(()=> {
        wrapper.unmount()
    })

    it("Is a vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('expects header Component', () => {
        expect(headerComponent).toBeTruthy()
    })
    it("Header contain <nav> tag", () => {
        expect(wrapper.html()).toContain("</nav>");
    });
    it("It must have an input field", () => {
        expect(wrapper.findAll("input")).toBeTruthy();
    });
      it("searchShow() will route to /search/:keyword, if keyword is provided", async () => {
        wrapper.setData({ searchName: "keyword" });
        await wrapper.vm.searchShow();
        expect(wrapper.vm.$router.push).toBeCalledWith({ path: '/search/keyword' });
      });

})