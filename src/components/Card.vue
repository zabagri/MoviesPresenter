<template>
 <div class="card" @click="goToMovie">
  <img v-if="movieCard.poster_path" :src="`https://image.tmdb.org/t/p/w440_and_h660_face${movieCard.poster_path}`" alt="Avatar">
  <img v-else src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"/>
  <div class="container">
    <p class="title">{{movieCard.title}}</p> 
    <p>{{movieCard.release_date}}</p>
    <p class="rating">{{movieCard.vote_average}}<i class="el-icon-star-on"></i></p>
  </div>
</div>
</template>

<script>
export default {
  props: ['movieCard'],
  data() {
    return {
      imagePath: process.env.VUE_APP_IMAGE_PATH
    }
  },
  methods: {
    goToMovie() {
      this.$router.push({ name: 'Movie', params: { id: this.movieCard.id } });
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 15%;
  margin: 1rem;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: scale(1.1);
    cursor: pointer;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-weight: 600;
    font-size: 0.9rem;
  }

  p {
    margin: 0.2rem;
  }

  img {
    border-radius: 10px;
    width: 80%;
  }

  .rating {
    display: flex;
    align-items: center;
  }

  .el-icon-star-on {
    color: #ff99009e;
    font-size: 24px;
  }
}
</style>
