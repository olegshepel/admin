import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL = '/profile/';
const URL_API = `/api${URL}`;

function setProfile(data) {
  return {
    type: actionTypes.SET_PROFILE,
    data
  }
}

export function fetchProfile() {
  return dispatch => {
    axios.get(URL_API)
      .then(res => {
        dispatch(setProfile(res.data))
      })
  }
}

export const selectProfileModal = (data) => {
  return {
    type: actionTypes.SELECT_PROFILE_MODAL,
    payload: data
  }
}
