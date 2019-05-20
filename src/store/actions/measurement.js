import axios from 'axios';
import * as actionTypes from './actionTypes';

const SET_MEASUREMENT = '/api/sysm/';

function setItems(data, fullData, valueDefault) {
  return {
    type: actionTypes.SET_MEASUREMENT,
    payload: {
      data: data,
      fullData: fullData,
      valueDefault: valueDefault
    }
  }
}

export function fetchMeasurement() {
  return dispatch => {
    axios.get(SET_MEASUREMENT)
      .then(res => {
        let data = res.data;
        let valueDefault = {key: '', label: ''};
        let items = data.map(function(item, index) {
          if (item.default === true) {
            valueDefault = {key: item.id, label: item.name};
          }
          return {value: item.id, label: item.name}
        });
        dispatch(setItems(items, data, valueDefault))
      })
  }
}
