<template>
    <div class="row">
        <div class="col-6 col-sm-4 col-md-4 col-lg-2"  v-for="(show,i) in showsList" :key="i">
            <card-component :showDetails="show"/>
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
export default {
    name:'PanelComponent',
    components: {
        CardComponent
    },
    props: {
        showsList: {type: Array}
    }
}
</script>

<style>

</style>