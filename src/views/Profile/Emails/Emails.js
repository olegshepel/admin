import React, {PureComponent} from 'react';
import axios from 'axios';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css';

const URL_EMAILS = '/api/profileemails/';

export default class Emails extends PureComponent {
  state = {
    emails: []
  }
  componentDidMount() {
    axios.get(URL_EMAILS)
      .then(res => {
        this.setState({
          emails: res.data
        });
      })
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="pull-left">
          <span className="fa fa-envelope"></span> Emails
          </span>
          <span className="pull-right">
          <Tooltip placement="top" title='add email'>
          <button className="btn btn-sm btn-outline-success">
          <span className="fa fa-plus"></span>
          </button>
          </Tooltip>&nbsp;
          </span>
        </div>
        <div className="card-body">
        e-mail
        </div>
      </div>
    );
  }
}
