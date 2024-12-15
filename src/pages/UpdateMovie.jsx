import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MyContext } from "../MyContext";
import { db } from "../config/firebase-config";
import { getDocs, collection , updateDoc , doc , getDoc} from "firebase/firestore";


const UpdateMovie = () => {
  const { id } = useParams();
    const [movieData, setMovieData] = useState({
    title: "",
    image: "",
    rating:"",
    year: "",
    duration: "",
    genre: "",
    description: "",
    cast: "",
    director: ""
  });
    
       useEffect(() => {
        const fetchMovieData = async () => {
          try {
            const movieRef = doc(db, 'movies', id);
            const movieSnap = await getDoc(movieRef);
    
            if (movieSnap.exists()) {
              setMovieData({...movieSnap.data(), id:id}); // Populate state with fetched data
            } else {
              console.error('No such document!');
            }
          } catch (error) {
            console.error('Error fetching movie data:', error);
          }
        };
    
        fetchMovieData();
      }, []);

  const navigate = useNavigate()
  
  
    const updateMovie = async (id) =>{
      let movieDoc = doc(db, "movies" , id)
      await updateDoc(movieDoc , ...movieData)
    }

  // useEffect(() => {
  //   // Fetch movie data based on ID
  //   // This is where you would make an API call to get the movie details
  //   const fetchMovieData = async () => {
  //     try {
  //       // Replace this with your actual API call
  //       const response = await fetch(`/api/movies/${id}`)
  //       const data = await response.json()
  //       setMovieData(data)
  //     } catch (error) {
  //       console.error('Error fetching movie data:', error)
  //       navigate('/')
  //     }
  //   }

  //   fetchMovieData()
  // }, [id, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const movieRef = doc(db, 'movies', id);
    await updateDoc(movieRef, movieData);
    alert('Movie updated successfully!');
    navigate('/');
  }catch(err){
    console.log("Error updating movie:", err);
    
  }
  };

  return (
    <div className="create-movie-container">
      <div className="create-movie-box">
        <h2>Update Movie</h2>
        <form className="create-movie-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={movieData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={movieData.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="10"
              step="0.1"
              value={movieData.rating}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              value={movieData.year}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration (minutes)</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={movieData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={movieData.genre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={movieData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cast">Cast</label>
            <input
              type="text"
              id="cast"
              name="cast"
              value={movieData.cast}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="director">Director</label>
            <input
              type="text"
              id="director"
              name="director"
              value={movieData.director}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Update Movie</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateMovie
