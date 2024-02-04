import React from 'react'
import "./style.css"

interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handeleAdd: (e: React.FormEvent) => void;
}

function InputField({todo, setTodo, handeleAdd} : Props) {
  return (
    <form action="" className='input'>
        <input 
            type="text" 
            placeholder='add a task' 
            className='input__box' 
            onChange={(e)=>{setTodo(e.target.value)}}
            value={todo}
        />
        <button className='input__submit' onClick={handeleAdd}>Go</button>
    </form>
  )
}

export default InputField
