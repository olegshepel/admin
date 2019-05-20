import React, {Component} from 'react';
import axios from 'axios';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import moment from 'moment';
// import cookies from 'react-cookies';
import $ from 'jquery';
import { Table, Divider, Tag, Icon, Input, Badge, Tooltip, Popover, Button } from 'antd';

import { modalToggle, selectModal } from '../../store/actions/modal';
import CustomModal from '../../components/CustomModal';

import Informer from '../Common/Informer';
import Description from '../Common/Description';

import QuoteAction from './QuoteAction';
import OfferTableHeader from './OfferTableHeader';

import OfferForm from './Form/OfferForm';
import OfferDeleteForm from './Form/OfferDeleteForm';
import OfferDetails from './OfferDetails';

import * as actionCreators from '../../store/actions/offers';
import * as actionTypes from '../../store/actions/actionTypes';
import * as requests from '../../store/requests';
import * as urls from '../../store/urls';
import * as data from './data';

const dateTimeFormat = 'YYYY-MM-DD hh:mm';
// const dateTimeFormat = 'YYYY-MM-DD hh:m:sec';

class Offers extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  handleSubmit() {
    var actionType = this.props.offers.modalMarker;
    var form = $('#quotation_form').closest('form');
    var data = form.serialize();
    this.props.modalToggle();
    if (actionType === actionTypes.CREATE) {
      requests.request(urls.URL_CREATE_OFFER, data, this.props.fetchItems);
    } else {
      return null
    }
  }

  createOffer(id) {this.selectModal(actionTypes.CREATE, `Offer to Quotation # ${id}`, false, id);}

  selectModal(modalMarker, headerName, deleteConfirm, id, size='lg') {
    var index;
    var data = this.props.quotations.data;
    for (let i=0; i < data.length; i++) {
      if (data[i]['id'] === id) {index = i;}
    }
    this.props.selectModal ({
      modalMarker: modalMarker, headerName: headerName, deleteConfirm: deleteConfirm, indexSelected: index, size: size
    });
    this.props.modalToggle();
  }

  follow(id) {
    var data = `${'&id='}${id}`;
    // alert(JSON.stringify(data));
    requests.request(urls.URL_FOLLOW_QUOTATION, data, this.props.fetchItems);
  }

  renderModal() {
    var items = this.props.offers;
    if ( (items.modalMarker === actionTypes.CREATE) ) {
      return (
        <OfferForm
        names={data.modalBlock}
        columnNames={data.columnNames}
        inquire={items.data[items.indexSelected]}
        itemID={items.indexSelected}
        modalMarker={items.modalMarker} />
      )
    } else {
      return null
    }
  }

  render() {
    const columns = [
      {
        title: 'Quotation # ID / Description',
        dataIndex: 'number',
        key: 'number',
        width: 400,
        render: (number, record) => (
          <span>
          <Popover
          content={<OfferDetails data={record} id={record.id} show={this.createOffer.bind(this)} />}
          trigger="hover"
          placement="right"
          //title="Title"
          >
          <Tag>{record.id}</Tag>
          </Popover>&nbsp;
          {record.inquire_description}
          &nbsp;
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
          <span className="pull-right"><Tag>{record.country}</Tag></span>
          </span>
        )
      },
      {
        title: 'Created at',
        dataIndex: 'created_at',
        key: 'created_at',
        render: (created_at, record) => (
          <span>
          <small>
          {moment(created_at).format(dateTimeFormat)}
          </small>
          </span>
        )
      }
    ];
    var data = this.props.offers;
    const rowSelection = {
      selectedRowKeys: data.selectedRowKeys,
      onChange: this.props.onSelectChange
    };
    return (
      <div className="card">
      <div className="card-header">
      <CustomModal handleSubmit={this.handleSubmit.bind(this)}>
      {this.renderModal()}
      </CustomModal>

      <OfferTableHeader data={data.data} update={this.props.fetchItems}/>

      </div>
      <div className="card-body">
      <Table
      size={'small'}
      columns={columns}
      dataSource={data.data}
      rowSelection={rowSelection}
      />
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    className: state.className,
    modal: state.modal,
    offers: state.offers
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      modalToggle: modalToggle,
      selectModal: selectModal,
      onSelectChange: actionCreators.onSelectOffers,
      fetchItems: actionCreators.fetchOffers
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
