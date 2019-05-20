import React from 'react';
import Select from 'react-select';

export default class Form extends React.PureComponent {
  state = {
    country: [],
    postcode: '',
    city: '',
    street: '',
    building: '',
    office: ''
  }
  componentDidMount() {
    this.setState({
      country: {value: this.props.countryID, label: this.props.countryName}
    });
  }
  onChangeCountry = (country) => {
    this.setState({
			country: country
		});
  }
  render() {
    return (
      <form method="POST" id="form">
      <span>
      <input type="text" id="id_organization" name="organization" value={this.props.orgID} hidden={true} />
      <div className="row">
      <div className="col-sm-6">
      <label for="country">Country</label>
      <Select
      id="id_country"
      name="country"
      label="Country"
      placeholder="Country"
      required={true}
      options={this.props.countries}
      onChange={this.onChangeCountry}
      value={this.state.country}
      isClearable={true}
      isSearchable={true} />
      </div>
      </div>
      <hr />
      <div className="row">
      <div className="col-sm-2">
        <label for="postcode">Postal Code</label>
        <div className="input-group input-group-sm">
          <input
          id="id_postcode"
          className="form-control form-control-sm"
          type="text"
          name="postcode"
          defaultValue={this.state.postcode}
          // onChange=
          // value=
          placeholder="Postcode"/>
        </div>
      </div>
      <div className="col-sm-3">
        <label for="city">City</label>
        <div className="input-group input-group-sm">
          <input
          id="id_city"
          className="form-control form-control-sm"
          type="text"
          name="city"
          defaultValue={this.state.city}
          // onChange=
          // value=
          placeholder="City"/>
        </div>
      </div>
      <div className="col-sm-3">
        <label for="street">Street</label>
        <div className="input-group input-group-sm">
          <input
          id="id_street"
          name="street"
          className="form-control form-control-sm"
          type="text"
          defaultValue={this.state.street}
          // onChange=
          // value=
          placeholder="Street"/>
        </div>
      </div>
      <div className="form-group col-sm-2">
        <label for="building">Building</label>
        <div className="input-group input-group-sm">
          <input
          id="id_building"
          className="form-control form-control-sm"
          type="text"
          name="building"
          defaultValue={this.state.building}
          // onChange=
          // value=
          placeholder="Building"/>
        </div>
      </div>
      <div className="form-group col-sm-2">
        <label for="office">Office</label>
        <div className="input-group input-group-sm">
          <input
          id="id_office"
          className="form-control form-control-sm"
          type="text"
          name="office"
          defaultValue={this.state.office}
          // onChange=
          // value=
          placeholder="Office"/>
        </div>
      </div>
      </div>

      </span>
      </form>
    );
  }
}
