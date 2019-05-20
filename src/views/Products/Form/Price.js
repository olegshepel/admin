import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Input }  from 'antd';

import * as actionCreators from '../../../store/actions/products';


class Price extends Component {

  componentDidMount() {
    // this.props.fetchItems();
  }

  onChange = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-2">
        <label for="name"><i className="fa fa-money"></i>&nbsp;Price</label>
        <div className="input-group input-group-sm">
        <Input
        id="id_price"
        type="text"
        name="price"
        size="small"
        placeholder={'Price'}
        required
        onChange={this.onChange}
        value={this.props.value}
        />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.products.price
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onChange: actionCreators.setProductForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Price);
