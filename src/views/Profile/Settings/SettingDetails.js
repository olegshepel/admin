import React, {PureComponent} from 'react';
import axios from 'axios';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css'

export default class SettingDetails extends PureComponent {
  state = {

  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="pull-left">
          <span className="fa fa-cog"></span> My Settings
          </span>
          <span className="pull-right">
          </span>
        </div>
        <div className="card-body">
        Language by default:
        </div>
      </div>
    );
  }
}
