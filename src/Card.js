import React from 'react';
import PropTypes from 'prop-types'

const Card = ({index, location, stats, selectDistrict}) => {

	const displayData =
		Object.keys(stats).map((date, index) => {
		if(stats[date] > .5){
			return(
				<li key={index} className="purple">
					{date}: {stats[date]}
				</li>
			)
		} else {
			return(
				<li key={index} className="teal">
					{date}: {stats[date]}
				</li>
			)
		}
	})


	return(
		<div className="Card" onClick={selectDistrict}>
			<h2>{location}</h2>
			<ul>{displayData}</ul>
		</div>
	)
}

Card.propTypes = {
  selectDistrict: PropTypes.func
}

Card.propTypes = {
  location: PropTypes.string
}

Card.propTypes = {
  stats: PropTypes.object
}

Card.propTypes = {
  index: PropTypes.number
}

export default Card