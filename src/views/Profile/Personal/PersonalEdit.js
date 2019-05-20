import React, {PureComponent} from 'react';
import { Tag, Icon, Input, Tooltip } from 'antd';
import 'antd/dist/antd.css';

import moment from 'moment';
const dateFormat = 'YYYY-MM-DD';

const genders = [
  { value: 'male', label: 'male' },
  { value: 'female', label: 'female' },
  { value: 'other', label: 'other' }
];

export default class PersonalEdit extends PureComponent {
  state = {
    profile: [],
    name: '',
    surname: '',
    gender: '',
    birthday: new Date(),
    csrftoken: ''
  }
  componentDidMount() {
    this.setState({
      profile: this.props.profile,
      name: this.props.profile[0]['name'],
      surname: this.props.profile[0]['surname'],
      gender: { value: this.props.profile[0]['gender'], label: this.props.profile[0]['gender'] },
      birthday: this.props.profile[0]['birthday']
    });
  }
  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeDate(date) {
    this.setState({
			birthday: date
		});
  }
  onChangeGender(gender) {
    this.setState({
			gender
		});
  }
  render() {
    return (
      <form method="POST" id="profile_update">
        <div className="card-body">
          <div className="row">
            <div className="form-group col-sm-6">
              <label>Name</label>
              <div className="input-group">
                <input
                id="id_first_name"
                type="text"
                name="first_name"
                defaultValue={this.state.name}
                //value={this.state.name}
                //onChange={this.onChange}
                className="form-control"
                placeholder="Name"
                required />
              </div>
              </div>
              <div className="form-group col-sm-6">
                <label>Surname</label>
                <div className="input-group">
                  <input
                  id="id_last_name"
                  type="text"
                  name="last_name"
                  defaultValue={this.state.surname}
                  //value={this.state.surname}
                  //onChange={this.onChange}
                  className="form-control"
                  placeholder="Surname"
                  required />
                </div>
              </div>
            </div>
            <div className="row">
            <div className="form-group col-sm-6">
              <label for="gender">
              Gender
              </label>
              
            </div>
            <div className="form-group col-sm-6">
            <label for="">Date of birthday</label>
            <div className="input-group">

            </div>
            </div>
            </div>
        </div>
      </form>
    );
  }
}
