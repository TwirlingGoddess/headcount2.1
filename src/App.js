import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import CardContainer from './CardContainer.js';
import ComparisonContainer from './ComparisonContainer.js';
import DistrictRepository  from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types'
const districts = new DistrictRepository(kinderData);

class App extends Component {
	constructor() {
		super()

		this.state = {
			districts: districts.stats
		}
	}

  filterDistricts = (string) => {
    const searchedDistricts = districts.findByName(string);
    console.log(searchedDistricts)
    if (searchedDistricts) {
      this.setState({
        cards: {...searchedDistricts}
      });
    }
  }

  selectDistrict = (id) => {
    Object.keys(this.state.districts).filter(school => id !== school.id)  
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <SearchForm filterDistricts={this.filterDistricts}/>
        </header>
        <ComparisonContainer />
        <CardContainer districts={this.state.districts}
                        selectDistrict={this.selectDistrict}
        />
      </div>
    );
  }
}

App.propTypes = {
  id: PropTypes.number
}

export default App;
