import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Tag }  from 'antd';


class Lot extends Component {

  onChange(event) {
    var string = event.target.name.toString();
    var index = this.props.index.toString().length;
    var name = string.slice(6+index);
    name = 'lot_' + name;
    var value = event.target.value;
    this.props.onChange(name, value, this.props.index);
  }

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
      <div className="col-sm-10">
      <b style={{ color: 'blue' }}>
      {this.props.index+1}.&nbsp;{this.props.lot.lot_product_name}
      </b>
      </div>
      <div className="col-sm-2">
      <span className="pull-right">
      <Tag color="blue">
      {this.props.lot.lot_requested_quantity}&nbsp;
      {this.props.lot.lot_unit}
      </Tag>
      </span>
      </div>
      </div>

      <div className="row">
      <div className="col-sm-2">
      Delivery Time
      <Input
      id={`id_form-${this.props.index}-delivery_time`}
      name={`form-${this.props.index}-delivery_time`}
      size="small"
      placeholder={'Delivery time'}
      value={this.props.lot.lot_delivery_time}
      onChange={this.onChange.bind(this)} />
      </div>

      <div className="col-sm-2">
      Delivery Terms
      <Input
      id={`id_form-${this.props.index}-delivery_term`}
      name={`form-${this.props.index}-delivery_term`}
      size="small"
      placeholder={'Delivery condition'}
      value={this.props.lot.lot_delivery_term}
      onChange={this.onChange.bind(this)} />
      </div>

      <div className="col-sm-2">
      Payment Condition
      <Input
      id={`id_form-${this.props.index}-payment_condition`}
      name={`form-${this.props.index}-payment_condition`}
      size="small"
      placeholder={'Payment condition'}
      value={this.props.lot.lot_payment_condition}
      onChange={this.onChange.bind(this)} />
      </div>

      <div className="col-sm-2">
      Description
      <Input
      id={`id_form-${this.props.index}-description`}
      name={`form-${this.props.index}-description`}
      size="small"
      placeholder={'Description'}
      value={this.props.lot.lot_description}
      onChange={this.onChange.bind(this)} />
      </div>

      <div className="col-sm-2">
      Price
      <Input
      id={`id_form-${this.props.index}-price`}
      name={`form-${this.props.index}-price`}
      size="small"
      placeholder={'Price'}
      value={this.props.lot.lot_price}
      onChange={this.onChange.bind(this)} />
      </div>

      <div className="col-sm-2">
      Quantity
      <Input
      id={`id_form-${this.props.index}-quantity`}
      name={`form-${this.props.index}-quantity`}
      size="small"
      placeholder={'Quantity'}
      value={this.props.lot.lot_quantity}
      onChange={this.onChange.bind(this)} />
      </div>
      </div>

      </span>
    );
  }
}

export default Lot;
