import React, { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			term: '',
			type: ''
		};
	}

	render() {
		return <h2>SearchForm</h2>;
	}
}

export default SearchForm;
