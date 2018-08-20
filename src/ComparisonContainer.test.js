import React from 'react';
import Card from './Card';
import ComparisonContainer from './ComparisonContainer.js';
import { shallow } from 'enzyme';

describe('Card Container', () => {
	let mockCards
	let wrapper

	beforeEach(() => {
    mockCards = [ {'ACADEMY 20': { 2004: 0.75 }}, 
      {'TacoLand': { 2004: 0.75 }} ];
    wrapper = shallow(<ComparisonContainer cardsToCompare={mockCards} />);
	})

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render all of the districts', () => {
    const expected = wrapper.state.displayedCards.length;
    expect(expected).toEqual(2);
  })

})