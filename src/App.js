import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axiosInstance from './axiosinterceptor';
import Home from './components/Home';
import TodoDisplay from './components/TodoDisplay';
import TodoForm from './components/TodoForm';


const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axiosInstance.get('/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (todo) => {
    try {
      const response = await axiosInstance.post('/api/todos', todo);
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axiosInstance.put(`/api/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axiosInstance.delete(`/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-todo" element={<TodoForm addTodo={addTodo} />} />
        <Route path="/todos" element={
          <TodoDisplay
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        } />
      </Routes>

    </Router>
  );
};

export default App;
