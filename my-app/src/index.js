import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MyApp from './live-app/MyApp';

const root = createRoot(document.getElementById('root')); // Get the root DOM element
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
