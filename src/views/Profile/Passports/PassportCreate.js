import React, {PureComponent} from 'react';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

const URL_COUNTRIES = '/api/countries/';
const PHONE_TYPES = [
  { value: 'mobile', label: 'mobile' },
  { value: 'landline', label: 'landline' },
  { value: 'fax', label: 'fax' }
];


export default class PassportCreate extends PureComponent {
  state = {
    number: '',
    type: [],
    country: [],
    countries: []
  }
  componentDidMount() {
    axios.get(URL_COUNTRIES)
      .then(res => {
        let data = res.data;
        let countries = data.map(function(item, index) {
          return {value: item.id, label: item.name}
        });
        this.setState({
          countries: countries
        });
      })
  }
  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeCountry = (country) => {
    this.setState({
			country
		});
  }
  onChangeType = (type) => {
    this.setState({
			type
		});
  }
  render() {
    return (
      <form method="POST" id="passport_create">
        <div className="card-body">

        <div className="row">
        <div className="form-group col-sm-12">
          <label for="country">
          <i className="fa fa-flag"></i>&nbsp;
          Country
          </label>
          
        </div>
        </div>

        <div className="row">
        <div className="form-group col-sm-12">
          <label>Number</label>
          <div className="input-group">
            <input
            id="id_number"
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.onChange}
            className="form-control"
            placeholder="Phone Number"
            required />
          </div>
        </div>
        </div>

        <div className="row">
        <div className="form-group col-sm-12">
          <label>Phone Type</label>

        </div>
        </div>

        </div>
      </form>
    );
  }
}