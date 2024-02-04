import React, { useState } from 'react';
import "./app.css"
import InputField from './components/InputField';
import { Todo } from './models/models';
import { ToDoList } from './components/ToDoList';
import { DoneList } from './components/DoneList';


const App: React.FC = () => {
  let [todo, setTodo] = useState<string>("");
  let [todos, setTodos] = useState<Todo[]>([])

  let handeleAdd = (e:React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo:todo, isDone:false}])
      setTodo("");
    }
  }
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handeleAdd={handeleAdd}/>
      <div className='list-container'>
          <ToDoList todos={todos.filter((todo)=>{return !todo.isDone})} setTodos={setTodos}/>
          <DoneList todos={todos.filter((todo)=>{return todo.isDone})} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
