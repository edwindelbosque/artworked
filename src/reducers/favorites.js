export const favorites = (state = [], action) => {
	switch (action.type) {
		case 'ADD_FAVORITE':
			return [action.item, ...state];
		case 'REMOVE_FAVORITE':
			return state.filter(favorite => favorite.id !== action.id);
		default:
			return state;
	}
};
