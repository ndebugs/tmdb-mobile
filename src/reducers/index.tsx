import { combineReducers } from 'redux';
import { popularMovies, topRatedMovies } from './movies';

export default combineReducers({
  popularMovies, topRatedMovies
});
