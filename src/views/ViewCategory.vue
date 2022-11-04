<template>
    <div class="row" v-if="getShowsByCat(categoryName)">
        <div class="col-12 col-sm-4 col-md-6 col-lg-2" v-for="(show, i) in getShowsByCat(categoryName)" :key="i">
            <card-component :showDetails="show"/>
        </div>
    </div>
    <div v-else>
        <page-not-found/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardComponent from '../components/CardComponent.vue'
import PageNotFound from './PageNotFound.vue';
export default {
    name: 'ViewCategory',
    data() {
        return {
            categoryName: "",
        };
    },
    components: {
        CardComponent,
        PageNotFound
    },
    computed: {
        ...mapGetters(["getShowsByCat"]),
    },
    async created() {
        this.categoryName = await this.$route.params.genreName;
    },
}
</script>

<style>

</style>