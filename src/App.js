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

  updateDistricts = (district) => {
    console.log(district)
  }

  toggleCard = (district) => {
    console.log(district)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <SearchForm />
        </header>
        <ComparisonContainer />
        <CardContainer districts={this.state.districts}
                        selectDistrict={this.toggleCard}
        />
      </div>
    );
  }
}

export default App;
