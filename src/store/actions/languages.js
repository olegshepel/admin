import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL_LANGUAGES = '/api/languages/';

function setLanguages(data) {
  return {
    type: actionTypes.SET_LANGUAGES,
    data
  }
}

export function fetchLanguages() {
  return dispatch => {
    axios.get(URL_LANGUAGES)
      .then(res => {
        let data = res.data;
        let languages = data.map(function(item, index) {
          return {value: item.id, label: item.name}
        });
        dispatch(setCurrencies(languages))
      })
  }
}
