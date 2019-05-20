import axios from 'axios';
import jwt from 'jsonwebtoken';
import $ from 'jquery';
import * as actionTypes from './actionTypes';
import setAuthorizationToken from './auth/utils/setAuthorizationToken';

const URL_LOGIN = 'rest-auth/login/';
const URL_SIGNUP = 'rest-auth/registration/';
const FORM = '#login_form';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('key');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
  var form = $(FORM).closest('form');
  var data = form.serialize();

  return dispatch => {
    dispatch(authStart());
    axios({
      method: 'post',
      url: URL_LOGIN,
      data: data
    })
    .then(res => {
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem('key', token);
        localStorage.setItem('expirationDate', expirationDate);
        setAuthorizationToken(token);
        dispatch(authSuccess(jwt.decode(token)));
        dispatch(checkAuthTimeout(3600));
    })
    .catch(err => {
        dispatch(authFail(err))
    })
  }
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(URL_SIGNUP, {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('key', token);
            localStorage.setItem('expirationDate', expirationDate);
            setAuthorizationToken(token);
            dispatch(authSuccess(jwt.decode(token)));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('key');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                setAuthorizationToken(token);
                dispatch(authSuccess(jwt.decode(token)));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}
