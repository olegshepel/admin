import React from 'react';
import { Tooltip } from 'antd';

export default class Informer extends React.PureComponent {
  render() {
    return (
      <Tooltip placement="right" title={this.props.title(this.props.id)}>
      {this.props.children}
      </Tooltip>
    );
  }
}
