import axios from 'axios';
import * as actionTypes from './actionTypes';

const URL_GROUPS = '/api/groups/';

function setGroups(data) {
  return {
    type: actionTypes.SET_GROUPS,
    data
  }
}

export function fetchGroups() {
  return dispatch => {
    axios.get(URL_GROUPS)
      .then(res => {
        let data = res.data;
        let dataSelect = data.map(function(item, index) {
          return {value: item.id, label: item.name}
        });
        dispatch(setGroups(dataSelect))
      })
  }
}
