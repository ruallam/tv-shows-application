<template>
    <div class="container">
        <p style="font-size:48px">&#128532;</p>
        <h1 class="message">{{ errorMessage }}</h1>
        <button @click="goToHome" class="btn btn-secondary btn-sm">Go To Home Page</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'PageNotFound',
    data() {
        return {
            errorMessage: 'Sorry! Something went wrong.'
        }
    },
    methods: {
        ...mapMutations(["SET_ERROR_TO_FALSE"]),
        goToHome() {
            this.SET_ERROR_TO_FALSE();
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.container {
    margin-top: 10rem;
    text-align: center;
}
</style>