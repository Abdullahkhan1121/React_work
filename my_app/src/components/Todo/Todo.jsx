import React, { useState } from 'react'

const Todo = () => {

    let [todos,setTodos] = useState([]);
    let TotalTodos =   todos.length //derived state

    const addTask = ()=>{
        let newTask = document.getElementById("task").value;
        if (newTask == "") {
            alert("Cannot add empty Task")
        } else {
            setTodos([...todos,newTask])
            alert("Task Added")
        }
    }

    const deleteTask = (index)=>{
        let newTodos = todos.filter((task,i) =>{
            return index != i
        })
        setTodos(newTodos)
        alert("Task Deleted")
    }

    const editTask = (index) => {
        let updatedTask = prompt("Edit your task:", todos[index]);
        if (updatedTask !== null && updatedTask.trim() !== "") {
            let newTodos = [...todos];
            newTodos[index] = updatedTask.trim();
            setTodos(newTodos);
            alert("Task Updated");
        } else {
            alert("Task not updated");
        }
    };
    
  return (
    <>

    <div>

      <input type="text" id='task' placeholder='Enter a task' />
      <button onClick={addTask}>Add Task</button>

      </div>

      <ul>
        <h3>showing Todo List</h3>
        <h4>{TotalTodos}</h4>
        {
            todos.length > 0 ?
            
            todos.map((task,index)=>{
                return(<li key={index}>{task}
                <button onClick={()=>{
                    editTask(index)
                }}>Edit</button>
                <button onClick={()=>{
                    deleteTask(index)
                }}>Delete</button>
                </li>
            )
            }) : <h3>No Tasks yet</h3>
        }
      </ul>

      </>
  )
}

export default Todo
