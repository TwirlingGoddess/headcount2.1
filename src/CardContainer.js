import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const CardContainer = ({districts, selectDistrict}) => {
	const deckOfCards = districts.map(district => {
		<Card 	{...district}
				key={district.id}
				selectDistrict={selectDistrict}
		/>
	})

	return(
		<div>
			{deckOfCards}
		</div>
	)
}

CardContainer.propTypes = {
  districts: PropTypes.array.isRequired
}

CardContainer.propTypes = {
  selectDistrict: PropTypes.func.isRequired
}

export default CardContainer