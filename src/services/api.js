import axios from "axios";

const API_KEY = 'ccd8d539caa8bbfd0843a00859c1dd02';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: API_KEY,
    }
});

export const getTrending = async () => {
    const { data } = await instance.get("/trending/movie/day");  
    return data;
}

export const searchMovies = async (query,page = 1, include_adult = false) => {
    const { data } = await instance.get("/search/movie", {
        params: {
            query,
            page,
            include_adult,
        }
    }); 
    return data;
}


export const getDetails = async (id) => {
    const { data } = await instance.get(`/movie/${id}`);  
    return data;
}

export const getCredits = async (id) => {
    const { data } = await instance.get(`/movie/${id}/credits`);  
    return data;
}

export const getReviews = async (id, page = 1) => {
    const { data } = await instance.get(`/movie/${id}/reviews`, {
        params: {
            page,
        }
    });  
    return data;
}