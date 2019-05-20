import React, {PureComponent} from 'react';

export default class ProductDeleteForm extends PureComponent {

  render() {
    return (
      <form method="POST" id="product_form">
        <div className="card-body">
          {this.props.item.name}
        </div>
      </form>
    );
  }
}
