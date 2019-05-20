import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: [],
  selectedRowKeys: [],
  description: '',
  groups: [],
  startDate: new Date(),
  expireDate: new Date(),
  isActive: false,
  emailNotification: false,
  lots: [],
  products: [],
  form: {},
  filter: {
    search: '',
    name: '',
    taric: '',
    barcode: '',
    category: ''
  },
  loading: false,
  previous: null,
  next: null,
  count: 0,
  pagination: {},
  file: null,
  deleteIndexes: [],
  deleteConfirm: false
}

const onSelectInquires = (state, action) => {
  return updateObject(state, {
    selectedRowKeys: action.selectedRowKeys
  });
}

const onSetInquireForm = (state, action) => {
  return updateObject(state, {
    ...action.payload
  });
}

const setInquires = (state, action) => {
  return updateObject(state, {
    data: action.data
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_INQUIRES: return setInquires(state, action)
    case actionTypes.ON_SELECT_INQUIRES: return onSelectInquires(state, action)
    case actionTypes.SET_INQUIRE_FORM: return onSetInquireForm(state, action)
    case actionTypes.CLEAR_INQUIRE_FORM: return onSetInquireForm(state, action)
    case actionTypes.FILL_INQUIRE_FORM: return onSetInquireForm(state, action)
    default:
      return state;
  }
}
