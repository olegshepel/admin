import * as actionTypes from './actionTypes';

export const followCompany = (id) => {
  return {
    type: actionTypes.FOLLOW_COMPANY,
    payload: id
  }
}
