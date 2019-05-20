import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;


class CustomSider extends Component {

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    return (
      <Sider
        style={{ background: '#fafafa' }}
        width={230}
        // collapsible
        // reverseArrow
        // collapsedWidth={0}
        // collapsed={this.state.collapsed}
        // onCollapse={this.onCollapse}
      >
        <Menu
         // defaultSelectedKeys={['1']}
         mode="inline"
         style={{ background: '#fafafa' }}>
          <Menu.Item key="1">
            <Link to="/products"><Icon type="barcode" /><span>Products</span></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/companies"><Icon type="database" /><span>Companies</span></Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/contacts"><Icon type="contacts" /><span>Contacts</span></Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="shopping-cart" /><span>Procurements</span></span>}
          >
            <Menu.Item key="4"><Link to="/inquires">Inquires</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/purchaseagreements">Agreements</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/purchaseorders">Orders</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/purchaseinvoices">Invoices</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="13">
            <Link to="/quotations"><Icon type="notification" /><span>MarketPlace</span></Link>
          </Menu.Item>
          <SubMenu
            key="sub2"
            title={<span><Icon type="rise" /><span>Sales</span></span>}
          >
            <Menu.Item key="8"><Link to="/offers">Offers</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/salesagreements">Agreements</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/salesorders">Orders</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/salesinvoices">Invoices</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={<span><Icon type="rocket" /><span>Transport</span></span>}
          >
            <Menu.Item key="20"><Link to="/loads">Loads</Link></Menu.Item>
            <Menu.Item key="21"><Link to="/vehicles">Vehicles</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="22">
            <Link to="/documents"><Icon type="folder-open" /><span>Documents</span></Link>
          </Menu.Item>
        </Menu>
      </Sider>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomSider);
