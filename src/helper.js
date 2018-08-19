import React, { Component } from 'react'
import kinderData from './data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types'

class DistrictRepository extends Component {
  constructor(){
    super()

    this.stats = this.populateCards(kinderData)
  }
  
  populateCards = (kinderData) => {
    return kinderData.reduce((accu, district) => {
      const locale = district.Location.toUpperCase()
      const schoolYear = district.TimeFrame
      const roundedNum = Number(parseFloat(district.Data).toFixed(3))
      if(!accu[locale]){
        accu[locale] = {locale, stats:{}}
      }
      accu[locale].stats[schoolYear] = roundedNum || 0
      return accu
    }, {})
  }

  findByName = (districtName = '') => {
    const upperDistrict = districtName.toUpperCase();
    
    if(!this.stats[upperDistrict]) {
      return undefined} 

    if (this.stats[upperDistrict]) {
      return this.stats[upperDistrict]
    }
  }




  // findByName = (districtName='') => {
  //   const objKeys = Object.keys(this.stats)
  //   objKeys.reduce((districtListObj, key) => {
  //     if (!districtName) {
  //       return undefined
  //     }
  //     if (!key.toUpperCase()!==districtName.toUpperCase()) {
  //       return undefined
  //     }
  //     if(key.toUpperCase()===districtName.toUpperCase()) {
  //       districtListObj = {[key]: this.stats[key]};
  //         // console.log(updatedObj)
  //       // return updatedObj
  //     }
  //     Object.assign(updatedObj, districtListObj)
  //     return districtListObj
  //   }, {})
  //   return updatedObj
  // }

  findAverage = (district) => {
    console.log(district)
  }

  compareDistricts = (district1, district2) => {
    console.log(district1, district2)
  }

  findAllMatches = (search) => {
    console.log(search)
  }
}

DistrictRepository.propTypes = {
  district: PropTypes.object.isRequired
}

DistrictRepository.propTypes = {
  districtName: PropTypes.object.isRequired
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
