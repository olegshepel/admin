import passport from 'passport';
import { passport-local } as passportLocal from 'passport-local';
var LocalStrategy = passportLocal.Strategy;
// var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
// passport.authenticate('twitter');('facebook');('google');('linkedin')
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const URL_LOGIN = '/rest-auth/login';
const URL_REGISTRATION = 'rest-auth/registration/';

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

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
