import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL = '/inquires/';
const URL_API = `/api${URL}`;
const URL_PRODUCTS = '/api/products/';

function setInquires(data) {
  return {
    type: actionTypes.SET_INQUIRES,
    data
  }
}

export function fetchInquires() {
  return dispatch => {
    axios.get(URL_API)
      .then(res => {
        dispatch(setInquires(res.data))
      })
  }
}

export function removeSelectedInquire(key, selectedRowKeys) {
  var selectedRowKeys = selectedRowKeys.filter(function(item) {
    return item !== key
  });
  return {
    type: actionTypes.ON_SELECT_INQUIRES,
    selectedRowKeys
  }
}

export function removeSelectedInquires() {
  var selectedRowKeys = [];
  return {
    type: actionTypes.ON_SELECT_INQUIRES,
    selectedRowKeys
  }
}

export const selectInquireModal = (data) => {
  return {
    type: actionTypes.SELECT_INQUIRE_MODAL,
    payload: data
  }
}

export const onSelectInquires = (selectedRowKeys) => {
  return {
    type: actionTypes.ON_SELECT_INQUIRES,
    selectedRowKeys
  }
}

export const setInquireForm = (data) => {
  return {
    type: actionTypes.SET_INQUIRE_FORM,
    payload: data
  }
}

export const clearInquireForm = (data) => {
  return {
    type: actionTypes.CLEAR_INQUIRE_FORM,
    payload: {
      description: '',
      groups: [],
      startDate: new Date(),
      expireDate: new Date(),
      isActive: false,
      emailNotification: false,
      lots: [],
      // products: [],
    }
  }
}

function fillForm(data) {
  return {
    type: actionTypes.FILL_INQUIRE_FORM,
    payload: data
  }
}

export function fillInquireForm(inquire) {
  var oldGroup = inquire.groups;
  var groupKeys = [];
  for (let i=0; i<oldGroup.length; i++) {
    groupKeys.push(oldGroup[i].key.toString());
  }
  var lots = inquire.lots;
  var newLots = [];
  for (let i=0; i < lots.length; i++) {
    newLots.push({key: (Math.floor(Math.random()*90000) + 10000).toString(), lot: lots[i]});
  }
  var data = {
    description: inquire.description,
    groups: groupKeys,
    startDate: inquire.startDate,
    expireDate: inquire.expireDate,
    isActive: inquire.is_active,
    emailNotification: inquire.email_notify,
    lots: newLots,
    // products: [],
  }
  return dispatch => {
    dispatch(fillForm(data))
  }
}

export function fetchProducts() {
  return dispatch => {
    axios.get(URL_PRODUCTS)
      .then(res => {
        let data = res.data;
        let products = [];
        let productsFull = [];
        data.map(function(item, index) {
          products.push({
            value: item.id,
            label: `${item.name_select}`
          });
          productsFull.push({
            value: item.id,
            label: `${item.name}`,
            unit: item.unit_by_default
          });
        });
        dispatch(setInquireForm(
          {
            products: products,
            productsFull: productsFull
          }
        ))
      })
  }
}
