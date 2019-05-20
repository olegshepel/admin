import React from 'react';

export default class SearchItem extends React.Component {
  render() {
    let placeholder = 'Search';
    if (this.props.searchBlock) {
      placeholder = this.props.searchBlock.placeholder;
    }
    return (
      <div className="input-group input-group-sm mb-3">
      <div className="input-group-prepend">
      <span className="input-group-text" id="inputGroup-sizing-sm">
      <a href="#"><span className="fa fa-search"></span></a>
      </span>
      </div>
      <input
      type="text"
      className="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-sm"
      placeholder={placeholder}
       />
      <div className="input-group-append">
      <span className="input-group-text" id="inputGroup-sizing-sm">
      <a href="#"><span className="fa fa-angle-down"></span></a>
      </span>
      </div>
      </div>
    );
  }
}
