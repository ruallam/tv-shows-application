import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue';
import headerComponent from '@/components/headerComponent';
import pageNotFound from '@/views/PageNotFound';
import { createStore } from 'vuex'
import routes from '@/router/routes';
import { createRouter, createMemoryHistory } from 'vue-router';

let mockState = {error:true}
// const mockRoute = {routes: routes}

const store = createStore({
  state() {return mockState}
});

const router = createRouter({
  history: createMemoryHistory(),
  routes
})
describe('In App Component', () =>{
  let appWrapper
  beforeEach(()=> {
    appWrapper = mount(App, {
      global:{
        plugins: [store ,router]
      },
      stubs: ['router-view'],
      renderStubDefaultSlot: true
    })
  })
  afterEach(()=> {
    appWrapper.unmount()
  })
  test("Is a Vue instance", () => {
    appWrapper = mount(App, {
      global:{
        plugins: [store]
      },
      stubs: {
        'router-view': true,
      }

    })
    expect(appWrapper.vm).toBeTruthy();
  })
  test('Page Not found contains Go To Home', () => {
    expect(appWrapper.html()).toContain("Go To Home")
  })
  
  test('checks for Page not found component', () => {
    expect(pageNotFound).toBeTruthy()
  })
  
})

describe('testing for false condition', () => {
  let mockState1= {error:true};
  const store1 = createStore({
    state() {return mockState1}
  });
  let wrapper1;
  beforeEach(()=>{
    wrapper1 = mount(App, {
      global:{
        plugins: [store1 , router]
      },
      stubs: ['router-view'],
      renderStubDefaultSlot: true
    })
  })
  afterEach(()=>{
    wrapper1.unmount()
  })
  test('testing false case',()=>{
    expect(wrapper1.html()).toContain('Sorry')

  })
})