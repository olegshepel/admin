import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Input }  from 'antd';

import * as actionCreators from '../../../store/actions/quotations';


class DeliveryTerm extends Component {

  componentDidMount() {

  }

  onChange = (e) => {
    this.props.onChange({ deliveryTerm: e.target.value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-3">
        <label for="delivery_time">Delivery Term</label>
        <div className="input-group input-group-sm">
        <Input
        id="id_delivery_term"
        name="delivery_term"
        size="small"
        placeholder={'Delivery Term'}
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
    value: state.quotations.deliveryTerm
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
export default connect(mapStateToProps, mapDispatchToProps)(DeliveryTerm);
