import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Table, Row, Col, Card } from 'antd';

import * as actionTypes from '../../store/actions/actionTypes';
import { modalToggle, selectModal } from '../../store/actions/modal';
import CustomModal from '../../components/CustomModal';
import * as actionCreators from '../../store/actions/products';
import CopyUpdateDeleteDropdown from '../../components/CopyUpdateDeleteDropdown';
import * as submits from './handleSubmitProduct';
import ProductTableTitle from './ProductTableTitle';
import ProductForm from './Form/ProductForm';
import ProductDeleteForm from './Form/ProductDeleteForm';
import ProductDeletesForm from './Form/ProductDeletesForm';


class Products extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  handleSubmit() {
    submits.handleSubmitProduct(
      this.props.products,
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
    let product = this.props.products.data[submits.getIndex(this.props.products, id)];
    this.props.fillForm(product);
    this.props.selectModal(submits.setCopy(this.props.products, id));
  }
  updateItem(id) {
    let product = this.props.products.data[submits.getIndex(this.props.products, id)];
    this.props.fillForm(product);
    this.props.selectModal(submits.setUpdate(this.props.products, id));
  }
  deleteItem(id) {
    this.props.selectModal(submits.setDelete(this.props.products, id));
  }
  deleteItems(id) {
    this.props.selectModal(submits.setDeletes(this.props.products, id));
  }
  renderModal() {
    var marker=this.props.modal.modalMarker;
    var item=this.props.products.data[this.props.modal.indexSelected];
    if ((marker === actionTypes.CREATE) || (marker === actionTypes.COPY) || (marker === actionTypes.UPDATE)) {
      return (<ProductForm product={item} modalMarker={marker} />)
    } if (marker === actionTypes.DELETE) {
      return (<ProductDeleteForm item={item} />);
    } if (marker === actionTypes.DELETES) {
      return (<ProductDeletesForm />);
    } else {
      return null
    }
  }
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // width: 370,
        sorter: (a, b) => a.name.length - b.name.length,
        render: (name, record) => (
          <a onClick={this.updateItem.bind(this, record.id)}>
          <span>
          {name}
          </span>
          </a>
        )
      },
      {
        title: 'Tariff Number',
        dataIndex: 'tariff_number',
        key: 'tariff_number',
        width: 130,
        render: (tariff_number) => (
          tariff_number
        )
      },
      {
        title: 'Barcode',
        dataIndex: 'barcode',
        key: 'barcode',
        width: 130,
        render: (barcode) => (
          barcode
        )
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        width: 140,
        render: (category) => (
          category
        )
      },
      {
        title: ``,
        dataIndex: 'id',
        key: 'id',
        width: 20,
        render: (id) => (
          <CopyUpdateDeleteDropdown
          id={id}
          copyItem={this.copyItem.bind(this)}
          updateItem={this.updateItem.bind(this)}
          deleteItem={this.deleteItem.bind(this)} />
        )
      }
    ];
    const rowSelection = {
      selectedRowKeys: this.props.products.selectedRowKeys,
      onChange: this.props.onSelectChange,
    };
    return (
      <Row>
        <Col>
            <Card
              size="small"
              // style={{ minHeight: '100vh' }}
              title={
                <ProductTableTitle
                createItem={this.createItem.bind(this)}
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
            dataSource={this.props.products.data}
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
    products: state.products
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      modalToggle: modalToggle,
      selectModal: selectModal,
      removeSelectedItem: actionCreators.removeSelectedProduct,
      removeSelectedItems: actionCreators.removeSelectedProducts,
      onSelectChange: actionCreators.onSelectProducts,
      fetchItems: actionCreators.fetchProducts,
      clearForm: actionCreators.clearProductForm,
      fillForm: actionCreators.fillProductForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);
