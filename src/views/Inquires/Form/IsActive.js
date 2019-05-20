import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../../store/actions/inquires';


class IsActive extends Component {

  componentDidMount() {
  }

  handleClick = () => {
    this.props.onChange({ isActive: !this.props.value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-1">
        <label for="id_is_active"><span><small>Active</small></span></label>&nbsp;<br />
        <input
        id="id_is_active"
        name="is_active"
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
    value: state.inquires.isActive
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
export default connect(mapStateToProps, mapDispatchToProps)(IsActive);
