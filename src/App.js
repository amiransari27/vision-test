import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 style={{textAlign: 'center'}}>Scale Up Vision</h1>
        <AppLayout />
      </div>
    </Router>
  );
}

export default App;
