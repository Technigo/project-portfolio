import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { MainWrapper } from './components/content/main-wrapper.jsx'
import { AllProjectsPage } from './components/content/allprojects/allprojects'; // Import your new page component


function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainWrapper />} />
          <Route path="/all-projects" element={<AllProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
