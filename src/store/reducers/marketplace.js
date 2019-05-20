import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: [],
  name: 'MarketPlace and other things'
}

const followCompany = (state, action) => {
  // alert('yo have clicked this button');
  return updateObject(state, {
    data: [],
    name: 'MarketPlace is changed'
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.FOLLOW_COMPANY: return followCompany(state, action)
    default:
      return state;
  }
}
