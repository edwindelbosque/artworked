import React from 'react';
import './ArtworkModal.scss';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite, removeFavorite } from '../../actions/index';

const Artwork = ({ result, favorites, addFavorite, removeFavorite }) => {
	const { name, artist, releaseYear, hqArtwork, id } = result;

	const handleFavorite = () => {
		favorites.find(favorite => favorite.id === id)
			? removeFavorite(id)
			: addFavorite(result);
	};

	const heartToggle = favorites.find(favorite => favorite.id === id)
		? 'is-active'
		: '';

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
					<div
						className={`heart ${heartToggle}`}
						onClick={handleFavorite}></div>
				</div>
			</article>
		</>
	);
};

const mapStateToProps = ({ favorites }) => ({
	favorites
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			addFavorite,
			removeFavorite
		},
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Artwork);
