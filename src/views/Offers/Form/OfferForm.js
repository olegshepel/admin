import React from 'react';

import Details from './Details';
import FormSetData from './FormSetData';
import Lot from './Lot';

const URL_PRODUCTS = '/api/products/';

class QuotationForm extends React.PureComponent {
  state = {
    lots: []
  }
  componentDidMount() {

  }
  render() {
    var listNodes = this.props.inquire.lots.map((listItem, index) =>
      <Lot
       lot={listItem}
       index={index} />
    );
    return (
      <form method="POST" id="quotation_form">
      <input id='id_inquire' name='inquire' value={this.props.inquire.id} type="text"
      hidden={true} />
      <Details inquire={this.props.inquire}/>
      <FormSetData length={this.props.inquire.lots.length}/>
      {
        listNodes.length !== 0 ?
        <hr /> :
        null
      }
      {listNodes}
      <hr />
      Documents
      </form>
    );
  }
}

export default QuotationForm;
