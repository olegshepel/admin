import axios from 'axios';
import * as actionTypes from './actionTypes';
import * as setters from '../setters';

const URL_TARICS = '/api/tarics/';

function setTarics(data) {
  return {
    type: actionTypes.SET_TARICS,
    data
  }
}

export function fetchTarics() {
  return dispatch => {
    axios.get(URL_TARICS)
      .then(res => {
        let tarics = setters.setterSelectReact(res.data);
        dispatch(setTarics(tarics))
      })
  }
}
