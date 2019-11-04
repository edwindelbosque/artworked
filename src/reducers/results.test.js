import { results } from './results.js';

describe('results', () => {
	it('should return the initial state', () => {
		const initialState = [];

		expect(results(initialState, {})).toEqual(initialState);
	});

	it('should output the correct case of SET_RESULTS action type', () => {
		const payLoad = [{}, {}, {}, {}];
		const initialState = [];
		const action = {
			type: 'SET_RESULTS',
			results: payLoad
		};

		expect(results(initialState, action)).toEqual(payLoad);
	});

	it('should NOT output any case with the wrong case', () => {
		const payLoad = false;
		const initialState = [];
		const action = {
			type: 'WRONG_CASE',
			results: payLoad
		};

		expect(results(initialState, action)).toEqual(initialState);
	});
});
