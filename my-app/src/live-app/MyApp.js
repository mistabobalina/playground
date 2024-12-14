import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as Pages from '../my-app-pages';
import * as Components from '../my-components';
import '../my-animations/globalAnimations.css';

const MyApp = () => {
  return (
    <Router>
      <Components.Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Components.MyAppBar />

        <Components.Box sx={{ flex: 1, paddingBottom: 8 }}>
          <Routes>
            <Route path="/" element={<Pages.Home />} />
            <Route path="/about" element={<Pages.About />} />
            <Route path="/projects" element={<Pages.Projects />} />
            <Route path="/contact" element={<Pages.Contact />} />
          </Routes>
        </Components.Box>

        <Components.Footer />
      </Components.Box>
    </Router>
  );
};

export default MyApp;
