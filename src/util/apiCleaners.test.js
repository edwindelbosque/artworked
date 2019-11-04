import {
	cleanerHandler,
	cleanAlbum,
	cleanSingle,
	cleanArtist
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

	it('should output a cleaned album data', () => {
		expect(cleanAlbum(initialData)).toEqual(cleanedData);
	});

	it('should output a cleaned single data', () => {
		expect(cleanSingle(initialData2)).toEqual(cleanedData2);
	});

	it('should output a cleaned artist data', () => {
		expect(cleanArtist(initialData)).toEqual(cleanedData);
	});
});
