import React, { useState } from 'react';

import { Todo } from '../models/models'
import { MdDelete } from "react-icons/md";
import { IoIosRepeat } from "react-icons/io";
interface Props{
    todo:Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export  const  SingleDone = ({todo, setTodos}:Props) => {
  return (
    <div className='done__single'>
      <div className="todos__single--text">
          {todo.todo}
      </div>
      {/* ----------------------- */}
      <div className='.todos__single--utils'>
              <span 
          className="icon"
          onClick={(e)=>{
            setTodos((oldTodos)=>{
              return oldTodos.filter((oldTodo)=>oldTodo.id !== todo.id)
            })
          }}
        >
            {<MdDelete />}
        </span>
        {/* ------------------------------------ */}
        <span 
          className="icon"
          onClick={(e)=>{
            setTodos((oldTodos)=>{
              let newIsDone:boolean = !todo.isDone;
              return oldTodos.map((oldTodo)=>oldTodo.id === todo.id?{...todo, isDone: newIsDone} : oldTodo)
           })
          }}
        >
            {<IoIosRepeat />}
        </span>
      </div>
    </div>
  )
}
