const baseUrl = 'https://itunes.apple.com/search?term=$';
const results = 'album';

export const getArtist = async search => {
	try {
		const response = await fetch(`${baseUrl}${search}&entity=${results}`);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log(error.message);
		throw new Error('Failed to get albums');
	}
};
