import React, { Component } from 'react';
import './App.scss';
import SearchForm from '../SearchForm/SearchForm';
import Container from '../Container/Container';
import ArtworkModal from '../ArtworkModal/ArtworkModal';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';

class App extends Component {
	render() {
		const { results } = this.props;
		return (
			<main className='App'>
				<Nav />
				<Route path='(|search/:id)' render={() => <SearchForm />} />
				<Route path='(|search/:id)' render={() => <Container />} />
				<Route
					path='/search/:id'
					render={({ match }) => {
						const id = parseInt(match.params.id);
						const result = results.find(result => result.id === id);
						return <ArtworkModal result={result} />;
					}}
				/>
			</main>
		);
	}
}

const mapStateToProps = ({ results }) => ({
	results
});

export default connect(mapStateToProps)(App);
