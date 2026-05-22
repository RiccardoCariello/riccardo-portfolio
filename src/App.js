import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Devlog from './pages/Devlog';
import DevlogPost from './pages/DevlogPost';
import Comics from './pages/Comics';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devlog" element={<Devlog />} />
          <Route path="/devlog/:slug" element={<DevlogPost />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
