import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
	const mockData = { 2004: 0.75, 2005: 0.9 }

	it('should match the snapshot', () => {
		const wrapper = shallow(<Card location='ACADEMY 20'
													        stats={ mockData }
													        selectDistrict={jest.fn()} 
													  />)
		expect(wrapper).toMatchSnapshot()
	})

  it('should render each data point as an aside', () => { 
    const wrapper = shallow(<Card location="Colorado" 
    															stats={mockData}
													        selectDistrict={jest.fn()} 
    												/>)
    expect(wrapper.find('li').length).toEqual(2)
  })

it('should invoke the toggleCard function when a card is clicked', () => {
    const selectMock = jest.fn()
    const wrapper = shallow(<Card location="Colorado" 
													        stats={mockData} 
													        selectDistrict={selectMock}
													  />)
    wrapper.find('.Card').simulate('click')
    expect(selectMock).toBeCalled()
  })
})
