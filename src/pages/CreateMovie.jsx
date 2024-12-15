import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from "../config/firebase-config";
import { getDocs, addDoc , collection  } from "firebase/firestore";


const CreateMovie = () => {
  

  const myCollection = collection(db, "movies");
  const navigate = useNavigate()
  const [movieData, setMovieData] = useState({
    title: '',
    image: '',
    rating: '',
    year: '',
    duration: '',
    genre: '',
    description: '',
    cast: '',
    director: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setMovieData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
    await addDoc(myCollection,{...movieData})
    console.log('Movie Data:', {...movieData})
    navigate("/")
  }catch(err){
    console.log(err);
  }
  }

  return (
    <div className="create-movie-container">
      <div className="create-movie-box">
        <h2>Add New Movie</h2>
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

          <div className="form-row">
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
                min="1900"
                max={new Date().getFullYear()}
                value={movieData.year}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                id="duration"
                name="duration"
                placeholder="2h 30min"
                value={movieData.duration}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              placeholder="Action, Adventure, Drama"
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
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cast">Cast</label>
            <input
              type="text"
              id="cast"
              name="cast"
              placeholder="Actor 1, Actor 2, Actor 3"
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

          <div className="form-buttons">
            <button type="submit" className="submit-btn">Add Movie</button>
            <button type="button" className="cancel-btn" onClick={() => navigate('/')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateMovie
