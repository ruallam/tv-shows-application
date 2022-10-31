<template>
    <div class="row">
        <div class="col-6 col-sm-4 col-md-4 col-lg-2"  v-for="(show,i) in showsList" :key="i">
            <card-component :showDetails="show"/>
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
// import { mapState } from 'vuex'
export default {
    components: {
        CardComponent
    },
    props: {
        showsList: {type: Array}
    },
    data(){
        return {
        }
    },
    computed:{
        // ...mapState(["showsCategorized"])
    },
    methods: {

    }

}
</script>

<style>

</style>