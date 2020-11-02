<template>
    <div>
        <div class="back-to-home" @click="$router.push('/')">
            <i class="el-icon-back"></i>
            <span>Back To Home Page</span>
        </div>
        <div v-if="movie" class="movie-cover" :style="{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path})`}">
            <div class="movie-details">
                <img class="movie-image" :src="`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`" alt="Avatar">
                <div class="details">
                    <p class="title">{{movie.title}}</p>
                    <div class="facts">
                        <span class="release-date">
                            {{movie.release_date}}
                        </span>
                        <span class="genres">
                            {{genres}}
                        </span>
                        <span class="runtime">
                            {{movie.runtime}}m
                        </span>
                    </div>
                    <div class="rating">
                        {{movie.vote_average}}
                        <i class="el-icon-star-on"></i>
                        ({{movie.vote_count}} voters)

                    </div>
                    <div class="tagline">
                        {{movie.tagline}}
                    </div>
                    <div class="overview">
                        <p class="overview-title">Overview</p>
                        <div class="overview-text">{{movie.overview}}</div>
                    </div>
                </div>
            </div>
        </div>
        <recommendations />
    </div>
</template>

<script>
import { getMovieDetails } from '../../services/movies'
export default {
    components: {
        Recommendations: () => import("./components/Recommendations")
    },
    data() {
        return {
            movie: null
        }
    },
    computed: {
        genres() {
            return this.movie.genres.map(g => g.name).join(', ');
        }
    },
    mounted() {
        getMovieDetails(this.$route.params.id).then((data) => {
            this.movie = data;
        });
    }
}
</script>

<style lang="scss" scoped>
.back-to-home {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1rem;
    cursor: pointer;

    .el-icon-back {
        font-size: 24px;
        font-weight: 600;
        margin: 0.5rem;
    }
}

.movie-cover {
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(to bottom right, rgba(89.02%, 89.02%, 89.02%, 1.00), rgba(100.00%, 100.00%, 100.00%, 1.00));

    .movie-details {
        background-image: linear-gradient(to right, rgba(14.12%, 14.51%, 16.86%, 1.00) 150px, rgba(22.35%, 22.35%, 22.35%, 0.84) 100%);
        height: 100%;
        display: flex;
        text-align: left;

        .details {
            color: white;
            .title {
                font-weight: 600;
                font-size: 2rem;
                margin: 2rem 0;
            }

            .facts {
                display: flex;
                margin: 1rem 0;
                
                .release-date, .genres, .runtime {
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                .genres, .runtime {
                    position: relative;
                    padding-left: 20px;

                    &::before {
                        font-size: 1.1em;
                        line-height: 1;
                        content: '\2022';
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 7px;
                        display: inline-flex;
                        align-content: center;
                        align-items: center;
                    }
                }
            }

            .rating {
                display: flex;
                align-items: center;

                .el-icon-star-on {
                    color: #ff99009e;
                    font-size: 20px;
                    margin: 0 0.3rem 0 0.1rem;
                }
            }

            .tagline {
                font-style: italic;
                color: #afadad;
                margin: 1rem 0;
            }

            .overview {
                .overview-title {
                    font-size: 20px;
                    margin: 1rem 0;
                }

                .overview-text {
                    width: 80%;
                }
            }
        }

        .movie-image {
            width: 20%;
            border-radius: 10px;
            margin: 1rem;
        }
    }
}

</style>