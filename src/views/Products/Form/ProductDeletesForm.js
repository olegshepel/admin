import React, {Component} from 'react';

import { Tag } from 'antd';

import { connect } from 'react-redux';

class ProductDeletesForm extends Component {

  componentDidMount() {

  }

  render() {
    var data = this.props.data
    var length = this.props.selectedRowKeys.length;
    var items = this.props.selectedRowKeys.map(function(item, index) {
      return (
        <span>
        {data[item].name}
        {
          length-1 === index ?
          null :
          <hr />
        }
        </span>
      );
    });
    return (
      <form method="POST" id="product_form">
        <div className="card-body">
        {items}
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.products.data,
    selectedRowKeys: state.products.selectedRowKeys
  }
}

export default connect(mapStateToProps)(ProductDeletesForm);
