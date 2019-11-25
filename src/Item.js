import React, { Component } from 'react'

class Item extends Component {
  render(){
    const item = this.props.item;
    return(
      <div className="item">
        <td>{item.children[0].value}</td>
      </div>
    )
  }
}

export default Item
