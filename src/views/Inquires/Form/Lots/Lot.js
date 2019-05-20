import React, {Component} from 'react';
import { Select, Button, Tooltip, Input, Menu } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as selectAnt from '../../../Common/Select/OptionAnt';


class Lot extends Component {
  state = {
    product: [{key: '', label: ''}],
    quantity: null,
    unit: '',
    visiblePopover: false
  }
  componentDidMount() {
    this.setState({
      product: {key: this.props.lot.lot_product_id, label: this.props.lot.lot_product_name},
      quantity: this.props.lot.lot_quantity,
      unit: this.props.lot.lot_unit
    });
  }
  addBelow = (e) => {
    e.preventDefault();
    this.props.addBelow();
  }
  removeLot = (e) => {
    e.preventDefault();
    this.props.removeNode(this.props.nodeId);
  }
  upLot = (e) => {
    e.preventDefault();
    this.props.upNode(this.props.index);
  }
  downLot = (e) => {
    e.preventDefault();
    this.props.downNode(this.props.index);
  }
  onChangeProduct(product) {
    let newProduct;
    let unit = '';
    if ( product === undefined ) {
      newProduct = {key: '', label: ''};
      unit = '';
    } else {
      newProduct = {key: product.key, label: product.label};
      for (let i=0; i<this.props.productsFull.length; i++) {
        if (this.props.productsFull[i].value.toString() === product.key.toString()) {
          unit = this.props.productsFull[i].unit;
        }
      }
    }
    this.setState({
			product: newProduct,
      unit: unit
		});
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeQuantity(event) {
    this.setState({
      quantity: event.target.value
    });
  }

  handleBlur() {
    console.log('blur');
  }

  handleFocus() {
    console.log('focus');
  }

  render() {

    const menu = (
      <Menu>
      <Menu.Item key="0"><a href="">mm</a></Menu.Item>
      <Menu.Item key="1"><a href="">kg</a></Menu.Item>
      <Menu.Item key="3">m3</Menu.Item>
      </Menu>
    );

    return (
      <div>
          <div className="row">
              <div className="form-group form-group-sm col-sm-7">
                <input
                id={`id_form-${this.props.index}-product`}
                name={`form-${this.props.index}-product`}
                hidden={true}
                value={this.state.product.key} />

                <Select
                // id={`id_form-${this.props.index}-product`}
                // name={`form-${this.props.index}-product`}
                allowClear={true}
                showSearch={true}
                suffixIcon={this.props.index+1}
                labelInValue={true}
                // showArrow={false}
                size={"small"}
                placeholder="Select a product"
                optionFilterProp="options"
                value={this.state.product}
                onChange={this.onChangeProduct.bind(this)}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                {selectAnt.options(this.props.products)}
                </Select>

               </div>

            <div className="form-group form-group-sm col-sm-2">
              <div className="input-group input-group-sm">
              <Input
              id={`id_form-${this.props.index}-quantity`}
              name={`form-${this.props.index}-quantity`}
              // type="number"
              // step="any"
              placeholder={'Quantity'}
              size="small"
              onChange={this.onChangeQuantity.bind(this)}
              value={this.state.quantity}
              />
             </div>
            </div>

            <div className="form-group form-group-sm col-sm-1">
              <div className="input-group input-group-sm">
              <span>{this.state.unit}</span>
             </div>
            </div>

            <div className="form-group form-group-sm col-sm-1">
              <div className="input-group input-group-sm">
              {
                ( this.props.length-1 === this.props.index ) ?
                null :
                <Button
                type="secondary"
                size="small"
                onClick={this.downLot}
                >
                &darr;
                </Button>
              }
              {
                ( this.props.length-1 === this.props.index ) ?
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> :
                <span>&nbsp;</span>
              }
              {
                ( 0 === this.props.index ) ?
                null :
                <Button
                type="secondary"
                size="small"
                onClick={this.upLot}
                >
                &uarr;
                </Button>
              }
              </div>
            </div>

            <div className="form-group form-group-sm col-sm-1">
             <div className="input-group input-group-sm">
             <span className="pull-right">
             {
               this.props.displayRemoveButton ?
                 <Tooltip placement="left" title={'Remove'}>
                 <Button
                 type="danger"
                 size="small"
                 onClick={this.removeLot}>
                 &times;
                 </Button>&nbsp;
                 </Tooltip>
                 : null
             }
             {
               ( this.props.length-1 === this.props.index ) ?
                 <Tooltip placement="right" title={'Add'}>
                 <Button
                 type="primary"
                 size="small"
                 onClick={this.addBelow}>
                 +
                 </Button>
                 </Tooltip>
                 : null
             }
             </span>
            </div>
         </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps)(Lot);
