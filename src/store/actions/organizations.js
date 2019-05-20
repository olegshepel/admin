import axios from 'axios';
import * as actionTypes from './actionTypes';

export const createOrganization = (id) => {
  return {
    type: actionTypes.CREATE_ORGANIZATION,
    payload: id
  }
}
