import React from 'react';
import './App.scss';
import SearchForm from '../SearchForm/SearchForm';
import Container from '../Container/Container';
import ArtworkModal from '../ArtworkModal/ArtworkModal';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';

export const App = ({ results, favorites }) => {
	return (
		<main className='App'>
			<Nav />
			<Route exact path='(|search/:id)' render={() => <SearchForm />} />
			<Route path='(|search/:id)' render={() => <Container />} />
			<Route
				path='/(search|favorites)/:id'
				render={({ match }) => {
					console.log(match);
					const id = parseInt(match.params.id);
					const data = [...results, ...favorites];
					const result = data.find(result => result.id === id);
					return <ArtworkModal result={result} match={match.params} />;
				}}
			/>
			<Route render={() => <Redirect to={{ pathname: '/' }} />} />
		</main>
	);
};

export const mapStateToProps = ({ results, favorites }) => ({
	results,
	favorites
});

App.propTypes = {
	results: PropTypes.array,
	favorites: PropTypes.array
};

export default connect(mapStateToProps)(App);
