import React, { Component } from 'react';
import './ArtworkResult.scss';
import loadingGif from '../../assets/loadingGif.gif';
import { Link } from 'react-router-dom';

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
		const { name, hqArtwork, id } = this.props;
		const show = isLoaded ? { display: 'block' } : { display: 'none' };
		return (
			<article className='ArtworkResult'>
				{!this.state.isLoaded && <img alt='loading gif' src={loadingGif} />}
				<Link to={`/search/${id}`}>
					<img
						alt={`${name} album artwork`}
						src={hqArtwork}
						style={show}
						onLoad={this.loadHandler}
					/>
				</Link>
			</article>
		);
	}
}

export default Artwork;
