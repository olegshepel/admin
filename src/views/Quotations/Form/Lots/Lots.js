import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../../../store/actions/quotations';

import Lot from './Lot';
import * as utils from './utils';

class Lots extends Component {

  onChange(name, value, index) {
    var lots = utils.setForm(name, value, index, this.props.quotations.lots);
    this.props.setForm({ lots: lots });
  }

  render() {
    var lots = [];
    if ( this.props.quotations.lots.length !== 0 ) {
      lots = this.props.quotations.lots;
    }
    var listNodes = this.props.quotations.lots.map((item, index) =>
      <span>
      <Lot
      lot={item}
      index={index}
      onChange={this.onChange.bind(this)} />
      {
        (this.props.quotations.lots.length-1 === index) ?
        null :
        <hr />
      }
      </span>
    );
    return (
      <span>
      {listNodes}
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotations: state.quotations,
    indexSelected: state.modal.indexSelected,
    modalMarker: state.modal.modalMarker
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setForm: actionCreators.setQuotationForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Lots);
