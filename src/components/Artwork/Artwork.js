import React from 'react';
import './Artwork.scss';

const Artwork = ({ name, artist, releaseYear, artwork, hqArtwork }) => {
	return (
		<article className='Artwork'>
			<img alt={`${name} album artwork`} src={artwork}></img>
		</article>
	);
};

export default Artwork;
