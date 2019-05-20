import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Select from 'react-select';
import cookies from 'react-cookies';

import UpdateForm from './Organization/Update/UpdateForm';
import Form from './Organization/Update/Form';
import RegNumbers from './RegNumbers/RegNumbers';
import AddressUpdateDetails from './Address/AddressUpdateDetails';
import Users from './Users/Users';
import BankAccounts from './BankAccounts/BankAccounts';
import Phones from './Phones/Phones';
import Emails from './Emails/Emails';
import Confirm from './Confirm';

const URL_COUNTRIES = '/api/countries/';
const URL_ORGANIZATIONS_UPDATE = '/organizations/update/';
const URL_ORGANIZATIONS = '/organizations/';
const URL_REG_TYPES = '/api/regtypes/?country=';
const URL_DETAILS = '/api/orgdetails/';

export default class OrganizationUpdate extends React.PureComponent {
  state = {
    data: {},
    regNums: [],
    countries: [],
    countryId: null,
    searchData: '',
    selectedOption: '',
    countrySelected: false,
    regTypes: [],
    regNumbers: {

    },
    duns: '',
    searchDisable: true
  }
  componentDidMount() {
    this.getData();
    this.getCountries();
  }
  componentWillMount() {

  }
  getData() {
    axios.get(`${URL_DETAILS}?id=${pk}`)
      .then(res => {
        let data = res.data[0];
        let regNums = res.data[0]['reg_number_set'];
        this.setState({
          data: data,
          regNums: regNums
        });
      })
  }
  getCountries() {
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
  findOrganization = () => {
    alert ('find Organization');
  }
  onChangeSearch = (e) => {
    let dis
		this.setState({ searchData: e.target.value });
    this.checkSearch() ? dis = true : dis = false;
    this.setState({ searchDisable: dis});
	}
  selectCountry = (selectedOption) => {
    if (selectedOption) {
      this.setState({ selectedOption });
      this.setState({ countrySelected: true });
      this.regTypes(selectedOption);
    } else {
      this.setState({ countrySelected: false });
    }
  }
  regTypes(selectedOption){
    let url = `${URL_REG_TYPES}${selectedOption.value.toString()}`;
    //alert(url);
    axios.get(url)
      .then(res => {
        let data = res.data;
        let regTypes = data.map(function(item, index) {
          return {name: item.name, country: item.country}
        });
        this.setState({
          regTypes: regTypes
        });
      })
  }
  checkReady() {
    let value = true;
    if ((this.state.searchData.length !== 0) && (this.state.countrySelected)) {
      value = false;
    }
    return value;
  }
  regRender() {
    if (this.state.countrySelected) {
      return (
        <RegNumbers regTypes={this.state.regTypes} />
      );
    } else {
      return (
        null
      );
    }
  }
  sendRequestUpdate() {
    var form = $('#form').closest('form');
    var data = form.serialize();
    axios({
      method: 'post',
      url: URL_ORGANIZATIONS_UPDATE,
      data: data
    }).then(res => {
      var pk = res.data.pk;
      window.location.href = `${URL_ORGANIZATIONS}${pk}`
    })
  }
  render() {
    let country = {value: this.state.data.country_id, label: this.state.data.country};
    // const { selectedOption } = this.state;
    return (
      <span>
        <form method="POST" id="form">
        <UpdateForm
        data={this.state.data}
        country={country}
        countries={this.state.countries}
        regNums={this.state.regNums}
        selectCountry={this.selectCountry.bind(this)}
        regRender={this.regRender.bind(this)} />
        <AddressUpdateDetails
        data={this.state.data}
        />
        <Users />
        <BankAccounts />

        <div className="row">
          <div className="col-md-6">
            <Phones />
          </div>
          <div className="col-md-6">
            <Emails />
          </div>
        </div>
        </form>
        <Confirm sendRequest={this.sendRequestUpdate.bind(this)}/>
        <br />
      </span>
    );
  }
}

ReactDOM.render(<OrganizationUpdate/>, document.getElementById('root'));
