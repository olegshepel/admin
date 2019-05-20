import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OrganizationCreateDetails from './Organization/Create/OrganizationCreateDetails';
import RegNumbers from './RegNumbers/RegNumbers';
import AddressCreateDetails from './Address/AddressCreateDetails';
import Confirm from './Confirm';


class CreateOrganization extends Component {
  preventDefault(e) {
    e.preventDefault();
  }
  render() {
    return (
      <span>
      <form method="POST" id="form" onSubmit={this.preventDefault}>
      <OrganizationCreateDetails />
      <AddressCreateDetails />
      </form>
      <Confirm />
      <br />
      </span>
    );
  }
}

function mapStateToProps(state) {

}

function matchDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, matchDispatchToProps)(CreateOrganization);
