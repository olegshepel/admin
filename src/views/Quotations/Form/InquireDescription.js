import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { Tag } from 'antd';

const DateTimeFormat = "YYYY-MM-DD HH:mm";


class InquireDescription extends Component {
  render() {
    return (
      <span>

      <div className="row">
      <div className="col-sm-4">
      <b>Organizer</b>: {this.props.data.organization}
      </div>
      <div className="col-sm-4">
      <b>Description</b>: {this.props.data.description}
      </div>
      </div>

      <div className="row">
      <div className="col-sm-4">
      <b>Contact</b>: {this.props.data.createdBy}
      </div>
      <div className="col-sm-4">
      <b>Publication Date</b>: <Tag color="green">{moment(this.props.data.startDate).format(DateTimeFormat)}</Tag>
      </div>
      <div className="col-sm-4">
      <b>Expire Date</b>: <Tag color="red">{moment(this.props.data.expireDate).format(DateTimeFormat)}</Tag>
      </div>
      </div>

      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.quotations.inquireDetails
  }
}

export default connect(mapStateToProps)(InquireDescription);
