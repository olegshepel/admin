import React, { Component } from 'react';
import { Popover } from 'antd';

class OfferFilter extends Component {
  render() {
    return (
      <Popover
      content={
        <span>
        filter data
        <hr />
        </span>
      }
      trigger="click"
      placement="bottomRight"
      //title="Title"
      >
      <button className="btn btn-primary btn-sm">
      <span className="fa fa-filter"></span>
      </button>
      </Popover>
    );
  }
}

export default OfferFilter;
