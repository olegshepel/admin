import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table, Tag, Row, Col, Card } from 'antd';
import moment from 'moment';

import * as actionTypes from '../../store/actions/actionTypes';
import { modalToggle, selectModal } from '../../store/actions/modal';
import CustomModal from '../../components/CustomModal';
import * as actionCreators from '../../store/actions/inquires';

import CopyUpdateDeleteDropdown from '../../components/CopyUpdateDeleteDropdown';
import InquireTableTitle from './InquireTableTitle';
import InquireDetails from './InquireDetails';
import InquireForm from './Form/InquireForm';
import InquireDeleteForm from './Form/InquireDeleteForm';
import InquireDeletesForm from './Form/InquireDeletesForm';

import * as submits from './handleSubmitInquire';

const dateFormat = 'YYYY-MM-DD';

class Inquires extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }
  handleSubmit() {
    submits.handleSubmitInquire(
      this.props.inquires,
      this.props.modalToggle,
      this.props.fetchItems,
      this.props.removeSelectedItem,
      this.props.removeSelectedItems,
      this.props.clearForm,
      this.props.modal
    );
  }
  createItem = () => {
    this.props.clearForm();
    this.props.selectModal(submits.setCreate());
  }
  copyItem(id) {
    let inquire = this.props.inquires.data[submits.getIndex(this.props.inquires, id)];
    this.props.fillForm(inquire);
    this.props.selectModal(submits.setCopy(this.props.inquires, id));
  }
  updateItem(id) {
    let inquire = this.props.inquires.data[submits.getIndex(this.props.inquires, id)];
    this.props.fillForm(inquire);
    this.props.selectModal(submits.setUpdate(this.props.inquires, id));
  }
  deleteItem(id) {
    this.props.selectModal(submits.setDelete(this.props.inquires, id));
  }
  deleteItems(id) {
    this.props.selectModal(submits.setDeletes(this.props.inquires, id));
  }
  renderModal() {
    var marker = this.props.modal.modalMarker;
    var item=this.props.inquires.data[this.props.modal.indexSelected];
    if ((marker === actionTypes.CREATE) || (marker === actionTypes.COPY) || (marker === actionTypes.UPDATE)) {
      return (
        <InquireForm />
      )
    } if (marker === actionTypes.DELETE) {
      return (
        <InquireDeleteForm item={item} />
      );
    } if (marker === actionTypes.DELETES) {
      return (
        <InquireDeletesForm />
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
        title: '# ID / Description',
        dataIndex: 'description',
        key: 'description',
        width: 400,
        render: (description, record) => (
          <InquireDetails
          description={description}
          record={record}
          fetchItems={this.props.fetchItems}
          update={this.updateItem.bind(this, record.id)} />
        )
      },
      {
        title: 'Publication Date / Deadline',
        dataIndex: 'startDate',
        key: 'startDate',
        width: 250,
        render: (startDate, record) => (
          <span>
          {moment(startDate).format(dateFormat)} / {moment(record.expireDate).format(dateFormat)}
          </span>
        )
      },
      {
        title: 'Participants',
        dataIndex: 'participants',
        key: 'participants',
        align: 'center',
        render: (participants, record) => (
          participants !== 0 ?
          <Tag color="blue">
          <a href="#" onClick={this.chooseParticipants.bind(this, record.id)}>
          {participants}
          </a>
          </Tag>
           :
          null
        )
      },
      {
        title: ``,
        dataIndex: 'id',
        key: 'id',
        render: (id) => (
          <CopyUpdateDeleteDropdown
          id={id}
          copyItem={this.copyItem.bind(this)}
          updateItem={this.updateItem.bind(this)}
          deleteItem={this.deleteItem.bind(this)} />
        )
      }
    ];
    var data = this.props.inquires;
    const rowSelection = {
      selectedRowKeys: data.selectedRowKeys,
      onChange: this.props.onSelectChange,
    };
    return (
      <Row>
        <Col>
          <Card
            size="small"
            // style={{ minHeight: '100vh' }}
            title={
              <InquireTableTitle
              createItem={this.createItem.bind(this)}
              fetchItems={this.props.fetchItems}
              deleteItems={this.deleteItems.bind(this)} />
            }
            // extra={this.tableExtra()}
          >
          <CustomModal handleSubmit={this.handleSubmit.bind(this)}>
          {this.renderModal()}
          </CustomModal>
          <Table
          size={'small'}
          columns={columns}
          dataSource={data.data}
          rowSelection={rowSelection} />
          </Card>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    modal: state.modal,
    inquires: state.inquires
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      modalToggle: modalToggle,
      selectModal: selectModal,
      removeSelectedItem: actionCreators.removeSelectedInquire,
      removeSelectedItems: actionCreators.removeSelectedInquires,
      onSelectChange: actionCreators.onSelectInquires,
      fetchItems: actionCreators.fetchInquires,
      clearForm: actionCreators.clearInquireForm,
      fillForm: actionCreators.fillInquireForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Inquires);
