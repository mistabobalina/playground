import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ProjectCard = ({ title, description, image, onClick }) => {
  return (
    <Card
      onClick={onClick} // This should call the function passed as a prop
      sx={{
        cursor: 'pointer',
        width: '100%',
        maxWidth: 300,
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 140,
        }}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
