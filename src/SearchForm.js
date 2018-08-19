import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SearchForm extends Component {
	constructor() {
		super()

		this.state = {
			searchWord: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			searchWord: event.target.value
		})
		this.props.filterDistricts(event.target.value)
	}

	render() {
		return(
			<form>
				<input 	type='text' 
								value={this.state.searchWord} 
								placeholder="Type in district to Search"
								onChange={this.handleChange}
				/>
			</form>
		)
	}
}

SearchForm.propTypes = {
  filterDistricts: PropTypes.func
};

export default SearchForm