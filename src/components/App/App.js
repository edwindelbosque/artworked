import React from 'react';
import './App.scss';
import SearchForm from '../SearchForm/SearchForm';
import Nav from '../Nav/Nav';

class App extends React.Component {
	render() {
		return (
			<>
				<Nav />
				<SearchForm />
			</>
		);
	}
}

export default App;
