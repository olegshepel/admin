import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { Table, Divider, Tag, Icon, Input, Badge, Tooltip, Popover, Button, Alert, Avatar } from 'antd';

import CopyUpdateDeleteDropdown from '../Common/CopyUpdateDeleteDropdown';
import InvoiceForm from './Form/InvoiceForm';
import InvoiceDeleteForm from './Form/InvoiceDeleteForm';
import InvoiceDeletesForm from './Form/InvoiceDeletesForm';
import InvoiceTableHeader from './InvoiceTableHeader';

import InvoiceDetails from './InvoiceDetails';
import InvoicePopover from './InvoicePopover';
import MyModal from '../Common/Modal/MyModal';

import { modalToggle } from '../../store/actions/modal';
import * as actionCreators from '../../store/actions/invoices';
import * as actionTypes from '../../store/actions/actionTypes';
import * as data from './data';

import * as submits from './handleSubmitInvoice';

const dateFormat = 'YYYY-MM-DD';

class Invoices extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  handleSubmit() {
    submits.handleSubmitInvoice(
      this.props.items,
      this.props.modalToggle,
      this.props.fetchItems,
      this.props.removeSelectedItem,
      this.props.removeSelectedItems,
      this.props.clearForm
    );
  }

  // infoItem(id) {this.selectModal(actionTypes.UPDATE, `Inquire # ${id}`, false, id);}
  createItem() {this.selectModal(actionTypes.CREATE, 'New Invoice', false);}
  copyItem(id) {this.selectModal(actionTypes.COPY, `New Invoice (copied from # ${id})`, false, id);}
  updateItem(id) {this.selectModal(actionTypes.UPDATE, `Edit Invoice # ${id}`, false, id);}
  deleteItem(id) {this.selectModal(actionTypes.DELETE, `Delete Invoice # ${id}`, true, id, 'lg');}
  deleteItems(id) {this.selectModal(actionTypes.DELETES, `Delete Invoices`, true, id, 'lg');}

  selectModal(modalMarker, headerName, deleteConfirm, id, size="xl") {
    var index;
    var data = this.props.items.data;
    for (let i=0; i < data.length; i++) {
      if (data[i]['id'] === id) {index = i;}
    }
    this.props.selectModal ({
      modalMarker: modalMarker, headerName: headerName, deleteConfirm: deleteConfirm, indexSelected: index, size: size
    });
    if (modalMarker === actionTypes.CREATE) {
      this.props.clearForm();
    }
    if ((modalMarker === actionTypes.COPY) || (modalMarker === actionTypes.UPDATE)) {
      let inquire = this.props.items.data[index];
      this.props.fillForm(inquire);
    }
    this.props.modalToggle();
  }

  renderModal() {
    if ((this.props.items.modalMarker === actionTypes.CREATE) || (this.props.items.modalMarker === actionTypes.COPY) || (this.props.items.modalMarker === actionTypes.UPDATE)) {
      return (
        <InvoiceForm />
      )
    } if (this.props.items.modalMarker === actionTypes.DELETE) {
      return (
        <InvoiceDeleteForm data={this.props.items.data[this.props.items.indexSelected]} />
      );
    } if (this.props.items.modalMarker === actionTypes.DELETES) {
      return (
        <InvoiceDeletesForm />
      );
    } else {
      return null
    }
  }

  chooseParticipants(id) {
    alert(id);
  }

  onClose = (e) => {
    console.log(e, 'I was closed.');
  };

  render() {
    const columns = [
      {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
        width: 150,
        render: (number) => (
          <span>{number}</span>
        )
      },
      {
        title: 'Buyer',
        dataIndex: 'buyer_name',
        key: 'buyer_name',
        // width: 400,
        render: (buyer_name) => (
          <span>{buyer_name}</span>
        )
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
        // width: 400,
        render: (amount, record) => (
          <span>{amount}&nbsp;{record.currency_name}</span>
        )
      },
      {
        title: 'Issued on',
        dataIndex: 'issued_on',
        key: 'issued_on',
        // width: 400,
        render: (issued_on) => (
          <span>{issued_on}</span>
        )
      }
    ];
    var data = this.props.items;
    const rowSelection = {
      selectedRowKeys: data.selectedRowKeys,
      onChange: this.props.onSelectChange,
    };

    return (

      <span>

      <div className="card">

      <div className="card-header">
      <MyModal
      modal={this.props.modal.visible} toggle={this.props.modalToggle}
      className={this.props.className} size={this.props.items.size}
      headerName={data.headerName} deleteConfirm={data.deleteConfirm}
      handleSubmit={this.handleSubmit.bind(this)} >
      {this.renderModal()}
      </MyModal>
      <InvoiceTableHeader
      data={data}
      createItem={this.createItem.bind(this)}
      fetchItems={this.props.fetchItems}
      deleteItems={this.deleteItems.bind(this)}
       />
      </div>
      <div className="card-body">
      <Table
      size={'small'}
      columns={columns}
      dataSource={data.data}
      rowSelection={rowSelection} />
      </div>
      </div>

      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    className: state.className,
    modal: state.modal,
    items: state.invoices
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      modalToggle: modalToggle,
      removeSelectedItem: actionCreators.removeSelectedInvoice,
      removeSelectedItems: actionCreators.removeSelectedInvoices,
      onSelectChange: actionCreators.onSelectInvoices,
      fetchItems: actionCreators.fetchInvoices,
      selectModal: actionCreators.selectInvoiceModal,
      clearForm: actionCreators.clearInvoiceForm,
      fillForm: actionCreators.fillInvoiceForm
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Invoices);
