import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const CardContainer = ({districts, selectDistrict}) => {
	let districtKeyArray = Object.keys(districts)
	const deckOfCards = districtKeyArray.map(district => {
		return <Card 	location={districts[district].location}
									stats={districts[district].stats}
									key={districts[district].id}
									selectDistrict={() => selectDistrict(districts[district])}
						/>
	})

	return(
		<div className="Container">
			{deckOfCards}
		</div>
	)
}

CardContainer.propTypes = {
  districts: PropTypes.object.isRequired
}

CardContainer.propTypes = {
  selectDistrict: PropTypes.func.isRequired
}

export default CardContainer