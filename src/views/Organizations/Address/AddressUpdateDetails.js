import React from 'react';

import AddressForm from './AddressForm';

export default class AddressUpdateDetails extends React.PureComponent {
  create(e) {
    e.preventDefault()
    alert ('create address');
  }
  render() {
    return (
      <div className="row">
      <div className="col-md-12">
      <div className="row">
      <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <span className="pull-left">
          Address
          </span>

          <span className="pull-right">
          <button className="btn btn-sm btn-outline-success" onClick={this.create}>
          <span className="fa fa-plus"></span>
          </button>

          </span>
        </div>
        <div className="card-body">
        <AddressForm
        data={this.props.data}
        />
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
