import React, { Component } from 'react';
import { Select }  from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as selectAnt from '../../Common/Select/OptionAnt';
import { fetchBarcodes } from '../../../store/actions/barcodes';

import * as actionCreators from '../../../store/actions/products';


class Barcode extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  onChange = (value, e) => {
    if ( value === undefined) {
      value = {key: '', label: ''}
    }
    this.props.onChange({ barcode: value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-4">
        <label for="barcode"><i className="fa fa-barcode"></i>&nbsp;Barcode<a>&nbsp;
        <span className="fa fa-plus text-primary" onClick={this.createBarcode}>
        </span>
        </a>
        </label>
        <input id="id_barcode" name="barcode" value={this.props.value.key} hidden={true}/>
        <Select
        id="id_barcode"
        name="barcode"
        size="small"
        allowClear={true}
        showSearch={true}
        labelInValue={true}
        optionFilterProp="options"
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
    options: state.barcodes.data,
    value: state.products.barcode
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchItems: fetchBarcodes,
      onChange: actionCreators.setProductForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Barcode);
