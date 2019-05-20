import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  name: null
}

const CreateOrganization = (state, action) => {
  return updateObject(state, {
    name: null
  });
}

const UpdateOrganization = (state, action) => {
  return updateObject(state, {
    name: null
  });
}

const DeleteOrganization = (state, action) => {
  return updateObject(state, {
    name: null
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.CREATE_ORGANIZATION: return CreateOrganization(state, action)
    case actionTypes.UPDATE_ORGANIZATION: return UpdateOrganization(state, action)
    case actionTypes.DELETE_ORGANIZATION: return DeleteOrganization(state, action)
    default:
      return state;
  }
}
