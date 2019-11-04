const baseSearchUrl = 'https://itunes.apple.com/search?term=';
const baseLookupUrl = 'https://itunes.apple.com/lookup?id=';

export const getData = async (search, type) => {
	try {
		const response = await fetch(`${baseSearchUrl}${search}&entity=${type}`);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		throw new Error('Failed to get results');
	}
};

export const getAlbumTracks = async collectionId => {
	try {
		const response = await fetch(`${baseLookupUrl}${collectionId}&entity=song`);
		const albumTracks = await response.json();
		return albumTracks;
	} catch (error) {
		throw new Error('Failed to get album tracks');
	}
};
