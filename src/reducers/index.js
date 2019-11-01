import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { results } from './results';

const RootReducer = combineReducers({
	results,
	isLoading
});

export default RootReducer;
