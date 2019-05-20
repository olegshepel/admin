import React from 'react';

import Item from './Item';

export default class List extends React.PureComponent {
  render() {
    debugger;
    var data = this.props.data;
    return (
      <span>
      {data.map((item, index) =>
        <Item
        item={item}
        key={index}
        index={index}
        count={data.length}
        updateItem={this.props.updateItem}
        deleteItem={this.props.deleteItem} />
      )}
      </span>
    );
  }
}
