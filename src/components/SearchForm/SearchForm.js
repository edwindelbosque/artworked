import React, { Component } from 'react';
import './SearchForm.scss';
import { getData } from '../../util/apiCalls';
import { cleanerHandler } from '../../util/apiCleaners';
import { connect } from 'react-redux';
import { setResults, toggleLoading } from '../../actions';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

export class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			type: 'album',
			term: '',
			artist: '',
			label: 'Artist'
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});

		if (e.target.name === 'type') {
			const value = JSON.parse(e.target.value);
			this.setState({
				type: value[0],
				label: value[1]
			});
		}
	};

	handleClick = async () => {
		const { term, type, label, artist } = this.state;
		const { setResults, toggleLoading } = this.props;
		const data = await getData(term, type);
		try {
			setResults([]);
			toggleLoading(true);
			const cleanData = cleanerHandler(data, label, artist, term);
			setResults(cleanData);
			toggleLoading(false);
		} catch (error) {
			setResults([]);
		}
		this.resetState();
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	resetState = () => {
		this.setState({
			term: '',
			artist: ''
		});
	};

	render() {
		const { term, artist, label } = this.state;

		const artistInput = (
			<div>
				<input
					type='text'
					name='artist'
					placeholder='Enter Artist (Optional)'
					value={artist}
					onChange={e => this.handleChange(e)}
				/>
			</div>
		);

		return (
			<form className='SearchForm' onSubmit={e => this.handleSubmit(e)}>
				<div className='inputsSection'>
					<select name='type' onChange={e => this.handleChange(e)}>
						<option value='["album", "Artist"]'>Artist</option>
						<option value='["album", "Album"]'>Album</option>
						<option value='["album", "Single"]'>Single</option>
						<option value='["tvSeason", "TV Show"]'>TV Show</option>
						<option value='["movie", "Movie"]'>Movie</option>
						<option value='["podcast", "Podcast"]'>Podcast</option>
						<option value='["audiobook", "Audiobook"]'>Audiobook</option>
					</select>
					<input
						type='text'
						name='term'
						placeholder={`Enter ${label}`}
						value={term}
						onChange={e => this.handleChange(e)}
					/>
					{(label === 'Single' || label === 'Album') && artistInput}
				</div>
				<button onClick={this.handleClick}>FIND ARTWORK</button>
			</form>
		);
	}
}

export const mapDispatchToProps = dispatch => {
	return bindActionCreators({ setResults, toggleLoading }, dispatch);
};

SearchForm.propTypes = {
	setResults: PropTypes.func,
	toggleLoading: PropTypes.func
};

export default connect(
	null,
	mapDispatchToProps
)(SearchForm);
