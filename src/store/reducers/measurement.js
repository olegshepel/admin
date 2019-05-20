import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: [],
  fullData :  [],
  valueDefault: {key: '', label: ''}
}

const setMeasurement = (state, action) => {
  return updateObject(state, {
    ...action.payload
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_MEASUREMENT: return setMeasurement(state, action)
    default:
      return state;
  }
}
