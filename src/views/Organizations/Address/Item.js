import React from 'react';
import { Tooltip } from 'antd';
import 'antd/dist/antd.css';

export default class Item extends React.PureComponent {
  updateItem = () => {
    this.props.updateItem(this.props.index);
  }
  deleteItem = () => {
    this.props.deleteItem(this.props.index);
  }
  render() {
    return (
      <span>
      <div className="row">
      <div className="col-md-6">
      <b>{this.props.item.country}</b>,&nbsp;
      {this.props.item.postcode},&nbsp;
      {this.props.item.city},&nbsp;
      {this.props.item.street},&nbsp;
      {this.props.item.building},&nbsp;
      {this.props.item.office}&nbsp;
      ({this.props.item.address_type})
      </div>
      <div className="col-md-2">
      {this.props.item.address_type}&nbsp;
      </div>
      <div className="col-md-4">
      <span className="pull-right">
      <Tooltip placement="top" title='edit'>
      <button className="btn btn-sm btn-outline-primary" onClick={this.updateItem}>
      <span className="fa fa-pencil"></span>
      </button>&nbsp;
      </Tooltip>
      <Tooltip placement="top" title='remove'>
      <button className="btn btn-sm btn-outline-danger" onClick={this.deleteItem}>
      <span className="fa fa-trash"></span>
      </button>
      </Tooltip>
      </span>
      </div>
      </div>
      {
        (this.props.count-1)  === this.props.index ?
        <span></span> :
        <hr/>
      }
      </span>
    );
  }
}
