import React, {Component} from 'react';

class InvoiceDeleteForm extends Component {

  state = {
    description: ''
  }

  componentDidMount() {
    this.setState({
      description: this.props.data.description
    })
  }

  render() {
    return (
      <form method="POST" id="invoice_form">
        <div className="card-body">
        {this.state.description}
        </div>
      </form>
    );
  }
}

export default InvoiceDeleteForm;
