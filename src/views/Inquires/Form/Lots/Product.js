import React, { Component } from 'react';
import { Select }  from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as selectAnt from '../../Common/Select/OptionAnt';
import { fetchCategories } from '../../../store/actions/productCategories';

import * as actionCreators from '../../../store/actions/products';


class Category extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  onChange = (value, e) => {
    if ( value === undefined) {
      value = {key: '', label: ''}
    }
    this.props.onChange({ category: value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-4">
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    options: state.inquires.products,
    value: state.inquires.product
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchItems: fetchProducts,
      //onChange: actionCreators.setProductForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
