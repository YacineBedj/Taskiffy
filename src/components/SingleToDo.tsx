import React, { useState } from 'react';

import { Todo } from '../models/models'
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

interface Props{
    todo:Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export  const  SingleToDo = ({todo, setTodos}:Props) => {
  const [newTodo,setNewTodo] = useState<string>(todo.todo) 
  const [edit, setEdit] = useState<boolean>(false)
  return (
    <div className='todos__single'>
      <div className="todos__single--text">
          {edit? 
              <form action=""
                onSubmit={(e)=>{
                  e.preventDefault();
                  setTodos((oldTodos)=>{
                    return oldTodos.map((oldTodo)=>oldTodo.id === todo.id?{...todo, todo: newTodo} : oldTodo)
                 }) 
                  setEdit((oldEdit)=>!oldEdit); 
                }}  
              >
              <input 
                  className='todos__single--input'
                  type="text" 
                  value={newTodo}
                  onChange={(e)=>{
                    setNewTodo(e.target.value)
                    
                  }}
              /> 
              </form>  
              : todo.todo
          }
      </div>
      {/* ----------------------- */}
      <div className='.todos__single--utils'>
      <span 
          className="icon"
          onClick={(e)=>{
            setEdit((oldEdit)=>{return !oldEdit })
          }}
        >
            {<MdOutlineModeEdit />}
        </span>
        {/* *----------------------------- */}
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
            {<MdOutlineDone />}
        </span>
      </div>
    </div>
  )
}
