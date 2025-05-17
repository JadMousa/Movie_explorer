import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/movies';
import MovieDetails from './pages/movie_details';
import NavigationBar from './components/navbar'; 
import Footer from './components/footer'; 
import './App.css';


function App() {
  return (
    <Router>
            <div className="App-layout"></div>
      <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />

    </Router>
  );
}

export default App;
