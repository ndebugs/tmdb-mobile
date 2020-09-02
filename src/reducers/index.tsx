import { combineReducers } from 'redux';
import { popularMovies, topRatedMovies } from './movies';
import { popularTV, topRatedTV } from './tv';

export default combineReducers({
  popularMovies, topRatedMovies,
  popularTV, topRatedTV
});
