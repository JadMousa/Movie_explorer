import { Card } from 'react-bootstrap';
function MovieCard({ movie }) {
    return (
  <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
  
  export default MovieCard;
  