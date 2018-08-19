import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
	let wrapper
	let mockState
	let expectedId
	let selectMock
	let clickedCard

	beforeEach(() => {
		expectedId = 7
	  selectMock = jest.fn()
		mockState = {location:'Colorado',
										stats:{ 2004: 0.75, 2005: 0.9 }},
									{location:'Juarez',
										stats:{ 2001: 0.15, 2015: 0.29 }}
		wrapper = shallow(<CardContainer location="Colorado" 
					    											districts={mockState}
																		selectDistrict={selectMock}
	    								/>)
		clickedCard = wrapper.find('.Card')
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should render all the ideas in state', () => {
    expect(wrapper.find(Card).length).toEqual(2)
  })	

})