import React from 'react'
import Button from '../UI/Button/Button';
import './ErrorModlar.css'

const ErrorModlar = (props) => {
    const onClick = (value) =>{
        props.onClickBtn(value)
    }
  return (
    <div className='modlar'>
        <h1 style={{backgroundColor:'rgb(192, 37, 181)', padding:'.3rem 1.2rem', borderRadius:'4px', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.26)'}}>An error occured</h1>
      <p style={{fontWeight:'bold'}}>Invalid Input</p>
      <button onClick = {onClick}>Close</button>
    </div>
  )
}

export default ErrorModlar
