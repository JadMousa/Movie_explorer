import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function MovieCard({ movie }) {
    return (
      <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card className="h-100 shadow-sm">
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width={200}
        />
      <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
  
  export default MovieCard;
  