import React, { Component } from 'react'

class Item extends Component {
  render(){
    const item = this.props.item;
    return(
      <div>
        {item.children[0].value}
      </div>
    )
  }
}

export default Item
