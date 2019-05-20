import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Input }  from 'antd';

import * as actionCreators from '../../../store/actions/quotations';

const { TextArea } = Input;


class OfferDescription extends Component {

  onChange = (e) => {
    this.props.onChange({ offerDescription: e.target.value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-12">
        <label for="description">Offer Description</label>
        <div className="input-group input-group-sm">
        <TextArea
        id="id_description"
        name="description"
        type="textarea"
        size="small"
        placeholder={'Description'}
        onChange={this.onChange}
        value={this.props.value}
        />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.quotations.offerDescription
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onChange: actionCreators.setQuotationForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(OfferDescription);
