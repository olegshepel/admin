import React, { Component } from 'react';
import { Tooltip, Button, Icon } from 'antd';

class Follow extends Component {
  follow = () => {
    this.props.follow(this.props.id)
  }
  render() {
    return (
      <span>
      {
        this.props.isFollow ?
        <Tooltip placement="left" title='unfollow'>
        <Button type="primary" size="small" onClick={this.follow} style={{ float: 'right' }}>
        <small>&infin;</small>
        </Button>
        </Tooltip>
        :
        <Tooltip placement="left" title='follow'>
        <Button type="secondary" size="small" onClick={this.follow} style={{ float: 'right' }}>
        +
        </Button>
        </Tooltip>
      }
      </span>
    );
  }
}

export default Follow;
