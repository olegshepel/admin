import React, { Component } from 'react';

import InquireDescription from './InquireDescription';
import DeliveryTime from './DeliveryTime';
import DeliveryTerm from './DeliveryTerm';
import PaymentCondition from './PaymentCondition';
import OfferDescription from './OfferDescription';
import OfferValidity from './OfferValidity';
import Currency from './Currency';
import Lots from './Lots/Lots';
import ManagementFormSet from '../../../components/ManagementFormSet';


class QuotationForm extends Component {

  render() {
    return (
      <form method="POST" id="quotation_form">
      <input id='id_inquire' name='inquire' value={this.props.inquire.id} type="text" hidden={true} />

        <InquireDescription />
        <hr />

        <div className="row">
          <DeliveryTime />
          <DeliveryTerm />
          <PaymentCondition />
          <OfferValidity />
          <Currency />
        </div>

        <div className="row">
          <OfferDescription />
        </div>

        <span>
          <ManagementFormSet length={this.props.inquire.lots.length}/>
          <Lots inquire={this.props.inquire} />
        </span>

        <div className="row">

        </div>

      </form>
    );
  }
}

export default QuotationForm;
