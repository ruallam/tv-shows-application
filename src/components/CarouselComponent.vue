<template>
    <div id="demo" class="carousel slide" data-bs-ride="carousel" v-if="randomCarouselShows.length">

        <!-- Indicators/dots -->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <!-- The slideshow/carousel -->
        <div class="carousel-inner" >
            <div class="carousel-item active" >
                <router-link :to="{ name: 'ShowDetails', params: { id: randomCarouselShows[0].id } }">
                <img :src="randomCarouselShows[0].imageUrl" alt="Los Angeles" class="d-block" style="width:100%">
                </router-link>
            </div>
            <div class="carousel-item">
                <router-link :to="{ name: 'ShowDetails', params: { id: randomCarouselShows[1].id } }">

                <img :src="randomCarouselShows[1].imageUrl" alt="Chicago" class="d-block" style="width:100%">
                </router-link>
            </div>
            <div class="carousel-item">
                <router-link :to="{ name: 'ShowDetails', params: { id: randomCarouselShows[2].id } }">

                <img :src="randomCarouselShows[2].imageUrl" alt="New York" class="d-block" style="width:100%">
                </router-link>
            </div>
        </div>

        <!-- Left and right controls/icons -->
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
export default {
    name:'CarouselComponent',
    data() {
        return {
            imagesArray: ["https://static.tvmaze.com/uploads/images/original_untouched/294/737399.jpg", "https://static.tvmaze.com/uploads/images/original_untouched/294/737400.jpg", "https://static.tvmaze.com/uploads/images/original_untouched/303/758502.jpg"],
        }
    },
    computed: {
        ...mapState(["randomCarouselShows"]),

    },
    methods: {
        ...mapActions(["getCorouselImages"]),
    },
    created() {
        this.getCorouselImages();
    }
}
</script>

<style>

</style>