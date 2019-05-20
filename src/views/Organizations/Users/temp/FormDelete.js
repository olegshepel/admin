import React, {PureComponent} from 'react';

export default class FormDelete extends PureComponent {
  render() {
    return (
      <form method="POST" id="form">
      <input type="text" id="id_organization" name="organization" value={this.props.organization_id} hidden={true} />
        <div className="card-body">
        {this.props.item.email} ({this.props.item.name} {this.props.item.surname})
        <hr />
        {this.props.item.role}
        </div>
      </form>
    );
  }
}
