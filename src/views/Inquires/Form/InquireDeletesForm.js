import React, {Component} from 'react';

import { Tag } from 'antd';

import { connect } from 'react-redux';

class InquireDeletesForm extends Component {

  componentDidMount() {

  }

  render() {
    var data = this.props.data
    var length = this.props.selectedRowKeys.length;
    var items = this.props.selectedRowKeys.map(function(item, index) {
      return (
        <span>
        <Tag># ID {data[item].id}</Tag>
        <span className="pull-right">
        {data[item].description}
        </span>
        {
          length-1 === index ?
          null :
          <hr />
        }
        </span>
      );
    });
    return (
      <form method="POST" id="inquire_form">
        <div className="card-body">
        {items}
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.inquires.data,
    selectedRowKeys: state.inquires.selectedRowKeys
  }
}

export default connect(mapStateToProps)(InquireDeletesForm);
