import axios from 'axios';

const apiBaseUrl = "http://api.tvmaze.com";

const config = {
    baseURL: apiBaseUrl,
    Accept: "application/json"
};

const httpClient = axios.create(config);

export default httpClient
