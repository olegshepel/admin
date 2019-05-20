import React, {Component} from 'react';
import axios from 'axios';
import {
  Table, Divider, Tag, Icon, Input, Badge, Tooltip, Popover, Button
} from 'antd';
import 'antd/dist/antd.css';

import OrganizationPopover from './OrganizationPopover';

export default class OrganizationItem extends Component {

  state = {
    actionsHidden: false
  }

  updateItem = () => {
    alert('update organization')
  }

  showActions() {
    this.setState({
      actionsHidden: false
    });
  }

  hideActions() {
    this.setState({
      actionsHidden: true
    });
  }

  render() {
    return (
      <span>

      {
        this.props.display ?
        <Tag color="green">{this.props.name}</Tag>
        :
        <Tag>{this.props.name}</Tag>
      }

      <span className="pull-right" hidden={this.state.actionsHidden}>
      <div className="btn-group btn-group-sm dropdown">
      <button
      type="button"
      className="btn btn-sm dropdown-toggle btn-outline-primary"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
        <span className="fa fa-reorder"></span>
      </button>
        <div className="dropdown-menu">
        <a className="dropdown-item" href="#">activate</a>
        <a className="dropdown-item" href="#">organization details</a>
        <a className="dropdown-item" href="#">users</a>
        <a className="dropdown-item" href="#">leave organization</a>
        <a className="dropdown-item" href="#" onClick={this.updateItem} style={{color:'grey'}}>
        <span className="fa fa-pencil"></span> edit
        </a>
        </div>
      </div>
      </span>
      {
        (this.props.count-1)  === this.props.index ?
        <span></span> :
        <hr/>
      }
      </span>
    );
  }
}
