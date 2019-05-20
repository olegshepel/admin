import React, {Component} from 'react';

class PhoneDelete extends Component {

  state = {
    phone: []
  }

  componentDidMount() {
    this.setState({
      phone: this.props.phone
    });
  }

  render() {
    return (
      <form method="POST" id="phone_delete">
        <div className="card-body">
        ({this.state.phone.phone_code}) {this.state.phone.number} &#xb7;&nbsp;{this.state.phone.type}
        </div>
      </form>
    );
  }
}

export default PhoneDelete;
