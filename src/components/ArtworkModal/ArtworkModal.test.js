import React from 'react';
import {
	ArtworkModal,
	mapStateToProps,
	mapDispatchToProps
} from './ArtworkModal';
import { shallow } from 'enzyme';
import { addFavorite, removeFavorite } from '../../actions';

describe('ArtworkModal', () => {
	let wrapper;
	const result = { information: 'yes' };
	const favorites = [{}, {}, {}];
	const match = { params: ['path'] };

	beforeEach(() => {
		wrapper = shallow(
			<ArtworkModal
				result={result}
				favorites={favorites}
				match={match}
				addFavorite={addFavorite}
				removeFavorite={removeFavorite}
			/>
		);
	});

	it('should match ArtworkModal snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('mockStateToProps', () => {
		it('should match the props from Redux', () => {
			const mockState = {
				isFavorites: false,
				favorites: [{}, {}]
			};
			const expected = {
				isFavorites: false,
				favorites: [{}, {}]
			};

			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);
		});
	});

	describe('mapDispatchToProps', () => {
		const mockDispatch = jest.fn();

		it('should call dispatch with a addFavorite action when componentWillUnmount is called', () => {
			const item = { id: 65 };
			const actionToDispatch = addFavorite(item);

			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.addFavorite(item);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});

		it('should call dispatch with a removeFavorite action when componentWillUnmount is called', () => {
			const id = 45;
			const actionToDispatch = removeFavorite(id);

			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.removeFavorite(id);

			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
	});
});
