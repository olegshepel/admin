import $ from 'jquery';
import * as actionTypes from '../../store/actions/actionTypes';
import * as requests from '../../store/requests';
import * as urls from '../../store/urls';

const URL_CREATE = urls.URL_CREATE_INQUIRE;
const URL_UPDATE = urls.URL_UPDATE_INQUIRE;
const URL_DELETE = urls.URL_DELETE_INQUIRE;
const URL_DELETES = urls.URL_DELETES_INQUIRE;
const URL_COPY = urls.URL_COPY_INQUIRE;
const FORM = '#inquire_form';

export function handleSubmitInvoice(
  items, modalToggle, fetchItems, removeSelectedItem, removeSelectedItems, clearForm
) {
  var actionType = items.modalMarker;
  var form = $(FORM).closest('form');
  var data = form.serialize();
  var index = items.indexSelected;
  var selectedRowKeys = items.selectedRowKeys;
  modalToggle();
  if (actionType === actionTypes.CREATE) {
    requests.requestCreateItem(URL_CREATE, data, fetchItems, clearForm);
  }
  if (actionType === actionTypes.UPDATE) {
    var id = items.data[index]['id'];
    data = data + '&id=' + `${id}`;
    requests.request(URL_UPDATE, data, fetchItems);
  }
  if (actionType === actionTypes.COPY) {
    var id = items.data[index]['id'];
    data = data + '&id=' + `${id}`;
    requests.request(URL_COPY, data, fetchItems);
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
