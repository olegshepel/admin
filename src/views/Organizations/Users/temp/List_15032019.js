import React from 'react';

import Item from './Item';

export default class List extends React.PureComponent {
  render() {
    var array = [];
    var items = this.props.items;
    var count = this.props.items.length;
    for(let i = 0; i < this.props.items.length; i++) {
      array.push(
        <Item
        key={i}
        index={i}
        item={items[i]}
        count={count}
        deleteItem={this.props.deleteItem} />
      );
    }
    return (
      <span>
        {array}
      </span>
    );
  }
}
