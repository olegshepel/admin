import * as actionTypes from '../../actions/actionTypes';
import { updateObject } from '../../utility';

import isEmpty from 'lodash/isEmpty';

const initialState = {
  isAuthenticated: false,
  user: {},
  token: null
}

const setCurrentUser = (state, action) => {
  return updateObject(state, {
    isAuthenticated: !isEmpty(action.user),
    user: action.user
  });
}

const login = (state, action) => {
  return updateObject(state, {
    token: null
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_CURRENT_USER: return setCurrentUser(state, action)
    case actionTypes.AUTH_LOGIN: return login(state, action)
    default:
      return state;
  }
}
