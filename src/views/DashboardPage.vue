<template>
    <carousel-component/>
    <div class="category" v-for="(showCategeory, i) in showsCategorized" :key="i" style="background-color:black">
        <router-link class="text-style" :to="{ name: 'ViewCategory', params: { genreName: showCategeory.genreName } }">
           <h4 style="text-decoration:none">{{ showCategeory.genreName }}<span style="float:right">See More</span></h4>
        </router-link>
        <PanelComponent :showsList="limitNoOfShows(showCategeory.showsList)" />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CarouselComponent from '@/components/CarouselComponent.vue';
// import Cardcomponent from '../components/CardComponent.vue';
import PanelComponent from '../components/PanelComponent.vue';
export default {
    name: 'DashboardView',
    components: {
        PanelComponent,
        CarouselComponent
    },
    methods: {
        ...mapActions(["getShows"]),
        limitNoOfShows(showList) {
            return [...showList].splice(0, 6);
        },
    },
    created() {
        this.getShows();
    },
    computed: {
        ...mapState(["showsCategorized"])
    }

}
</script>

<style scoped>
.category {
    margin: 17px;
    border-radius: 10px;
    box-shadow: 1px 3px 10px #000000 !important;
}
.text-style{
    text-decoration: none;
    color: white
}

.text-style:hover {
    color:#0d6efd;
}
</style>