import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import AllTrainsPage from './components/AllTrainsPage.component';
import SingleTrainPage from './components/SingleTrainPage.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes> {/* Use 'Routes' as the parent element */}
          <Route path="/" element={<AllTrainsPage />} /> {/* Use 'element' instead of 'component' */}
          <Route path="/trains/:trainNumber" element={<SingleTrainPage />} /> {/* Use 'element' instead of 'component' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
