import { useParams, Link } from "react-router-dom";
import { useContext, } from "react";
import { useNavigate } from 'react-router-dom'
import { MyContext } from "../MyContext";
import { db } from "../config/firebase-config";
import { collection , deleteDoc , doc} from "firebase/firestore";

const MovieDetails = () => {
  let {movies, setMovies} = useContext(MyContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const movie = movies.find(m => m.id == id)

  if (!movie) return <div>Movie not found</div>


  const deleteMovie = async (id) =>{
    let movieDoc = doc(db, "movies" , id)
    await deleteDoc(movieDoc)
    navigate("/")
  }

  return (
    <div className="movie-details">
       <div className="movie-header">
        <img src={movie.image} alt={movie.title} className="movie-poster" />
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span className="rating">⭐ {movie.rating}/10</span>
            <span className="duration">{movie.duration}</span>
            <span className="year">{movie.year}</span>
          </div>
          <p className="genre">{movie.genre}</p>
          <p className="description">{movie.description}</p>
          <div className="cast">
            <h3>Cast</h3>
            <p>{movie.cast}</p>
          </div>
          <div className="director">
            <h3>Director</h3>
            <p>{movie.director}</p>
          </div>
          <Link to="/"><button className="nav-btn" onClick={()=> deleteMovie(movie.id)}>Delete</button></Link>
          <Link to={`/update-movie/${movie.id}`}><button className="nav-btn">Update</button></Link>
        </div>
      </div>
      <Link to="/" className="back-btn">Back to Movies</Link>
    </div>
  );
};

export default MovieDetails;
