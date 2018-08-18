import React from 'react';
import PropTypes from 'prop-types'

const Card = ({location, stats, selectDistrict}) => {
	return(
		<div onClick={selectDistrict}>
			<h2>{location}</h2>
			<p>{stats}</p>
		</div>
	)
}

Card.propTypes = {
  selectDistrict: PropTypes.func.isRequired
}

Card.propTypes = {
  location: PropTypes.string.isRequired
}

Card.propTypes = {
  stats: PropTypes.string.isRequired
}

export default Card