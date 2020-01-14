import React, { Component } from 'react'

class Item extends Component {
  render(){
    const item = this.props.item;
    return(
        <tr>
          <td>
            {item.children[0].value}
          </td>
        </tr>
    )
  }
}

export default Item
