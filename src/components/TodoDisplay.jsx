import React, { useState } from 'react';
import { Container, Typography,FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import TodoList from './TodoList';
import MainNavbar from './MainNavbar';
import Footer from './Footer';

const TodoDisplay = ({ todos, updateTodo, deleteTodo }) => {
  const [filter, setFilter] = useState('all');

  const filterTodos = (todos, filter) => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.status);
    }
    if (filter === 'incomplete') {
      return todos.filter(todo => !todo.status);
    }
    return todos;
  };

  return (
    <>
    <MainNavbar/>
    <Container>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Filter</InputLabel>
        <Select
          value={filter}
          label="Filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
          <MenuItem value="incomplete">Incomplete</MenuItem>
        </Select>
      </FormControl>
      <TodoList
        todos={filterTodos(todos, filter)}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </Container>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </>
  );
};

export default TodoDisplay;
