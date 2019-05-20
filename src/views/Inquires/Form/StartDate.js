import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DatePicker } from 'antd';
import moment from 'moment';

import * as actionCreators from '../../../store/actions/inquires';

const DateTimeFormat = "YYYY-MM-DD HH:mm";


class StartDate extends Component {

  componentDidMount() {
  }

  onChange = (value) => {
    let date = moment(value).format(DateTimeFormat);
    this.props.onChange({ startDate: date });
  }

  render() {
    let value = moment(this.props.value).format(DateTimeFormat);
    return (
      <div className="form-group form-group-sm col-sm-2">
        <label>Publication Date</label>
        <input id="id_start_at" name="start_at" hidden={true} value={value} />
        <div className="input-group input-group-sm">
        <DatePicker
        showTime={true}
        size={"small"}
        id="id_start_at"
        name="start_at"
        onChange={this.onChange}
        defaultValue={moment(this.props.value, DateTimeFormat)}
        format={DateTimeFormat}
        />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.inquires.startDate
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
export default connect(mapStateToProps, mapDispatchToProps)(StartDate);
