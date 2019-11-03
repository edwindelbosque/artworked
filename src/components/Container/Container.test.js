import React from 'react';
import { Container } from './Container';
import { shallow } from 'enzyme';

describe('Container', () => {
	let wrapper;
	let favorites;
	let results;
	// const mapCards = jest.fn();

	beforeEach(() => {
		results = [{}, {}, {}];
		favorites = [{}, {}];
		wrapper = shallow(<Container favorites={favorites} results={results} />);
	});

	it('should match Container snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
