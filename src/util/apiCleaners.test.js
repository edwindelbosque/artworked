import {
	cleanerHandler,
	cleanAlbum,
	cleanSingle,
	cleanArtist,
	cleanMovie,
	cleanPodcast,
	cleanTvShow,
	cleanBook,
	cleanAudiobook,
	cleanArtwork,
	filterArtist
} from './apiCleaners';

describe('CleanerHandler', () => {
	const initialData = [
		{
			amgArtistId: 1111074,
			artistId: 290242959,
			artistName: 'Tame Impala',
			artistViewUrl:
				'https://music.apple.com/us/artist/tame-impala/290242959?uo=4',
			artworkUrl60:
				'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/60x60bb.jpg',
			artworkUrl100:
				'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/100x100bb.jpg',
			collectionCensoredName: 'The Slow Rush',
			collectionExplicitness: 'notExplicit',
			collectionId: 1484742845,
			collectionName: 'The Slow Rush',
			collectionType: 'Album',
			collectionViewUrl:
				'https://music.apple.com/us/album/the-slow-rush/1484742845?uo=4',
			copyright:
				'An Island Records Australia release; ℗ 2019 Modular Recordings Pty Ltd',
			country: 'USA',
			currency: 'USD',
			primaryGenreName: 'Alternative',
			releaseDate: '2020-02-14T08:00:00Z',
			trackCount: 12,
			wrapperType: 'collection'
		}
	];

	const initialData2 = [
		{
			amgArtistId: 1111074,
			artistId: 290242959,
			artistName: 'Tame Impala',
			artistViewUrl:
				'https://music.apple.com/us/artist/tame-impala/290242959?uo=4',
			artworkUrl60:
				'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/60x60bb.jpg',
			artworkUrl100:
				'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/100x100bb.jpg',
			collectionCensoredName: 'The Slow Rush',
			collectionExplicitness: 'notExplicit',
			collectionId: 1484742845,
			collectionName: 'The Slow Rush',
			collectionType: 'Album',
			collectionViewUrl:
				'https://music.apple.com/us/album/the-slow-rush/1484742845?uo=4',
			copyright:
				'An Island Records Australia release; ℗ 2019 Modular Recordings Pty Ltd',
			country: 'USA',
			currency: 'USD',
			primaryGenreName: 'Alternative',
			releaseDate: '2020-02-14T08:00:00Z',
			trackCount: 2,
			wrapperType: 'collection'
		}
	];

	const cleanedData = [
		{
			artistId: 290242959,
			artist: 'Tame Impala',
			hqArtwork:
				'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/10000x10000.jpg',
			id: 1484742845,
			name: 'The Slow Rush',
			releaseYear: 2020,
			trackCount: 12
		}
	];

	const cleanedData2 = [
		{
			artistId: 290242959,
			artist: 'Tame Impala',
			hqArtwork:
				'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/10000x10000.jpg',
			id: 1484742845,
			name: 'The Slow Rush',
			releaseYear: 2020,
			trackCount: 2
		}
	];

	it('should output the appropriate funtion based on fetch info', () => {
		const initialFetchData = {
			results: [
				{
					amgArtistId: 1111074,
					artistId: 290242959,
					artistName: 'Tame Impala',
					artistViewUrl:
						'https://music.apple.com/us/artist/tame-impala/290242959?uo=4',
					artworkUrl60:
						'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/60x60bb.jpg',
					artworkUrl100:
						'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/100x100bb.jpg',
					collectionCensoredName: 'The Slow Rush',
					collectionExplicitness: 'notExplicit',
					collectionId: 1484742845,
					collectionName: 'The Slow Rush',
					collectionType: 'Album',
					collectionViewUrl:
						'https://music.apple.com/us/album/the-slow-rush/1484742845?uo=4',
					copyright:
						'An Island Records Australia release; ℗ 2019 Modular Recordings Pty Ltd',
					country: 'USA',
					currency: 'USD',
					primaryGenreName: 'Alternative',
					releaseDate: '2020-02-14T08:00:00Z',
					trackCount: 12,
					wrapperType: 'collection'
				}
			]
		};
		expect(
			cleanerHandler(initialFetchData, 'Album', '', 'The Slow Rush')
		).toEqual(cleanedData);
	});

	it('should output cleaned Album data', () => {
		expect(cleanAlbum(initialData)).toEqual(cleanedData);
	});

	it('should output cleaned Single data', () => {
		expect(cleanSingle(initialData2)).toEqual(cleanedData2);
	});

	it('should output cleaned Artist data', () => {
		expect(cleanArtist(initialData)).toEqual(cleanedData);
	});

	it('should output cleaned Movie data', () => {
		const initialDataMovies = [
			{
				artistName: 'Sam Mendes',
				artworkUrl30:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/30x30bb.jpg',
				artworkUrl60:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/60x60bb.jpg',
				artworkUrl100:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/100x100bb.jpg',
				collectionArtistId: 84755883,
				collectionArtistViewUrl:
					'https://itunes.apple.com/us/artist/mgm/84755883?uo=4',
				collectionCensoredName: 'The Daniel Craig Collection',
				collectionExplicitness: 'notExplicit',
				collectionHdPrice: 49.99,
				collectionId: 1076172868,
				collectionName: 'The Daniel Craig Collection',
				collectionPrice: 49.99,
				collectionViewUrl:
					'https://itunes.apple.com/us/movie/spectre/id1042425776?uo=4',
				contentAdvisoryRating: 'PG-13',
				country: 'USA',
				currency: 'USD',
				discCount: 1,
				discNumber: 1,
				hasITunesExtras: true,
				kind: 'feature-movie',
				longDescription:
					'A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization.  While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.',
				previewUrl:
					'https://video-ssl.itunes.apple.com/itunes-assets/Video122/v4/7c/a0/79/7ca079cc-0a2e-551c-e7f3-8b48cfcc185c/mzvf_3466749366343737734.640x356.h264lc.U.p.m4v',
				primaryGenreName: 'Action & Adventure',
				releaseDate: '2015-11-06T08:00:00Z',
				trackCensoredName: 'Spectre',
				trackCount: 4,
				trackExplicitness: 'notExplicit',
				trackHdPrice: 14.99,
				trackHdRentalPrice: 3.99,
				trackId: 1042425776,
				trackName: 'Spectre',
				trackNumber: 4,
				trackPrice: 14.99,
				trackRentalPrice: 3.99,
				trackTimeMillis: 8886912,
				trackViewUrl:
					'https://itunes.apple.com/us/movie/spectre/id1042425776?uo=4',
				wrapperType: 'track'
			}
		];

		const cleanedDataMovie = [
			{
				hqArtwork:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/10000x10000.jpg',
				name: 'Spectre',
				releaseYear: 2015,
				id: 1042425776
			}
		];
		expect(cleanMovie(initialDataMovies)).toEqual(cleanedDataMovie);
	});

	it('should output cleaned Podcast data', () => {
		const initialDataPodcast = [
			{
				artworkUrl100:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/100x100bb.jpg',
				collectionArtistId: 84755883,
				releaseDate: '2019-11-06T08:00:00Z',
				collectionId: 1042425776,
				trackName: 'Reply All',
				trackTimeMillis: 8886912,
				trackViewUrl:
					'https://itunes.apple.com/us/movie/spectre/id1042425776?uo=4',
				wrapperType: 'track'
			}
		];

		const cleanedDataPodcast = [
			{
				hqArtwork:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/10000x10000.jpg',
				name: 'Reply All',
				releaseYear: 2019,
				id: 1042425776
			}
		];
		expect(cleanPodcast(initialDataPodcast)).toEqual(cleanedDataPodcast);
	});

	it('should output cleaned TV Show data', () => {
		const initialDataTvShow = [
			{
				artworkUrl100:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/100x100bb.jpg',
				collectionArtistId: 84755883,
				releaseDate: '2013-11-06T08:00:00Z',
				collectionId: 1042425776,
				collectionName: 'The Office',
				trackTimeMillis: 8886912,
				trackViewUrl:
					'https://itunes.apple.com/us/movie/spectre/id1042425776?uo=4',
				wrapperType: 'track'
			}
		];

		const cleanedDataTvShow = [
			{
				hqArtwork:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/10000x10000.jpg',
				name: 'The Office',
				releaseYear: 2013,
				id: 1042425776
			}
		];
		expect(cleanTvShow(initialDataTvShow)).toEqual(cleanedDataTvShow);
	});

	it('should output cleaned Book data', () => {
		const initialDataBook = [
			{
				artistName: 'Maria Popova',
				artworkUrl100:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/100x100bb.jpg',
				collectionArtistId: 84755883,
				releaseDate: '2019-11-06T08:00:00Z',
				collectionId: 1042425776,
				trackName: 'Figuring',
				trackTimeMillis: 8886912,
				trackViewUrl:
					'https://itunes.apple.com/us/movie/spectre/id1042425776?uo=4',
				wrapperType: 'track'
			}
		];

		const cleanedDataBook = [
			{
				artist: 'Maria Popova',
				hqArtwork:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/10000x10000.jpg',
				name: 'Figuring',
				releaseYear: 2019,
				id: 1042425776
			}
		];
		expect(cleanBook(initialDataBook)).toEqual(cleanedDataBook);
	});

	it('should output cleaned Audiobook data', () => {
		const initialDataAudiobook = [
			{
				artistName: 'Maria Popova',
				artworkUrl100:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/100x100bb.jpg',
				collectionArtistId: 84755883,
				releaseDate: '2019-11-06T08:00:00Z',
				collectionId: 1042425776,
				collectionName: 'Figuring',
				trackTimeMillis: 8886912,
				trackViewUrl:
					'https://itunes.apple.com/us/movie/spectre/id1042425776?uo=4',
				wrapperType: 'track'
			}
		];

		const cleanedDataAudiobook = [
			{
				artist: 'Maria Popova',
				hqArtwork:
					'https://is5-ssl.mzstatic.com/image/thumb/Video4/v4/c5/f6/dd/c5f6dd4d-ddcb-f26a-7446-ebf7bcbd7795/source/10000x10000.jpg',
				name: 'Figuring',
				releaseYear: 2019,
				id: 1042425776
			}
		];
		expect(cleanAudiobook(initialDataAudiobook)).toEqual(cleanedDataAudiobook);
	});

	it('should output correctly modifed artwork url', () => {
		const initialUrl =
			'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/8b/79/57/8b7957e9-74f6-674b-55d9-490206b4a4df/mza_4929726700145071969.jpeg/100x100bb.jpg';

		const modifiedUrl =
			'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/8b/79/57/8b7957e9-74f6-674b-55d9-490206b4a4df/mza_4929726700145071969.jpeg/10000x10000.jpg';

		expect(cleanArtwork(initialUrl, 10000)).toEqual(modifiedUrl);
	});

	it('should should filter by artist given data and a search term', () => {
		const initialData = [
			{ artistName: 'Lana Del Rey' },
			{ artistName: 'A$AP Rocky' }
		];

		const filteredOutput = [{ artistName: 'Lana Del Rey' }];

		expect(filterArtist('Lana Del Rey', initialData)).toEqual(filteredOutput);
	});
});
