const baseSearchUrl = 'https://itunes.apple.com/search?term=';
const baseLookupUrl = 'https://itunes.apple.com/lookup?id=';

export const getData = async (search, type) => {
	const response = await fetch(`${baseSearchUrl}${search}&entity=${type}`);
	const data = await response;
	if (!response.ok) {
		throw new Error('Failed to get results');
	}
	return await data.json();
};

export const getAlbumTracks = async collectionId => {
	const response = await fetch(`${baseLookupUrl}${collectionId}&entity=song`);
	const albumTracks = await response;
	if (!response.ok) {
		throw new Error('Failed to get album tracks');
	}
	return await albumTracks.json();
};
