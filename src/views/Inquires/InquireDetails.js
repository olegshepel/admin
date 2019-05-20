import React, { Component } from 'react';
import { Popover, Tag, Tooltip } from 'antd';

import InquirePopover from './InquirePopover';

import * as requests from '../../store/requests';
import * as urls from '../../store/urls';

class InquireDetails extends Component {
  update = () => {
    this.props.update(this.props.record.id);
  }
  changeStatus = () => {
    var id = this.props.record.id;
    var data = `${'&id='}${id}`;
    requests.request(urls.URL_STATUS_INQUIRE, data, this.props.fetchItems);
  }
  render() {
    var color = "green";
    if (!this.props.record.is_active) {
      color = "red";
    }
    return (
      <span>
      <Tag onClick={this.update} color={color}>
      <Popover
      content={
        <InquirePopover
        data={this.props.record}
        id={this.props.record.id} />
      }
      trigger="hover"
      placement="rightBottom">
      <a>
      {this.props.record.id}
      </a>
      </Popover>
      </Tag>
      &nbsp;
      <a onClick={this.update}>{this.props.description}</a>
      &nbsp;
      </span>
    );
  }
}

export default InquireDetails;
