import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL_CURRENCIES = '/api/currencies/';

function setCurrencies(data) {
  return {
    type: actionTypes.SET_CURRENCIES,
    data
  }
}

export function fetchCurrencies() {
  return dispatch => {
    axios.get(URL_CURRENCIES)
      .then(res => {
        let data = res.data;
        let currencies = data.map(function(item, index) {
          return {value: item.id, label: item.name}
        });
        dispatch(setCurrencies(currencies))
      })
  }
}
