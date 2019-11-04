import React from 'react';
import { ArtworkResult } from './ArtworkResult';
import { shallow } from 'enzyme';

describe('ArtworkResult', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ArtworkResult />);
	});

	it('should match App snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should change state to true when loadHandler is invoked', () => {
		const expectedResult = true;
		wrapper.instance().loadHandler();
		expect(wrapper.state('isLoaded')).toEqual(expectedResult);
	});
});
