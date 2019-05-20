import $ from 'jquery';
import * as actionTypes from '../../store/actions/actionTypes';
import * as requests from '../../store/requests';
import * as urls from '../../store/urls';

const FORM = '#inquire_form';

export function handleSubmitInquire(
  items, modalToggle, fetchItems, removeSelectedItem, removeSelectedItems, clearForm, modal
) {
  var actionType = modal.modalMarker;
  var form = $(FORM).closest('form');
  var data = form.serialize();
  var index = modal.indexSelected;
  var selectedRowKeys = items.selectedRowKeys;
  modalToggle();
  if (actionType === actionTypes.CREATE) {
    requests.requestCreateItem(urls.URL_CREATE_INQUIRE, data, fetchItems, clearForm);
  }
  if (actionType === actionTypes.UPDATE) {
    var id = items.data[index]['id'];
    data = data + '&id=' + `${id}`;
    requests.request(urls.URL_UPDATE_INQUIRE, data, fetchItems);
  }
  if (actionType === actionTypes.COPY) {
    var id = items.data[index]['id'];
    data = data + '&id=' + `${id}`;
    requests.request(urls.URL_COPY_INQUIRE, data, fetchItems);
  }
  if (actionType === actionTypes.DELETE) {
    var id = items.data[index]['id'];
    data = data + '&id=' + `${id}`;
    requests.requestDeleteItem(urls.URL_DELETE_INQUIRE, data, fetchItems, removeSelectedItem, index, selectedRowKeys);
  }
  if (actionType === actionTypes.DELETES) {
    var data = '';
    for (let i = 0; i < selectedRowKeys.length; i++) {
      data = data + '&items=' + `${items.data[selectedRowKeys[i]]['id']}`;
    }
    requests.requestDeleteItems(urls.URL_DELETES_INQUIRE, data, fetchItems, removeSelectedItems);
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
    modalTitle: 'New Inquire',
    deleteConfirm: false,
    width: '1200px'
  }
}

export function setCopy(items, id) {
  return {
    visible: true,
    modalMarker: actionTypes.COPY,
    modalTitle: `New Inquire (copied from # ${id})`,
    deleteConfirm: false,
    indexSelected: getIndex(items, id),
    width: '1200px'
  }
}

export function setUpdate(items, id) {
  return {
    visible: true,
    modalMarker: actionTypes.UPDATE,
    modalTitle: `Edit Inquire # ${id}`,
    deleteConfirm: false,
    indexSelected: getIndex(items, id),
    width: '1200px'
  }
}

export function setDelete(items, id) {
  return {
    visible: true,
    modalMarker: actionTypes.DELETE,
    modalTitle: `Delete Inquire # ${id}`,
    deleteConfirm: true,
    indexSelected: getIndex(items, id),
    width: '600px'
  }
}

export function setDeletes(items, id) {
  return {
    visible: true,
    modalMarker: actionTypes.DELETES,
    modalTitle: 'Delete Inquires',
    deleteConfirm: true,
    indexSelected: getIndex(items, id),
    width: '600px'
  }
}
