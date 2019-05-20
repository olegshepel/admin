import React, { Component } from 'react';
import { Tooltip, Tag } from 'antd';

class OfferDetails extends Component {
  show = () => {
    this.props.show(this.props.id);
  }
  message = () => {
    alert('send message');
  }
  render() {
    var lots = this.props.data.inquire_lots.map(function(item, index) {
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
      <b>Quotation # {this.props.data.id}</b>&nbsp;
      <br />
      <b>Description:</b> {this.props.data.description}&nbsp;
      <br />
      <b>Organizer</b>: {this.props.data.organization}&nbsp;
      <span className="fa fa-flag"></span>&nbsp;
      {this.props.data.country},&nbsp;postcode, city, street...
      <br/>
      <b>Created By:</b>&nbsp;{this.props.data.person_responsible}
      <button className="btn btn-outline-primary btn-sm" onClick={this.message}>
      <span className="fa fa-comments"></span>
      </button>
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

export default OfferDetails;
