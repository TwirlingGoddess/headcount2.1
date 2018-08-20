import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('has a default state key cards that contains 181 districts', () => {
    expect(Object.keys(wrapper.state('districts')).length).toEqual(181);
  });

  it('has a default state key districtsCards that is an empty array', () => {
    expect(Object.keys(wrapper.state('districtsCards')).length).toEqual(0);
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('updates the state when a district is searched', () => {
    const mockClickedCard = 'Colorado';
    const expected = { 
      "COLORADO SPRINGS 11": { 
        "2004": 0.069, "2005": 0.509, "2006": 0.638, "2007": 0.994, "2008": 0.992, "2009": 1, "2010": 0.993, "2011": 0.994, "2012": 0.993, "2013": 0.989, "2014": 0.994 }, 
      "Colorado": { "2004": 0.24, "2005": 0.278, "2006": 0.337, "2007": 0.395, "2008": 0.536, "2009": 0.598, "2010": 0.64, "2011": 0.672, "2012": 0.695, "2013": 0.703, "2014": 0.741 } };
    wrapper.instance().filterDistricts(mockClickedCard);
    expect(wrapper.state('districts')).toEqual(expected);
  })

  it('adds an object to the districtsCards array in state when a card is clicked', () => {
    const mockDistrict = 'Colorado';
    const mockContent = { "2004": 0.24, "2005": 0.278 };
    const expected = [{ "Colorado": { "2004": 0.24, "2005": 0.278 } }];
    wrapper.instance().selectDistrict(mockDistrict, mockContent);
    expect(wrapper.state('districtsCards')).toEqual(expected);
  })

  it('adds a 2nd object to the districtsCards array in state when a 2nd card is clicked', () => {
    const mockDistrict1 = 'Colorado';
    const mockDistrict2= 'COLORADO SPRINGS 11';
    const mockContent1 = { "2004": 0.24 };
    const mockContent2 = { "2004": 0.069 };
    const expected = [{ "COLORADO SPRINGS 11": { "2004": 0.069 }}, {"Colorado": { "2004": 0.24 } }];
    wrapper.instance().selectDistrict(mockDistrict2, mockContent2);
    wrapper.instance().selectDistrict(mockDistrict1, mockContent1);
    expect(wrapper.state('districtsCards')).toEqual(expected);
  })
})