import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Icon, Input, Button, Checkbox, Col } from 'antd';

import * as actionCreators from '../store/actions/auth';
import BaseLayout from '../containers/BaseLayout';

class Landing extends React.Component {

  render() {

    return (
      <BaseLayout>

      </BaseLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    error: state.auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actionCreators.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
