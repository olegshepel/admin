import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';

import ModalItem from '../templates/react/ModalItem';

export default class CreateItem extends React.Component {
  state = {
    email: '',
    name: '',
    surname: '',
    isActive: false,
    modal: false,
    csrftoken: ''
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  handleSubmit() {
    this.props.create();
  }
  render() {
    const options = [
      { value: 'admin', label: 'Admin' },
      { value: 'bookkeaper', label: 'Bookkeaper' },
      { value: 'procurement', label: 'Procurement' }
    ];
    return (
      <ModalItem names={this.props.names} handleSubmit={this.handleSubmit.bind(this)}>
      <form method="POST" id="create_item">

          <div className="card-body">
          <div className="row">
            <div className="form-group col-sm-6">
              <label >Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-at"></i></span>
                </div>
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
            <div className="form-group col-sm-6">
              <label>Status</label>
              <div className="form-check checkbox">
                <input
                id="id_active"
                name="active"
                className="form-check-input"
                type="checkbox"
                defaultChecked={this.state.isActive}
                onClick={this.handleClick}/>
                <label className="form-check-label">
                  Is Active
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
      </ModalItem>
    );
  }
}
