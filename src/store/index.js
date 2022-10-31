import { createStore } from 'vuex';
import services from '../services/index'

export default createStore({
    state: {
        showsCategorized: [],
        searchedShows: [],
        error: false,
        randomCarouselShows: [],
        castDetails:[],
    },
    mutations: {
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
        SET_CASTDETAILS(state,payload){
            state.castDetails = payload
        }
    },
    actions: {
        async getShows({ commit, dispatch }) {
            try {
                const shows = await services.getShows();
                dispatch("filterShowsBasedOnGenres", shows)
            } catch (error) {
                commit("SET_ERROR", error)
            }
        },
        filterShowsBasedOnGenres({ dispatch }, data) {
            const popularShows = data.filter((show) => {
                return show.rating.average >= 8.2 ? show : "";
            });
            // console.log(popularShows, "pop")
            let genreList = [];
            let showsArrayList = [];
            data.map(show => {
                if (show.genres)
                    show.genres.map(genre => {
                        if (genreList.includes(genre)) {
                            showsArrayList[genreList.indexOf(genre)].showsList.push(show)
                        }
                        else {
                            genreList.push(genre)
                            const genreObj = {
                                genreName: genre,
                                showsList: [show]
                            };
                            showsArrayList.push(genreObj);
                        }
                    });
            })
            dispatch("sortGenreByName", { showsArrayList, popularShows })
        },
        sortGenreByName({ commit }, data) {
            // console.log(data, "data")
            const sortedArray = data.showsArrayList.sort((show1, show2) => {
                var name1 = show1.genreName.toUpperCase();
                var name2 = show2.genreName.toUpperCase();
                if (name1 < name2) return -1;
                else if (name1 > name2) return 1;
                else return 0;
            })
            data.popularShows.sort((show1, show2) => {
                if (show1.rating.average >= show2.rating.average) return -1;
                else if (show1.rating.average < show2.rating.average) return 1;
                else return 0;
            })
            sortedArray.unshift({ genreName: "Top 50 Shows", showsList: data.popularShows.slice(0, 50) })
            // console.log(sortedArray, "sortedArray")
            commit("SET_SHOW_CATEGORIEZED", sortedArray)
        },
        async getShowById({ commit }, id) {
            try {
                const ShowById = await services.getShowById(id);
                console.log(ShowById, "in enifjek")
                commit("SET_SHOW", ShowById)
            } catch (error) {
                console.log("in else")
                commit("SET_ERROR", error)
            }
        },
        async getSearchResults({ commit }, searchName) {
            console.log(searchName, "searchName")
            try {
                const searchedShows = await services.getShowsByKeyword(searchName);
                console.log(searchedShows, "searchedShows")
                commit("SET_SEARCHEDSHOWS", searchedShows)
            } catch (error) {
                commit("SET_ERROR", error)
            }
        },
        async getCorouselImages({ commit }) {
            try {
                let CarouselShows = []
                while (CarouselShows.length < 3) {
                    let id = Math.floor(Math.random() * 100)
                    if (id !== 17 && id !== 36 && id !== 85 && id !== 0) {
                        const images = await services.getImagesById(id)

                        let url = images.find((image) => {
                            if (image.type == 'banner' && image.resolutions.original.height == 140){
                                return image
                            }
                            
                        })
                        if (url) {
                            CarouselShows.push({ id: id, imageUrl: url.resolutions.original.url })
                        }
                    }
                }
                console.log(CarouselShows, "CarouselShows")
                commit("SET_CAROUSELSHOWS", CarouselShows)
            } catch (error) {
                commit("SET_ERROR", error)
            }
        },
        async getCastById({commit}, id) {
            try {
                const CastById = await services.getCastById(id);
                console.log(CastById,"Cast")
                commit("SET_CASTDETAILS",CastById)
            } catch(error) {
                commit("SET_ERROR",error)
            }

        }

    },
    getters: {

        getShowsByCat: (state) => (genreMapName) => {
            let showList = []
            state.showsCategorized?.find(category => {
                if (category.genreName == genreMapName) {
                    showList = category.showsList
                }
            })
            console.log(showList, "state.showsCategorized")
            return showList
        }

    }

})