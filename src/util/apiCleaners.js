export const cleanerHandler = (data, label) => {
	const mutableData = [...data.results];

	if (label === 'Album') {
		console.log(cleanAlbum(mutableData).slice(0, 5));
		return cleanAlbum(mutableData).slice(0, 5);
	}
	if (label === 'Single') {
		console.log(cleanSingle(mutableData).slice(0, 5));
		return cleanSingle(mutableData).slice(0, 5);
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
			releaseYear: releaseDate.slice(0, 4),
			trackCount
		};
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
			releaseYear: releaseDate.slice(0, 4),
			trackCount
		};
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
			releaseYear: releaseDate.slice(0, 4),
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
			releaseYear: releaseDate.slice(0, 4)
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
			releaseYear: releaseDate.slice(0, 4)
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
			releaseYear: releaseDate.slice(0, 4)
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
			releaseYear: releaseDate.slice(0, 4)
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
			releaseYear: releaseDate.slice(0, 4)
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
			releaseYear: releaseDate.slice(0, 4)
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
			releaseYear: releaseDate.slice(0, 4)
		};
		return cleanedData;
	});
};
