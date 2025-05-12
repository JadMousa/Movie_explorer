import { useEffect, useState } from 'react';
import MovieCard from '../components/moviecard'; // ✅ Adjust path if needed
import '../App.css';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=0eca3efb866c9300d8bb6d7d2b23886d'
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="App">
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
