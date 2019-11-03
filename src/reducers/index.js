import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { results } from './results';
import { favorites } from './favorites';
import { isFavorites } from './isFavorites';

const RootReducer = combineReducers({
	results,
	isLoading,
	favorites,
	isFavorites
});

export default RootReducer;
