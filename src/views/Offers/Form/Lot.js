import React, {Component} from 'react';

export default class Lot extends Component {

  render() {
    return (
      <span>
      <input
      hidden={true}
      id={`id_form-${this.props.index}-lot_product_name`}
      name={`form-${this.props.index}-lot_product_name`}
      value={this.props.lot.lot_product_name}
      type="text" />

      <div className="row">
      <div className="col-sm-12">
      <span className="badge badge-primary">
      {this.props.index+1}</span>&nbsp;{this.props.lot.lot_product_name}
      </div>
      </div>

      <div className="row">
      <div className="col-sm-2">
      <b>Quantity</b>
      <input
      id={`id_form-${this.props.index}-quantity`}
      name={`form-${this.props.index}-quantity`}
      className="form-control form-control-sm"
      type="text"
      defaultValue={this.props.lot.lot_quantity}
      placeholder="Quantity" />
      </div>
      <div className="col-sm-2">
      <b>Price</b>
      <input
      id={`id_form-${this.props.index}-price`}
      name={`form-${this.props.index}-price`}
      className="form-control form-control-sm"
      type="text"
      placeholder="Price" />
      </div>
      <div className="col-sm-2">
      Delivery Time
      <input
      id={`id_form-${this.props.index}-delivery_time`}
      name={`form-${this.props.index}-delivery_time`}
      className="form-control form-control-sm"
      type="text"
      placeholder="Delivery time" />
      </div>
      <div className="col-sm-3">
      Payment Condition
      <input
      id={`id_form-${this.props.index}-payment_condition`}
      name={`form-${this.props.index}-payment_condition`}
      className="form-control form-control-sm"
      type="text"
      placeholder="Payment condition" />
      </div>
      <div className="col-sm-3">
      Delivery Terms
      <input
      id={`id_form-${this.props.index}-delivery_term`}
      name={`form-${this.props.index}-delivery_term`}
      className="form-control form-control-sm"
      type="text"
      placeholder="Delivery condition" />
      </div>
      </div>

      </span>
    );
  }
}
