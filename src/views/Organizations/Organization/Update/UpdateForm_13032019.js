import React from 'react';
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
import 'antd/dist/antd.css';
import Select from 'react-select';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';
//const URL_DETAILS = '/api/orgdetails/';

export default class UpdateForm extends React.PureComponent {
  state = {
    name: this.props.data.name,
    regDate: new Date(),
    country: [],
    intername: '',
    nameShort: '',
    isVat: false,
    vatNumber: '',
    duns: '',
    website: ''
  }
  componentWillMount() {

  }
  componentDidMount() {
    
  }
  componentDidMount(state, props) {
    this.setState((state, props) => ({
      // name: this.props.data.name,
      intername: this.props.data.intername,
      nameShort: this.props.data.name_short,
      regDate: this.props.data.reg_date,
      vatNumber: this.props.data.vat_number,
      duns: this.props.data.duns,
      website: this.props.data.website,
      country: {value: this.props.data.country_id, label: this.props.data.country}
    }));
  }
  findOrganization = () => {
    alert ('find Organization');
  }
  handleClick = () => {
    this.setState({
      isVat: !this.state.isVat
    });
  }
  onChangeDate(date) {
		this.setState({
			regDate: date
		});
	}
  onChangeCountry = (country) => {
    this.props.selectCountry(country);
    this.setState({
			country
		});
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="row">
      <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <span className="pull-left">
          Organization Details&nbsp;
          </span>
          <span className="pull-right">
          </span>
        </div>
        <div className="card-body">
        <span>

        <div className="row">
        <div className="col-lg-6 col-sm-6">
          <label for="name">
          Name {this.state.name}
          </label>
          <div className="input-group">
            <input
            id="id_name"
            name="name"
            className="form-control"
            type="text"
            value={this.state.name}
            onChange={this.onChange}
            placeholder="Company Name"/>
          </div>
        </div>
        <div className="col-sm-3">
          <label for="id_reg_date">Registration Date</label>
          <div className="input-group">
          <DatePickerInput
          //small={true}
          id="id_reg_date"
          name="reg_date"
          onChange={this.onChangeDate.bind(this)}
          value={moment(this.state.regDate).format(dateFormat)}
          />
        </div>
        </div>

        <div className="col-lg-3 col-md-3">
           <label for="country">
           <i className="fa fa-flag"></i>&nbsp;
           Country
           </label>
           <Select
           id="id_country"
           name="country"
           value={this.state.country}
           options={this.props.countries}
           onChange={this.onChangeCountry}
           isClearable={true}
           isSearchable={true}
           />
        </div>
        </div>

        <div className="row">
        <div className="col-lg-4 col-sm-4">
          <label for="name">
          International Name
          </label>
          <div className="input-group input-group-sm">
          <input
          id="id_intername"
          name="intername"
          className="form-control form-control-sm"
          type="text"
          value={this.state.intername}
          onChange={this.onChange}
          placeholder="International Name (english)"/>
          </div>
        </div>
        <div className="col-lg-2 col-sm-2">
        <label for="name_short">
        Short Name
        </label>
        <div className="input-group input-group-sm">
          <input
          id="id_name_short"
          name="name_short"
          className="form-control form-control-sm"
          type="text"
          value={this.state.nameShort}
          onChange={this.onChange}
          placeholder="Short Name"/>
        </div>
        </div>
        <div className="col-sm-3">
          VAT&nbsp;
          <label className="switch switch-sm switch-text switch-default switch-success">
            <input
            id="id_vat"
            name="vat"
            className="switch-input switch-input-sm"
            type="checkbox"
            value={this.state.isVat}
            checked={this.state.isVat}
            onClick={this.handleClick} />
            <span className="switch-label" data-on="yes" data-off="no"></span>
            <span className="switch-handle"></span>
          </label>
          <div className="input-group input-group-sm" hidden={!this.state.isVat}>
            <input
            id="id_vat_number"
            name="vat_number"
            value={this.state.vatNumber}
            onChange={this.onChange}
            className="form-control form-control-sm"
            type="text"
            placeholder="VAT Number"/>
          </div>
        </div>

        </div>
        <hr />
        {this.props.regRender()}

        </span>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
