import { useContext , useState, useEffect} from "react";
import MovieCard from "../components/MovieCard";
import { db } from "../config/firebase-config";
import { getDocs, collection , doc} from "firebase/firestore";
import {auth} from "../config/firebase-config"

const Home = () => {
    let [movies, setMovies] = useState([]);
        
       const myCollection = collection(db, "movies");
  
       useEffect(() => {
         let getMovies = async () => {
           try {
             const data = await getDocs(myCollection);
             const filterData = data.docs.map((doc) => ({
               ...doc.data(),
               id: doc.id,
             }));
             setMovies(filterData);
           } catch (err) {
             console.log(err);
           }
         };
     
         getMovies();
       }, []);
  
       console.log(auth?.currentUser?.email);
       
  return (
    <div className="movie-container">
       {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}  
    </div>
  );
};

export default Home;
