<template>
    <div class="container" v-if="!error && show">
        <div>
            <img :src="displayImage(show)" alt="image" align="left" />
        </div>
        <div class="margin">
            <h2>{{ show.name }}</h2>
            <h4>
                <!-- Rating: {{ show.rating.average}}<i class="fa fa-star scolor"></i> -->
                <span v-if="show.language">Language: {{ show.language }}</span> <span
                    v-if="show.rating && show.rating.average">| Rating <i class="fa fa-star scolor"></i>{{
                            show.rating.average
                    }}/10 </span>
            </h4>
            <h4><b>Status:</b>{{ show.status }}</h4>
            <!-- <h6> Genres:{{genresString}}</h6> -->
            <h4 v-if="show.officialSite">
                Official website:
                <a :href="show.officialSite">{{ show.officialSite }}</a>
            </h4>
            <p v-html="show.summary"></p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="getCastById(id)">
                View Cast Info
            </button>
            <ModalComponent/>
            
        </div>

    </div>

</template>

<script>
import { mapActions, mapState } from 'vuex';
import ModalComponent from '@/components/ModalComponent.vue';
export default {
    data() {
        return {
            // genresString: ""
        }
    },
    computed: {
        ...mapState(["show", "error"]),
    },
    components:{
        ModalComponent
    },
    methods: {
        ...mapActions(["getShowById","getCastById"]),
        displayImage(show) {
            // this.genresString = show.genres.join("|")
            return show?.image?.original || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax9rQ-FuuaF4BvPj3GHIhMYriMIhujaOfkQ&usqp=CAU";
        }
    },
    created() {
        this.id = this.$route.params.id;
        console.log(this.id, "id val")
        this.getShowById(this.id);

    }

}
</script>

<style scoped>
img {
    height: 350;
    width: 20rem;
    margin: 10px;
    border-radius: 10px;
    margin-top: 0px;
}

.margin {
    margin: 10px;
}

.scolor {
    color: rgb(146, 146, 46);
}
</style>