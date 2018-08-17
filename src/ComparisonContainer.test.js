import React from 'react';
import { shallow } from 'enzyme';
import ComparisonContainer from './ComparisonContainer';

describe('ComparisonContainer', () => {

	it('should match the snapshot', () => {
		const wrapper = shallow(<ComparisonContainer />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should....', () => {
		expect().toBe()
	})
})