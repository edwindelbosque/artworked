import * as action from './index';

describe('actions', () => {
	it('should have a type of SET_RESULTS', () => {
		const results = [{ id: 1 }, { id: 2 }, { id: 3 }];
		const expectedAction = {
			type: 'SET_RESULTS',
			results
		};

		const result = action.setResults(results);

		expect(result).toEqual(expectedAction);
	});

	it('should have the type of TOGGLE_LOADING', () => {
		const boolean = true;
		const expectedAction = {
			type: 'TOGGLE_LOADING',
			boolean
		};

		const result = action.toggleLoading(boolean);

		expect(result).toEqual(expectedAction);
	});

	it('should have the type of ADD_FAVORITE', () => {
		const item = { id: 23 };
		const expectedAction = {
			type: 'ADD_FAVORITE',
			item
		};

		const result = action.addFavorite(item);

		expect(result).toEqual(expectedAction);
	});

	it('should have the type of REMOVE_FAVORITE', () => {
		const id = 23;
		const expectedAction = {
			type: 'REMOVE_FAVORITE',
			id
		};

		const result = action.removeFavorite(id);

		expect(result).toEqual(expectedAction);
	});

	it('should have the type of TOGGLE_FAVORITES', () => {
		const expectedAction = {
			type: 'TOGGLE_FAVORITES'
		};

		const result = action.toggleFavorites();

		expect(result).toEqual(expectedAction);
	});
});
