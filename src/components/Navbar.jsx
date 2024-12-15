import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from "../config/firebase-config";
import "../App.css"

const Navbar = () => {
  let logOut = async()=>{
        try {
          await signOut(auth)
          alert("You are LogOut into MovieFlix")
        } catch (error) {
          console.log(error);
        }
      }
      
  return (
    <nav className="navbar">
      <div className="logo">MovieFlix</div>
      <div className="nav-buttons">
        <Link to="/create-movie" className="nav-btn">Add Movie</Link>
        <Link to="/signin" className="nav-btn">Sign In</Link>
        <Link to="/signout"><button className="nav-btn" onClick={logOut}>Sign Out</button></Link>
        
      </div>
    </nav>
  )
}

export default Navbar
