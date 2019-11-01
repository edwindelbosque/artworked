export const isLoading = (state = false, action) => {
	switch (action.type) {
		case 'TOGGLE_LOADING':
			return action.boolean;
		default:
			return state;
	}
};
