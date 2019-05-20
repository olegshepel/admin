import React, {PureComponent} from 'react';

export default class AddressForm extends React.PureComponent {
  state = {
    postcode: '',
    city: '',
    street: '',
    building: '',
    office: ''
  }
  componentDidUpdate() {
    this.setState({
      postcode: this.props.data.address_set[0].postcode,
      city: this.props.data.address_set[0].city,
      street: this.props.data.address_set[0].street,
      building: this.props.data.address_set[0].building,
      office: this.props.data.address_set[0].office
    });
  }
  render() {
    return (
      <span>
      <input type="text" id="id_organization" name="organization" value={this.props.orgID} hidden={true} />
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
    );
  }
}
