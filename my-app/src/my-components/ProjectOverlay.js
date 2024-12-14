import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';

const ProjectOverlay = ({ project, onClose }) => {
  const [showFullDescription, setShowFullDescription] = React.useState(false);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        zIndex: 1300,
        overflowY: 'auto',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 0.5s ease',
      }}
    >
      <Button
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          backgroundColor: 'primary.main',
          color: 'white',
        }}
      >
        Back
      </Button>
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h3">{project.name}</Typography>
        <Typography
          variant="body1"
          onClick={() => setShowFullDescription(!showFullDescription)}
          sx={{
            cursor: 'pointer',
            mt: 2,
            color: 'text.secondary',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          {showFullDescription ? project.longDescription : project.shortDescription}
        </Typography>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Process Content
        </Typography>
        <Typography variant="body2">
          Here’s where you can showcase your process for this project. Add images, details, or any other content you want.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectOverlay;
