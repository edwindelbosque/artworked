import { getData, getAlbumTracks } from './apiCalls';

describe('getData', () => {
	const baseSearchUrl = 'https://itunes.apple.com/search?term=';
	const search = 'The Slow Rush';
	const type = 'album';

	const mockResponse = [
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

	it('should call fetch with the correct URL', () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockResponse)
			});
		});
		getData(search, type);

		expect(window.fetch).toHaveBeenCalledWith(
			`${baseSearchUrl}${search}&entity=${type}`
		);
	});

	it('should return an array of movies', () => {
		expect(getData(search, type)).resolves.toEqual(mockResponse);
	});

	it('should return an error if the response is not okay', () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			});
		});

		expect(getData(search, type)).rejects.toEqual(
			Error('Failed to get results')
		);
	});
});

describe('getAlbumTracks', () => {
	const baseLookupUrl = 'https://itunes.apple.com/lookup?id=';
	const collectionId = '1484742845';

	const mockResponse = [
		{
			artistId: 290242959,
			artistName: 'Tame Impala',
			artistViewUrl:
				'https://music.apple.com/us/artist/tame-impala/290242959?uo=4',
			artworkUrl30:
				'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/30x30bb.jpg',
			artworkUrl60:
				'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/60x60bb.jpg',
			artworkUrl100:
				'https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/f6/92/97/f6929759-3423-ece4-2aff-e84683aea54a/source/100x100bb.jpg',
			collectionCensoredName: 'The Slow Rush',
			collectionExplicitness: 'notExplicit',
			collectionId: 1484742845,
			collectionName: 'The Slow Rush',
			collectionViewUrl:
				'https://music.apple.com/us/album/it-might-be-time/1484742845?i=1484743123&uo=4',
			country: 'USA',
			currency: 'USD',
			discCount: 1,
			discNumber: 1,
			isStreamable: true,
			kind: 'song',
			previewUrl:
				'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/99/d5/83/99d583d6-a130-d9a0-bbaa-59b4ed761c25/mzaf_1132903611461065811.plus.aac.p.m4a',
			primaryGenreName: 'Alternative',
			releaseDate: '2020-02-14T08:00:00Z',
			trackCensoredName: 'It Might Be Time',
			trackCount: 12,
			trackExplicitness: 'notExplicit',
			trackId: 1484743123,
			trackName: 'It Might Be Time',
			trackNumber: 10,
			trackPrice: 1.29,
			trackTimeMillis: 273016,
			trackViewUrl:
				'https://music.apple.com/us/album/it-might-be-time/1484742845?i=1484743123&uo=4',
			wrapperType: 'track'
		}
	];

	it('should call fetch with the correct URL', () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockResponse)
			});
		});
		getAlbumTracks(collectionId);

		expect(window.fetch).toHaveBeenCalledWith(
			`${baseLookupUrl}${collectionId}&entity=song`
		);
	});

	it('should return an array of movies', () => {
		expect(getAlbumTracks(collectionId)).resolves.toEqual(mockResponse);
	});

	it('should return an error if the response is not okay', () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			});
		});

		expect(getAlbumTracks(8736374698376)).rejects.toEqual(
			Error('Failed to get album tracks')
		);
	});
});
