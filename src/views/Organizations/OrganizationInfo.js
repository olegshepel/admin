import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import cookies from 'react-cookies';

import OrganizationInfoDetails from './Organization/Info/OrganizationInfoDetails';
import RegNumbers from './RegNumbers/RegNumbers';
import Addresses from './Address/Addresses';
import Users from './Users/Users';
import BankAccounts from './BankAccounts/BankAccounts';
import Phones from './Phones/Phones';
import Emails from './Emails/Emails';

const URL_COUNTRIES = '/api/countries/';
const URL_ORGANIZATIONS = '/organizations/';
const URL_DETAILS = '/api/orgdetails/';

export default class OrganizationInfo extends React.PureComponent {
  state = {
    data: {},
    regNums: [],
    addresses: [],
    users: [],
    roles: [],
    bankAccounts: [],
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
  componentWillMount() {

  }
  componentDidMount() {
    this.getData();
    this.getCountries();
  }
  refresh() {
    this.getData();
  }
  getData() {
    axios.get(`${URL_DETAILS}?id=${pk}`)
      .then(res => {
        let data = res.data[0];
        let regNums = res.data[0]['reg_number_set'];
        let users = res.data[0]['user_set'];
        let roles = res.data[0]['role_set'];
        let addresses = res.data[0]['address_set'];
        let bankAccounts = res.data[0]['bank_account_set'];
        this.setState({
          data: data,
          regNums: regNums,
          addresses: addresses,
          users: users,
          roles: roles,
          bankAccounts: bankAccounts
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
  update() {
    window.location.href = `${URL_ORGANIZATIONS}update/${pk}`;
  }
  render() {
    return (
      <span>

        <OrganizationInfoDetails
        data={this.state.data}
        orgID={this.state.data.id}
        regNums={this.state.regNums}
        update={this.update.bind(this)}
        refresh={this.refresh.bind(this)} />

        <Addresses
        orgID={this.state.data.id}
        addresses={this.state.addresses}
        countries={this.state.countries}
        countryID={this.state.data.country_id}
        countryName={this.state.data.country}
        refresh={this.refresh.bind(this)} />

        <Users
        users={this.state.users}
        roles={this.state.roles}
        orgID={this.state.data.id}
        refresh={this.refresh.bind(this)} />

        <BankAccounts orgID={this.state.data.id}
        bankAccounts={this.state.bankAccounts}
        countries={this.state.countries}
        refresh={this.refresh.bind(this)} />

        <div className="row">
          <div className="col-md-6">
            <Phones />
          </div>
          <div className="col-md-6">
            <Emails />
          </div>
        </div>
      </span>
    );
  }
}

ReactDOM.render(<OrganizationInfo/>, document.getElementById('root'));
