import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table, Tag, Popover, Row, Col, Card } from 'antd';
import moment from 'moment';

import QuotationForm from './Form/QuotationForm';
import QuotationDetails from './QuotationDetails';

import { modalToggle, selectModal } from '../../store/actions/modal';
import CustomModal from '../../components/CustomModal';
import Follow from '../../components/Follow';
import * as actionCreators from '../../store/actions/quotations';
import * as actionTypes from '../../store/actions/actionTypes';
import * as submits from './handleSubmitQuotation';

const dateFormat = 'YYYY-MM-DD';

class Quotations extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  handleSubmit() {
    submits.handleSubmit(this.props.modal.modalMarker, this.props.fetchItems)
    this.props.modalToggle();
  }

  createItem(id) {this.selectModal(actionTypes.CREATE, `Offer to Quotation # ${id}`, false, id);}
  updateItem(id) {this.selectModal(actionTypes.UPDATE, `Update Offer to Quotation # ${id}`, false, id);}

  selectModal(modalMarker, headerName, deleteConfirm, id, size="1200px") {
    var index;
    var data = this.props.quotations.data;
    for (let i=0; i < data.length; i++) {
      if (data[i]['id'] === id) {index = i;}
    }
    this.props.selectModal ({
      modalMarker: modalMarker, headerName: headerName, deleteConfirm: deleteConfirm, indexSelected: index, size: size
    });
    if (modalMarker === actionTypes.CREATE) {
      let quotation = this.props.quotations.data[index];
      this.props.clearForm();
      this.props.fillForm(quotation);
      // this.props.clearForm();
    }
    if ((modalMarker === actionTypes.COPY) || (modalMarker === actionTypes.UPDATE)) {
      let quotation = this.props.quotations.data[index];
      this.props.clearForm();
      this.props.fillForm(quotation);
    }
    this.props.modalToggle();
  }

  follow(id) {
    submits.follow(id, this.props.fetchItems)
  }

  renderModal() {
    var marker = this.props.modal.modalMarker;
    if ( (marker === actionTypes.CREATE) ) {
      return (
        <QuotationForm
        inquire={this.props.quotations.data[this.props.modal.indexSelected]}
        itemID={this.props.modal.indexSelected}
        modalMarker={marker} />
      )
    }
    if ( (marker === actionTypes.UPDATE) ) {
      return (
        <QuotationForm
        inquire={this.props.quotations.data[this.props.modal.indexSelected]}
        itemID={this.props.modal.indexSelected}
        modalMarker={marker} />
      )
    } else {
      return null
    }
  }

  render() {
    const columns = [
      {
        title: '# ID / Description',
        dataIndex: 'number',
        key: 'number',
        // width: 450,
        render: (number, record) => (
          <span>
          <Popover
          content={
            <QuotationDetails
            data={record}
            id={record.id}
            createItem={this.createItem.bind(this)}
            updateItem={this.updateItem.bind(this)} />
          }
          trigger="hover"
          placement="rightBottom"
          //title="Title"
          >
          {
            record.is_offered ?
            <Tag color="green" onClick={this.updateItem.bind(this, record.id)}>
            <a>{record.id}</a>
            </Tag> :
            <Tag onClick={this.createItem.bind(this, record.id)}><a>{record.id}</a></Tag>
          }
          </Popover>
          {
            record.is_offered ?
            <a onClick={this.updateItem.bind(this, record.id)}>{record.description}</a> :
            <a onClick={this.createItem.bind(this, record.id)}>{record.description}</a>
          }
          &nbsp;
          {
            record.is_offered ?
            <a style={{ color: "green", float: "right" }}>
            <small>offer is done</small>
            </a> :
            null
          }
          </span>
        )
      },
      {
        title: 'Organizer',
        dataIndex: 'organization',
        key: 'name',
        width: 350,
        render: (organization, record) => (
          <span>
          <span>{organization}</span>
          <Tag style={{ float: 'right' }}>{record.country_name_short}</Tag>
          </span>
        )
      },
      {
        title: 'Deadline',
        dataIndex: 'expireDate',
        key: 'expireDate',
        width: 90,
        render: (expireDate, record) => (
          <span>
          <small>
          {moment(expireDate).format(dateFormat)}
          </small>
          </span>
        )
      },
      {
        title: ``,
        dataIndex: 'id',
        key: 'id',
        width: 45,
        render: (id, record) => (
          <Follow
          id={id}
          isFollow={record.follow}
          follow={this.follow.bind(this)}
          />
        )
      }
    ];
    var data = this.props.quotations;
    const rowSelection = {
      selectedRowKeys: data.selectedRowKeys,
      onChange: this.props.onSelectChange
    };
    return (
      <Row>
        <Col>
          <Card
            size="small"
            // style={{ minHeight: '100vh' }}
            // title={ <QuotationTableTitle /> }
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
    quotations: state.quotations
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      modalToggle: modalToggle,
      selectModal: selectModal,
      onSelectChange: actionCreators.onSelectQuotations,
      fetchItems: actionCreators.fetchQuotations,
      clearForm: actionCreators.clearQuotationForm,
      fillForm: actionCreators.fillQuotationForm
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotations);
