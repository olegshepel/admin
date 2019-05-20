import React from 'react';
import { Tag, Tooltip } from 'antd';
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
      <div className="col-md-4">
      {this.props.item.account}
      <span className="pull-right">
      <Tag>
      {this.props.item.currency_name}
      </Tag>
      </span>
      </div>
      <div className="col-md-5">
      {this.props.item.bank_name}
      <span className="pull-right">
      <Tag>
      {this.props.item.bank_country_name_short}
      </Tag>
      </span>
      </div>
      <div className="col-md-2">
      {this.props.item.bank_swift}
      </div>
      <div className="col-md-1">
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
