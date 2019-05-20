import React, { Component } from 'react';
import { Select }  from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as selectAnt from '../../Common/Select/OptionAnt';
import { fetchCurrencies } from '../../../store/actions/currencies';

import * as actionCreators from '../../../store/actions/quotations';


class Currency extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  onChange = (value, e) => {
    // alert(JSON.stringify(value))
    if ( value === undefined) {
      value = {key: '', label: ''}
    }
    this.props.onChange({ currency: value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-2">
        <label for="currency">Currency&nbsp;</label>
        <input id="id_currency" name="currency" value={this.props.value.key} hidden={true}/>
        <Select
        id="id_currency"
        name="currency"
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
    options: state.currencies.data,
    value: state.quotations.currency
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchItems: fetchCurrencies,
      onChange: actionCreators.setQuotationForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Currency);
