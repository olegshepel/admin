import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL_PRODUCT_CATEGORIES = '/api/product-categories/';

function setCategories(data) {
  return {
    type: actionTypes.SET_PRODUCT_CATEGORIES,
    data
  }
}

export function fetchCategories() {
  return dispatch => {
    axios.get(URL_PRODUCT_CATEGORIES)
      .then(res => {
        let data = res.data;
        let categories = data.map(function(item, index) {
          return {value: item.id, label: item.name}
        });
        dispatch(setCategories(categories))
      })
  }
}
