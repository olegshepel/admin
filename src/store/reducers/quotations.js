import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: [],
  selectedRowKeys: [],
  deliveryTime: '',
  deliveryTerm: '',
  paymentCondition: '',
  offerDescription: '',
  offerValidity: new Date(),
  currency: [],
  lots: [],
  inquireDetails: {},
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

const onSelectQuotations = (state, action) => {
  return updateObject(state, {
    selectedRowKeys: action.selectedRowKeys
  });
}

const selectQuotationModal = (state, action) => {
  return updateObject(state, {
    ...action.payload
  });
}

const setQuotations = (state, action) => {
  return updateObject(state, {
    data: action.data
  });
}

const onSetQuotationForm = (state, action) => {
  return updateObject(state, {
    ...action.payload
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_QUOTATIONS: return setQuotations(state, action)
    case actionTypes.SELECT_QUOTATION_MODAL: return selectQuotationModal(state, action)
    case actionTypes.ON_SELECT_QUOTATIONS: return onSelectQuotations(state, action)
    case actionTypes.SET_QUOTATION_FORM: return onSetQuotationForm(state, action)
    case actionTypes.CLEAR_QUOTATION_FORM: return onSetQuotationForm(state, action)
    case actionTypes.FILL_QUOTATION_FORM: return onSetQuotationForm(state, action)
    default:
      return state;
  }
}
