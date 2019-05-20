import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout } from 'antd';

import CustomSider from './CustomSider';
import CustomHeader from './CustomHeader';
import CustomContent from './CustomContent';

import * as actionCreators from '../store/actions/auth';


class CustomLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <CustomHeader />
        <Layout style={{ marginTop: 50 }}>
          <CustomSider />
          <CustomContent>
            {this.props.children}
          </CustomContent>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onTryAutoSignUp: actionCreators.authCheckState
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomLayout);
