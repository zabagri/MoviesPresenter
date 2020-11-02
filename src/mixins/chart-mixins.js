import moment from 'moment';
import { getReleasedMoviesByDates } from '../services/movies';

export default {
    methods: {
        async getReleasedMoviesNinetyDays() {
            for (let i = 0; i < 90; i++) {
                let date = moment().subtract(i, 'days').format('YYYY-MM-DD');
                await getReleasedMoviesByDates(date, date, 1).then((data) => {
                    this.movies.push({
                        y: data.total_results,
                        x: date
                    });
                });
            }
        }
    }
}