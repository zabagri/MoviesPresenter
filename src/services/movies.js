import request from '../api/api'

const apiKey = process.env.VUE_APP_API_KEY;

const getPopularMovies = (page) => {
    let url = `/movie/popular?page=${page}&api_key=${apiKey}`;

    return request.get(url).then((res) => res.data);
}

const getMovieDetails = (id) => {
    let url = `/movie/${id}?api_key=${apiKey}`;

    return request.get(url).then((res) => res.data);
}

const getMovieRecommendations = (id) => {
    let url = `/movie/${id}/recommendations?api_key=${apiKey}`;

    return request.get(url).then((res) => res.data);
}

export { getPopularMovies, getMovieDetails, getMovieRecommendations }