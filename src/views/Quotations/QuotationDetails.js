import React from 'react';
import { Tooltip, Tag, Icon, Button } from 'antd';
import moment from 'moment';

const DateTimeFormat = "YYYY-MM-DD HH:mm";

class QuotationDetails extends React.PureComponent {
  createItem = () => {
    this.props.createItem(this.props.id);
  }
  updateItem = () => {
    this.props.updateItem(this.props.id);
  }
  message = () => {
    alert('send message');
  }
  render() {
    var lots = this.props.data.lots.map(function(item, index) {
      let lotName = item.lot_product_name;
      let newLotName;
      if (lotName.length > 50) {
        newLotName = lotName.substring(0, 70);
        newLotName = newLotName + '...';
      } else {
        newLotName = item.lot_product_name;
      }
      return (
        <span>
        <span className="badge badge-primary">
        {index+1}</span>&nbsp;{newLotName}
        <span className="pull-right">
        &nbsp;&nbsp;&nbsp;<b>{item.lot_requested_quantity}&nbsp;{item.lot_unit}</b>
        </span>
        <br/>
        </span>
      );
    });
    return (
      <span>
      <b>Inquire # {this.props.data.id}</b>&nbsp;
      {
        this.props.data.is_offered ?
        <Tag color="green">offer is done</Tag> :
        null
      }
      <br />
      <b>Description:</b> {this.props.data.description}&nbsp;
      <br />
      <b>Organizer</b>: {this.props.data.organization}&nbsp;
      <span className="fa fa-flag"></span>&nbsp;
      {this.props.data.country},&nbsp;postcode, city, street...
      <br/>
      <b>Created By:</b>&nbsp;{this.props.data.created_by_name}
      <br />
      <b>Publication Date:</b>&nbsp;{moment(this.props.data.startDate).format(DateTimeFormat)}
      <br />
      <b>Deadline:</b>&nbsp;{moment(this.props.data.expireDate).format(DateTimeFormat)}
      {
        lots.length !== 0 ?
        <hr /> :
        null
      }
      {lots}
      <hr hidden={true}/>
      {
        this.props.data.is_offered ?
        <button className="btn btn-outline-primary btn-sm" onClick={this.updateItem} hidden={true}>
        <span className="fa fa-pencil"></span>&nbsp;
        Update Offer
        </button> :
        <button className="btn btn-outline-primary btn-sm" onClick={this.createItem} hidden={true}>
        <span className="fa fa-pencil"></span>&nbsp;
        Create an Offer
        </button>
      }
      </span>
    );
  }
}

export default QuotationDetails;
