import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SearchForm extends Component {
	constructor() {
		super()

		this.state = {
			value: ''
		}
	}

	handleChange = (event) => {
		this.setState({
			value: event.target.value
		})
	}

	render() {
		return(
			<form>
				<input 	type='text' 
						value={this.state.value} 
						placeholder="Type in district to Search"
						onChange={this.handleChange}
				/>
			</form>
		)
	}
}

export default SearchForm