import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Layout, Menu, Icon, Typography } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography;


class CustomSider extends Component {

  state = {
    selected: ['home'],
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  onLinkClick = () => {

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
          <Menu.Item key="/products">
            <Link to="/products"><Icon type="barcode"/>Products</Link>
          </Menu.Item>
          <Menu.Item key="/companies">
            <Link to="/companies"><span className="fa fa-building-o"></span>&nbsp;&nbsp;&nbsp;Companies</Link>
          </Menu.Item>
          <Menu.Item key="/contacts">
            <Link to="/contacts"><Icon type="contacts" /><span>Contacts</span></Link>
          </Menu.Item>
          <SubMenu
            key="procurements"
            title={<span><Icon type="bar-chart" /><span>Procurements</span></span>}
          >
            <Menu.Item key="4"><Link to="/inquires"><Icon type="notification" /><span>Inquires</span></Link></Menu.Item>
            <Menu.Item key="5"><Link to="/offers"><Icon type="bell" /><span>Offers</span></Link></Menu.Item>
            <Menu.Item key="6"><Link to="/quotations"><Icon type="shopping-cart" /><span>MarketPlace</span></Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="crm"
            title={<span><Icon type="folder-open" /><span>CRM</span></span>}
          >
            <Menu.Item key="9"><Link to="/salesagreements">Agreements</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/salesorders">Orders</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/salesinvoices">Invoices</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            hidden={true}
            disabled
            key="sub3"
            title={<span><Icon type="compass" /><span>Transport</span></span>}
          >
            <Menu.Item key="/loads"><Link to="/loads"><Icon type="cube" />Loads</Link></Menu.Item>
            <Menu.Item key="/vehicles"><Link to="/vehicles"><Icon type="truck" />Vehicles</Link></Menu.Item>
          </SubMenu>
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
