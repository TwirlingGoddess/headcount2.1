import React from 'react';
import PropTypes from 'prop-types'

const Card = (props) => {
	return(
		<div onClick={props.selectDistrict}>
			<h2>{props.location}</h2>
			<p>{props.stats}</p>
		</div>
	)
}

export default Card