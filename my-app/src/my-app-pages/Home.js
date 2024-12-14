import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      {/* Intro Section */}
      <Typography variant="h3" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1" gutterBottom>
        I’m passionate about creating impactful designs and coding awesome projects.
      </Typography>

      {/* Highlight Section */}
      <Grid container spacing={3} sx={{ marginTop: '30px' }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea component={Link} to="/about">
              <CardContent>
                <Typography variant="h5">About Me</Typography>
                <Typography variant="body2">
                  Learn more about my background and skills.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea component={Link} to="/projects">
              <CardContent>
                <Typography variant="h5">Projects</Typography>
                <Typography variant="body2">
                  Explore my portfolio of work and accomplishments.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea component={Link} to="/contact">
              <CardContent>
                <Typography variant="h5">Contact Me</Typography>
                <Typography variant="body2">
                  Get in touch to discuss opportunities or collaborations.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
