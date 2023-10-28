import React from 'react'
import './List.css';
const List = ({todos, handleDelete}) => {
  return (
    <div className='todo'>
        <ul>
            {todos.map((todo) =>{
                return (
                    <li key={todo.id}>
                        <h2>{todo.title}</h2>
                        <p className='comp'>Completed: {todo.completed ? '✔' : '❌'}</p>
                        <button className='btn' onClick={() => handleDelete(todo.id)}>delete</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default List;