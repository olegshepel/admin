import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL = '/invoices/';
const URL_API = `/api${URL}`;

function setInvoices(data) {
  return {
    type: actionTypes.SET_INVOICES,
    data
  }
}

export function fetchInvoices() {
  return dispatch => {
    axios.get(URL_API)
      .then(res => {
        dispatch(setInvoices(res.data))
      })
  }
}

export function removeSelectedInvoice(key, selectedRowKeys) {
  var selectedRowKeys = selectedRowKeys.filter(function(item) {
    return item !== key
  });
  return {
    type: actionTypes.ON_SELECT_INVOICES,
    selectedRowKeys
  }
}

export function removeSelectedInvoices() {
  var selectedRowKeys = [];
  return {
    type: actionTypes.ON_SELECT_INVOICES,
    selectedRowKeys
  }
}

export const selectInvoiceModal = (data) => {
  return {
    type: actionTypes.SELECT_INVOICE_MODAL,
    payload: data
  }
}

export const onSelectInvoices = (selectedRowKeys) => {
  return {
    type: actionTypes.ON_SELECT_INVOICES,
    selectedRowKeys
  }
}

export const setInvoiceForm = (data) => {
  return {
    type: actionTypes.SET_INVOICE_FORM,
    payload: data
  }
}

export const clearInvoiceForm = (data) => {
  return {
    type: actionTypes.CLEAR_INVOICE_FORM,
    payload: {
      description: '',
      groups: [],
      startDate: new Date(),
      expireDate: new Date(),
      isActive: false,
      emailNotification: false,
      lots: [],
      products: [],
    }
  }
}

function fillForm(data) {
  return {
    type: actionTypes.FILL_INVOICE_FORM,
    payload: data
  }
}

export function fillInvoiceForm(item) {
  var data = {
    lots: item.lots
  }
  return dispatch => {
    dispatch(fillForm(data))
  }
}
