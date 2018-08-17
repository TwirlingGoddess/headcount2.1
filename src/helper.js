import kinderData from './data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types'


export default class DistrictRepository {
  constructor(){
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

  findByName = (district='') => {
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
