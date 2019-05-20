import React, {PureComponent} from 'react';
import axios from 'axios';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css'

import OrganizationList from './OrganizationList';

const URL = '/api/profile/';
// const URL_ORGZANIZATIONS = '/api/organizations/';

class Organizations extends PureComponent {
  state = {
    organizations: []
  }
  componentDidMount() {
    axios.get(URL)
      .then(res => {
        var organizations = res.data[0].organizations;
        this.setState({
          organizations: organizations
        });
      })
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <span className="pull-left">
          <span className="fa fa-building-o"></span> My Organizations
          </span>
          <span className="pull-right">
          <Tooltip placement="top" title='create new organization'>
          <a href="/create/">
          <button className="btn btn-sm btn-outline-success">
          <span className="fa fa-plus"></span>
          </button>
          </a>
          </Tooltip>
          </span>
        </div>
        <div className="card-body">
        <OrganizationList organizations={this.state.organizations}/>
        </div>
      </div>
    );
  }
}

export default Organizations;
