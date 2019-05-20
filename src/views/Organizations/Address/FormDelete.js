import React, {PureComponent} from 'react';

export default class FormDelete extends PureComponent {
  render() {
    return (
      <form method="POST" id="form">
      <input type="text" id="id_organization" name="organization" value={this.props.orgID} hidden={true} />
        <div className="card-body">
        <b>{this.props.item.country}</b>,&nbsp;
        {this.props.item.postcode},&nbsp;
        {this.props.item.city},&nbsp;
        {this.props.item.street},&nbsp;
        {this.props.item.building},&nbsp;
        {this.props.item.office}&nbsp;
        </div>
      </form>
    );
  }
}
