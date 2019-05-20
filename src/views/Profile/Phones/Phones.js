import React, {PureComponent} from 'react';

import axios from 'axios';
import $ from 'jquery';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css'

import CustomModal from '../../../components/CustomModal';
import PhoneList from './PhoneList';
import PhoneCreate from './PhoneCreate';
import PhoneEdit from './PhoneEdit';
import PhoneDelete from './PhoneDelete';

const URL = '/api/profile/';
const URL_PHONE_CREATE = '/phones/create/';
const URL_PHONE_UPDATE = '/phones/update/';
const URL_PHONE_DELETE = '/phones/delete/';

class Phones extends PureComponent {
  state = {
    phones: [],
    modal: false,
    size: 'sm',
    modalMarker: '',
    headerName: '',
    editIndex: null,
    deleteConfirm: false
  }
  componentDidMount() {
    this.fetch();
  }
  setData(data) {
    this.setState({
      phones: data
    });
  }
  fetch() {
    axios.get(URL)
      .then(res => {
        var data = res.data[0];
        var phones = data.phones;
        // alert(JSON.stringify(phones));
        this.setData(phones);
      })
  }
  toggle() {
    this.setState({modal: !this.state.modal});
  }
  handleSubmit() {
    this.toggle();
    if (this.state.modalMarker === 'create') {
      this.sendRequestCreate();
    }
    if (this.state.modalMarker === 'edit') {
      this.sendRequestUpdate(this.state.editIndex);
    }
    if (this.state.modalMarker === 'delete') {
      this.sendRequestDelete(this.state.editIndex);
    } else {
      return null
    }
  }
  sendRequestCreate() {
    var form = $('#phone_create').closest('form');
    var data = form.serialize();
    axios({
      method: 'post',
      url: URL_PHONE_CREATE,
      data: data
    }).then(res => {
      this.fetch();
    })
  }
  sendRequestUpdate(index) {
    let id = this.state.phones[index]['pk'];
    var form = $('#phone_update').closest('form');
    var data = form.serialize() + '&id=' + `${id}`;
    axios({
      method: 'post',
      url: URL_PHONE_UPDATE,
      data: data
    }).then(res => {
      this.fetch();
    })
  }
  sendRequestDelete(index) {
    let id = this.state.phones[index]['pk'];
    var form = $('#phone_delete').closest('form');
    var data = form.serialize() + '&id=' + `${id}`;
    axios({
      method: 'post',
      url: URL_PHONE_DELETE,
      data: data
    }).then(res => {
      this.fetch();
    })
  }
  createItem = () => {
    this.setState({
      modalMarker: 'create',
      headerName: 'Add Phone',
      deleteConfirm: false
    });
    this.toggle();
  }
  updateItem(index) {
    this.setState({
      modalMarker: 'edit',
      headerName: 'Edit Phone',
      editIndex: index,
      deleteConfirm: false
    });
    this.toggle();
  }
  deleteItem(index) {
    this.setState({
      modalMarker: 'delete',
      headerName: 'Delete Phone',
      editIndex: index,
      deleteConfirm: true
    });
    this.toggle();
  }
  renderModal() {
    if (this.state.modalMarker === 'create') {
      return (
        <PhoneCreate />
      );
    }
    if (this.state.modalMarker === 'edit') {
      return (
        <PhoneEdit phone={this.state.phones[this.state.editIndex]}/>
      );
    }
    if (this.state.modalMarker === 'delete') {
      return (
        <PhoneDelete phone={this.state.phones[this.state.editIndex]}/>
      );
    } else {
      return null
    }
  }
  render() {
    return (
      <div className="card">
        <CustomModal handleSubmit={this.handleSubmit.bind(this)}>
        {this.renderModal()}
        </CustomModal>
        <div className="card-header">
          <span className="pull-left">
          <span className="fa fa-phone"></span> Phones
          </span>
          <span className="pull-right">
          <Tooltip placement="top" title='add phone'>
          <button className="btn btn-sm btn-outline-success" onClick={this.createItem}>
          <span className="fa fa-plus"></span>
          </button>
          </Tooltip>&nbsp;
          </span>
        </div>
        <div className="card-body">
        <PhoneList
        phones={this.state.phones}
        updateItem={this.updateItem.bind(this)}
        deleteItem={this.deleteItem.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Phones;
