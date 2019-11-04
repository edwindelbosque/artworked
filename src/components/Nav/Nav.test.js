import React from 'react';
import { Nav, mapDispatchToProps, mapStateToProps } from './Nav';
import { toggleFavorites } from '../../actions/index';
import { shallow } from 'enzyme';

describe('Nav', () => {
	let wrapper;
	const toggleFavorite = jest.fn();
	const isFavorites = false;

	beforeEach(() => {
		wrapper = shallow(
			<Nav toggleFavorites={toggleFavorite} isFavorites={isFavorites} />
		);
	});

	it('should match Nav snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should invoke handleClick on button click', () => {
		wrapper.find('.slider').simulate('click');
		expect(toggleFavorite).toHaveBeenCalled();
	});

	describe('mapDispatchToProps', () => {
		const mockDispatch = jest.fn();

		it('should call dispatch with a toggleFavorites action when handleClick is called', () => {
			const actionToDispatch = toggleFavorites();

			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.toggleFavorites();

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});

	describe('mockStateToProps', () => {
		it('should return a boolean', () => {
			const mockState = {
				isFavorites: false
			};
			const expected = {
				isFavorites: false
			};

			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);
		});
	});
});
