import React, { Component } from 'react';
import { Tooltip, Tag, Popover } from 'antd';
import moment from 'moment';

const DateTimeFormat = "YYYY-MM-DD";

class InquirePopover extends Component {
  info = () => {
    this.props.infoItem(this.props.id);
  }
  copy = () => {
    this.props.copyItem(this.props.id);
  }
  update = () => {
    this.props.updateItem(this.props.id);
  }
  delete = () => {
    this.props.deleteItem(this.props.id);
  }
  message = () => {
    alert('send message');
  }
  groups() {
    var listNodes = this.props.data.groups.map((listItem, index) =>
      <Tag>{listItem.label}</Tag>
    );
    return (
      <span>
      {listNodes}
      </span>
    );
  }
  render() {
    var lots = this.props.data.lots.map(function(item, index) {
      return (
        <span>
        <span className="badge badge-primary">
        {index+1}</span>&nbsp;{item.lot_product_name}
        <span className="pull-right">&nbsp;&nbsp;&nbsp;<b>{item.lot_quantity} kg</b></span>
        <br/>
        </span>
      );
    });
    return (
      <span>
      <b><u>Inquire # {this.props.data.id}</u></b>: {this.props.data.description}&nbsp;
      <br />
      <b>Created by:</b> {this.props.data.created_by_name}&nbsp;
      <br />
      <b>Publication Date:</b> {moment(this.props.data.startDate).format(DateTimeFormat)}&nbsp;
      <br />
      <b>Expire Date:</b> {moment(this.props.data.expireDate).format(DateTimeFormat)}&nbsp;
      <br />
      <b>Participation Groups:</b> {this.groups()}&nbsp;
      <br />
      <b>Documents:</b>&nbsp;
      {
        lots.length !== 0 ?
        <hr /> :
        null
      }
      {lots}
      </span>
    );
  }
}

export default InquirePopover;
