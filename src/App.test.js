import React from 'react';
import Enzyme from 'enzyme';
import App from './App';

describe('App', () => {
	let wrapper
	let mockDistrict
	let mockEvent

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	it('should have an initial state of an empty array and the district data object', () => {
		// setup

		// execute

		// expectation
	})

	it('should update state when the updateDistricts function is invoked', () => {
		// setup

		// execute

		// expectation
	})

	it('should update state when toggleCard function is invoked', () => {
		// setup

		// execute

		// expectation
	})
})