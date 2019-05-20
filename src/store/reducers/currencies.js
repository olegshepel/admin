import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: []
}

const setCurrencies = (state, action) => {
  return updateObject(state, {
    data: action.data
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_CURRENCIES: return setCurrencies(state, action)
    default:
      return state;
  }
}
