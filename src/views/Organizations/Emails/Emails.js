import React from 'react';

export default class Emails extends React.PureComponent {
  create(e) {
    e.preventDefault()
    alert ('create');
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="pull-left">
          <span className="fa fa-envelope"></span>&nbsp;
          Emails
          </span>

          <span className="pull-right">
          <button className="btn btn-sm btn-outline-success" onClick={this.create}>
          <span className="fa fa-plus"></span>
          </button>

          </span>
        </div>
        <div className="card-body">

        </div>
      </div>
    );
  }
}
