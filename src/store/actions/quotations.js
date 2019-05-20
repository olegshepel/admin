import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL = '/quotations/';
const URL_API = `/api${URL}`;

function setQuotations(data) {
  return {
    type: actionTypes.SET_QUOTATIONS,
    data
  }
}

export function fetchQuotations() {
  return dispatch => {
    axios.get(URL_API)
      .then(res => {
        dispatch(setQuotations(res.data))
      })
  }
}

export const selectQuotationModal = (data) => {
  return {
    type: actionTypes.SELECT_QUOTATION_MODAL,
    payload: data
  }
}

export const onSelectQuotations = (selectedRowKeys) => {
  return {
    type: actionTypes.ON_SELECT_QUOTATIONS,
    selectedRowKeys
  }
}

export const setQuotationForm = (data) => {
  return {
    type: actionTypes.SET_QUOTATION_FORM,
    payload: data
  }
}

export const clearQuotationForm = (data) => {
  return {
    type: actionTypes.CLEAR_QUOTATION_FORM,
    payload: {
      deliveryTime: '',
      deliveryTerm: '',
      paymentCondition: '',
      offerDescription: '',
      offerValidity: new Date,
      currency: [],
      inquireDetails: {},
      lots: [],
      lastOfferLots: []
    }
  }
}

function fillForm(data) {
  return {
    type: actionTypes.FILL_QUOTATION_FORM,
    payload: data
  }
}

export function fillQuotationForm(quotation) {
  let validity = quotation.last_offer.validity;
  if (validity === undefined) { validity = new Date(); }
  var lots = quotation.lots;
  if (quotation.last_offer.lots !== undefined) {
    for (let i=0; i<quotation.last_offer.lots.length; i++) {
      lots[i]['lot_price'] = quotation.last_offer.lots[i]['lot_price']
      lots[i]['lot_quantity'] = quotation.last_offer.lots[i]['lot_quantity']
      lots[i]['lot_delivery_time'] = quotation.last_offer.lots[i]['lot_delivery_time']
      lots[i]['lot_delivery_term'] = quotation.last_offer.lots[i]['lot_delivery_term']
      lots[i]['lot_payment_condition'] = quotation.last_offer.lots[i]['lot_payment_condition']
      lots[i]['lot_description'] = quotation.last_offer.lots[i]['lot_description']
    }
  }
  var data = {
    deliveryTime: quotation.last_offer.delivery_time,
    deliveryTerm: quotation.last_offer.delivery_term,
    paymentCondition: quotation.last_offer.payment_condition,
    offerValidity: validity,
    currency: { key: quotation.last_offer.currency_id, label: quotation.last_offer.currency },
    offerDescription: quotation.last_offer.description,
    lots: lots,
    lastOfferLots: quotation.last_offer.lots,
    inquireDetails: {
      organization: quotation.organization,
      description: quotation.description,
      createdBy: quotation.created_by_name,
      startDate: quotation.startDate,
      expireDate: quotation.expireDate
    }
  }
  return dispatch => {
    dispatch(fillForm(data))
  }
}
