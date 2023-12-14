import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
const [input, setInput] = useState('')
const dispatch = useDispatch()


const addTodoHandler = (e) => {
       e.preventDefault() 

        dispatch(addTodo(input))
        setInput('')
}
  return (
    <button type="submit" className='white'> Add Todo </button>
  )
}

export default AddTodo