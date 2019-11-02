import React, { Component } from 'react';
import './ArtworkModal.scss';
import loadingGif from '../../assets/loadingGif.gif';

class Artwork extends Component {
	constructor() {
		super();
		this.state = {
			isLoaded: false
		};
	}

	loadHandler = () => {
		this.setState({
			isLoaded: true
		});
	};

	render() {
		const { isLoaded } = this.state;
		const { name, artist, releaseYear, artwork, hqArtwork } = this.props;
		const show = isLoaded ? { display: 'block' } : { display: 'none' };
		return (
			<article className='Artwork'>
				<a href={hqArtwork} target='_blank' rel='noopener noreferrer'>
					{!this.state.isLoaded && <img alt='loading gif' src={loadingGif} />}
					<img
						alt={`${name} album artwork`}
						src={hqArtwork}
						style={show}
						onLoad={this.loadHandler}
					/>
				</a>
				<div>
					<h3 className='title'>{name}</h3>
					<h3 className='artist'>{artist}</h3>
					<h3 className='year'>{releaseYear}</h3>
				</div>
			</article>
		);
	}
}

export default Artwork;
