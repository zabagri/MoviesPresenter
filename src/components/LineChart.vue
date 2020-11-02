<template>
    <div id="chart" v-loading="isLoading">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
import chartMixins from '../mixins/chart-mixins'

export default {
  data() {
    return {
      isLoading: true,
      movies: [], 
      series: [{
          data: []
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Movies Released In The Last 90 Days',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
      },
    }
  },
  mixins: [chartMixins],
  async mounted() {
      await this.getReleasedMoviesNinetyDays();
      this.series = [{
          data: this.movies
      }];
      this.isLoading = false;
  }
}
</script>

<style lang="scss" scoped>
#chart {
    margin-top: 1rem;
}
</style>