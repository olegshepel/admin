import React from 'react';

export default class Form extends React.PureComponent {
  state = {
    name: ''
  }
  componentDidMount() {
    this.setState({
      name: this.props.dataProp.name
    });
  }
  render() {
    return (
      <div>
      {this.state.name}
      <p>
      separator
      </p>
      </div>
    );
  }
}
