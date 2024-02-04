import React from 'react'
import { Todo } from '../models/models'
import {SingleToDo} from './SingleToDo';

interface Props{
    todos:Todo[]; 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const ToDoList = ({todos, setTodos}:Props) => {
  return (
    <div className='todos'>
      {todos.map((todo)=>{return <SingleToDo key={todo.id} todo={todo} setTodos={setTodos}/>})}
    </div>
  )
}
