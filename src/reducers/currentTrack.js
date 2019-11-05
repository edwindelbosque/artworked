export const currentTrack = (state = '', action) => {
	switch (action.type) {
		case 'SET_TRACK':
			return action.previewUrl;
		default:
			return state;
	}
};
