import React from 'react';
import { Card, CardContent, Typography, Checkbox, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const handleToggle = () => {
    updateTodo(todo._id, { ...todo, status: !todo.status });
  };

  const handleDelete = () => {
    deleteTodo(todo._id);
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          checked={todo.status}
          onChange={handleToggle}
          color="primary"
        />
        <Box sx={{ flexGrow: 1, textDecoration: todo.status ? 'line-through' : 'none' }}>
          <Typography variant="h6">{todo.task}</Typography>
          <Typography variant="body2">{todo.description}</Typography>
          <Typography variant="body2" color="textSecondary">{todo.details}</Typography>
        </Box>
        <IconButton onClick={handleDelete} color="secondary">
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
