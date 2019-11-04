import { isFavorites } from './isFavorites.js';

describe('isFavorites', () => {
	it('should return the initial state', () => {
		const initialState = false;

		expect(isFavorites(initialState, {})).toEqual(initialState);
	});

	it('should output the correct case of TOGGLE_FAVORITES action type (1)', () => {
		const initialState = false;
		const action = {
			type: 'TOGGLE_FAVORITES'
		};

		const result = true;

		expect(isFavorites(initialState, action)).toEqual(result);
	});

	it('should output the correct case of TOGGLE_FAVORITES action type (2)', () => {
		const initialState = true;
		const action = {
			type: 'TOGGLE_FAVORITES'
		};

		const result = false;

		expect(isFavorites(initialState, action)).toEqual(result);
	});

	it('should output the initial state when no case matches', () => {
		const initialState = false;
		const action = {
			type: 'WRONG_CASE'
		};

		expect(isFavorites(initialState, action)).toEqual(initialState);
	});
});
