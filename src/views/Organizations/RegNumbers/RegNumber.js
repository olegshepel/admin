import React from 'react';

export default class RegNumber extends React.PureComponent {
  render() {
    return (
      <div className="form-group col-sm-2">
        <label for={this.props.name}>
        {this.props.name}
        </label>
        <div className="input-group input-group-sm">
          <input
          id="id_"
          className="form-control"
          type="text"
          name={this.props.name}
          // onChange=
          // value=
          placeholder={this.props.name}/>
        </div>
      </div>
    );
  }
}
