import React from 'react'
import './ListField.css'
import ListItem from '../ListItem/ListItem'

const ListField = (props) => {
  return (
    <div className='ListField'>
      {props.items.map(
        item => (
            <ListItem key = {Math.random()} age = {item.age} name = {item.name}/>
      )
      )}
    </div>
  )
}

export default ListField
