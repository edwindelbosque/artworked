import React, { Component } from 'react';
import './ArtworkModal.scss';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite, removeFavorite } from '../../actions/index';
import PropTypes from 'prop-types';
import { getAlbumTracks } from '../../util/apiCalls';
import { cleanTracks } from '../../util/apiCleaners';

export class ArtworkModal extends Component {
	constructor() {
		super();
		this.state = {
			change: false,
			isFavorite: true,
			tracks: [],
			isLoaded: false,
			currentlyPlaying: ''
		};
	}

	componentDidMount = async () => {
		const { result, favorites } = this.props;
		const { id } = result;
		this.setState({
			isFavorite: favorites.find(favorite => favorite.id === id)
		});
		const albumTracks = await getAlbumTracks(id);
		try {
			const cleanedTracks = cleanTracks(albumTracks);
			this.setState({ tracks: cleanedTracks, isLoaded: true });
		} catch (error) {
			this.setState({ tracks: 'Could not fetch' });
		}
	};

	componentWillUnmount = () => {
		const { favorites, removeFavorite, addFavorite, result } = this.props;
		const { id } = result;
		if (this.state.change) {
			favorites.find(favorite => favorite.id === id)
				? removeFavorite(id)
				: addFavorite(result);
		}
	};

	handleToggle = () => {
		this.setState({
			change: !this.state.change,
			isFavorite: !this.state.isFavorite
		});
	};

	mapTracks = () => {
		return this.state.tracks.map((track, index) => {
			const { name, number, previewUrl } = track;
			return (
				<li key={index} onClick={() => this.handleTrack(previewUrl)}>
					<span className='trackNumber'>{number}. </span>
					{name}
				</li>
			);
		});
	};

	handleTrack = async trackPreview => {
		this.setState({ currentlyPlaying: trackPreview });
	};

	render() {
		const { isFavorites, result } = this.props;
		const { name, artist, releaseYear, hqArtwork } = result;
		const heartToggle = this.state.isFavorite ? 'is-active' : '';
		const routeHandler = isFavorites ? 'favorites' : '';
		return (
			<>
				<Link to={`/${routeHandler}`}>
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
							onClick={this.handleToggle}></div>
						<ul>{this.state.isLoaded && this.mapTracks()}</ul>
					</div>
				</article>
				{this.state.currentlyPlaying && (
					<audio controls className='audioPlayer' ref='audio'>
						<source src={this.state.currentlyPlaying} type='audio/mpeg' />
					</audio>
				)}
			</>
		);
	}
}

export const mapStateToProps = ({ favorites, isFavorites }) => ({
	favorites,
	isFavorites
});

export const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			addFavorite,
			removeFavorite
		},
		dispatch
	);
};

ArtworkModal.propTypes = {
	favorites: PropTypes.array,
	isFavorites: PropTypes.bool,
	addFavorite: PropTypes.func,
	removeFavorite: PropTypes.func
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ArtworkModal);
