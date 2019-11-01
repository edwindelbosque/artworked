import React from 'react';
import './Container.scss';
import Artwork from '../Artwork/Artwork';
import loadingGif from '../../assets/loadingGif.gif';
import { connect } from 'react-redux';

const Container = ({ results, isLoading }) => {
	const card = results.map((result, index) => {
		const { name, artist, releaseYear, artwork, hqArtwork } = result;
		return (
			<Artwork
				key={index}
				name={name}
				artist={artist}
				releaseYear={releaseYear}
				artwork={artwork}
				hqArtwork={hqArtwork}
			/>
		);
	});

	const loader = (
		<img
			rel='preload'
			alt='loading gif'
			as='image'
			src={loadingGif}
			style={{ width: '600px' }}
		/>
	);

	return (
		<>
			{isLoading && loader}
			<article>{card}</article>
		</>
	);
};

const mapStateToProps = ({ results, isLoading }) => ({
	results,
	isLoading
});

export default connect(mapStateToProps)(Container);
