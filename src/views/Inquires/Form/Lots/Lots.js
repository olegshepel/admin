import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'antd';

import ManagementFormSet from '../../../../components/ManagementFormSet';
import * as actionCreators from '../../../../store/actions/inquires';
import * as actionTypes from '../../../../store/actions/actionTypes';
import Lot from './Lot';
import * as utils from './utils';

class Lots extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleNodeRemoval(nodeId) {
    var lots = utils.removeNode(this.props.inquires.lots, nodeId);
    this.props.setForm({ lots: lots });
  }
  addAbove = () => {
    var lots = utils.addAbove(this.props.inquires.lots);
    this.props.setForm({ lots: lots });
  }
  addBelow = () => {
    var lots = utils.addBelow(this.props.inquires.lots);
    this.props.setForm({ lots: lots });
  }
  upNode = (index) => {
    var lots = utils.upNode(this.props.inquires.lots, index);
    this.props.setForm({ lots: lots });
  }
  downNode = (index) => {
    var lots = utils.downNode(this.props.inquires.lots, index);
    this.props.setForm({ lots: lots });
  }

  render() {
    var lots = [];
    if ( this.props.inquires.lots.length !== 0 ) {
      lots = this.props.inquires.lots;
    }
    var listNodes = lots.map((listItem, index) =>
      <Lot
       addBelow={this.addBelow.bind(this)}
       upNode={this.upNode.bind(this)}
       downNode={this.downNode.bind(this)}
       key={listItem.key}
       nodeId={listItem.key}
       lot={listItem.lot}
       removeNode={this.handleNodeRemoval.bind(this)}
       displayRemoveButton={true}
       index={index}
       length={lots.length}
       productsFull={this.props.inquires.productsFull}
       products={this.props.inquires.products} />
    );
    return (
      <div className="form-group form-group-sm col-sm-12">
      <ManagementFormSet length={lots.length} />
      {
        (lots.length > 0) ?
        null :

        <Button
        type="primary"
        size="small"
        style={{ float: "right" }}
        onClick={this.addBelow}>
        + Add Lot
        </Button>

      }
      {listNodes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inquires: state.inquires,
    indexSelected: state.modal.indexSelected,
    modalMarker: state.modal.modalMarker
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchProducts: actionCreators.fetchProducts,
      setForm: actionCreators.setInquireForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Lots);
