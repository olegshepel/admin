import React from 'react';

export default class ContactAction extends React.PureComponent {
  render() {
    let actions = {
      actions: 'actions',
      createInquire: 'create an inquire',
      offerToCustomer: 'offer to customer'
    };
    if (this.props.actions) {
      actions.actions = this.props.actions.actions;
      actions.email = this.props.actions.email;
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
        <a className="dropdown-item" href="#">{actions.email}</a>
        </div>
      </div>
    );
  }
}
