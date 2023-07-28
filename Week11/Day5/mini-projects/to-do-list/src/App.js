import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';
import NewTodo from './NewTodo';

function App() {

const [todos, setTodos] = useState(
  ['Buy some milk', 'Do my homework'])


  return (
    <div className="App">
      <h1> Todo's</h1>
      <TodoList todos={todos} setTodos={setTodos}/>
      <NewTodo todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
