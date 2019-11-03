import React from 'react';
import { ArtworkModal } from './ArtworkModal';
import { shallow } from 'enzyme';

describe('ArtworkModal', () => {
	let wrapper;
	const result = { information: 'yes' };
	const favorites = [{}, {}, {}];
	const match = { params: ['path'] };

	beforeEach(() => {
		wrapper = shallow(
			<ArtworkModal result={result} favorites={favorites} match={match} />
		);
	});

	it('should match ArtworkModal snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
