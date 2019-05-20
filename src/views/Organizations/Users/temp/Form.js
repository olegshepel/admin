import React, {PureComponent} from 'react';
import Select from 'react-select';

export default class Form extends PureComponent {
  state = {
    email: '',
    role: {},
    roles: []
  }
  componentDidMount() {
    let roles = this.props.roles.map(function(item, index) {
      return {value: item.pk, label: item.name}
    });
    this.setState({
      roles: roles
    });
  }
  componentWillUnmount() {

  }
  onChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  onChangeRole = (role) => {
    this.setState({
			role
		});
  }
  render() {
    const customStyles = {
      overflow: 'auto'
    }
    return (
      <form method="POST" id="form">
      <input type="text" id="id_organization" name="organization" value={this.props.organization_id} hidden={true} />
        <div className="card-body">
        <div className="row">
        <div className="form-group col-sm-12">
          <label>Email</label>
          <div className="input-group">
            <input
            id="id_email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className="form-control"
            placeholder="User's e-mail"
            required />
          </div>
        </div>
        </div>
        <div className="row">
        <div className="form-group col-sm-12">
          <label>Roles - test</label>
          <Select
          id="id_roles"
          name="roles"
          label="Roles"
          placeholder="Roles"
          required={true}
          //className="menu-outer-top"
          styles={customStyles}
          options={this.state.roles}
          onChange={this.onChangeRole}
          //labelKey="label"
          //multi={true}
          //defaultInputValue=''
          //value={this.state.countryId}
          isClearable={true}
          isSearchable={true}
          />
        </div>
        </div>

        </div>
      </form>
    );
  }
}
