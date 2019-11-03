export const favorites = (state = [], action) => {
	switch (action.type) {
		case 'ADD_FAVORITE':
			return [...state, action.item];
		case 'REMOVE_FAVORITE':
			return state.filter(favorite => favorite.id !== action.id);
		default:
			return state;
	}
};
