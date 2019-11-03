import React from 'react';
import { ArtworkResult } from './ArtworkResult';
import { shallow } from 'enzyme';

describe('ArtworkResult', () => {
	let wrapper;
	const result = { information: 'yes' };
	const match = { params: ['path'] };

	beforeEach(() => {
		wrapper = shallow(<ArtworkResult />);
	});

	it('should match App snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
