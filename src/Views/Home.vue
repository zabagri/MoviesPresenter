<template>
    <div v-if="data">
        <div class="header">Most Popular Movies</div>
        <div class="cards-container">
            <card v-for="movie in movieList" :movieCard="movie" :key="movie.id"/>
        </div>
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="20"
            layout="prev, pager, next"
            :total="data.total_results">
        </el-pagination>
        <line-chart />
    </div>
</template>

<script>
import { getPopularMovies } from '../services/movies'

export default {
    components: {
        Card: () => import("../components/Card"),
        LineChart: () => import("../components/LineChart")
    },
    data() {
        return {
            movieList: [],
            data: null,
            currentPage: 1
        }
    },
    mounted() {
        this.currentPage = this.$store.getters.page || 1;
        this.getMovies();
    },
    methods: {
        getMovies() {
            getPopularMovies(this.currentPage).then((data) => {
                this.data = data;
                this.movieList = data.results;
            });
        },
        handleCurrentChange(val) {
            this.$store.dispatch('setPage', val);
            this.movieList = [];
            this.getMovies(val);
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    font-size: 32px;
    font-weight: 600;
    text-decoration: underline;
    margin: 2rem;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>