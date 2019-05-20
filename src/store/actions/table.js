import * as actionTypes from './actionTypes';

function setTableKeys(selectedRowKeys) {
  return {
    type: actionTypes.ON_SELECT_CHANGE,
    selectedRowKeys
  }
}

export function onSelectChange(selectedRowKeys) {
  return dispatch => {
    dispatch(setTableKeys(selectedRowKeys))
  }
}
