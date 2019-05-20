import React from 'react';
import RegNumber from './RegNumber';

export default class RegNumbers extends React.PureComponent {
  listRender() {
    var regTypes = this.props.regTypes;
    var listNodes = regTypes.map((listItem, index) =>
      <RegNumber
      name={listItem.name}
      index={index}/>
    );
    return (
      <div className="row">
      <div className="col-sm-2">
        <label for='duns'>
        <b>DUNS</b>
        </label>
        <div className="input-group input-group-sm">
          <input
          id="id_duns"
          name="duns"
          className="form-control form-control-sm"
          type="text"
          // onChange=
          // value=
          placeholder='DUNS'/>
        </div>
      </div>

      {listNodes}
      </div>
    );
  }
  render() {
    return (
      <span>
        {this.listRender()}
      </span>
    );
  }
}
