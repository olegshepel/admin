import React, {PureComponent} from 'react';
import axios from 'axios';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css'

export default class PassportItem extends PureComponent {
  updateItem = () => {
    this.props.updateItem(this.props.index);
  }
  deleteItem = () => {
    this.props.deleteItem(this.props.index);
  }
  render() {
    return (
      <span>
      {this.props.item.number}
      <span className="pull-right">
      <Tooltip placement="top" title='edit'>
      <button className="btn btn-sm btn-outline-primary" onClick={this.updateItem}>
      <span className="fa fa-pencil"></span>
      </button>&nbsp;
      </Tooltip>
      <Tooltip placement="top" title='delete'>
      <button className="btn btn-sm btn-outline-danger" onClick={this.deleteItem}>
      <span className="fa fa-trash"></span>
      </button>
      </Tooltip>
      </span>
      {
        (this.props.count-1)  === this.props.index ?
        <span></span> :
        <hr/>
      }
      </span>
    );
  }
}
