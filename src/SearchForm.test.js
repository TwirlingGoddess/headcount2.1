import React from 'react';
import Enzyme from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let handleMock;
  let wrapper;

  beforeEach(() => {
    // Setup
    handleMock = jest.fn()
    wrapper = shallow(<SearchForm onChange={handleMock} />)
  })

	it('should have a default state of an empty string', () => {
		// mock state
		// setup

		// execute

		// expectation
	})

	it('should match the snapshot', () => {
		// setup

		// execute

		// expectation

	})

	it('should update state whenever handleChange is invoked', () => {
		// setup

		// execute

		// expectation
	})

	it('should utilize autocomplete from the complete me file correctly', () => {
		// setup

		// execute

		// expectation
	})

	it('should only return the cards whose location includes the value in state', () => {
		// setup

		// execute

		// expectation
	})

	it('should be case insensitive', () => {
		// setup

		// execute

		// expectation
	})
})