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
      displayedCards: [],
			districts: districts.stats
		}
	}

  filterDistricts = (string) => {
    const searchedDistricts = districts.findByName(string);
    if (!searchedDistricts) {
      this.setState({
        displayedCards: []
      })
    }
    if (searchedDistricts) {
      this.setState({
        displayedCards: [...this.state.displayedCards, searchedDistricts]
      });
      // return "I LOVE PROBLEM SOLVING"
    }
  }

  selectDistrict = (id) => {
    const searchObj = Object.keys(this.state.districts).filter(school => {
      return id !== school.id
    })
    this.setState({
      displayedCards: [...searchObj]
    })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <SearchForm filterDistricts={filterDistricts}/>
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
