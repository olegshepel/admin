import React from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';

import OrganizationData from './OrganizationData';

export default class OrganizationInfoDetails extends React.PureComponent {
  update = () => {
    this.props.update()
  }
  render() {
    return (
      <div className="row">
      <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <span className="pull-left">
          <span className="fa fa-building"></span>&nbsp;
          Organization Details&nbsp;
          </span>
          <span className="pull-right">
          <button className="btn btn-outline-primary btn-sm" onClick={this.update}>
          <span className="fa fa-pencil"></span>
          </button>
          </span>
        </div>
        <div className="card-body">
        <OrganizationData
        data={this.props.data}
        regNums={this.props.regNums}
         />
        </div>
      </div>
      </div>
      </div>
    );
  }
}
