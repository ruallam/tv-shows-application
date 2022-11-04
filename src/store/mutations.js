export default {
    SET_SHOW(state, payload) {
        state.show = payload;
    },
    SET_ERROR(state) {
        state.error = true;
    },
    SET_ERROR_TO_FALSE(state) {
        state.error = false;
    },
    SET_SHOW_CATEGORIEZED(state, payload) {
        state.showsCategorized = payload
    },
    SET_SEARCHEDSHOWS(state, payload) {
        state.searchedShows = payload
    },
    SET_CAROUSELSHOWS(state, payload) {
        state.randomCarouselShows = payload
    },
    SET_CASTDETAILS(state, payload) {
        state.castDetails = payload
    }
}