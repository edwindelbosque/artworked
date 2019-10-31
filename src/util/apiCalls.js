const baseUrl = 'https://itunes.apple.com/search?term=$';

export const getArtist = async (search, type) => {
	try {
		const response = await fetch(`${baseUrl}${search}&entity=${type}`);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log(error.message);
		throw new Error('Failed to get albums');
	}
};
