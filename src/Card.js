import React from 'react';
import PropTypes from 'prop-types'

const Card = ({id, location, stats, selectDistrict}) => {

	const displayData =
	Object.keys(stats).map(key => {
	if(stats[key] > .5){
		return(
			<li className="purple">
				{key}: {stats[key]}
			</li>
		)
	} else {
		return(
			<li className="teal">
				{key}: {stats[key]}
			</li>
		)
	}
})


	return(
		<div className="Card" onClick={() => selectDistrict}>
			<h2>{location}</h2>
			<ul>{displayData}</ul>
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