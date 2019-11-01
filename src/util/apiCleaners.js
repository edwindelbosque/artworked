export const cleanerHandler = (data, label, artist, term) => {
	const mutableData = [...data.results];

	if (label === 'Album') {
		const cleanAlbums = artist
			? cleanAlbum(filterArtist(artist, mutableData))
			: cleanAlbum(mutableData, term);
		return filterResults(cleanAlbums, term);
	}
	if (label === 'Single') {
		const cleanSingles = artist
			? cleanSingle(filterArtist(artist, mutableData))
			: cleanSingle(mutableData);
		return filterResults(cleanSingles, term);
	}
	if (label === 'Artist') {
		return cleanArtist(mutableData);
	}
	if (label === 'Movie') {
		const cleanMovies = cleanMovie(mutableData);
		return filterResults(cleanMovies, term);
	}
	if (label === 'App') {
		return cleanApp(mutableData.slice(0, 1));
	}
	if (label === 'Podcast') {
		return cleanPodcast(mutableData);
	}
	if (label === 'Music Video') {
		return cleanMusicVideo(mutableData);
	}
	if (label === 'TV Show') {
		return cleanTvShow(mutableData);
	}
	if (label === 'iBook') {
		return cleanBook(mutableData);
	}
	if (label === 'Audiobook') {
		return cleanAudiobook(mutableData);
	}
};

const filterResults = (cleanData, term) => {
	return cleanData.filter(result => {
		const upperTerm = term.toUpperCase().replace(/ /g, '');
		const upperName = result.name.toUpperCase().replace(/ /g, '');
		return upperName.includes(upperTerm);
	});
};

const filterArtist = (artist, data) => {
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

const cleanArtwork = (artworkUrl, resolution) => {
	const splitUrl = artworkUrl.split('');
	splitUrl.splice(splitUrl.length - 13);
	const joinUrl = splitUrl.join('');
	const cleanUrl = `${joinUrl}${resolution}x${resolution}.jpg`;
	return cleanUrl;
};

const cleanAlbum = mutableData => {
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
			artwork: cleanArtwork(artworkUrl100, 580),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			albumId: collectionId,
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			trackCount
		};
		return cleanedData;
	});
};

const cleanSingle = mutableData => {
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
			artwork: cleanArtwork(artworkUrl100, 580),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			albumId: collectionId,
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			trackCount
		};
		return cleanedData;
	});
};

const cleanArtist = mutableData => {
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
			artwork: cleanArtwork(artworkUrl100, 580),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			albumId: collectionId,
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			trackCount
		};
		return cleanedData;
	});
};

const cleanMovie = mutableData => {
	return mutableData.map(result => {
		const { artworkUrl100, trackName, releaseDate } = result;

		const cleanedData = {
			artwork: cleanArtwork(artworkUrl100, 580),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: trackName,
			releaseYear: parseInt(releaseDate.slice(0, 4))
		};
		return cleanedData;
	});
};

const cleanPodcast = mutableData => {
	return mutableData.map(result => {
		const { artworkUrl100, trackName, releaseDate } = result;

		const cleanedData = {
			artwork: cleanArtwork(artworkUrl100, 580),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: trackName,
			releaseYear: parseInt(releaseDate.slice(0, 4))
		};
		return cleanedData;
	});
};

const cleanMusicVideo = mutableData => {
	return mutableData.map(result => {
		const {
			artworkUrl100,
			trackName,
			releaseDate,
			previewUrl,
			artistName
		} = result;

		const cleanedData = {
			artist: artistName,
			artwork: cleanArtwork(artworkUrl100, 580),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			previewUrl,
			name: trackName,
			releaseYear: parseInt(releaseDate.slice(0, 4))
		};
		return cleanedData;
	});
};

const cleanTvShow = mutableData => {
	return mutableData.map(result => {
		const { artworkUrl100, releaseDate, collectionName } = result;

		const cleanedData = {
			artwork: cleanArtwork(artworkUrl100, 580),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4))
		};
		return cleanedData;
	});
};

const cleanBook = mutableData => {
	return mutableData.map(result => {
		const { artworkUrl100, trackName, releaseDate, artistName } = result;

		const cleanedData = {
			artist: artistName,
			artwork: cleanArtwork(artworkUrl100, 580),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: trackName,
			releaseYear: parseInt(releaseDate.slice(0, 4))
		};
		return cleanedData;
	});
};

const cleanAudiobook = mutableData => {
	return mutableData.map(result => {
		const { artworkUrl100, collectionName, releaseDate, artistName } = result;

		const cleanedData = {
			artist: artistName,
			artwork: cleanArtwork(artworkUrl100, 580),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4))
		};
		return cleanedData;
	});
};

const cleanApp = mutableData => {
	return mutableData.map(result => {
		const { artworkUrl100, trackName, releaseDate } = result;

		const cleanedData = {
			artwork: cleanArtwork(artworkUrl100, 580),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: trackName,
			releaseYear: parseInt(releaseDate.slice(0, 4))
		};
		return cleanedData;
	});
};
