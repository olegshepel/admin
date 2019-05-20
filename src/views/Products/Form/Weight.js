import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Input }  from 'antd';

import * as actionCreators from '../../../store/actions/products';


class Weight extends Component {

  componentDidMount() {
    // this.props.fetchItems();
  }

  onChange = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
  }

  render() {
    return (

      <div className="form-group form-group-sm col-sm-2">
        <label for="weight"><i className="fa fa-arrow-down"></i>&nbsp;Weight</label>
        <div className="input-group input-group-sm">
        <Input
        id="id_weight"
        name="weight"
        type="text"
        placeholder={'Weigth'}
        size="small"
        suffix={"kg"}
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
    value: state.products.weight
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
export default connect(mapStateToProps, mapDispatchToProps)(Weight);


/*
<div className="form-group form-group-sm col-sm-2">
<div className="input-group input-group-sm mb-3">
<input
value={this.state.weight}
onChange={this.onChange}
type="text"
className="form-control"
placeholder="Weight" />
<div className="input-group-append">
<button className="btn btn-outline-secondary dropdown-toggle"
type="button"
// onClick={this.weight}
data-toggle="dropdown"
aria-haspopup="true"
aria-expanded="false">kg</button>
<div className="dropdown-menu">
  <a className="dropdown-item" href="#">kg</a>
  <a className="dropdown-item" href="#">t</a>
  <div role="separator" className="dropdown-divider" hidden={true}></div>
</div>
</div>
</div>
</div>
*/
