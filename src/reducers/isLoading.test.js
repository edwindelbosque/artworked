import { isLoading } from './isLoading.js';

describe('isLoading', () => {
	it('should return the initial state', () => {
		const initialState = false;

		expect(isLoading(initialState, {})).toEqual(initialState);
	});

	it('should output the correct case of IS_LOADING action type (1)', () => {
		const initialState = false;
		const action = {
			type: 'IS_LOADING',
			bool: false
		};

		const result = false;

		expect(isLoading(initialState, action)).toEqual(result);
	});

	it('should output the correct case of IS_LOADING action type (2)', () => {
		const initialState = true;
		const action = {
			type: 'IS_LOADING',
			bool: true
		};

		const result = true;

		expect(isLoading(initialState, action)).toEqual(result);
	});

	it('should not output the case of IS_LOADING action type', () => {
		const initialState = false;
		const wrongAction = {
			type: 'WRONG_ACTION',
			movies: [{}, {}, {}]
		};

		expect(isLoading(initialState, wrongAction)).toEqual(initialState);
	});
});
