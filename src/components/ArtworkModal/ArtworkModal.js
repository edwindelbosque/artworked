import React from 'react';
import './ArtworkModal.scss';

const Artwork = ({ result }) => {
	const { name, artist, releaseYear, hqArtwork } = result;
	return (
		<article className='ArtworkModal'>
			<a href={hqArtwork} target='_blank' rel='noopener noreferrer'>
				<img alt={`${name} album artwork`} src={hqArtwork} />
			</a>
			<div>
				<h3 className='title'>{name}</h3>
				<h3 className='artist'>{artist}</h3>
				<h3 className='year'>{releaseYear}</h3>
			</div>
		</article>
	);
};

export default Artwork;
