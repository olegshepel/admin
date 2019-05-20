import React from 'react';
import { Tooltip } from 'antd';

export default class OrganizationPopover extends React.PureComponent {
  info = () => {
    this.props.info(this.props.id);
  }
  update = () => {
    this.props.update(this.props.id);
  }
  render() {
    return (
      <span>
      <i className="fa fa-building-o" aria-hidden="true"></i>&nbsp;
      <b>{this.props.data.name}</b>
      <br/>
      <span className="fa fa-flag"></span>&nbsp;
      ,&nbsp;postcode, city, street...
      <br/>
      <hr />
      <button className="btn btn-outline-secondary btn-sm" onClick={this.info}>
      <span className="fa fa-info"></span>&nbsp;
      Info
      </button>&nbsp;
      <button className="btn btn-outline-primary btn-sm" onClick={this.update}>
      <span className="fa fa-pencil"></span>&nbsp;
      Edit
      </button>&nbsp;
      </span>
    );
  }
}
