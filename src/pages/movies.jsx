import { useEffect, useState } from 'react';
import MovieCard from '../components/moviecard'; // ✅ Adjust path if needed
import { Container, Row, Col, Spinner } from 'react-bootstrap';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


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
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <Container className="mt-4">
    <h2 className="text-center mb-4">Popular Movies</h2>

    {loading ? (
      <div className="text-center">
        <Spinner animation="border" />
      </div>
    ) : (
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    )}
  </Container>
);
}

export default Movies;
