import React, { Component } from 'react';
import { Select }  from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as selectAnt from '../../Common/Select/OptionAnt';
import { fetchMeasurement } from '../../../store/actions/measurement';

import * as actionCreators from '../../../store/actions/products';


class Sysm extends Component {

  componentDidMount() {
    this.props.fetchItems();
    /*
    if (this.props.modalMarker === actionTypes.CREATE) {
      this.props.onChange({ sysm: this.props.valueDefault });
    }
    */
  }

  onChange = (value, e) => {
    if ( value === undefined) {
      value = [];
      this.props.onChange({ unit: [] });
    }
    this.props.onChange({ sysm: value });
    this.props.onChange({ unit: [] });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-2">
        <label for="sysm">System&nbsp;</label>
        <input id="id_system_measurement" name="system_measurement" value={this.props.value.key} hidden={true}/>
        <Select
        id="id_system_measurement"
        name="system_measurement"
        allowClear={true}
        showSearch={true}
        optionFilterProp="options"
        labelInValue={true}
        size="small"
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
    options: state.sysm.data,
    value: state.products.sysm,
    // valueDefault: state.sysm.valueDefault,
    // modalMarker: state.products.modalMarker
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
export default connect(mapStateToProps, mapDispatchToProps)(Sysm);
