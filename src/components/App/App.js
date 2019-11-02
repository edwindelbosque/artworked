import React, { Component } from 'react';
import './App.scss';
import SearchForm from '../SearchForm/SearchForm';
import Container from '../Container/Container';
import ArtworkModal from '../ArtworkModal/ArtworkModal';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';

class App extends Component {
	render() {
		return (
			<main className='App'>
				<Nav />
				<Route path='/' render={() => <SearchForm />} />
				<Route path='/' render={() => <Container />} />
				<Route
					path='/search/:id'
					render={({ match }) => {
						return <ArtworkModal />;
					}}
				/>
			</main>
		);
	}
}

export default App;
