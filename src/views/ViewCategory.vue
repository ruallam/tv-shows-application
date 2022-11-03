<template>
    <div class="row" v-if="getShowsByCat(categoryName)">
        <div class="col-12 col-sm-4 col-md-6 col-lg-2" v-for="(show, i) in getShowsByCat(categoryName)" :key="i">
            <card-component :showDetails="show"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardComponent from '../components/CardComponent.vue'
export default {
    data() {
        return {
            categoryName: "",
        };
    },
    components: {
        CardComponent
    },
    computed: {
        ...mapGetters(["getShowsByCat"]),
    },
    created() {
        this.categoryName = this.$route.params.genreName;
    },
}
</script>

<style>

</style>