const baseUrl = 'https://itunes.apple.com/search?term=$';

export const getData = async (search, type) => {
	try {
		const response = await fetch(`${baseUrl}${search}&entity=${type}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
		throw new Error('Failed to get albums');
	}
};
