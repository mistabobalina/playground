import React, { useState } from 'react';
import ProjectGrid from '../my-components/ProjectGrid';
import ProjectOverlay from '../my-components/ProjectOverlay';
import projects from '../my-data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    console.log('Project clicked:', project); // Debugging: Logs the clicked project
    setSelectedProject(project);
  };

  const handleCloseOverlay = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <ProjectGrid projects={projects} onProjectClick={handleProjectClick} />
      {selectedProject && (
        <ProjectOverlay project={selectedProject} onClose={handleCloseOverlay} />
      )}
    </div>
  );
};

export default Projects;
