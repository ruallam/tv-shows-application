import httpClient from "./common/index";

const getShows = () => {
    return httpClient.get("/shows").then(res => res.data);
};

const getShowById = id => {
    return httpClient.get("/shows/"+id).then(res => res.data);
}

const getShowsByKeyword = showName => {
    return httpClient.get("/search/shows?q="+showName).then(res=>res.data)
}

const getImagesById = id => {
    return httpClient.get("/shows/"+id+"/images").then(res=>res.data)
}

const getCastById = id => {
    return httpClient.get("/shows/"+id+"/cast").then(res=>res.data)
}

export default { 
    getShows,
    getShowById,
    getShowsByKeyword,
    getImagesById,
    getCastById
};
