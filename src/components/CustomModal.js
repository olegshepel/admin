import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';

import { modalToggle } from '../store/actions/modal';

class CustomModal extends Component {

  handleSubmit = () => {
    this.props.handleSubmit()
  }

  render() {
    var btnName = "Save";
    var modalMarkerConfirm = "primary";
    var modalMarkerCancel = "danger";
    if (this.props.modal.deleteConfirm) {
      modalMarkerConfirm = "danger";
      modalMarkerCancel = "dashed";
      btnName = "Delete";
    }
    return (
      <Modal
      centered
      visible={this.props.modal.visible}
      title={this.props.modal.modalTitle}
      width={this.props.modal.width}
      onOk={this.handleSubmit}
      onCancel={this.props.modalToggle}
      footer={[
        <Button key="submit" type={modalMarkerConfirm} loading={this.props.modal.loading} onClick={this.handleSubmit}>
          {btnName}
        </Button>,
        <Button key="back" type={modalMarkerCancel} onClick={this.props.modalToggle}>Cancel</Button>
      ]}
      >
      {this.props.children}
      </Modal>
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
      modalToggle: modalToggle
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
