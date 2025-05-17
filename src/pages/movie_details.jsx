import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';

function MovieDetails() {
  const { id } = useParams(); // 🟡 Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=0eca3efb866c9300d8bb6d7d2b23886d`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error('Error fetching movie:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <Container className="mt-5">
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : movie ? (
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  <strong>Overview:</strong> {movie.overview}
                </Card.Text>
                <Card.Text>
                  <strong>Rating:</strong> ⭐ {movie.vote_average}
                </Card.Text>
                <Card.Text>
                  <strong>Release Date:</strong> {movie.release_date}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <div className="text-center">
          <h4>Movie not found</h4>
        </div>
      )}
    </Container>
  );
}

export default MovieDetails;
