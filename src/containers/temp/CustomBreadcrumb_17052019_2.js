import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Breadcrumb } from 'antd';

import { Link } from 'react-router-dom';

import { routes } from '../routes';


class CustomBreadcrumb extends Component {

  itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
  }

  render() {
    const last = routes.indexOf(route) === routes.length - 1;
    return (
      <Breadcrumb
      // itemRender={this.itemRender()}
      routes={routes}
      separator="/" />
    );
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
