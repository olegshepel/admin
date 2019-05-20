import React, {PureComponent} from 'react';

export default class OrganizationForm extends React.PureComponent {
  rendNumbers() {
    var listNodes = this.props.regNums.map((listItem, index) =>
    <div className="form-group col-sm-2">
      {listItem.reg_type}
      <div className="input-group input-group-sm">
      <b>{listItem.reg_number}</b>
      </div>
    </div>
    );
    return (
      <div className="row">
        {listNodes}
      </div>
    );
  }
  render() {
    return (
      <span>
      <div className="row">
      <div className="col-lg-6 col-sm-6">
        Name
        <div className="input-group">
          <b>{this.props.data.name}</b>
        </div>
      </div>
      <div className="col-sm-3">
        Registration Date
        <div className="input-group">
        <b>{this.props.data.reg_date}</b>
      </div>
      </div>

      <div className="col-lg-3 col-md-3">
         <i className="fa fa-flag"></i>&nbsp;
         Country
         <div className="input-group">
         <b>{this.props.data.country}</b>
         </div>
      </div>
      </div>
      <br />

      <div className="row">
      <div className="col-lg-4 col-sm-4">
        International Name
        <div className="input-group input-group-sm">
        <b>{this.props.data.intername}</b>
        </div>
      </div>
      <div className="col-lg-2 col-sm-2">
      Short Name
      <div className="input-group input-group-sm">
        <b>{this.props.data.name_short}</b>
      </div>
      </div>
      <div className="col-sm-3">
        VAT&nbsp;
        <div className="input-group input-group-sm">
          <b>{this.props.data.vat_number}</b>
        </div>
      </div>

      </div>
      <hr />
      {this.rendNumbers()}

      </span>
    );
  }
}
