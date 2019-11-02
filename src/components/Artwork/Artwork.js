import React from 'react';
import './Artwork.scss';

const Artwork = ({
	name,
	artist,
	releaseYear,
	artwork,
	hqArtwork,
	isLoaded
}) => {
	const loadHandler = () => {
		isLoaded = true;
	};

	return (
		<article className='Artwork'>
			<a href={hqArtwork} download='test'>
				<img alt={`${name} album artwork`} src={artwork}>
					{' '}
					onLoad={loadHandler}
				</img>
			</a>
			<div>
				<h3>{artist}</h3>
				<h3>{name}</h3>
				<h3>{releaseYear}</h3>
			</div>
		</article>
	);
};

export default Artwork;
