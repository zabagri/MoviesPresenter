<template>
    <div>
        <div class="header">Related Movies</div>
        <div class="recommendation-container">
            <div class="movie" v-for="movie in movies" :key="movie.id">
                <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`" />
                <img v-else src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"/>
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
    width: 90%;
    box-shadow: inset 0 0 30px 9px rgb(0 0 0 / 0.6);
    margin: 0 auto;
    border-radius: 5px;
    
    .movie {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        border-radius: 5px;
        width: 6rem;
        margin: 0.3rem;
    }
}
</style>