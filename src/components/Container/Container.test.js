import React from 'react';
import { Container, mapStateToProps } from './Container';
import { shallow } from 'enzyme';

describe('Container', () => {
	let wrapper;
	let favorites;
	let results;

	beforeEach(() => {
		results = [{ id: 12 }, { id: 13 }, { id: 15 }];
		favorites = [{}, {}];
		wrapper = shallow(<Container favorites={favorites} results={results} />);
	});

	it('should match Container snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('mockStateToProps', () => {
		it('should match the props from Redux', () => {
			const mockState = {
				results: [{}, {}, {}],
				isLoading: true,
				isFavorites: false,
				favorites: [{}, {}]
			};
			const expected = {
				results: [{}, {}, {}],
				isLoading: true,
				isFavorites: false,
				favorites: [{}, {}]
			};

			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);
		});
	});
});
