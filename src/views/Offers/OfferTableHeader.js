import React, { Component } from 'react';

import OffersAction from './OffersAction';
import OfferFilter from './OfferFilter';


class OfferTableHeader extends Component {

  update = () => {
    this.props.update();
  }

  render() {
    return (
      <span>
      <span className="pull-left">
      <button className="btn btn-outline-primary btn-sm" onClick={this.update}>
      <span className="fa fa-refresh"></span>
      </button>&nbsp;
      {
        true ?
        <span>
        </span>
        :
        <span>&nbsp;
        <OffersAction actions={this.props.data.actionBlock}/>&nbsp;
        </span>
      }
      </span>

      <span className="pull-right">
      <OfferFilter />
      </span>
      </span>
    );
  }
}

export default OfferTableHeader;
