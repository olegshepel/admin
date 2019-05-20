import React, { Component } from 'react';
import { Select }  from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../../../store/actions/inquires';
import { fetchGroups } from '../../../store/actions/groups';

const Option = Select.Option;


class Groups extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  onChange = (value, e) => {
    if ( value === undefined) {
      value = {key: '', label: ''};
    }
    this.props.onChange({ groups: value });
  }

  render() {

    const options = [];
    for (let i=0; i < this.props.options.length; i++) {
      options.push(<Option key={this.props.options[i].value}>{this.props.options[i].label}</Option>);
    }

    var inputs = this.props.groups.map((listItem, index) =>
      <input id="id_groups" name="groups" hidden={true} value={listItem} />
    );

    return (
      <div className="form-group form-group-sm col-sm-5">
        <label for="category">Participation Groups&nbsp;
        </label>
        {inputs}
        <Select
        id="id_groups"
        name="groups"
        mode="multiple"
        allowClear={true}
        showSearch={true}
        optionFilterProp="options"
        size={"small"}
        // labelInValue={true}
        // defaultActiveFirstOption={true}
        // defaultValue={this.props.values}
        // defaultValue={this.props.groups}
        value={this.props.groups}
        onChange={this.onChange}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
        {options}
        </Select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    options: state.groups.data,
    groups: state.inquires.groups
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchItems: fetchGroups,
      onChange: actionCreators.setInquireForm
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Groups);
