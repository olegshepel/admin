import { passport } from 'passport';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const URL_LOGIN = '/rest-auth/login';
const URL_REGISTRATION = 'rest-auth/registration/';

const initialState = {
  isAuthenticated: false,
  token: null,
  error: null,
  loading: false
}

const successRedirect = (state, action) => {
  return updateObject(state, {
    isAuthenticated: true,
    error: null
  });
}

const failureRedirect = (state, action) => {
  return updateObject(state, {
    isAuthenticated: false,
    error: true
  });
}

const authenticate = (state, action) => {
  // alert(JSON.stringify(action));

  passport.post(
    URL_LOGIN,
    passport.authenticate(
      'local', { successRedirect: '/dashboard', failureRedirect: '/login' }
    )
  );
}

const auth = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE: return authenticate(state, action);
    default:
      return state;
  }
}

export default auth;
