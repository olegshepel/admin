import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: [],
  adminLang: {
    header: {
      settings: 'Settings',
      logout: 'Logout'
    },
    sider: {
      products: 'Products',
      companies: 'Companies',
      contacts: 'Contacts',
      inquires: 'Inquires',
      documents: 'Documents'
    },
    content: {
      products: {

      },
      inquires: {

      }
    }
  }
}

const setLanguages = (state, action) => {
  return updateObject(state, {
    data: action.data
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_LANGUAGES: return setLanguages(state, action)
    default:
      return state;
  }
}
