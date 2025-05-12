import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/movies';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/movies">Movies</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
