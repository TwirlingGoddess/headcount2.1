import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
	let wrapper
	let mockData
	let expectedId
	let selectMock
	let clickedCard

	beforeEach(() => {
		expectedId = 7
	  selectMock = jest.fn()
		mockData = { 2004: 0.75, 2005: 0.9 }
		wrapper = shallow(<Card location="Colorado" 
	    											stats={mockData}
														selectDistrict={selectMock}
														id={expectedId} 
	    								/>)
		clickedCard = wrapper.find('.Card')
	})

	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

  it('should render each data point as an aside', () => { 
    expect(wrapper.find('li').length).toEqual(2)
  })

	it('should invoke the toggleCard function when a card is clicked', () => {
    clickedCard.simulate('click')
    expect(selectMock).toBeCalled()
  })

  it('should invoke the toggleCard function with the correct id', () => {
    clickedCard.simulate('click')
    expect(selectMock).toHaveBeenCalledWith(expectedId)
  })
})
