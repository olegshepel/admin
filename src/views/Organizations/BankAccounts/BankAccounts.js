import React from 'react';
import axios from 'axios';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css';

import Form from './Form';
import FormDelete from './FormDelete';
import Item from './Item';
import MyModal from '../../templates/react/modal/MyModal';

const URL_ADD = '/organizations/bankaccounts/create/';
const URL_UPDATE = '/organizations/bankaccounts/update/';
const URL_DELETE = '/organizations/bankaccounts/delete/';

export default class BankAccounts extends React.PureComponent {
  state = {
    modal: false,
    size: 'lg',
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
    if (this.state.modalMarker == 'delete') {this.sendRequestDelete(this.state.index);}
    else {return null}
  }
  createItem = () => {this.setParams('create', 'Create Bank Account', false);}
  updateItem(index) {this.setParams('update', `Edit Bank Account`, false, index);}
  deleteItem(index) {this.setParams('delete', `Delete Bank Account`, true, index);}
  setParams(modalMarker, headerName, deleteConfirm, index=0, size='lg') {
    let pk = 0;
    if (modalMarker !== 'create') {pk = this.props.bankAccounts[index]['pk'];}
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
      url: URL_DELETE,
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
        <Form
        orgID={this.props.orgID}
        countries={this.props.countries}
        countryID={this.props.countryID}
        countryName={this.props.countryName} />
      );
    }
    if (this.state.modalMarker == 'delete') {
      return (
        <FormDelete orgID={this.props.orgID}
        item={this.props.bankAccounts[this.state.index]}
         />
      );
    } else {return null}
  }
  render() {
    var items = this.props.bankAccounts;
    var list = items.map((item, index) =>
      <Item
      item={item}
      key={index}
      index={index}
      count={items.length}
      updateItem={this.updateItem.bind(this)}
      deleteItem={this.deleteItem.bind(this)} />
    );
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
      size={this.state.size}
      >
      {this.renderModal()}
      </MyModal>
        <div className="card-header">
        <span className="pull-left">
        <span className="fa fa-bank"></span>&nbsp;
        Bank Accounts&nbsp;
        </span>
        <span className="pull-right">
        <Tooltip placement="top" title="create">
        <button className="btn btn-sm btn-outline-success" onClick={this.createItem}>
        <span className="fa fa-plus"></span>
        </button>
        </Tooltip>
        </span>
        </div>
        <div className="card-body">

        <div className="row">
        <div className="col-md-4">
        <b>Account</b>
        </div>
        <div className="col-md-5">
        <b>Bank Name</b>
        </div>
        <div className="col-md-2">
        <b>SWIFT</b>
        </div>
        <div className="col-md-1">
        </div>
        </div>
        <hr />
        {list}
        </div>
      </div>
      </div>
      </div>
    );
  }
}