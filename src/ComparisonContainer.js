import React from 'react';
import './ComparisonContainer.css';
import PropTypes from 'prop-types'

const ComparisonContainer = ({ comparedCards }) => {


	return(
		<div>
			{comparedCards}
		</div>
	)
}

ComparisonContainer.propTypes = {
  comparedCards: PropTypes.array.isRequired
}

export default ComparisonContainer