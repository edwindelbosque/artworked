import React from 'react';
import './App.scss';
import SearchForm from '../../SearchForm/SearchForm';
import { getArtist } from '../../util/apiCalls';

class App extends React.Component {
	componentDidMount = async () => {
		getArtist('the office', 'tvSeason');
	};

	render() {
		return (
			<>
				<h1>Artworked</h1>
				<SearchForm />
			</>
		);
	}
}

export default App;
