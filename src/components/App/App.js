import React, { Component } from 'react';
import './App.scss';
import SearchForm from '../SearchForm/SearchForm';
import Container from '../Container/Container';
import Nav from '../Nav/Nav';

class App extends Component {
	render() {
		return (
			<>
				<Nav />
				<SearchForm />
				<Container />
			</>
		);
	}
}

export default App;
