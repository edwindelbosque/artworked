import React from 'react';
import { SearchForm } from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
	let wrapper;
	const mockEventAlbum = { target: { name: 'term', value: 'Pop 2' } };
	const mockEventArtist = { target: { name: 'artist', value: 'Charli XCX' } };
	const mockEventSelect = {
		target: { name: 'type', value: '["album", "Album"]' }
	};

	beforeEach(() => {
		wrapper = shallow(<SearchForm />);
	});

	it('should match SearchForm snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should update state when user types on inputs or changes select', () => {
		const expectedInputAlbum = 'Pop 2';
		const expectedInputArtist = 'Charli XCX';
		const expectedSelectTypeValue = 'album';
		const expectedSelectTypeLabel = 'Album';

		wrapper.instance().handleChange(mockEventAlbum);
		wrapper.instance().handleChange(mockEventArtist);
		wrapper.instance().handleChange(mockEventSelect);

		expect(wrapper.state('term')).toEqual(expectedInputAlbum);
		expect(wrapper.state('artist')).toEqual(expectedInputArtist);
		expect(wrapper.state('type')).toEqual(expectedSelectTypeValue);
		expect(wrapper.state('label')).toEqual(expectedSelectTypeLabel);
	});

	it('should invoke handleChange when user types or changes select', () => {
		wrapper.instance().handleChange = jest.fn();

		wrapper
			.find('input')
			.at(0)
			.simulate('change', mockEventAlbum);

		expect(wrapper.instance().handleChange).toHaveBeenCalled();
	});

	it('should invoke handleChange when user types or changes select', () => {
		wrapper.instance().handleChange = jest.fn();

		wrapper.find('select').simulate('change', mockEventSelect);

		expect(wrapper.instance().handleChange).toHaveBeenCalled();
	});

	it('should invoke handleChange when user types or changes select', () => {
		wrapper.instance().handleChange = jest.fn();

		wrapper.find('input').simulate('change', mockEventArtist);

		expect(wrapper.instance().handleChange).toHaveBeenCalled();
	});

	it('should invoke handleSubmit on submit', () => {
		wrapper.instance().handleSubmit = jest.fn();
		const mockEvent = {
			preventDefault: jest.fn()
		};

		wrapper.find('form').simulate('submit', mockEvent);

		expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
	});

	it('should invoke handleClick on click', () => {
		wrapper.instance().handleClick = jest.fn();

		wrapper
			.find('input')
			.at(0)
			.simulate('change', mockEventAlbum);
		wrapper.find('button').simulate('click');

		expect(wrapper.instance().handleClick).toHaveBeenCalled();
	});

	it('should reset state when clearInputs is called', () => {
		const expected = { term: '', artist: '', label: 'Artist', type: 'artist' };

		wrapper.instance().setState({
			term: 'Pop 2',
			artist: 'Charli XCX'
		});
		wrapper.instance().resetState();
		expect(wrapper.state()).toEqual(expected);
	});
});
