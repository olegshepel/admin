import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL_BARCODES = '/api/barcodes/';

function setBarcodes(data) {
  return {
    type: actionTypes.SET_BARCODES,
    data
  }
}

export function fetchBarcodes() {
  return dispatch => {
    axios.get(URL_BARCODES)
      .then(res => {
        let data = res.data;
        let barcodes = data.map(function(item, index) {
          return {value: item.id, label: item.code}
        });
        dispatch(setBarcodes(barcodes))
      })
  }
}
