import React from 'react';
import './App.scss';
import SearchForm from '../SearchForm/SearchForm';
import Nav from '../Nav/Nav';

class App extends React.Component {
	render() {
		return (
			<>
				<h1>Artworked</h1>
				<SearchForm />
				<Nav />
			</>
		);
	}
}

export default App;
