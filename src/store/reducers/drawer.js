import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  visible: false,
  size: 'lg'
}

const drawerToggle = (state, action) => {
  return updateObject(state, {
    visible: !state.visible
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.DRAWER_TOGGLE: return drawerToggle(state, action)
    default:
      return state;
  }
}
