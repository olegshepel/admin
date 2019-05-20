import axios from 'axios';

// Common Requests
export function request(url, data, fetch) {
  // alert(JSON.stringify(data));
  axios({
    method: 'post',
    url: url,
    data: data
  }).then(res => {
    success(fetch);
  })
}

function success(fetch) {
  fetch();
}

function error() {

}

function setSelected() {

}

// Create Item
export function requestCreateItem(url, data, fetch, clearForm) {
  // alert(JSON.stringify(data));
  axios({
    method: 'post',
    url: url,
    data: data,
  }).then(res => {
    successCreate(fetch, clearForm);
  })
}

function successCreate(fetch, clearForm) {
  fetch();
  clearForm();
}

function errorCreate() {

}

// Delete Item
export function requestDeleteItem(url, data, fetch, removeSelectedItem, rowIndex, selectedRowKeys) {
  // alert(JSON.stringify(data));
  axios({
    method: 'post',
    url: url,
    data: data
  }).then(res => {
    successDelete(fetch, removeSelectedItem, rowIndex, selectedRowKeys);
  })
}

function successDelete(fetch, removeSelectedItem, rowIndex, selectedRowKeys) {
  removeSelectedItem(rowIndex, selectedRowKeys);
  fetch();
}

// Delete Items
export function requestDeleteItems(url, data, fetch, removeSelectedItems) {
  // alert(JSON.stringify(data));
  axios({
    method: 'post',
    url: url,
    data: data
  }).then(res => {
    successDeletes(fetch, removeSelectedItems);
  })
}

function successDeletes(fetch, removeSelectedItems) {
  removeSelectedItems([]);
  fetch();
}
