import React from 'react';

export default class ItemAction extends React.PureComponent {
  render() {
    let actions = {
      actions: 'actions',
      createInquire: 'create an inquire',
      offerToCustomer: 'offer to customer'
    };
    if (this.props.actions) {
      actions.actions = this.props.actions.actions;
      actions.createInquire = this.props.actions.createInquire;
      actions.offerToCustomer = this.props.actions.offerToCustomer;
    }
    return (
      <div className="btn-group btn-group-sm dropdown">
        <button
        type="button"
        className="btn btn-sm dropdown-toggle btn-outline-primary"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
          {actions.actions}
        </button>
        <div className="dropdown-menu">
        <a className="dropdown-item" href="#">{actions.createInquire}</a>
        <a className="dropdown-item" href="#">{actions.offerToCustomer}</a>
        </div>
      </div>
    );
  }
}
