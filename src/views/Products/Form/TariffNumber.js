import React, { Component } from 'react';
import { Select }  from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as selectAnt from '../../Common/Select/OptionAnt';
import { fetchTarics } from '../../../store/actions/tarics';

import * as actionCreators from '../../../store/actions/products';


class TariffNumber extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  onChange = (value, e) => {
    if ( value === undefined) {
      value = {key: '', label: ''}
    }
    this.props.onChange({ tariffNumber: value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-6">
        <label for="tariff_number"><i className="fa fa-database"></i>&nbsp;Tariff Number</label>
        <input id="id_tariff_number" name="tariff_number" value={this.props.value.key} hidden={true}/>
        <Select
        id="id_tariff_number"
        name="tariff_number"
        size="small"
        allowClear={true}
        showSearch={true}
        optionFilterProp="options"
        // defaultValue
        // key
        value={this.props.value}
        labelInValue={true}
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
    options: state.tarics.data,
    value: state.products.tariffNumber
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchItems: fetchTarics,
      onChange: actionCreators.setProductForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(TariffNumber);
