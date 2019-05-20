import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  visible: false,
  loading: false,
  width: '1200px',
  modalTitle: '',
  modalMarker: null,
  deleteConfirm: false,
  indexSelected: null
}

const modalToggle = (state, action) => {
  return updateObject(state, {
    visible: !state.visible
  });
}

const selectModal = (state, action) => {
  return updateObject(state, {
    ...action.payload
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.MODAL_TOGGLE: return modalToggle(state, action)
    case actionTypes.SELECT_MODAL: return selectModal(state, action)
    default:
      return state;
  }
}
