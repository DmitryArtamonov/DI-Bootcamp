import React, {useState} from 'react';


const NewTodo = ({todos, setTodos}) => {

    let [newTodo, setNewTodo] = useState("")

    const keyDownHandler = (e) => {
        if (e.key === "Enter"){
            setTodos([...todos, newTodo])
            setNewTodo('')
        }

    }

    const changeHandler = (e) => {
        setNewTodo(e.target.value)
    }


    return(
        <div>
          <label>Add a new todo:</label>
          <input 
          type="text"
          onChange={changeHandler} 
          onKeyDown={keyDownHandler}
          value={newTodo}
          ></input>
        </div>
        
    )
}

export default NewTodo