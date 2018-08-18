import React from 'react'
import kinderData from './data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types'


class DistrictRepository extends Component {
  constructor(){
    super()
  }
  
  stats = kinderData.reduce((accu, district) => {
    const locale = district.Location
    if(isNaN(district.Data)){
      district.Data = 0
    }
    const schoolInfo = {[district.TimeFrame]: Number(parseFloat(district.Data).toFixed(3))}
    if(!accu[locale]){
      accu[locale] = schoolInfo
    }
    accu[locale]= {...schoolInfo, ...accu[locale]}
    return accu
  }, {})

  findByName = (districtName='') => {
    const newDistrict = district.toUpperCase()
    const objKeys = Object.keys(this.stats)
    const upperObjKeys = objKeys.map(key => key.toUpperCase())
    if (!district || objKeys.includes(!district)) {
      return undefined
    }
    if(newDistrict && upperObjKeys.includes(newDistrict)){
      const newObj = Object.assign({}, {[newDistrict]: this.stats[newDistrict]})
      return newObj
    }
  }

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
