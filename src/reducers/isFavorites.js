export const isFavorites = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_FAVORITES':
			return !state;
		default:
			return state;
	}
};
