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
      <div className="col-md-3">
      {this.props.item.email}
      </div>
      <div className="col-md-3">
      {this.props.item.name} {this.props.item.surname}
      </div>
      <div className="col-md-2">
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
