import React, {Component} from 'react';

class QuotationDeleteForm extends Component {

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
      <form method="POST" id="inquire_form">
        <div className="card-body">
        {this.state.description}
        </div>
      </form>
    );
  }
}

export default QuotationDeleteForm;
