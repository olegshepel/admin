import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import cookies from 'react-cookies';
import { Table, Divider, Tag, Icon, Input } from 'antd';
import 'antd/dist/antd.css' // width modifying - .ant-table th.ant-table-selection-column

import ItemAction from './ItemAction';
import SearchItem from './SearchItem';
import CreateItem from './CreateItem';
import CopyEditDeleteModal from '../templates/react/CopyEditDeleteModal';

export default class ItemsTable extends PureComponent {
  state = {
    data: [],
    previous: null,
    next: null,
    count: 0,
    pagination: {},
    loading: false,
    file: null,
    selectedRowKeys: []
  }
  componentDidMount() {
    axios.get(URL_API)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
  }
  create() {
    alert('hi');
  }
  update() {

  }
  delete() {

  }
  refresh = () => {
    axios.get(URL_API)
      .then(res => {
        this.setState({
          data: res.data
        });
      })
  }
  download(){

  }
  upload(){

  }
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
  render() {
    const columns = [
      {
        title: `${columnNames.email}`,
        dataIndex: 'email',
        key: 'email',
        //fixed: 'left',
        width: 250,
        sorter: (a, b) => a.email.length - b.email.length,
        render: (email) => (
          <Tag color="geekblue">{email}</Tag>
        )
      },
      {
        title: `${columnNames.name}`,
        dataIndex: 'first_name',
        key: 'first_name',
        //fixed: 'left',
        width: 200,
        render: (first_name) => (
          <Tag color="purple">{first_name}</Tag>
        )
      },
      {
        title: `${columnNames.surname}`,
        dataIndex: 'last_name',
        key: 'last_name',
        //fixed: 'left',
        width: 200,
        render: (last_name) => (
          <Tag color="purple">{last_name}</Tag>
        )
      },
      {
        title: `${columnNames.gender}`,
        dataIndex: 'gender',
        key: 'gender',
        render: (gender) => (
          <span>{gender}</span>
        )
      },
      {
        title: `${columnNames.status}`,
        dataIndex: 'is_active',
        key: 'is_active',
        render: (is_active) => (
          <span>
          {
            is_active ? <Tag color='green'>active</Tag> :
            <Tag color='red'>not active</Tag>
          }
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
          <span>
          <CopyEditDeleteModal />
          </span>
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
      <div className="card">
      <div className="card-header">

      <span className="pull-left">
      <CreateItem
      names={modalBlock}
      columnNames={columnNames}
      create={this.create.bind(this)}/>
      {
        show ?
        <span>&nbsp;
        <button type='button' className="btn btn-outline-primary btn-sm"
         onClick={this.refresh}><span className='fa fa-refresh'></span>
        </button>
        &nbsp;
        <button type='button' className="btn btn-outline-dark btn-sm"
         onClick={this.download}><span className='fa fa-download'></span>
        </button>
        </span>
        :
        <span>&nbsp;
        <ItemAction actions={actionBlock}/>&nbsp;
        <button className="btn btn-outline-danger btn-sm" title="delete">{actionBlock.delete}</button>
        &nbsp;
        <button type='button' className="btn btn-outline-dark btn-sm"
         onClick={this.download}><span className='fa fa-download'></span>
        </button>
        &nbsp;
        <button type='button' className="btn btn-outline-dark btn-sm"
         onClick={this.upload}><span className='fa fa-upload'></span>
        </button>
        </span>
      }
      </span>

      <span className="pull-right">
      <SearchItem searchBlock={searchBlock}/>
      </span>

      </div>
      <div className="card-body">
      <Table
      columns={columns}
      dataSource={this.state.data}
      rowSelection={rowSelection}
      defaultExpandAllRows={true}
      //expandedRowRender={record => <p>{record.name}</p>}
      size='small'
      scroll={{ x: 1200 }}
      />
      </div>
      </div>
    );
  }
}

ReactDOM.render(<ItemsTable/>, document.getElementById('root'));
