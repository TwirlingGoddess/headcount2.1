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

export default CardContainer