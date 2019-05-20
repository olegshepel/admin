import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Tag, Icon, Input, Tooltip, Drawer } from 'antd';
import moment from 'moment';

import { fetchCountries } from '../../../../store/actions/countries';

const dateFormat = 'YYYY-MM-DD';

class CreateForm extends Component {
  state = {
    isVat: false,
    regdate: new Date()
  }
  componentDidMount() {
    this.props.fetchCountries();
  }
  findOrganization = () => {
    alert ('find Organization');
  }
  handleClick = () => {
    this.setState({
      isVat: !this.state.isVat
    });
  }
  onChangeDate(date) {
		this.setState({
			regdate: date
		});
	}
  selectCountry = (selectedOption) => {
    this.props.selectCountry(selectedOption);
  }
  render() {
    return (
      <span>
      <div className="row">
      <div className="col-lg-6 col-sm-6">
        <label for="name">
        Name
        </label>
        <div className="input-group">
          <input
          id="id_name"
          name="name"
          className="form-control"
          type="text"
          // onChange=
          // value=
          placeholder="Company Name"/>
        </div>
      </div>
      <div className="col-sm-3">
        <label for="id_reg_date">Registration Date</label>
        <div className="input-group">

      </div>
      </div>

      <div className="col-lg-3 col-md-3">
         <label for="country">
         <i className="fa fa-flag"></i>&nbsp;
         Country
         </label>
         
      </div>
      </div>

      <div className="row">
      <div className="col-lg-4 col-sm-4">
        <label for="name">
        International Name
        </label>
        <div className="input-group input-group-sm">
        <input
        id="id_intername"
        name="intername"
        className="form-control form-control-sm"
        type="text"
        placeholder="International Name (english)"/>
        </div>
      </div>
      <div className="col-lg-2 col-sm-2">
      <label for="name_short">
      Short Name
      </label>
      <div className="input-group input-group-sm">
        <input
        id="id_name_short"
        name="name_short"
        className="form-control form-control-sm"
        type="text"
        placeholder="Short Name"/>
      </div>
      </div>
      <div className="col-sm-3">
        VAT&nbsp;
        <label className="switch switch-sm switch-text switch-default switch-success">
          <input
          id="id_vat"
          name="vat"
          className="switch-input switch-input-sm"
          type="checkbox"
          // value=
          defaultChecked={false}
          onClick={this.handleClick}/>
          <span className="switch-label" data-on="yes" data-off="no"></span>
          <span className="switch-handle"></span>
        </label>
        <div className="input-group input-group-sm" hidden={!this.state.isVat}>
          <input
          id="id_vat_number"
          name="vat_number"
          className="form-control form-control-sm"
          type="text"
          placeholder="VAT Number"/>
        </div>
      </div>

      </div>
      <hr />

      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    countries: state.countries.data,
    regnums: state.regnums.data
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchCountries: fetchCountries
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
