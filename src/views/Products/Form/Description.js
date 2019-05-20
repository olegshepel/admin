import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Input }  from 'antd';

import * as actionCreators from '../../../store/actions/products';

const { TextArea } = Input;


class Description extends Component {

  componentDidMount() {
    // this.props.fetchItems();
  }

  onChange = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-12">
        <label for="description">Description</label>
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
    value: state.products.description
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
export default connect(mapStateToProps, mapDispatchToProps)(Description);
