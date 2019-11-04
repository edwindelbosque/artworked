import React from 'react';
import { SearchForm, mapDispatchToProps } from './SearchForm';
import { shallow } from 'enzyme';
import { getData } from '../../util/apiCalls';
import { setResults, toggleLoading } from '../../actions';

jest.mock('../../util/apiCalls');

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
		const expected = { term: '', artist: '', label: 'Artist', type: 'album' };

		wrapper.instance().setState({
			term: 'Pop 2',
			artist: 'Charli XCX'
		});
		wrapper.instance().resetState();
		expect(wrapper.state()).toEqual(expected);
	});

	it('should call GetData fetch when handleClick is called', () => {
		const mockTerm = 'Pop 2';
		const mockType = 'album';
		wrapper.find('input').simulate('change', mockEventAlbum);
		wrapper.instance().handleClick();
		expect(getData).toHaveBeenCalledWith(mockTerm, mockType);
	});

	describe('mapDispatchToProps', () => {
		const results = [{}, {}, {}];
		const mockDispatch = jest.fn();

		it('should call dispatch with a setResults action when handleClick is called', () => {
			const actionToDispatch = setResults(results);

			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.setResults(results);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});

		it('should call dispatch with a toggleLoading true action when handleClick is called', () => {
			const actionToDispatch = toggleLoading(true);

			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.toggleLoading(true);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});

		it('should call dispatch with a toggleLoading false action when handleClick is called', () => {
			const actionToDispatch = toggleLoading(false);

			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.toggleLoading(false);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});
