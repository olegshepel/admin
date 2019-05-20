import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../../store/actions/inquires';


class EmailNotification extends Component {

  componentDidMount() {
  }

  handleClick = () => {
    this.props.onChange({ emailNotification: !this.props.value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-2">
        <label for="id_email_notify"><span><small>Notify by e-mail</small></span></label>&nbsp;<br />
        <input
        id="id_email_notify"
        name="email_notify"
        type="checkbox"
        value={this.props.value}
        checked={this.props.value}
        onClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.inquires.emailNotification
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
export default connect(mapStateToProps, mapDispatchToProps)(EmailNotification);
