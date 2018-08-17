import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {

	it('should match the snapshot', () => {
		const wrapper = shallow(<CardContainer />)
		expect(wrapper).toMatchSnapshot()
	})

	it('should....', () => {
		expect().toBe()
	})

})