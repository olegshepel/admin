import React from 'react';

export default class Confirm extends React.PureComponent {
  confirm = () => {
    this.props.sendRequest()
  }
  render() {
    return (
      <div className="row">
      <div className="col-md-12">
      <button
      type='button'
      className="btn btn-success btn-sm"
      onClick={this.confirm}
      >
      Save
      </button>
      &nbsp;
      <a href="/profile/">
      <button type='button' className="btn btn-danger btn-sm">
      Cancel
      </button>
      </a>
      </div>
      </div>
    );
  }
}
