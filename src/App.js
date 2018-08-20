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
       return
    }
    if (searchedDistricts) {
      console.log(searchedDistricts)
      this.setState({
        districts: { searchedDistricts }
      });
      // return "I LOVE PROBLEM SOLVING"
    }
  }

  selectDistrict = (district) => {
    this.setState({
      displayedCards: [...this.state.displayedCards, district]
    })
  }

  removeCard = (id) => {
    const cardLeft = this.state.displayedCards.find(object => object !== object)
    // this.setState({
    //   displayedCards:  [...this.state.displayedCards, cardLeft]
    // })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <SearchForm filterDistricts={this.filterDistricts}/>
        </header>
        <ComparisonContainer  cardsToCompare={this.state.displayedCards}
                              removeCard={this.removeCard}
        />
        <CardContainer districts={this.state.districts}
                        selectDistrict={this.selectDistrict}
        />
      </div>
    );
  }
}

App.propTypes = {
  district: PropTypes.object
}

export default App;
