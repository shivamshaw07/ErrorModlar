import React from 'react'
import './ListItem.css'
const ListItem = (props) => {
  return (
    <div className='item'>
        {props.name} ({props.age} years old)
    </div>
    
  )
}

export default ListItem
