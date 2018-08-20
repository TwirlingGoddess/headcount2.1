import React from 'react';
import PropTypes from 'prop-types';
import DistrictRepository from './helper.js';
const districts = new DistrictRepository()

const ComparisonContainer = ( { cardsToCompare, id, removeCard} ) => {
 	let locale
  if (cardsToCompare.length === 0) {
    return (<div></div>);
  }
  if (cardsToCompare.length > 0) {
    var newCards = cardsToCompare.map((location) => {
    	locale = location.location
          const toggle = Object.values(location.stats) <= .5 ? 'purple' : 'teal';
            const newStats = Object.values(location.stats).map(stat =>{
              return( <li key={Math.floor(Math.random() * 100000)}
                className={toggle}> {stat} </li> )
          	})

          return (
            <div  onClick={() => removeCard(id)}
            			className="Card highlight"
            			id={Date.now()} 
              		key={Date.now()}>
              <h3>{locale}</h3>
              <ul>{newStats}</ul>
            </div>
          )
    })
  }

    if (cardsToCompare.length === 1) {
      return (<div className="comp-container"> {newCards} </div>);
    } 
    if (cardsToCompare.length === 2) {
      const finalResult = districts.compareDistrictAverages(cardsToCompare[0].location, cardsToCompare[1].location);
      console.log(finalResult)
      const displayResult = Object.values(finalResult);

      const displayInfo = Object.keys(finalResult);
      return (
        <div className="comp-container">
          <div> {newCards[0]}</div>
          <div className="total-card">
            <h5>{displayInfo[0]}: {displayResult[0]}</h5>
            <h5>{displayInfo[1]}: {displayResult[1]}</h5>
            <h4>{displayInfo[2]}: {displayResult[2]}</h4>
          </div>
          <div> {newCards[1]}</div>
        </div>
      );
    }
    if (cardsToCompare.length >= 2) {
    	console.log('poppin')
    	cardsToCompare.pop()
    }
  
};

ComparisonContainer.propTypes = {
  cardsToCompare: PropTypes.array
};

ComparisonContainer.propTypes = {
  state: PropTypes.array
}

ComparisonContainer.propTypes = {
  state1: PropTypes.array
}

ComparisonContainer.propTypes = {
  state2: PropTypes.array
}

export default ComparisonContainer