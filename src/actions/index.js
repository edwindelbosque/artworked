export const setResults = results => ({
	type: 'SET_RESULTS',
	results
});

export const toggleLoading = boolean => ({
	type: 'TOGGLE_LOADING',
	boolean
});

export const addFavorite = item => ({
	type: 'ADD_FAVORITE',
	item
});

export const removeFavorite = id => ({
	type: 'REMOVE_FAVORITE',
	id
});
