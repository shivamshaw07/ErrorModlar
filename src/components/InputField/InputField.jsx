import React, { useState } from 'react'
import './InputField.css'
import Button from '../UI/Button/Button'
const InputField = (props) => {
    const [name,setName] = useState('')
    const [age,setAge] = useState(0)

    const changeHandler = (type,value) =>{
        if(type === 'name'){
            setName(value)
        }
        if(type === 'age'){
            setAge(value)
        }
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        if(age<0){
            props.checkInput(false)
            return;
        }
        if(name.length === 0 || !age){
            props.checkInput(false)
            console.log('aree yrr');
            return;
        }
        props.getItems(name,age);
        props.checkInput(true)
        setName('')
        setAge(0)
    }
  return (
    <form onSubmit={submitHandler} className='InputField'>
      <label htmlFor="name">Enter your name</label>
      <input type="text" id='name' value={name}onChange={(event) => changeHandler('name',event.target.value)}/>
      <label htmlFor="age">Enter your age</label>
      <input type="number" id='age' value ={age}onChange={(event) => changeHandler('age',event.target.value)}/>
      <Button type='submit'>Add</Button>
    </form>
  )
}

export default InputField
