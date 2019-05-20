import React, { Component } from 'react';
import { Select }  from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as selectAnt from '../../Common/Select/OptionAnt';
import { fetchMeasurement } from '../../../store/actions/measurement';

import * as actionCreators from '../../../store/actions/products';


class UnitDefault extends Component {

  onChange = (value, e) => {
    if ( value === undefined) {
      value = []
    }
    this.props.onChange({ unit: value });
  }

  render() {
    var units = [];
    for (let i=0; i<this.props.fullOptions.length; i++) {
      if (this.props.fullOptions[i].id.toString() === this.props.sysm.key.toString()) {
        units = this.props.fullOptions[i].units;
      }
    }
    var options = [];
    for (let i=0; i<units.length; i++) {
      options.push({value: units[i].unit_id, label: units[i].unit_name});
    }
    return (
      <div className="form-group form-group-sm col-sm-2">
        <label for="unit_by_default">Unit by default&nbsp;</label>
        <input id="id_unit_by_default" name="unit_by_default" value={this.props.value.key} hidden={true}/>
        <Select
        id="id_unit_by_default"
        name="unit_by_default"
        allowClear={true}
        showSearch={true}
        optionFilterProp="options"
        labelInValue={true}
        size="small"
        value={this.props.value}
        onChange={this.onChange}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
        {selectAnt.options(options)}
        </Select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sysm: state.products.sysm,
    value: state.products.unit,

    fullOptions: state.sysm.fullData
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchItems: fetchMeasurement,
      onChange: actionCreators.setProductForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(UnitDefault);
