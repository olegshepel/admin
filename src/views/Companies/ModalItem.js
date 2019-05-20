import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import {
  Row, Col, Card, CardHeader, CardBody, FormGroup,
  Label, FormText, InputGroup, InputGroupAddon
} from 'reactstrap';

const options = [
  { value: 'ER308LSi, 1.20mm, MIG', label: 'ER308LSi, 1.20mm, MIG' },
  { value: 'ER316LSi, 1.20mm, MIG', label: 'ER316LSi, 1.20mm, MIG' },
];

export default class ModalItem extends React.PureComponent {
  state = {
    data: []
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
    var form = $('#id_form').closest('form');
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
      <span>here is a text</span>
    );
  }
}
