import React, { Component } from 'react';
import './ArtworkResult.scss';
import loadingGif from '../../assets/loadingGif.gif';
import { connect } from 'react-redux';
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
		const { name, hqArtwork, id, isFavorites } = this.props;
		const routeHandler = isFavorites ? 'favorites' : 'search';
		const show = isLoaded ? { display: 'block' } : { display: 'none' };
		return (
			<article className='ArtworkResult'>
				{!this.state.isLoaded && <img alt='loading gif' src={loadingGif} />}
				<Link to={`/${routeHandler}/${id}`}>
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

const mapStateToProps = ({ isFavorites }) => ({
	isFavorites
});

export default connect(mapStateToProps)(Artwork);
