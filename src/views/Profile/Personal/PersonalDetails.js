import React, {PureComponent} from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Tag, Icon, Input, Tooltip } from 'antd';

import CustomModal from '../../../components/CustomModal';
import PersonalEdit from './PersonalEdit';

const URL_PROFILE = '/api/profile/';
const URL_PROFILE_UPDATE = '/profile/update/';

export default class PersonalDetails extends PureComponent {
  state = {
    profile: [],
    modal: false,
    size: 'lg',
    modalComponent: null
  }
  componentDidMount() {
    axios.get(URL_PROFILE)
      .then(res => {
        this.setState({
          profile: res.data
        });
      })
  }
  profileData() {
    var listNodes = this.state.profile.map((listItem, index) =>
      <span>

      <span>
      <h4>{listItem.name} {listItem.surname}</h4>
      </span>
      <hr />

      <span>
      Gender
      <span className="pull-right">
      <Tag color="geekblue">{listItem.gender.charAt(0).toUpperCase() + listItem.gender.slice(1)}</Tag>
      </span>
      </span>
      <hr />

      <span>
      Birthday
      <span className="pull-right">
      {
        listItem.birthday ?
        <Tag color="geekblue">{listItem.birthday}</Tag>
        :
        <span></span>
      }
      </span>
      </span>
      <hr />

      <span>
      Address
      <span className="pull-right">

      </span>
      </span>

      </span>
    );
    return (
      <span>
      {listNodes}
      </span>
    );
  }
  personalEdit() {
    return (
      <PersonalEdit />
    )
  }
  editPersonal = () => {
    this.toggle();
  }
  toggle() {
    this.setState({modal: !this.state.modal});
  }
  sendRequestUpdate() {
    var form = $('#profile_update').closest('form');
    var data = form.serialize();
    axios({
      method: 'post',
      url: URL_PROFILE_UPDATE,
      data: data
    }).then(res => {
      this.componentDidMount();
    })
  }
  handleSubmit = () => {
    this.toggle();
    this.sendRequestUpdate();
  }
  render() {
    return (
      <div className="card">
        <CustomModal handleSubmit={this.handleSubmit.bind(this)}>
        <PersonalEdit profile={this.state.profile}/>
        </CustomModal>
        <div className="card-header">
          <span className="pull-left">
          <span className="fa fa-user"></span> Intro
          </span>
          <span className="pull-right">&nbsp;
          <Tooltip placement="top" title='edit'>
          <button className="btn btn-sm btn-outline-primary" onClick={this.editPersonal}>
          <span className="fa fa-pencil"></span>
          </button>
          </Tooltip>
          </span>
        </div>
        <div className="card-body">
        {this.profileData()}
        </div>
      </div>
    );
  }
}
