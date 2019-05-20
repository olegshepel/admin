import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: [],
  selectedRowKeys: [],
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
  id: null,
  modalMarker: null,
  size: 'lg',
  headerName: '',
  indexSelected: null,
  editIndex: null,
  deleteIndexes: [],
  deleteConfirm: false
}

const onSelectOffers = (state, action) => {
  return updateObject(state, {
    selectedRowKeys: action.selectedRowKeys
  });
}

const selectOfferModal = (state, action) => {
  return updateObject(state, {
    ...action.payload
  });
}

const setOffers = (state, action) => {
  return updateObject(state, {
    data: action.data
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_OFFERS: return setOffers(state, action)
    case actionTypes.SELECT_OFFER_MODAL: return selectOfferModal(state, action)
    case actionTypes.ON_SELECT_OFFERS: return onSelectOffers(state, action)
    default:
      return state;
  }
}
