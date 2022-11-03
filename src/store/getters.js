export default {
    getShowsByCat: (state) => (genreMapName) => {
        let showList = []
        state.showsCategorized?.find(category => {
            if (category.genreName == genreMapName) {
                showList = category.showsList
            }
        })
        return showList
    }
}