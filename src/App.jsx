import { useEffect, useState } from 'react';
import Form from './components/form/Form';
import Navbar from './components/navbar/Navbar';
import List from './components/list/list';
import './App.css';
import svg from './components/image.svg'
function todoFromLocalStorage() {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos === null) {
    return [];
  }
  try {
    return JSON.parse(storedTodos);
  } catch (error) {
    console.error("Error parsing todos from local storage:", error);
    return [];
  }
}




function App() {
  const [todos, setTodos] = useState(todoFromLocalStorage()); 

  const AddTodos = (newTodo) => {
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  }
  
  const handleDelete = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id;
      });
    });
  }
  
  useEffect(() => {
    if (todos) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="App">
      <div className="app-container">
      <Navbar></Navbar>
      <Form AddTodos={AddTodos}></Form>
      <h3>{todos.length === 0 && <img src={svg} alt="" />}</h3>
      <List todos={todos} handleDelete={handleDelete}></List>
      </div>
    </div>
  );
}

export default App;
