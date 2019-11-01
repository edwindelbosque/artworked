import React, { Component } from 'react';
import './SearchForm.scss';
import { getData } from '../../util/apiCalls';
import { cleanerHandler } from '../../util/apiCleaners';

class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			type: 'album',
			term: '',
			artist: '',
			label: 'Album'
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
		const data = await getData(term, type);

		cleanerHandler(data, label, artist, term);
		console.log(cleanerHandler(data, label, artist, term));
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
					placeholder='Enter Artist (optional)'
					value={artist}
					onChange={e => this.handleChange(e)}
				/>
			</div>
		);

		return (
			<form className='SearchForm' onSubmit={e => this.handleSubmit(e)}>
				<div>
					<select name='type' onChange={e => this.handleChange(e)}>
						<option value='["album", "Album"]'>Album</option>
						<option value='["album", "Single"]'>Single</option>
						<option value='["album", "Artist"]'>Artist</option>
						<option value='["tvSeason", "TV Show"]'>TV Show</option>
						<option value='["movie", "Movie"]'>Movie</option>
						<option value='["podcast", "Podcast"]'>Podcast</option>
						<option value='["ebook", "iBook"]'>iBook</option>
						<option value='["audiobook", "Audiobook"]'>Audiobook</option>
						<option value='["software", "App"]'>App</option>
						<option value='["musicVideo", "Music Video"]'>Music Video</option>
					</select>
				</div>
				<div>
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

export default SearchForm;
