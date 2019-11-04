import { favorites } from './favorites.js';

describe('favorites', () => {
	it('should return the initial state', () => {
		const initialState = [];

		expect(favorites(initialState, {})).toEqual(initialState);
	});

	it('should output the correct case of TOGGLE_FAVORITES action type (1)', () => {
		const initialState = [{ id: 43 }, { id: 92 }, { id: 2007 }];
		const payLoad = { id: 23 };
		const action = {
			type: 'ADD_FAVORITE',
			item: payLoad
		};

		const result = [...initialState, payLoad];

		expect(favorites(initialState, action)).toEqual(result);
	});

	it('should output the correct case of TOGGLE_FAVORITES action type (2)', () => {
		const initialState = [{ id: 43 }, { id: 92 }, { id: 2007 }];
		const payLoad = 92;
		const action = {
			type: 'REMOVE_FAVORITE',
			id: payLoad
		};

		const result = [{ id: 43 }, { id: 2007 }];

		expect(favorites(initialState, action)).toEqual(result);
	});

	it('should output the initial state when no case matches', () => {
		const initialState = [];
		const action = {
			type: 'WRONG_CASE'
		};

		expect(favorites(initialState, action)).toEqual(initialState);
	});
});
