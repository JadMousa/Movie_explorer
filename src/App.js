import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/movies';
import NavigationBar from './components/navbar';


function App() {
  return (
    <Router>
       <NavigationBar /> {/*NavBar instead of links */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
}


export default App;
