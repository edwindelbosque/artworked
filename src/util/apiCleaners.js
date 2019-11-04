export const cleanerHandler = (data, label, artist, term) => {
	const mutableData = [...data.results];

	if (label === 'Album') {
		const cleanAlbums = artist
			? cleanAlbum(filterArtist(artist, mutableData)).sort(
					(a, b) => b.releaseYear - a.releaseYear
			  )
			: cleanAlbum(mutableData, term);
		return cleanAlbums;
	}
	if (label === 'Single') {
		const cleanSingles = artist
			? cleanSingle(filterArtist(artist, mutableData))
			: cleanSingle(mutableData);
		return cleanSingles;
	}
	if (label === 'Artist') {
		return cleanArtist(mutableData);
	}
	if (label === 'Movie') {
		const cleanMovies = cleanMovie(mutableData);
		return cleanMovies;
	}
	if (label === 'Podcast') {
		return cleanPodcast(mutableData);
	}
	if (label === 'TV Show') {
		const cleanShows = cleanTvShow(mutableData);
		return cleanShows;
	}
	if (label === 'iBook') {
		return cleanBook(mutableData);
	}
	if (label === 'Audiobook') {
		return cleanAudiobook(mutableData);
	}
};

export const filterArtist = (artist, data) => {
	return data.filter(result => {
		const flattedTerm = artist
			.toUpperCase()
			.replace(/ /g, '')
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '');
		const flattedArtistName = result.artistName
			.toUpperCase()
			.replace(/ /g, '')
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '');
		return flattedArtistName.includes(flattedTerm);
	});
};

export const cleanArtwork = (artworkUrl, resolution) => {
	const splitUrl = artworkUrl.split('');
	splitUrl.splice(splitUrl.length - 13);
	const joinUrl = splitUrl.join('');
	const cleanUrl = `${joinUrl}${resolution}x${resolution}.jpg`;
	return cleanUrl;
};

export const cleanAlbum = mutableData => {
	const filteredData = mutableData.filter(result => result.trackCount > 5);
	return filteredData.map(result => {
		const {
			artistId,
			artistName,
			artworkUrl100,
			collectionId,
			collectionName,
			releaseDate,
			trackCount
		} = result;
		const cleanedData = {
			artistId,
			artist: artistName,
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			id: collectionId,
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			trackCount
		};
		return cleanedData;
	});
};

export const cleanSingle = mutableData => {
	const filteredData = mutableData.filter(result => result.trackCount <= 5);
	return filteredData.map(result => {
		const {
			artistId,
			artistName,
			artworkUrl100,
			collectionId,
			collectionName,
			releaseDate,
			trackCount
		} = result;
		const cleanedData = {
			artistId,
			artist: artistName,
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			id: collectionId,
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			trackCount
		};
		return cleanedData;
	});
};

export const cleanArtist = mutableData => {
	return mutableData.map(result => {
		const {
			artistId,
			artistName,
			artworkUrl100,
			collectionId,
			collectionName,
			releaseDate,
			trackCount
		} = result;
		const cleanedData = {
			artistId,
			artist: artistName,
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			id: collectionId,
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			trackCount
		};
		return cleanedData;
	});
};

export const cleanMovie = mutableData => {
	return mutableData.map(result => {
		const { artworkUrl100, trackName, releaseDate, trackId } = result;

		const cleanedData = {
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: trackName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			id: trackId
		};
		return cleanedData;
	});
};

export const cleanPodcast = mutableData => {
	return mutableData.map(result => {
		const { artworkUrl100, trackName, releaseDate, collectionId } = result;

		const cleanedData = {
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: trackName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			id: collectionId
		};
		return cleanedData;
	});
};

export const cleanTvShow = mutableData => {
	return mutableData.map(result => {
		const { artworkUrl100, releaseDate, collectionName, collectionId } = result;

		const cleanedData = {
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			id: collectionId
		};
		return cleanedData;
	});
};

export const cleanBook = mutableData => {
	return mutableData.map(result => {
		const {
			artworkUrl100,
			trackName,
			releaseDate,
			artistName,
			collectionId
		} = result;

		const cleanedData = {
			artist: artistName,
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: trackName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			id: collectionId
		};
		return cleanedData;
	});
};

export const cleanAudiobook = mutableData => {
	return mutableData.map(result => {
		const {
			artworkUrl100,
			collectionName,
			releaseDate,
			artistName,
			collectionId
		} = result;

		const cleanedData = {
			artist: artistName,
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			id: collectionId
		};
		return cleanedData;
	});
};
