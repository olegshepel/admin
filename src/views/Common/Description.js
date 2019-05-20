import React from 'react';
import { Badge } from 'antd';

export default class Description extends React.PureComponent {
  render() {
    return (
      <span>
      Offered&nbsp;<Badge status="success" />&nbsp;
      </span>
    );
  }
}
