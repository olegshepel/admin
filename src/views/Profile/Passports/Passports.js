import React, {PureComponent} from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css';

import CustomModal from '../../../components/CustomModal';
import PassportList from './PassportList';
import PassportCreate from './PassportCreate';
import PassportUpdate from './PassportUpdate';
import PassportDelete from './PassportDelete';

const URL_PASSPORTS = '/api/passports/';
const URL_PASSPORTS_CREATE = '/passport/create/';
const URL_PASSPORTS_UPDATE = '/passport/update/';
const URL_PASSPORTS_DELETE = '/passport/delete/';

export default class Passports extends PureComponent {
  state = {
    passports: [],
    modal: false,
    size: 'lg',
    modalMarker: '',
    headerName: '',
    editIndex: null,
    deleteConfirm: false
  }
  componentDidMount() {
    this.fetch();
  }
  fetch() {
    axios.get(URL_PASSPORTS)
      .then(res => {
        this.setState({
          passports: res.data
        });
      })
  }
  toggle() {
    this.setState({modal: !this.state.modal});
  }
  handleSubmit() {
    this.toggle();
    if (this.state.modalMarker == 'create') {
      this.sendRequestCreate();
    }
    if (this.state.modalMarker == 'update') {
      this.sendRequestUpdate(this.state.editIndex);
    }
    if (this.state.modalMarker == 'delete') {
      this.sendRequestDelete(this.state.editIndex);
    } else {
      return null
    }
  }
  sendRequestCreate() {
    var form = $('#passport_create').closest('form');
    var data = form.serialize();
    axios({
      method: 'post',
      url: URL_PASSPORTS_CREATE,
      data: data
    }).then(res => {
      this.fetch();
    })
  }
  sendRequestUpdate(index) {
    let id = this.state.phones[index]['pk'];
    var form = $('#passport_update').closest('form');
    //var data = form.serializeArray();
    var data = form.serialize() + '&id=' + `${id}`;
    axios({
      method: 'post',
      url: URL_PASSPORTS_UPDATE,
      data: data
    }).then(res => {
      this.fetch();
    })
  }
  sendRequestDelete(index) {
    let id = this.state.phones[index]['pk'];
    var form = $('#passport_delete').closest('form');
    var data = form.serialize() + '&id=' + `${id}`;
    axios({
      method: 'post',
      url: URL_PASSPORTS_DELETE,
      data: data
    }).then(res => {
      this.setState({
        modalMarker: ''
      })
      this.fetch();
    })
  }
  createItem = () => {
    //alert();
    this.setState({
      modalMarker: 'create',
      headerName: 'Add Passport',
      deleteConfirm: false
    });
    this.toggle();
  }
  updateItem(index) {
    this.setState({
      modalMarker: 'update',
      headerName: 'Edit Passport',
      editIndex: index,
      deleteConfirm: false
    });
    this.toggle();
  }
  deleteItem(index) {
    this.setState({
      modalMarker: 'delete',
      headerName: 'Delete Passport',
      editIndex: index,
      deleteConfirm: true
    });
    this.toggle();
  }
  renderModal() {
    if (this.state.modalMarker == 'create') {
      return (
        <PassportCreate />
      );
    }
    if (this.state.modalMarker == 'update') {
      return (
        <PassportUpdate passport={this.state.passports[this.state.editIndex]}/>
      );
    }
    if (this.state.modalMarker == 'delete') {
      return (
        <PassportDelete passport={this.state.passports[this.state.editIndex]}/>
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
          <Icon type="idcard" /> Passports
          </span>
          <span className="pull-right">
          <Tooltip placement="top" title='add passport'>
          <button className="btn btn-sm btn-outline-success" onClick={this.createItem}>
          <span className="fa fa-plus"></span>
          </button>
          </Tooltip>&nbsp;
          </span>
        </div>
        <div className="card-body">
        <PassportList
        passports={this.state.passports}
        updateItem={this.updateItem.bind(this)}
        deleteItem={this.deleteItem.bind(this)} />
        </div>
      </div>
    );
  }
}
