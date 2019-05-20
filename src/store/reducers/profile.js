import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: [],
  organizations: [],
  phones: [],
  emails: [],
  size: 'sm',
  modalMarker: '',
  headerName: '',
  editIndex: null,
  deleteConfirm: false
}

const setProfile = (state, action) => {
  var data = action.data[0];
  var organizations = data.organizations;
  var phones = data.phones;
  var emails = data.emails;
  return updateObject(state, {
    data: action.data,
    organizations: organizations,
    phones: phones,
    emails: emails
  });
}

const selectProfileModal = (state, action) => {
  return updateObject(state, {
    ...action.payload
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_PROFILE: return setProfile(state, action)
    case actionTypes.SELECT_PROFILE_MODAL: return selectProfileModal(state, action)
    default:
      return state;
  }
}
