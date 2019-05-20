import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL = '/products/';
const URL_API = `/api${URL}`;

function setProducts(data) {
  return {
    type: actionTypes.SET_PRODUCTS,
    data
  }
}

export function fetchProducts() {
  return dispatch => {
    axios.get(URL_API)
      .then(res => {
        dispatch(setProducts(res.data))
      })
  }
}

export const onSelectProducts = (selectedRowKeys) => {
  return {
    type: actionTypes.ON_SELECT_PRODUCTS,
    selectedRowKeys
  }
}

export const setProductForm = (data) => {
  return {
    type: actionTypes.SET_PRODUCT_FORM,
    payload: data
  }
}

export const clearProductForm = (data) => {
  return {
    type: actionTypes.CLEAR_PRODUCT_FORM,
    payload: {
      name: '',
      intername: '',
      tariffNumber: {key: '', label: ''},
      barcode: {key: '', label: ''},
      category: {key: '', label: ''},
      currency: {key: '', label: ''},
      sysm: [],
      unit: [],
      price: '',
      volume: '',
      weight: '',
      width: '',
      length: '',
      height: '',
      isActive: '',
      description: ''
    }
  }
}

export const fillProductForm = (product) => {
  return {
    type: actionTypes.FILL_PRODUCT_FORM,
    payload: {
      name: product.name,
      intername: product.intername,
      tariffNumber: { key: product.tariff_number_id, label: product.tariff_number },
      barcode: { key: product.barcode_id, label: product.barcode },
      category: { key: product.category_id, label: product.category },
      currency: { key: product.currency_id, label: product.currency },
      sysm: { key: product.system_measurement_id, label: product.system_measurement },
      unit: { key: product.unit_by_default_id, label: product.unit_by_default },
      price: product.price,
      volume: product.volume,
      weight: product.weight,
      width: product.width,
      length: product.length,
      height: product.height,
      isActive: product.is_active,
      description: product.description
    }
  }
}

export function removeSelectedProduct(key, selectedRowKeys) {
  selectedRowKeys = selectedRowKeys.filter(function(item) {
    return item !== key
  });
  return {
    type: actionTypes.ON_SELECT_PRODUCTS,
    selectedRowKeys
  }
}

export function removeSelectedProducts() {
  var selectedRowKeys = [];
  return {
    type: actionTypes.ON_SELECT_PRODUCTS,
    selectedRowKeys
  }
}
