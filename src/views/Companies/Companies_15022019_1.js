import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';
import Select from 'react-select';
import cookies from 'react-cookies';
import { Table, Divider, Tag, Icon, Input } from 'antd';
import { Modal, Col } from 'reactstrap';
import 'antd/dist/antd.css' // width modifying - .ant-table th.ant-table-selection-column

import CopyUpdateDelete from '../templates/react/CopyUpdateDelete';
import CreateItem from './CreateItem';
import CompanyAction from './CompanyAction';
//import CopyItem from './CopyItem';
//import EditItem from './EditItem';
//import DeleteItem from './DeleteItem';

const URL = '/companies/';
const URL_API = `/api${URL}`;

export default class ItemsTable extends PureComponent {
  state = {
    data: [],
    previous: null,
    next: null,
    count: 0,
    pagination: {},
    loading: false,
    file: null,
    selectedRowKeys: [],
    modal: false,
    size: 'lg',
    modalMarker: '',
    searchMode: false, // if true - two tables, if false only one table with companies
    hideSearch: true
  }
  componentDidMount() {
    axios.get(URL_API)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
  }
  create = () => {
    this.setState({
      modal: !this.state.modal,
      modalMarker: 'create'
    })
  }
  copy() {
    this.setState({
      modal: !this.state.modal,
      modalMarker: 'copy'
    })
  }
  update() {
    this.setState({
      modal: !this.state.modal,
      modalMarker: 'update'
    })
  }
  delete() {
    this.setState({
      modal: !this.state.modal,
      modalMarker: 'delete'
    })
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  modalRender() {
    if (this.state.modalMarker == 'create') {
      return (
        <CreateItem
        url={URL}
        names={modalBlock}
        columnNames={columnNames}
        refresh={this.refresh.bind(this)}
        toggle={this.toggle.bind(this)}
        />
      );
    } else if (this.state.modalMarker == 'copy') {
      return (
        <CreateItem
        url={URL}
        names={modalBlock}
        columnNames={columnNames}
        refresh={this.refresh.bind(this)}
        toggle={this.toggle.bind(this)}
        />
      );
    } else if (this.state.modalMarker == 'update') {
      return (
        <CreateItem
        url={URL}
        names={modalBlock}
        columnNames={columnNames}
        refresh={this.refresh.bind(this)}
        toggle={this.toggle.bind(this)}
        />
      );
    } else if (this.state.modalMarker == 'delete'){
      return (
        <CreateItem
        url={URL}
        names={modalBlock}
        columnNames={columnNames}
        refresh={this.refresh.bind(this)}
        toggle={this.toggle.bind(this)}
        />
      );
    } else {
      return false
    }
  }
  handleSubmit = () => {
    var self = this;
    var url = `${this.props.url}create/`;
    var form = $('#id_form').closest('form');
    function beforeSend() {
      //alert(`${this.state.currencies}`);
    }
    function created(data) {
      self.setState({
        name: '',
        barcode: '',
        tariffNumber: '',
        category: '',
        price: '',
        currency: '',
        weight: '',
        volume: '',
        length: '',
        width: '',
        height: '',
        isActive: true,
        csrftoken: ''
      });
      self.props.refresh();
    }
    function notCreated(data) {
      alert(data);
    }
    $.ajax ({
      url: url,
      type: "POST",
      data: form.serialize(),
      dataType: "json",
      beforeSend: beforeSend,
      success: created,
      error: notCreated
    });
  }
  refresh = () => {
    axios.get(URL_API)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
  }
  filter(url_filter) {
    axios.get(url_filter)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
  }
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
  searchBlock = () => {
    this.setState({
      hideSearch: !this.state.hideSearch
    })
  }
  render() {
    const myCollectionColumns = [
      {
        title: `${columnNames.name}`,
        dataIndex: 'organization',
        key: 'organization',
        //fixed: 'left',
        width: 200,
        render: (organization) => (
          <Tag color="purple">{organization}</Tag>
        )
      },
      {
        title: `${columnNames.status}`,
        dataIndex: 'relation_stage',
        key: 'relation_stage',
        render: (relation_stage) => (
          <span>
          {relation_stage}
          </span>
        )
      },
      {
        title: `${columnNames.actions}`,
        dataIndex: 'id',
        key: 'id',
        fixed: 'right',
        width: 80,
        render: () => (
          <CopyUpdateDelete
          copyItem={this.copy.bind(this)}
          updateItem={this.update.bind(this)}
          deleteItem={this.delete.bind(this)}
           />
        )
      }
    ];
    const searchColumns = [
      {
        title: `${columnNames.name}`,
        dataIndex: 'organization',
        key: 'organization',
        //fixed: 'left',
        width: 200,
        render: (organization) => (
          <Tag color="purple">{organization}</Tag>
        )
      },
      {
        title: `${columnNames.status}`,
        dataIndex: 'relation_stage',
        key: 'relation_stage',
        render: (relation_stage) => (
          <span>
          relation_stage
          </span>
        )
      },
      {
        title: `${columnNames.actions}`,
        dataIndex: 'id',
        key: 'id',
        fixed: 'right',
        width: 80,
        render: () => (
          <CopyUpdateDelete
          copyItem={this.copy.bind(this)}
          updateItem={this.update.bind(this)}
          deleteItem={this.delete.bind(this)}
           />
        )
      }
    ];
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onSelectChange.bind(this),
    };
    let show = true;
    if (this.state.selectedRowKeys.length > 0) {
      show = false;
    }
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="animated">
            <div className="card">
              <div className="card-header">
                <span className="pull-right">&nbsp;
                  <button type='button' className="btn btn-warning btn-sm">
                    <span className="fa fa-filter"></span>
                  </button>
                </span>
              </div>
              <div className="card-body">
              <Table
              columns={myCollectionColumns}
              dataSource={this.state.data}
              rowSelection={rowSelection}
              defaultExpandAllRows={true}
              //expandedRowRender={record => <p>{record.name}</p>}
              size='small'
              scroll={{ x: 1200 }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ItemsTable/>, document.getElementById('root'));
