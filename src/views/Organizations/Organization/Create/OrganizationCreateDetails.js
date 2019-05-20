import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Drawer } from 'antd';
import 'antd/dist/antd.css';

import CreateForm from './CreateForm';
import Fetcher from './Fetcher';

import { drawerToggle } from '../../../../store/actions/drawer';


class OrganizationCreateDetails extends Component {
  render() {
   return (
     <div className="row">
     <div className="col-md-12">
     <div className="card">
     <Drawer
     title="Basic Drawer"
     placement="right"
     closable={false}
     onClose={this.props.drawerToggle}
     visible={this.props.drawer}
     >
     <Fetcher />
     </Drawer>
       <div className="card-header">
         <span className="pull-left">
         Organization Details&nbsp;
         </span>
         <span className="pull-right">
         <button className="btn btn-outline-primary btn-sm"
         onClick={this.props.drawerToggle}>
         <span className="fa fa-search"></span>
         </button>
         </span>
       </div>
       <div className="card-body">
       <CreateForm />
       </div>
     </div>
     </div>
     </div>
   );
 }
}

function mapStateToProps(state) {
  return {
    drawer: state.drawer.visible
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      drawerToggle: drawerToggle
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(OrganizationCreateDetails);
