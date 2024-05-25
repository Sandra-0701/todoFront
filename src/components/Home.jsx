import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <MainNavbar />
      <Container>
        <Grid container spacing={4} sx={{ marginTop: 3 }}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  Welcome to Todo Dashboard
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Manage your tasks efficiently with Todo Dashboard. Keep track of your to-do list,
                  mark tasks as completed, and stay organized.
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  With Todo Dashboard, you can:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Add new tasks with descriptions and details.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Mark tasks as completed or ongoing.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Delete tasks that are no longer needed.
                    </Typography>
                  </li>
                </ul>
                <Button variant="contained" color="primary"component={Link} to="/add-todo">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
