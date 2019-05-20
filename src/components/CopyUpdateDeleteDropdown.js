import React from 'react';
import { Tooltip, Menu, Icon, Dropdown, Button } from 'antd';

export default class CopyUpdateDeleteDropdown extends React.PureComponent {
  copyItem = () => {
    this.props.copyItem(this.props.id)
  }
  updateItem = () => {
    this.props.updateItem(this.props.id)
  }
  deleteItem = () => {
    this.props.deleteItem(this.props.id)
  }

  actionOptions() {
    const menu = (
      <Menu>
        <Menu.Item key="1">
        <a className="dropdown-item" href="#" onClick={this.copyItem} style={{color:'grey'}}>
        <Icon type="copy" /> Copy
        </a>
        </Menu.Item>
        <Menu.Item key="2">
        <a className="dropdown-item" href="#" onClick={this.updateItem} style={{color:'grey'}}>
        <Icon type="edit" /> Edit
        </a>
        </Menu.Item>
        <Menu.Item key="3">
        <a className="dropdown-item" href="#" onClick={this.deleteItem} style={{color:'red'}}>
        <Icon type="delete" color="red" /> Delete
        </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <span>
      <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" >
        <Button size="small">
          <Icon type="down" />
        </Button>
      </Dropdown>
      </span>
    );
  }

  render() {
    return (
      <span style={{ float: 'right' }}>
      {this.actionOptions()}
      </span>
    );
  }
}
