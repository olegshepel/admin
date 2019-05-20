import React from 'react';

export default class QuotationAction extends React.PureComponent {
  createOffer = () => {
    this.props.createOffer(this.props.id);
  }
  render() {
    let actions = {
      actions: 'actions',
      createOffer: 'create an offer',
      followQuotation: 'follow this quotation'
    };
    if (this.props.actions) {
      actions.actions = this.props.actions.actions;
      actions.createInquire = this.props.actions.createInquire;
      actions.offerToCustomer = this.props.actions.offerToCustomer;
    }
    return (
      <span className="pull-right">
      <div className="btn-group btn-group-sm dropdown">
        <button
        type="button"
        className="btn btn-sm dropdown-toggle btn-outline-primary"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        </button>
        <div className="dropdown-menu">
        <a className="dropdown-item" href="#" onClick={this.createOffer}>
        {actions.createOffer}
        </a>
        </div>
      </div>
      </span>
    );
  }
}
