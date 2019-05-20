import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Breadcrumb } from 'antd';

import routes from '../routes';


class CustomBreadcrumb extends Component {

  render() {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        
      </Breadcrumb>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomBreadcrumb);
