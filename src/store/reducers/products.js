import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
  data: [],
  selectedRowKeys: [],

  name: '',
  intername: '',
  price: '',
  tariffNumber: {key: '', label: ''},
  barcode: {key: '', label: ''},
  category: {key: '', label: ''},
  currency: {key: '', label: ''},
  sysm: [],
  unit: {key: '', label: ''},
  sysmDefault: {key: '', label: ''},
  description: '',
  weight: '',
  volume: '',
  length: '',
  width: '',
  height: '',
  isActive: false,
  form: {

  },
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
  indexSelected: null,
  editIndex: null,
  deleteIndexes: [],
  deleteConfirm: false
}

const onSelectProducts = (state, action) => {
  return updateObject(state, {
    selectedRowKeys: action.selectedRowKeys
  });
}

const onSetProductForm = (state, action) => {
  return updateObject(state, {
    ...action.payload
  });
}

const setProducts = (state, action) => {
  return updateObject(state, {
    data: action.data
  });
}

const createProduct = (state, action) => {
  return updateObject(state, {
    data: []
  });
}

const updateProduct = (state, action) => {
  return updateObject(state, {
    data: []
  });
}

const copyProduct = (state, action) => {
  return updateObject(state, {
    data: []
  });
}

const deleteProduct = (state, action) => {
  return updateObject(state, {
    data: []
  });
}

export default function (state=initialState, action={}) {
  switch(action.type) {
    case actionTypes.SET_PRODUCTS: return setProducts(state, action)
    case actionTypes.ON_SELECT_PRODUCTS: return onSelectProducts(state, action)
    case actionTypes.SET_PRODUCT_FORM: return onSetProductForm(state, action)

    case actionTypes.CLEAR_PRODUCT_FORM: return onSetProductForm(state, action)
    case actionTypes.FILL_PRODUCT_FORM: return onSetProductForm(state, action)
    //
    case actionTypes.CREATE_PRODUCT: return createProduct(state, action)
    case actionTypes.UPDATE_PRODUCT: return updateProduct(state, action)
    case actionTypes.COPY_PRODUCT: return copyProduct(state, action)
    case actionTypes.DELETE_PRODUCT: return deleteProduct(state, action)
    default:
      return state;
  }
}
