import $ from 'jquery';
import * as actionTypes from '../../store/actions/actionTypes';
import * as requests from '../../store/requests';
import * as urls from '../../store/urls';

const URL_CREATE = urls.URL_CREATE_PRODUCT;
const URL_UPDATE = urls.URL_UPDATE_PRODUCT;
const URL_DELETE = urls.URL_DELETE_PRODUCT;
const URL_DELETES = urls.URL_DELETES_PRODUCT;
const URL_COPY = urls.URL_COPY_PRODUCT;
const FORM = '#product_form';


export function handleSubmitProduct(
  items, modalToggle, fetchItems, removeSelectedItem, removeSelectedItems, clearForm, modal
) {
  var actionType = modal.modalMarker;
  var form = $(FORM).closest('form');
  var data = form.serialize();
  var index = modal.indexSelected;
  var selectedRowKeys = items.selectedRowKeys;
  modalToggle();
  if (actionType === actionTypes.CREATE) {
    requests.requestCreateItem(URL_CREATE, data, fetchItems, clearForm);
  }
  if (actionType === actionTypes.UPDATE) {
    var id = items.data[index]['id'];
    data = data + '&id=' + `${id}`;
    requests.request(URL_UPDATE, data, fetchItems, clearForm);
  }
  if (actionType === actionTypes.COPY) {
    var id = items.data[index]['id'];
    data = data + '&id=' + `${id}`;
    requests.request(URL_COPY, data, fetchItems, clearForm);
  }
  if (actionType === actionTypes.DELETE) {
    var id = items.data[index]['id'];
    data = data + '&id=' + `${id}`;
    requests.requestDeleteItem(URL_DELETE, data, fetchItems, removeSelectedItem, index, selectedRowKeys);
  }
  if (actionType === actionTypes.DELETES) {
    var data = '';
    for (let i = 0; i < selectedRowKeys.length; i++) {
      data = data + '&items=' + `${items.data[selectedRowKeys[i]]['id']}`;
    }
    requests.requestDeleteItems(URL_DELETES, data, fetchItems, removeSelectedItems);
  } else {
    return null
  }
}

export function getIndex(items, id) {
  let index;
  for (let i=0; i < items.data.length; i++) {
    if (items.data[i]['id'] === id) {index = i;}
  }
  return index;
}

export function setCreate() {
  return {
    visible: true,
    modalMarker: actionTypes.CREATE,
    modalTitle: 'New Product',
    deleteConfirm: false,
    width: '1200px'
  }
}

export function setCopy(items, id) {
  return {
    visible: true,
    modalMarker: actionTypes.COPY,
    modalTitle: 'Copy Product',
    deleteConfirm: false,
    indexSelected: getIndex(items, id),
    width: '1200px'
  }
}

export function setUpdate(items, id) {
  return {
    visible: true,
    modalMarker: actionTypes.UPDATE,
    modalTitle: 'Edit Product',
    deleteConfirm: false,
    indexSelected: getIndex(items, id),
    width: '1200px'
  }
}

export function setDelete(items, id) {
  return {
    visible: true,
    modalMarker: actionTypes.DELETE,
    modalTitle: 'Delete Product',
    deleteConfirm: true,
    indexSelected: getIndex(items, id),
    width: '600px'
  }
}

export function setDeletes(items, id) {
  return {
    visible: true,
    modalMarker: actionTypes.DELETES,
    modalTitle: 'Delete Products',
    deleteConfirm: true,
    indexSelected: getIndex(items, id),
    width: '600px'
  }
}
