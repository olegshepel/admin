import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  data: [],
  selectedRowKeys: [],

  description: '',
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
  id: null,
  modalMarker: null,
  size: 'lg',
  headerName: '',
  indexSelected: null,
  editIndex: null,
  deleteIndexes: [],
  deleteConfirm: false
}

const onSelectInvoices = (state, action) => {
  return updateObject(state, {
    selectedRowKeys: action.selectedRowKeys
  });
}

const selectInvoiceModal = (state, action) => {
  return updateObject(state, {
    ...action.payload
  });
}

const onSetInvoiceForm = (state, action) => {
  return updateObject(state, {
    ...action.payload
  });
}

const setInvoices = (state, action) => {
  return updateObject(state, {
    data: action.data
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_INVOICES: return setInvoices(state, action)
    case actionTypes.SELECT_INVOICE_MODAL: return selectInvoiceModal(state, action)
    case actionTypes.ON_SELECT_INVOICES: return onSelectInvoices(state, action)

    case actionTypes.SET_INVOICE_FORM: return onSetInvoiceForm(state, action)
    case actionTypes.CLEAR_INVOICE_FORM: return onSetInvoiceForm(state, action)
    case actionTypes.FILL_INVOICE_FORM: return onSetInvoiceForm(state, action)
    default:
      return state;
  }
}
