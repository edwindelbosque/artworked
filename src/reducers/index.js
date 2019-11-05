import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { results } from './results';
import { favorites } from './favorites';
import { isFavorites } from './isFavorites';
import { currentTrack } from './currentTrack';

const RootReducer = combineReducers({
	results,
	isLoading,
	favorites,
	isFavorites,
	currentTrack
});

export default RootReducer;
