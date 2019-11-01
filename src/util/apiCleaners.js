export const cleanerHandler = (data, label, artist, term) => {
	const mutableData = [...data.results];

	if (label === 'Album') {
		const cleanAlbums = artist
			? cleanAlbum(filterArtist(artist, mutableData))
			: cleanAlbum(mutableData, term);
		console.log(filterResults(cleanAlbums, term));
		return filterResults(cleanAlbums, term);
	}
	if (label === 'Single') {
		const cleanSingles = artist
			? cleanSingle(filterArtist(artist, mutableData))
			: cleanSingle(mutableData);
		console.log(filterResults(cleanSingles, term));
		return filterResults(cleanSingles, term);
	}
	if (label === 'Artist') {
		console.log(cleanArtist(mutableData));
		return cleanArtist(mutableData);
	}
	if (label === 'Movie') {
		console.log(cleanMovie(mutableData));
		return cleanMovie(mutableData);
	}
	if (label === 'App') {
		console.log(cleanApp(mutableData).slice(0, 1));
		return cleanApp(mutableData.slice(0, 1));
	}
	if (label === 'Podcast') {
		console.log(cleanPodcast(mutableData));
		return cleanPodcast(mutableData);
	}
	if (label === 'Music Video') {
		console.log(cleanMusicVideo(mutableData));
		return cleanMusicVideo(mutableData);
	}
	if (label === 'TV Show') {
		console.log(cleanTvShow(mutableData));
		return cleanTvShow(mutableData);
	}
	if (label === 'iBook') {
		console.log(cleanBook(mutableData));
		return cleanBook(mutableData);
	}
	if (label === 'Audiobook') {
		console.log(cleanAudiobook(mutableData));
		return cleanAudiobook(mutableData);
	}
};

const filterResults = (cleanData, term) => {
	return cleanData.filter(result => {
		const upperTerm = term.toUpperCase().replace(/ /g, '');
		const upperName = result.name.toUpperCase().replace(/ /g, '');
		console.log(upperName, upperTerm);
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
		const cleanedAlbum = {
			artistId,
			artist: artistName,
			artwork: cleanArtwork(artworkUrl100, 600),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			albumId: collectionId,
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			trackCount
		};
		console.log(cleanedAlbum);
		return cleanedAlbum;
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
		const cleanedSingle = {
			artistId,
			artist: artistName,
			artwork: cleanArtwork(artworkUrl100, 600),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			albumId: collectionId,
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			trackCount
		};
		console.log(cleanedSingle);
		return cleanedSingle;
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
		const cleanedSingle = {
			artistId,
			artist: artistName,
			artwork: cleanArtwork(artworkUrl100, 600),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			albumId: collectionId,
			name: collectionName,
			releaseYear: parseInt(releaseDate.slice(0, 4)),
			trackCount
		};
		return cleanedSingle;
	});
};

const cleanMovie = mutableData => {
	return mutableData.map(result => {
		const { artworkUrl100, trackName, releaseDate } = result;

		const cleanedData = {
			artwork: cleanArtwork(artworkUrl100, 600),
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
			artwork: cleanArtwork(artworkUrl100, 600),
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
			artwork: cleanArtwork(artworkUrl100, 600),
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
			artwork: cleanArtwork(artworkUrl100, 600),
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
			artwork: cleanArtwork(artworkUrl100, 600),
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
			artwork: cleanArtwork(artworkUrl100, 600),
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
			artwork: cleanArtwork(artworkUrl100, 600),
			hqArtwork: cleanArtwork(artworkUrl100, 10000),
			name: trackName,
			releaseYear: parseInt(releaseDate.slice(0, 4))
		};
		return cleanedData;
	});
};
