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
      <div className="form-group form-group-sm col-sm-6">
        <label for="category">
        <i className="fa fa-folder-open"></i>&nbsp;
        Category&nbsp;
        <a><span className="fa fa-plus text-primary"></span>
        </a>
        </label>
        <input id="id_category" name="category" value={this.props.value.key} hidden={true} />
        <Select
        id="id_category"
        name="category"
        size="small"
        allowClear={true}
        showSearch={true}
        optionFilterProp="options"
        labelInValue={true}
        value={this.props.value}
        onChange={this.onChange}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
        {selectAnt.options(this.props.options)}
        </Select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    options: state.productCategories.data,
    value: state.products.category
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchItems: fetchCategories,
      onChange: actionCreators.setProductForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Category);
