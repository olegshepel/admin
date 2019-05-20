import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: [],
  selectedRowKeys: []
}

const onSelectChange = (state, action) => {
  return updateObject(state, {
    selectedRowKeys: action.selectedRowKeys
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.ON_SELECT_CHANGE: return onSelectChange(state, action)
    default:
      return state;
  }
}
