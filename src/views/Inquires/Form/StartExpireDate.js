import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DatePicker } from 'antd';
import moment from 'moment';

import * as actionCreators from '../../../store/actions/inquires';

const { RangePicker } = DatePicker;

const DateTimeFormat = "YYYY-MM-DD HH:mm:ss";


class StartExpireDate extends Component {

  componentDidMount() {
  }

  onChange = (value, dateString) => {
    var startDate;
    var expireDate;
    if (dateString[0] === undefined) {
      startDate = null;
    }
    if (dateString[1] === undefined) {
      expireDate = null;
    }
    this.props.onChange({
      startDate: moment(startDate).format(DateTimeFormat),
      expireDate: moment(expireDate).format(DateTimeFormat)
    })
  }

  onOk = (value) => {
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-4">
        <label>Publication Date / Expire Date</label>
        <input id="id_start_at" name="start_at" hidden={true} value={this.props.startDate} />
        <input id="id_expire_at" name="expire_at" hidden={true} value={this.props.expireDate} />
        <div className="input-group input-group-sm">
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format={DateTimeFormat}
          placeholder={['Publication Date', 'Expire Date']}
          onChange={this.onChange}
          // onOk={this.onOk}
        />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    startDate: state.inquires.startDate,
    expireDate: state.inquires.expireDate
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onChange: actionCreators.setInquireForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(StartExpireDate);
