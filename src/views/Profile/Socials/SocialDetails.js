import React, {PureComponent} from 'react';
import axios from 'axios';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css'

export default class SocialDetails extends PureComponent {
  state = {

  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="pull-left">
          <span className="fa fa-external-link"></span> Social Links
          </span>
          <span className="pull-right">
          <Tooltip placement="top" title='add'>
          <button className="btn btn-sm btn-outline-success">
          <span className="fa fa-plus"></span>
          </button>
          </Tooltip>&nbsp;
          </span>
        </div>
        <div className="card-body">
        <span className="fa fa-linkedin"></span><br/>
        <span className="fa fa-facebook"></span><br/>
        <span className="fa fa-twitter"></span><br/>
        </div>
      </div>
    );
  }
}
