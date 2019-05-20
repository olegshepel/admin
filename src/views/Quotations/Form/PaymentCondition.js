import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Input }  from 'antd';

import * as actionCreators from '../../../store/actions/quotations';


class PaymentCondition extends Component {

  onChange = (e) => {
    this.props.onChange({ paymentCondition: e.target.value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-2">
        <label for="payment_condition">Payment Condition</label>
        <div className="input-group input-group-sm">
        <Input
        id="id_payment_condition"
        name="payment_condition"
        size="small"
        placeholder={'Payment Condition'}
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
    value: state.quotations.paymentCondition
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onChange: actionCreators.setQuotationForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentCondition);
