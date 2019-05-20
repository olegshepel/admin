import $ from 'jquery';
import * as actionTypes from '../../store/actions/actionTypes';
import * as requests from '../../store/requests';
import * as urls from '../../store/urls';

const FORM = '#quotation_form';

export function handleSubmit(marker, fetchItems) {
  var actionType = marker;
  var form = $(FORM).closest('form');
  var data = form.serialize();
  if (actionType === actionTypes.CREATE) {
    requests.request(urls.URL_CREATE_OFFER, data, fetchItems);
  }
  if (actionType === actionTypes.UPDATE) {
    requests.request(urls.URL_UPDATE_OFFER, data, fetchItems);
  } else {
    return null
  }
}

export function follow(id, fetchItems) {
  var data = `${'&id='}${id}`;
  requests.request(urls.URL_FOLLOW_QUOTATION, data, fetchItems);
}
