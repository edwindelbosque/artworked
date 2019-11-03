import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { results } from './results';
import { favorites } from './favorites';

const RootReducer = combineReducers({
	results,
	isLoading,
	favorites
});

export default RootReducer;
