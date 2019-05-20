import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Input }  from 'antd';

import * as actionCreators from '../../../store/actions/products';


class Length extends Component {

  componentDidMount() {
    // this.props.fetchItems();
  }

  onChange = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="form-group form-group-sm col-sm-2">
        <i className="fa fa-arrows-h"></i>&nbsp;<label for="length">Length</label>
        <div className="input-group input-group-sm">
        <Input
        id="id_length"
        name="length"
        type="text"
        placeholder={'Length'}
        size="small"
        suffix={"mm"}
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
    value: state.products.length
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
export default connect(mapStateToProps, mapDispatchToProps)(Length);
