import React, {PureComponent} from 'react';
import moment from 'moment';
import axios from 'axios';
import { Select, DatePicker } from 'antd';

const dateFormat = 'YYYY-MM-DD';
const URL_CURRENCIES = '/api/currencies/';
const Option = Select.Option;

export default class Details extends PureComponent {
  state = {
    currencies: [],
    currency: [],
    validity: new Date()
  }
  componentDidMount() {
    this.getCurrencies();
  }
  getCurrencies() {
    axios.get(URL_CURRENCIES)
      .then(res => {
        let data = res.data;
        let currencies = data.map(function(item, index) {
          return {value: item.id, label: item.name}
        });
        this.setState({
          currencies: currencies
        });
      })
  }
  onChangeValidity(date) {
		this.setState({
			validity: date
		});
	}
  onChangeCurrency = (currency) => {
    this.setState({
			currency
		});
  }
  render() {
    return (
      <span>

      <div className="row">
      <div className="form-group col-sm-3">
      <b>Description</b>
      </div>
      <div className="form-group col-sm-9">
      {this.props.inquire.description}
      </div>
      </div>

      <div className="row">
      <div className="form-group col-sm-3">
      <b>Publication Date</b>
      <br/>
      <b>Deadline</b>
      </div>
      <div className="form-group col-sm-9">
      {this.props.inquire.startDate}
      <br/>
      {this.props.inquire.expireDate}
      </div>
      </div>

      <div className="row">
      <div className="form-group col-sm-3">
      <b>Contact</b>
      </div>
      <div className="form-group col-sm-9">
      {this.props.inquire.created_by_name}
      </div>
      </div>

      <div className="row">
      <div className="col-sm-4">
      <b>Delivery Time</b>
      <input
      id="id_delivery_time"
      name="delivery_time"
      className="form-control form-control-sm"
      type="text"
      placeholder="Time of Delivery" />
      </div>
      <div className="col-sm-4">
      <b>Payment Condition</b>
      <input
      id="id_payment_condition"
      name="payment_condition"
      className="form-control form-control-sm"
      type="text"
      placeholder="Payment Condition" />
      </div>
      <div className="col-sm-4">
      <b>Delivery Terms</b>
      <input
      id="id_delivery_term"
      name="delivery_term"
      className="form-control form-control-sm"
      type="text"
      placeholder="Delivery Terms" />
      </div>
      </div>

      <div className="row">
      <div className="col-sm-8">
      <b>Description</b>&nbsp;
      (All Items)
      <input
      id="id_description"
      name="description"
      className="form-control form-control-sm"
      type="text"
      placeholder="Description" />
      </div>
      <div className="col-sm-2">
      <b>Offer Validity</b>


      </div>
      </div>

      <div className="row">
      <div className="form-group col-sm-4">
        <b>Currency</b>
        

      </div>
      </div>

      </span>
    );
  }
}
