import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import MovieDetails from './pages/MovieDetails'
import SignOut from "./pages/SignOut";
import CreateMovie from "./pages/CreateMovie";
import { MyContext } from "./MyContext";
import { useState , useEffect } from "react";
import { db } from "./config/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import "./App.css"
import UpdateMovie from "./pages/UpdateMovie";
import ImageUpload from "./pages/ImageUpload";

function App() {
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
     
  return (
    <div className="App">
      <MyContext.Provider value={{ movies, setMovies }}>
      <BrowserRouter>
       <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/create-movie" element={<CreateMovie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/update-movie/:id" element={<UpdateMovie/>} />
        <Route path="/upload-image" element={<ImageUpload />} />
      </Routes>
    </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
