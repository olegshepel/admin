import React, { Component } from 'react';
import { connect } from 'react-redux';

import Name from './Name';
import InterName from './InterName';
import Price from './Price';
import TariffNumber from './TariffNumber';
import Barcode from './Barcode';
import Category from './Category';
import Currency from './Currency';
import Description from './Description';
import Weight from './Weight';
import Volume from './Volume';
import Length from './Length';
import Width from './Width';
import Height from './Height';
import Sysm from './Sysm';
import UnitDefault from './UnitDefault';


class ProductForm extends Component {
  render() {
    return (
      <form method="POST" id="product_form">

        <div className="row">
          <Name />
          <InterName />

        </div>

        <div className="row">
          <TariffNumber />
          <Category />
        </div>

        <div className="row">
          <Barcode />
          <Currency />
          <Price />
          <Sysm />
          {
            (this.props.sysm.length === 0) ?
            null :
            <UnitDefault />
          }
        </div>

        <div className="row">
          <Weight />
          <Volume />
          <Length />
          <Width />
          <Height />
  			</div>

        <div className="row">
          <Description />
        </div>

      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    sysm: state.products.sysm,
  }
}

export default connect(mapStateToProps)(ProductForm);
