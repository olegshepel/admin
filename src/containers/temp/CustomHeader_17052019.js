import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Icon, PageHeader, Row, Col, Button, Avatar } from 'antd';

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
    alert('clicked');
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
    return (
      <Header style={headerStyle}>
      <Row>
      <Row type="flex" align="middle" style={{ margin: '-8px 0px 0px 0px' }} >

        <Col span={6} order={4}>

          <a>
          <Avatar icon="user" style={{ backgroundColor: '#69c0ff' }} onClick={this.doSomething} />
          </a>

          <Button type="link" icon="user" size="small" onClick={this.doSomething}>

          </Button>


          <Button type="link" size="small" onClick={this.doSomething}>
          <Icon type="settings"/>
          </Button>


          <Button type="link" icon="user" size="small" onClick={this.doSomething}>
          <span style={{ color: "#fff" }}>text</span>
          </Button>

          &nbsp;
          |
          &nbsp;
          <Button size="small" style={buttonStyle}>
          <Icon type="settings"/>
          </Button>
          &nbsp;
          |
          &nbsp;
          <a>
          <Icon type="user" color="white" style={{ color: '#fff' }}/>
          </a>
          &nbsp;
          <span style={{ color: "grey" }}>|</span>
          &nbsp;
          <a>
          <Icon type="user" color="white" style={{ color: '#fff' }}/>
          </a>
        </Col>
        <Col span={6} order={3}>
          <Button size="small" style={buttonStyle}>2</Button>
        </Col>
        <Col span={6} order={2}>
          <Button size="small" style={buttonStyle}>3</Button>
        </Col>
        <Col span={6} order={1}>
          <Button size="small" style={buttonStyle}>4</Button>
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
