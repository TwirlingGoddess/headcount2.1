import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let handleMock;
  let wrapper;
  let mockString
  let expected

  beforeEach(() => {
    handleMock = jest.fn()
    wrapper = shallow(<SearchForm onChange={handleMock} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

	it('should have a default state of an empty string', () => {
		expected = ''
		expect(wrapper.state().searchWord).toEqual(expected)
	})

  it('updates the state of when the input value changes', () => {
		mockString = { target: { value: 'abc'} }
	  expected = 'abc' ;
	  wrapper.instance().handleChange(mockString)
	  expect(wrapper.state().searchWord).toEqual(expected)
  })

  it('should invoke handleChange function when input value changes', () => {
		wrapper = mount(<SearchForm onChange={handleMock} />)
		const spy = spyOn(wrapper.instance(), 'handleChange')
    wrapper.instance().forceUpdate()
		mockString = { target: { value: 'taco'} }
		wrapper.find('.Search').simulate('change', mockString)
    expect(spy).toHaveBeenCalled()
  })




})