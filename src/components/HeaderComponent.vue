<template>
  <nav class="navbar top-fixed">
  <div class="container-fluid">
    <a class="navbar-text text-deocation-none" href="/">TVFlix</a>
      <form class="d-flex" role="search" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchName" >
        <button class="btn btn-success" type="submit" @click="searchShow()">Search</button>
      </form>
    </div>
</nav>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
      return{
        searchName:""
      }
    },
    methods: {
      searchShow() {
        this.$router.push({ path: `/search/${this.searchName}` });
      }
    }
    
}
</script>

<style>
.navbar {
  background-color: black;
  flex-wrap: nowrap;
  color: aliceblue !important; 
}
.text-deocation-none {
    text-decoration: none;
    font-size: larger;
}
.navbar-text {
  color: aliceblue;
}

.top-fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}

.container-fluid {
  display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
}
</style>