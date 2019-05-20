import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table, Tag, Row, Col, Card } from 'antd';
import moment from 'moment';

import * as actionTypes from '../../store/actions/actionTypes';
import { modalToggle, selectModal } from '../../store/actions/modal';
import CustomModal from '../../components/CustomModal';
// import * as actionCreators from '../../store/actions/loads';

// import CopyUpdateDeleteDropdown from '../../components/CopyUpdateDeleteDropdown';

class Loads extends Component {

  render() {

    return (
      <Row>
        <Col>

        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      modalToggle: modalToggle,
      selectModal: selectModal
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Loads);
