import React, { Component } from 'react'
import Item from './Item'

class Items extends Component {
  render(){
    return(
      <div class="items">
        {this.props.items.map(item => <Item item={item} />)}
      </div>
    )
  }
}

export default Items
