import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL_COUNTRIES = '/api/countries/';

function setCountries(data) {
  return {
    type: actionTypes.SET_COUNTRIES,
    data
  }
}

export function fetchCountries() {
  return dispatch => {
    axios.get(URL_COUNTRIES)
      .then(res => {
        let data = res.data;
        let countries = data.map(function(item, index) {
          return {value: item.id, label: item.name}
        });
        dispatch(setCountries(countries))
      })
  }
}
