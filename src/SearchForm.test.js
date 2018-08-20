import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from './SearchForm';
import App from './App'

describe('SearchForm', () => {
  let handleMock;
  let wrapper;
  let mockString
  let expected

  beforeEach(() => {
    handleMock = jest.fn()
    wrapper = shallow(<SearchForm onChange={handleMock}
    															filterDistricts={jest.fn()}
    									 />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

	it('should have a default state of an empty string', () => {
		expected = ''
		expect(wrapper.state('searchWord')).toEqual(expected)
	})

  it('should update the state of when the input value changes', () => {
		mockString = { target: { value: 'abc'} }
	  expected = 'abc' ;
	  wrapper.find('.Search').simulate('change', mockString)
	  expect(wrapper.state('searchWord')).toBe(expected)
  })

  it('should invoke handleChange function when input value changes', () => {
		wrapper = mount(<SearchForm onChange={handleMock} />)
		const spy = spyOn(wrapper.instance(), 'handleChange')
    wrapper.instance().forceUpdate()
		mockString = { target: { value: 'taco'} }
		wrapper.find('.Search').simulate('change', mockString)
    expect(spy).toHaveBeenCalled()
  })

    it('should call filterDistricts function when handleChange is invoked', () => {
		wrapper = shallow(<SearchForm onChange={handleMock}
    														filterDistricts={jest.fn()}
										/>)
		const spy = jest.spyOn(wrapper.instance(), 'filterDistricts')
		mockString = { target: { value: 'pho'} }
  	wrapper.find('.Search').simulate('change', mockString)
  	expect(spy).toBeCalled()
  })

})