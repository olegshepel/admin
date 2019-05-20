import * as actionTypes from './actionTypes';

export const modalToggle = () => {
  return {
    type: actionTypes.MODAL_TOGGLE,
    payload: {}
  }
}

export const selectModal = (data) => {
  return {
    type: actionTypes.SELECT_MODAL,
    payload: data
  }
}
