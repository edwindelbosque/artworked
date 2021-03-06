import React from 'react';
import './Nav.scss';
import { connect } from 'react-redux';
import { toggleFavorites } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Nav = ({ isFavorites, toggleFavorites }) => {
	const toggleStyling = isFavorites ? 'active' : '';

	return (
		<nav className='Nav'>
			<Route exact path='/(|favorites)'>
				<div className='container'>
					<h3>My List</h3>
					<div className={`slider-track ${toggleStyling}`}>
						<Link to={isFavorites ? '/' : 'favorites'}>
							<div className='slider' onClick={toggleFavorites}></div>
						</Link>
					</div>
				</div>
			</Route>
			<h2>Artworked</h2>
			<div></div>
		</nav>
	);
};

export const mapStateToProps = ({ isFavorites }) => ({
	isFavorites
});

export const mapDispatchToProps = dispatch => {
	return bindActionCreators({ toggleFavorites }, dispatch);
};

Nav.propTypes = {
	isFavorites: PropTypes.bool,
	toggleFavorites: PropTypes.func
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);
