
import './App.css';
import LandingPage from './LandingPage';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/project3" element={<Project3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
