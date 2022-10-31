<template>
  <div class="row" v-if="getSearchResults(searchName)">
        <div class="col-12 col-sm-12 col-md-12 col-lg-2" v-for="(show, i) in searchedShows" :key="i">
            <card-component :showDetails="show.show"/>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CardComponent from '@/components/CardComponent.vue'
export default {
    data(){
        return{
            searchName:''
        }
    },
    components:{
        CardComponent
    },
    computed:{
        ...mapState(["searchedShows"])
    },
    methods:{
        ...mapActions(["getSearchResults"])
    },
    async created(){
        this.searchName = this.$route.params.searchName
    }


}
</script>

<style>

</style>