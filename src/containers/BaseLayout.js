import React from 'react';
import {
  Layout, Row, Col
} from 'antd';

const { Header } = Layout;
const { Content } = Layout;


class BaseLayout extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0, height: '50px', background: '#002766' }}>
      </Header>
      <Layout style={{ marginTop: 100 }}>
      <Content style={{ margin: '0 16px 16px' }}>
      <Row type="flex" justify="space-around" align="middle">
      {this.props.children}
      </Row>
      </Content>
      </Layout>
      </Layout>
    );
  }
}

export default BaseLayout;
