<template>
    <div>
        <div class="header">Related Movies</div>
        <div class="recommendation-container">
            <div class="movie" v-for="movie in movies" :key="movie.id">
                <img :src="`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`" />
                <p class="title">{{movie.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getMovieRecommendations } from '../../../services/movies'

export default {
    data() {
        return {
            movies: []
        }
    },
    mounted() {
        getMovieRecommendations(this.$route.params.id).then((data) => {
            this.movies = data.results;
        });
    }
}
</script>

<style lang="scss" scoped>
.header {
    font-size: 20px;
    margin: 1rem;
}
.recommendation-container {
    display: flex;
    overflow-x: auto;
    width: 80%;
    box-shadow: inset 0 0 30px 9px rgb(0 0 0 / 0.6);
    margin: 0 auto;
    border-radius: 5px;

    img {
        border-radius: 5px;
        width: 6rem;
        margin: 0.3rem;
    }
}
</style>