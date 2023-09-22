import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card' style={props.check ? { display: 'none' } : null}>
      {props.children}
    </div>
  )
}

export default Card
