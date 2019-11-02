import React from 'react';
import './ArtworkModal.scss';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

const Artwork = ({ result }) => {
	const { name, artist, releaseYear, hqArtwork } = result;

	return (
		<>
			<Link to='/'>
				<div className='modal-backdrop'></div>
			</Link>
			<Nav />
			<article className='ArtworkModal modalContainer'>
				<img alt={`${name} album artwork`} src={hqArtwork} />
				<div>
					<h3 className='title'>{name}</h3>
					<h3 className='artist'>{artist}</h3>
					<h3 className='year'>{releaseYear}</h3>
					<a
						href={hqArtwork}
						target='_blank'
						rel='noopener noreferrer'
						download>
						<button className='artwork-button'>Get Artwork</button>
					</a>
					<div class='heart'></div>
				</div>
			</article>
		</>
	);
};

export default Artwork;
