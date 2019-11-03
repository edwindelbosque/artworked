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
		const { results, favorites } = this.props;
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
			</main>
		);
	}
}

const mapStateToProps = ({ results, favorites }) => ({
	results,
	favorites
});

export default connect(mapStateToProps)(App);
