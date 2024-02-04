import React from 'react'
import { Todo } from '../models/models'
import { SingleDone } from './SingleDone';


interface Props{
    todos:Todo[]; 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const DoneList = ({todos, setTodos}:Props) => {
  return (
    <div className='done--list'>
        {todos.map((todo)=>{return <SingleDone key={todo.id} todo={todo} setTodos={setTodos   }/>})}
    </div>
  )
}
