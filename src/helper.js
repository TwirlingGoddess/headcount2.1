import { Component } from 'react'
import kinderData from './data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types'

class DistrictRepository extends Component {
  constructor(){
    super()

    this.stats = this.filterCards(kinderData)
  }
  
  filterCards = (kinderData) => {

    return kinderData.reduce((accu, district) => {
      let location = district.Location.toUpperCase();
      let schoolYear = district.TimeFrame
      let roundedNum= Number(parseFloat(district.Data).toFixed(3))
      if(!accu[location]) {
        accu[location] = {location, stats: {}}
      }
      accu[location].stats[schoolYear] = roundedNum || 0
      return accu;
    }, {})
  }

  findByName = (district = '') => {
    const upperString = district.toUpperCase();
    if(!this.stats[upperString]) {
      return undefined} 

    if (this.stats[upperString]) {
      return this.stats[upperString]
    }
  }

  findAllMatches = (search) => {
    if(!search) {
      return [...Object.values(this.stats)]
    }
    return Object.keys(this.stats).filter(stat => {
      return stat.toUpperCase().includes(search.toUpperCase())
    })
  }

  findAverage = (district) => {
    let distObj = this.findByName(district)
    let distValues = Object.values(distObj.stats)
    let average = distValues.reduce((sum, num) => {
      return sum + num
    }, 0)
    return Number(parseFloat(average/distValues.length).toFixed(3))
  }

  compareDistricts = (district1, district2) => {
    console.log(district1, district2)
  }

}

DistrictRepository.propTypes = {
  district: PropTypes.string.isRequired
}

DistrictRepository.propTypes = {
  district1: PropTypes.object.isRequired
}

DistrictRepository.propTypes = {
  district2: PropTypes.object.isRequired
}

DistrictRepository.propTypes = {
  search: PropTypes.string.isRequired
}

export default DistrictRepository
