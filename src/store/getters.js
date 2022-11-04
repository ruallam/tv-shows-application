export default {
    getShowsByCat: (state) => (genreMapName) => {
        let showList = state.showsCategorized?.find(category =>category.genreName == genreMapName)
        return showList?.showsList
    }
}