import React, {PureComponent} from 'react';
import axios from 'axios';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css'

import OrganizationItem from './OrganizationItem';

export default class OrganizationList extends PureComponent {
  state = {

  }
  listRender() {
    let count = this.props.organizations.length;
    var listNodes = this.props.organizations.map((listItem, index) =>
      <OrganizationItem
      count={count}
      data={listItem}
      display={listItem.default_to_display}
      name={listItem.name}
      index={index}/>
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
