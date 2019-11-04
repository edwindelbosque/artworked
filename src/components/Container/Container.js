import React from 'react';
import './Container.scss';
import ArtworkResult from '../ArtworkResult/ArtworkResult';
import loadingGif from '../../assets/loadingGif.gif';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Container = ({ results, isLoading, isFavorites, favorites }) => {
	const mapCards = type => {
		return type.map((result, index) => {
			const { name, artist, releaseYear, hqArtwork, id } = result;
			return (
				<ArtworkResult
					key={index}
					id={id}
					name={name}
					artist={artist}
					releaseYear={releaseYear}
					hqArtwork={hqArtwork}
					isLoaded={false}
				/>
			);
		});
	};

	const cardsHandler = isFavorites ? mapCards(favorites) : mapCards(results);

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
			<article className='Container'>{cardsHandler}</article>
		</>
	);
};

export const mapStateToProps = ({
	results,
	isLoading,
	isFavorites,
	favorites
}) => ({
	results,
	isLoading,
	isFavorites,
	favorites
});

Container.propTypes = {
	results: PropTypes.array,
	favorites: PropTypes.array,
	isLoading: PropTypes.bool,
	isFavorites: PropTypes.bool
};

export default connect(mapStateToProps)(Container);
