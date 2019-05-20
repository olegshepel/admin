import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from 'antd';

import CustomBreadcrumb from './CustomBreadcrumb';

const { Content } = Layout;


class CustomContent extends Component {

  render() {
    return (
      <Content style={{ margin: '0 16px 16px' }}>
        <CustomBreadcrumb />
        {this.props.children}
      </Content>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {

    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomContent);
