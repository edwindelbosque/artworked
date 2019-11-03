import React from 'react';
import { SearchForm } from './SearchForm';
import { shallow } from 'enzyme';

describe('SearchForm', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<SearchForm />);
	});

	it('should match SearchForm snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
