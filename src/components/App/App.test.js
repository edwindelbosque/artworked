import React from 'react';
import { App, mapStateToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it('should match App snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('mapStateToProps', () => {
		it('should have access to the artwork results and favorites', () => {
			const mockState = {
				results: [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }],
				favorites: [{ id: 3 }, { id: 23 }]
			};
			const expected = {
				results: [{ id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }],
				favorites: [{ id: 3 }, { id: 23 }]
			};

			const mappedProps = mapStateToProps(mockState);

			expect(mappedProps).toEqual(expected);
		});
	});
});
