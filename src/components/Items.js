import React, { Component } from 'react'
import Item from './Item'

class Items extends Component {
  render(){
    if (this.props.items === null || this.props.items === undefined) return null;

    return this.props.items.map(item => <Item key={item.children[0].value} item={item} />);
  }
}

export default Items
