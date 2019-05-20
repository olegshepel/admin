import React from 'react';
import axios from 'axios';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css';

import Form from './Form';
import FormDelete from './FormDelete';
import List from './List';
import MyModal from '../../templates/react/modal/MyModal';

const URL_ADD = '/users/add/';
const URL_UPDATE = '/users/update/';
const URL_REMOVE = '/users/remove/';

export default class Users extends React.PureComponent {
  state = {
    modal: false,
    size: 'sm',
    modalMarker: '',
    headerName: '',
    index: null,
    pk: null,
    deleteConfirm: false
  }
  componentDidMount() {

  }
  refresh() {
    this.props.refresh();
  }
  toggle() {this.setState({modal: !this.state.modal});}
  handleSubmit() {
    this.toggle();
    if (this.state.modalMarker == 'create') {this.sendRequestCreate();}
    if (this.state.modalMarker == 'update') {this.sendRequestUpdate(this.state.index);}
    if (this.state.modalMarker == 'remove') {this.sendRequestDelete(this.state.index);}
    else {return null}
  }
  createItem = () => {this.setParams('create', 'Add User', false);}
  updateItem(index) {this.setParams('update', `Edit User`, false, index, 'sm');}
  deleteItem(index) {this.setParams('remove', `Remove User`, true, index, 'sm');}
  setParams(modalMarker, headerName, deleteConfirm, index=0, size='lg') {
    let pk = 0;
    if (modalMarker !== 'create') {pk = this.props.users[index]['pk'];}
    this.setState({
      modalMarker: modalMarker,
      headerName: headerName,
      deleteConfirm: deleteConfirm,
      index: index,
      size: size,
      pk: pk
    });
    this.toggle();
  }
  sendRequestCreate() {
    var form = $('#form').closest('form');
    var data = form.serialize();
    axios({
      method: 'post',
      url: URL_ADD,
      data: data
    }).then(res => {
      this.refresh();
    })
  }
  sendRequestUpdate() {
    var form = $('#form').closest('form');
    var data = form.serialize();
    axios({
      method: 'post',
      url: URL_UPDATE,
      data: data
    }).then(res => {
      this.refresh();
    })
  }
  sendRequestDelete(index) {
    let pk = this.state.pk;
    var form = $('#form').closest('form');
    var data = form.serialize() + '&pk=' + `${pk}`;
    axios({
      method: 'post',
      url: URL_REMOVE,
      data: data
    }).then(res => {
      this.setState({
        modalMarker: ''
      })
      this.refresh();
    })
  }
  renderModal() {
    if (this.state.modalMarker == 'create') {
      return (
        <Form roles={this.props.roles} orgID={this.props.orgID} />
      );
    }
    if (this.state.modalMarker == 'remove') {
      return (
        <FormDelete orgID={this.props.orgID}
        item={this.props.users[this.state.index]}
         />
      );
    } else {return null}
  }
  render() {
    return (
      <div className="row">
      <div className="col-md-12">
      <div className="card">
      <MyModal
      modal={this.state.modal}
      toggle={this.toggle.bind(this)}
      handleSubmit={this.handleSubmit.bind(this)}
      className={this.state.className}
      headerName={this.state.headerName}
      deleteConfirm={this.state.deleteConfirm}
      >
      {this.renderModal()}
      </MyModal>
        <div className="card-header">
        <span className="pull-left">
        <span className="fa fa-users"></span>&nbsp;
        Users&nbsp;
        </span>
        <span className="pull-right">
        <Tooltip placement="top" title="add">
        <button className="btn btn-sm btn-outline-success" onClick={this.createItem}>
        <span className="fa fa-plus"></span>
        </button>
        </Tooltip>
        </span>
        </div>
        <div className="card-body">
        <List
        data={this.props.users}
        updateItem={this.updateItem.bind(this)}
        deleteItem={this.deleteItem.bind(this)} />
        </div>
      </div>
      </div>
      </div>
    );
  }
}
