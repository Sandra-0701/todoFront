import React, { useState } from 'react';
import { Container, TextField, MenuItem, Button, Box, Typography } from '@mui/material';
import MainNavbar from './MainNavbar';
import Footer from './Footer';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState('ongoing');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && description) {
      addTodo({
        task,
        description,
        details,
        status: status === 'completed',
      });
      setTask('');
      setDescription('');
      setDetails('');
      setStatus('ongoing');
    }
  };

  return (
    <>
      <MainNavbar />
      <Container>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Typography variant="h4" gutterBottom>
            Add New Todo
          </Typography>
          <TextField
            label="Task"
            variant="outlined"
            fullWidth
            margin="normal"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Details"
            variant="outlined"
            fullWidth
            margin="normal"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <TextField
            select
            label="Status"
            variant="outlined"
            fullWidth
            margin="normal"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="ongoing">Ongoing</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Add Todo
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default TodoForm;
