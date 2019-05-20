import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import {
  Row, Col, Card, CardHeader, CardBody, FormGroup,
  Label, FormText, InputGroup, InputGroupAddon
} from 'reactstrap';

import ModalItem from '../templates/react/ModalItem';

const options = [
  { value: 'ER308LSi, 1.20mm, MIG', label: 'ER308LSi, 1.20mm, MIG' },
  { value: 'ER316LSi, 1.20mm, MIG', label: 'ER316LSi, 1.20mm, MIG' },
];

export default class EditItem extends React.PureComponent {
  state = {
    name: '',
    barcode: '',
    tariffNumber: '',
    category: '',
    price: '',
    currency: '',
    weight: '',
    volume: '',
    length: '',
    width: '',
    height: '',
    isActive: true,
    csrftoken: '',
    currencies: [],
    barcodes: [],
    categories: [],
    tariffNumbers: [],
    showAddCategory: true,
    showAddBarcode: true
  }
  componentDidMount() {
    axios.get('/api/currencies/')
      .then(res => {
        let data = res.data;
        let currencies = data.map(function(item, index) {
          return {'value': item.id, 'label': item.name}
        });
        this.setState({
          currencies: currencies
        });
      })
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
  handleSubmit() {
    this.createItem();
  }
  createItem() {
    var self = this;
    var url = `${this.props.url}create/`;
    var form = $('#create_product').closest('form');
    function beforeSend() {
      //alert(`${this.state.currencies}`);
    }
    function created(data) {
      self.setState({
        name: '',
        barcode: '',
        tariffNumber: '',
        category: '',
        price: '',
        currency: '',
        weight: '',
        volume: '',
        length: '',
        width: '',
        height: '',
        isActive: true,
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
  saveChanges = (value) => {
    this.setState({ value });
  }
  stateCategory = (e) => {
    e.preventDefault();
    this.setState({
      showAddCategory: !this.state.showAddCategory
    });
  }
  addCategory = (e) => {
    e.preventDefault();
    this.createCategory()
  }
  createCategory(name) {
    var self = this;
    var url = '/products/category/create/';
    var data = {
      name: name
    };
    //var form = $('#create_category').closest('form');
    function beforeSend() {
    }
    function created(data) {
    }
    function notCreated(data) {
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
  stateBarcode = (e) => {
    e.preventDefault();
    this.setState({
      showAddBarcode: !this.state.showAddBarcode
    });
  }
  createBarCode = (e) => {
    e.preventDefault();
    this.createBarcode()
  }
  createBarcode(name) {
    var self = this;
    var url = '/products/barcode/create/';
    var data = {
      name: name
    };
    function beforeSend() {
    }
    function created(data) {
    }
    function notCreated(data) {
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
    return (
      <ModalItem
      object='edit'
      checkRequired={this.checkRequired.bind(this)}
      names={this.props.names}
      handleSubmit={this.handleSubmit.bind(this)}>

      <form method="POST" id="create_product">
      <div className="row">
        <div className="form-group col-sm-6">
          <label for="name">
          <i className="fa fa-tag"></i>&nbsp;
          {this.props.columnNames.name}
          </label>
          <div className="input-group">
            <input
            id="id_name"
            className="form-control"
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.state.name}
            placeholder={this.props.columnNames.name}
            required/>
          </div>
        </div>
        <div className="form-group col-sm-6">
          {this.state.tariffNumber}
          <label for="tariff_number">
          <i className="fa fa-database"></i>&nbsp;
          {this.props.columnNames.tariffNumber}
          </label>
          <Select
          id="id_tariff_number"
          name="tariff_number"
          label={this.props.columnNames.tariffNumber}
          placeholder={this.props.columnNames.tariffNumber}
          options={options}
          isClearable={true}
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col-sm-6">
          <label for="category">
          <i className="fa fa-folder-open"></i>&nbsp;
          {this.props.columnNames.category}&nbsp;

          <a>
          <span
          className="fa fa-plus text-primary"
          hidden={!this.state.showAddCategory}
          onClick={this.stateCategory}>
          </span>
          </a>

          &nbsp;
          <span hidden={this.state.showAddCategory}>
          <input className=""/>&nbsp;
          <button className="btn btn-sm btn-success"
          onClick={this.addCategory}
          >
          <span className="fa fa-check">
          </span>
          </button>&nbsp;
          <button
          className="btn btn-sm btn-danger"
          onClick={this.stateCategory}>
          <span className="fa fa-remove">
          </span>
          </button>&nbsp;
          </span>

          </label>
          <Select
          id="id_category"
          name="category"
          label={this.props.columnNames.category}
          placeholder={this.props.columnNames.category}
          options={options}
          isClearable={true}
          />
        </div>
        <div className="form-group col-sm-6">
          <label for="barcode">
          <i className="fa fa-barcode"></i>&nbsp;
          {this.props.columnNames.barcode}
          <a> <span
          className="fa fa-plus text-primary"
          onClick={this.createBarcode}>
          </span>
          </a>

          &nbsp;
          <span hidden={this.state.showAddBarcode}>
          <input className=""/>&nbsp;
          <button className="btn btn-sm btn-success"
          onClick={this.createBarcode}
          >
          <span className="fa fa-check">
          </span>
          </button>&nbsp;
          <button
          className="btn btn-sm btn-danger"
          onClick={this.stateBarcode}>
          <span className="fa fa-remove">
          </span>
          </button>&nbsp;
          </span>

          </label>
          <Select
          id="id_barcode"
          name="barcode"
          label={this.props.columnNames.barcode}
          placeholder={this.props.columnNames.barcode}
          options={options}
          isClearable={true}
          />
        </div>

      </div>

      <div className="row">
        <div className="form-group col-sm-6">
          <label for="price">
          <i className="fa fa-money"></i>&nbsp;
          {this.props.columnNames.price}
          </label>
          <div className="input-group">
            <input
            id="id_price"
            className="form-control"
            type="text"
            name="price"
            onChange={this.onChange}
            value={this.state.price}
            placeholder={this.props.columnNames.price}/>
          </div>
        </div>
        <div className="form-group col-sm-6">
          <label for="currency">
          <i className="fa fa-exchange"></i>&nbsp;
          {this.props.columnNames.currency}
          </label>
          <Select
          id="id_currency"
          name="currency"
          label={this.props.columnNames.currency}
          placeholder={this.props.columnNames.currency}
          options={this.state.currencies}
          isClearable={true}
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col-sm-12">
          <label for="description">{this.props.columnNames.description}</label>
          <div className="input-group">
            <textarea
            id="id_description"
            className="form-control"
            type="text"
            name="description"/>
          </div>
        </div>
      </div>

      <div className="row">
						<div className="form-group col-sm-2">
							<label for="weight">
              <i className="fa fa-arrow-down"></i>&nbsp;
              Weight (kg)
              </label>
							<div className="input-group">
                <input
                id="id_weight"
                className="form-control"
                type="text"
                name="weight"/>
							</div>
						</div>
						<div className="form-group col-sm-2">
              <i className="fa fa-cube"></i>&nbsp;
							<label for="volume">Volume (m3)</label>
							<div className="input-group">
                <input
                id="id_volume"
                className="form-control"
                type="text"
                name="volume"/>
							</div>
						</div>
						<div className="form-group col-sm-2">
            <i className="fa fa-arrows-h"></i>&nbsp;
							<label for="length">Length (mm)</label>
							<div className="input-group">
                <input
                id="id_length"
                className="form-control"
                type="text"
                name="length"/>
							</div>
						</div>
						<div className="form-group col-sm-2">
              <i className="fa fa-expand"></i>&nbsp;
							<label for="width">Width (mm)</label>
							<div className="input-group">
                <input
                id="id_width"
                className="form-control"
                type="text"
                name="width"/>
							</div>
						</div>
						<div className="form-group col-sm-2">
              <i className="fa fa-arrows-v"></i>&nbsp;
							<label for="height">
              Height (mm)
              </label>
							<div className="input-group">
                <input
                id="id_height"
                className="form-control"
                type="text"
                name="height"/>
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
      </form>

      </ModalItem>
    );
  }
}
