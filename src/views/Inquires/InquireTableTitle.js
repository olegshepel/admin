import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Menu, Icon, Dropdown } from 'antd';


class InquireTableTitle extends React.Component {
  createItem = () => {
    this.props.createItem();
  }
  fetchItems = () => {
    this.props.fetchItems();
  }
  deleteItems = () => {
    this.props.deleteItems();
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1">Create an inquire</Menu.Item>
        <Menu.Item key="2">Offer to customer</Menu.Item>
        <Menu.Item key="3"><Icon type="import" />import inquires</Menu.Item>
        <Menu.Item key="4"><Icon type="export" />export inquires</Menu.Item>
      </Menu>
    );
    return (
      <span>
      <Button onClick={this.createItem}>+ New Inquire</Button>&nbsp;
      <Dropdown overlay={menu} trigger={['click']}>
        <Button>
          <Icon type="down" />
        </Button>
      </Dropdown>
      &nbsp;
      {
        this.props.selectedRowKeys.length !== 0 ?
        <Button onClick={this.deleteItems} type="danger" >Delete</Button> :
        null
      }
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedRowKeys: state.inquires.selectedRowKeys
  }
}

export default connect(mapStateToProps)(InquireTableTitle);
