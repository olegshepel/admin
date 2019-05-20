import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Col } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../store/actions/auth';
// import * as actionCreators from '../store/actions/auth/jwt/authActions';

import BaseLayout from '../containers/BaseLayout';

class NormalLoginForm extends React.Component {

  register = () => {
    window.location.href = '/register';
  }

  preventDefault(e) {
    e.preventDefault()
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // alert('request sent');
        this.props.onAuth();
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <BaseLayout>
      <Col span={8}>
      <Form onSubmit={this.handleSubmit} className="login-form" id="login_form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
            id="id_username"
            name="username"
            onChange={this.onChange}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
            id="id_password"
            name="password"
            onChange={this.onChange}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <span className="pull-right"><a className="login-form-forgot" href="">Forgot password</a></span>
          <br />
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a style={{color:'blue'}} onClick={this.register}>register now!</a>
        </Form.Item>
      </Form>
      </Col>
      </BaseLayout>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
