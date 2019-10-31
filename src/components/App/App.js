import React from 'react';
import './App.scss';
import { getArtist } from '../../util/apiCalls';

class App extends React.Component {
	componentDidMount = async () => {
		getArtist('pop2');
	};

	render() {
		return <h1>Artworked</h1>;
	}
}

export default App;
