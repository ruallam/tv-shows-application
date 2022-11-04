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
import { mapState, mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    PageNotFound
  },
  computed: {
    ...mapState(["error"]),
  },
  methods:{
    ...mapActions(["getShows"]),
  },
  created() {
    this.getShows();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body { 
    padding-top: 65px; 
}
</style>
