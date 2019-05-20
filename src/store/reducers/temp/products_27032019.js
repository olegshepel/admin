import axios from 'axios';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const URL = '/products/';
const URL_API = `/api${URL}`;
const URL_CREATE = '/products/create/';
const URL_UPDATE = '/products/update/';
const URL_DELETE = '/products/delete/';
const URL_COPY = '/products/copy/';

const data = {
  axios({
    method: 'post',
    url: URL_API,
    data: data
  }).then(res => {
    return res.data;
  })
}

const initialState = {
  data: [],
  loading: false,
  previous: null,
  next: null,
  count: 0,
  pagination: {},
  loading: false,
  file: null,
  id: null,
  modalMarker: '',
  headerName: '',
  editIndex: null,
  deleteIndexes: [],
  deleteConfirm: false
}

/*
const fetchProductBegin = (state, action) => {
  axios.get(URL_API)
    .then(res => {
      return updateObject(state, {
        data: res.data,
        loading: true
      });
    })
}
*/

const fetchProducts = (state, action) => {
  axios.get(URL_API)
    .then(res => {
      return updateObject(state, {
        data: res.data,
        loading: true
      });
    })
}

const createProduct = (state, action) => {
  var form = $('#product_form').closest('form');
  var data = form.serialize();
  axios({
    method: 'post',
    url: URL_CREATE,
    data: data
  }).then(res => {
    this.fetch();
  })
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
    // case actionTypes.FETCH_PRODUCTS_BEGIN: return fetchProductBegin(state, action)
    case actionTypes.FETCH_PRODUCTS: return fetchProducts(state, action)
    case actionTypes.CREATE_PRODUCT: return createProduct(state, action)
    case actionTypes.UPDATE_PRODUCT: return updateProduct(state, action)
    case actionTypes.COPY_PRODUCT: return copyProduct(state, action)
    case actionTypes.DELETE_PRODUCT: return deleteProduct(state, action)
    default:
      return state;
  }
}
