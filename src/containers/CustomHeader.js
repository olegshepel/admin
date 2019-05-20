import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Icon, PageHeader, Row, Col, Button, Avatar, Dropdown, Menu } from 'antd';

const { Header } = Layout;


class CustomHeader extends Component {

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  doSomething = () => {
    // alert('clicked');
  }

  render() {
    var headerStyle = {
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      padding: 0,
      height: '50px',
      background: '#002766'
    }
    var buttonStyle = {
      // background: '#002766'
    }
    const menu = (
      <Menu>
        <Menu.Item key="1">
        <a className="dropdown-item" href="/profile" onClick={this.doSomething} style={{color:'grey'}}>
        <Icon type="user" /> Profile
        </a>
        </Menu.Item>
        <Menu.Item key="2">
        <a className="dropdown-item" href="/logout" onClick={this.doSomething} style={{color:'grey'}}>
        <Icon type="logout" color="red" /> Logout
        </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Header style={headerStyle}>
      <Row>
      <Row type="flex" align="middle" style={{ margin: '-8px 0px 0px 0px' }} >

        <Col span={23}>

          <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" >
            <a style={{float: 'right'}}>
            <Avatar icon="user" style={{ backgroundColor: '#69c0ff' }} onClick={this.doSomething} />
            </a>
          </Dropdown>

        </Col>

      </Row>
      </Row>
      </Header>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);
