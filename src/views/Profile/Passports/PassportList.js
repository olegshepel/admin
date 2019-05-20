import React, {PureComponent} from 'react';
import axios from 'axios';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css'

import PassportItem from './PassportItem';

export default class PassportList extends PureComponent {
  state = {

  }
  listRender() {
    let count = this.props.passports.length;
    var listNodes = this.props.passports.map((listItem, index) =>
      <PassportItem
      count={count}
      item = {listItem}
      index={index}
      updateItem={this.props.updateItem}
      deleteItem={this.props.deleteItem} />
    );
    return (
      <span>
      {listNodes}
      </span>
    );
  }
  render() {
    return (
      <span>
        {this.listRender()}
      </span>
    );
  }
}
