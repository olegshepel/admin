import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: []
}

const setCountries = (state, action) => {
  return updateObject(state, {
    data: action.data
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_COUNTRIES: return setCountries(state, action)
    default:
      return state;
  }
}
