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
			label: 'Album',
			placeholder: 'ex. Pop2'
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
				label: value[1],
				placeholder: value[2]
			});
		}
	};

	handleClick = async () => {
		const { term, type, label } = this.state;
		const data = await getData(term, type);
		cleanerHandler(data, label);
	};

	render() {
		const { term, artist, label, placeholder } = this.state;

		const artistInput = (
			<div>
				<label>Artist Name</label>
				<input
					type='text'
					name='artist'
					placeholder='(higher accuracy)'
					value={artist}
					onChange={e => this.handleChange(e)}
				/>
			</div>
		);

		return (
			<nav className='SearchForm'>
				<div>
					<label>Look for </label>
					<select name='type' onChange={e => this.handleChange(e)}>
						<option value='["album", "Album", "ex. Pop2"]'>Album</option>
						<option value='["album", "Single", "ex. West Coast"]'>
							Single EP
						</option>
						<option value='["album", "Artist", "ex. Joseph Salvat"]'>
							Artist
						</option>
						<option value='["tvSeason", "TV Show", "ex. The Office"]'>
							TV Show
						</option>
						<option value='["movie", "Movie", "ex. Joker"]'>Movie</option>
						<option value='["podcast", "Podcast", "ex. Reply All"]'>
							Podcast
						</option>
						<option value='["ebook", "iBook", "ex. The Martian"]'>iBook</option>
						<option value='["audiobook", "Audiobook", "ex. The Martian"]'>
							Audiobook
						</option>
						<option value='["software", "App", "ex. Instagram"]'>App</option>
						<option value='["musicVideo", "Music Video", "ex. Shades of Cool"]'>
							Music Video
						</option>
					</select>
				</div>
				<div>
					<label>{label} Name</label>
					<input
						type='text'
						name='term'
						placeholder={placeholder}
						value={term}
						onChange={e => this.handleChange(e)}
					/>
				</div>
				{label === 'Single' && artistInput}
				{label === 'Album' && artistInput}
				<button onClick={this.handleClick}>Find Artwork</button>
			</nav>
		);
	}
}

export default SearchForm;
