<template>
  <header-component/>
  <div class="body-padding">
  <div v-if="!error">
    <router-view/>
  </div>
  <div v-else>
    <page-not-found/>
  </div>
</div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import PageNotFound from './views/PageNotFound.vue';
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    PageNotFound
  },
  computed: {
    ...mapState(["error"]),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
/* .bgColour{
  background-color: beige;
} */

body { 
    padding-top: 65px; 
}
</style>
