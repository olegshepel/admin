import React, {Component} from 'react';

import PhoneItem from './PhoneItem';

class PhoneList extends Component {

  phoneRender() {
    if (this.props.phones) {
      return this.props.phones.map((listItem, index) => {
        return (
          <PhoneItem
          count={this.props.phones.length}
          item = {listItem}
          index={index}
          updateItem={this.props.updateItem}
          deleteItem={this.props.deleteItem}
          />
        );
      });
    }
    else {
      return [];
    }
  }

  render() {
    return (
      <span>
      {this.phoneRender()}
      </span>
    );
  }
}

export default PhoneList;
