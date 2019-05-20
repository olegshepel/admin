import React, {PureComponent} from 'react';

import Item from './Item';

export default class List extends PureComponent {
  state = {
    items: []
  }
  componentDidMount() {
    this.setState({
      items: this.props.items
    });
  }
  listRender() {
    let count = this.state.items.length;
    var listNodes = this.state.items.map((listItem, index) =>
      <Item
      count={count}
      item = {listItem}
      index={index}
      updateItem={this.props.updateItem}
      deleteItem={this.props.deleteItem}
      />
    );
    return (
      <span>
      {listNodes}
      </span>
    );
  }
  render() {
    return (
      <span>
      {this.listRender()}
      </span>
    );
  }
}
