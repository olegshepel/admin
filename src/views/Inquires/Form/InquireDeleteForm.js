import React, {Component} from 'react';

class InquireDeleteForm extends Component {

  render() {
    return (
      <form method="POST" id="inquire_form">
        <div className="card-body">
          {this.props.item.description}
        </div>
      </form>
    );
  }
}

export default InquireDeleteForm;
