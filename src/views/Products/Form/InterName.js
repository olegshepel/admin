import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Input }  from 'antd';

import * as actionCreators from '../../../store/actions/products';


class InterName extends Component {

  componentDidMount() {
    // this.props.fetchItems();
  }

  onChange = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-6">
        <label for="name"><i className="fa fa-hashtag"></i>&nbsp;International Name</label>
        <div className="input-group input-group-sm">
        <Input
        id="id_intername"
        type="text"
        name="intername"
        size="small"
        placeholder={'International Name'}
        required
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
    value: state.products.intername
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onChange: actionCreators.setProductForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(InterName);
