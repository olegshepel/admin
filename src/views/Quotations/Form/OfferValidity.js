import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DatePicker } from 'antd';
import moment from 'moment';

import * as actionCreators from '../../../store/actions/quotations';

const DateTimeFormat = "YYYY-MM-DD";


class OfferValidity extends Component {

  onChange = (value) => {
    if (value === null) {
      value = new Date();
    }
    let date = moment(value).format(DateTimeFormat);
    this.props.onChange({ offerValidity: date });
  }

  render() {
    let value = moment(this.props.value).format(DateTimeFormat);
    return (
      <div className="form-group form-group-sm col-sm-2">
        <label>Offer Validity</label>
        <input id="id_validity" name="validity" hidden={true} value={value} />
        <div className="input-group input-group-sm">
        <DatePicker
        size={"small"}
        defaultValue={moment(this.props.value, DateTimeFormat)}
        format={DateTimeFormat}
        onChange={this.onChange} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.quotations.offerValidity
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
export default connect(mapStateToProps, mapDispatchToProps)(OfferValidity);
