import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL = '/offers/';
const URL_API = `/api${URL}`;

function setOffers(data) {
  return {
    type: actionTypes.SET_OFFERS,
    data
  }
}

export function fetchOffers() {
  return dispatch => {
    axios.get(URL_API)
      .then(res => {
        dispatch(setOffers(res.data))
      })
  }
}

export const selectOfferModal = (data) => {
  return {
    type: actionTypes.SELECT_OFFER_MODAL,
    payload: data
  }
}

export const onSelectOffers = (selectedRowKeys) => {
  return {
    type: actionTypes.ON_SELECT_OFFERS,
    selectedRowKeys
  }
}
