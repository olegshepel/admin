import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import {
  Row, Col, Card, CardHeader, CardBody, FormGroup,
  Label, FormText, InputGroup, InputGroupAddon
} from 'reactstrap';
import { ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CreateItem extends React.Component {
  state = {
    email: '',
    name: '',
    surname: '',
    isActive: false,
    modal: false,
    csrftoken: ''
  }
  toggle = () => {
    this.props.toggle();
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  checkRequired() {
    if (this.state.name != '') {
      return true
    } else {
      return false
    }
  }
  handleSubmit = () => {
    if (this.checkRequired()) {
      this.props.toggle();
      this.createItem();
    } else {
      return false
    }
  }
  createItem() {
    var self = this;
    var url = `${this.props.url}add/`;
    var form = $('#create_item').closest('form');
    function beforeSend() {
      //alert(`${this.state.currencies}`);
    }
    function created(data) {
      self.setState({
        email: '',
        name: '',
        surname: '',
        isActive: false,
        modal: false,
        csrftoken: ''
      });
      self.props.refresh();
    }
    function notCreated(data) {
      alert(data);
    }
    $.ajax ({
      url: url,
      type: "POST",
      data: form.serialize(),
      dataType: "json",
      beforeSend: beforeSend,
      success: created,
      error: notCreated
    });
  }

  render() {
    const options = [
      { value: 'admin', label: 'Admin' },
      { value: 'bookkeaper', label: 'Bookkeaper' },
      { value: 'procurement', label: 'Procurement' }
    ];
    return (
      <span>
      <ModalHeader toggle={this.toggle}>{this.props.names.new} {this.props.names.itemName}</ModalHeader>
      <ModalBody>
      <form method="POST" id="create_item">

          <div className="card-body">
          <div className="row">
            <div className="form-group col-sm-6">
              <label for name="email">
              <i className="fa fa-at"></i>&nbsp;
              Email</label>
              <div className="input-group">
                <input
                id="id_email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                className="form-control"
                placeholder="E-Mail"
                required />
              </div>
            </div>
            <div className="form-group col-sm-2">
              <label for="id_is_active"><span>Active</span></label>
              <div className="input-group">
                <label className="switch switch-text switch-default switch-success">
                  <input
                  id="id_is_active"
                  name="is_active"
                  className="switch-input"
                  type="checkbox"
                  value={this.state.isActive}
                  defaultChecked={true}
                  onClick={this.handleClick}/>
                  <span className="switch-label" data-on="yes" data-off="no"></span>
                  <span className="switch-handle"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label>Name</label>
              <div className="input-group">
                <input
                id="id_name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                className="form-control"
                placeholder="Name"
                required />
              </div>
            </div>
            <div className="form-group col-sm-6">
              <label>Surname</label>
              <div className="input-group">
                <input
                id="id_surname"
                type="text"
                name="surname"
                value={this.state.surname}
                onChange={this.onChange}
                className="form-control"
                placeholder="Surname"
                required />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="form-group col-sm-6">
            <label>Permissions</label>
            <Select
            isMulti
            name="permissions"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            />
            </div>
          </div>
        </div>
        </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-success btn-sm" type="button" onClick={this.handleSubmit}>{this.props.names.save}</button>
          <button className="btn btn-danger btn-sm" type="button" onClick={this.toggle}>{this.props.names.cancel}</button>
        </ModalFooter>
      </span>
    );
  }
}
