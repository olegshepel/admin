import axios from 'axios';
import $ from 'jquery';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const URL_LOGIN = 'http://127.0.0.1:8000/rest-auth/login/';
const URL_SIGNUP = 'http://127.0.0.1:8000/rest-auth/registration/';

const initialState = {
  isAuthenticated: true,
  token: null,
  error: null,
  loading: false
}

const authCheck = (state, action) => {
  const token = localStorage.getItem('token');
  if (token === undefined) {
      authLogout();
  }
  else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if ( expirationDate <= new Date() ) {
          dispatch(logout());
      } else {
          authSuccess(token);
          checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000);
      }
  }
  return updateObject(state, {
    error: null,
    loading: true
  });
}

const authLogin = (state, action) => {
  var form = $('#login_form').closest('form');
  var data = form.serialize();
  axios({
    method: 'post',
    url: URL_LOGIN,
    data: data
  }).then(res => {
    const token = res.data.key;
    localStorage.setItem('token', token);
  })
  return updateObject(state, {
    error: null,
    loading: true
  });
}

const authSignup = (state, action) => {
  var form = $('#sign_form').closest('form');
  var data = form.serialize();
  axios({
    method: 'post',
    url: URL_SIGNUP,
    data: data
  }).then(res => {
    const token = res.data.key;
    localStorage.setItem('token', token);
  })
  return updateObject(state, {
    error: null,
    loading: true
  });
}

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
}

const authSuccess = (state, action) => {
  return updateObject(state, {
    isAuthenticated: true,
    token: action.token,
    error: null,
    loading: false
  })
}

const authFail = (state, action) => {
  return updateObject(state, {
    isAuthenticated: false,
    error: action.error,
    loading: false
  });
}

const authLogout = (state, action) => {
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');
  return updateObject(state, {
    isAuthenticated: false,
    token: null
  });
}

export const checkAuthTimeout = expirationTime => {
  return dispath => {
    setTimeout(() => {
      dispath(logout());
    }, expirationTime * 1000)
  }
}

export default function(state=initialState, action={}) {
  switch (action.type) {
    case actionTypes.AUTH_CHECK: return authCheck(state, action)
    case actionTypes.AUTH_LOGIN: return authLogin(state, action)
    case actionTypes.AUTH_SIGNUP: return authSignup(state, action)
    case actionTypes.AUTH_START: return authStart(state, action)
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
    case actionTypes.AUTH_FAIL: return authFail(state, action)
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action)
    default:
      return state;
  }
}
