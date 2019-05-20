import React, {Component} from 'react';
import axios from 'axios';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css'

class PhoneItem extends Component {
  updateItem = () => {
    this.props.updateItem(this.props.index);
  }
  deleteItem = () => {
    this.props.deleteItem(this.props.index);
  }
  sendConfirm = () => {
    alert('code sent');
  }
  render() {
    return (
      <span>
      <a><Tag>{this.props.item.country_short}</Tag>&nbsp;{this.props.item.phone_code}&nbsp;{this.props.item.number}</a>
      &nbsp;
      {
        this.props.item.type ?
        <span>
        &#xb7;&nbsp;{this.props.item.type}
        </span> :
        <span></span>
      }

      <span className="pull-right">
      <span hidden={true}>
      {
        this.props.item.is_confirmed ?
        <Tag color="green">confirmed</Tag> :
        <Tag color="red">not confirmed</Tag>
      }
      </span>
      &nbsp;

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

        {
          this.props.item.is_confirmed ?
          null :
          <a className="dropdown-item" href="#" onClick={this.sendConfirm} hidden={true}>send code to confirm</a>
        }

        <a className="dropdown-item" href="#" onClick={this.updateItem} style={{color:'grey'}}>
        <span className="fa fa-pencil"></span> edit
        </a>
        <a className="dropdown-item" href="#" onClick={this.deleteItem} style={{color:'red'}}>
        <span className="fa fa-trash"></span> delete
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

export default PhoneItem;
