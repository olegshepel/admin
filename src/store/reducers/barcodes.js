import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: []
}

const setBarcodes = (state, action) => {
  return updateObject(state, {
    data: action.data
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_BARCODES: return setBarcodes(state, action)
    default:
      return state;
  }
}
