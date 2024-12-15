import { Link } from 'react-router-dom';
import { useState } from 'react';
import {auth , googleProvider} from "../config/firebase-config";
import { createUserWithEmailAndPassword , signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate, useParams } from 'react-router-dom'

const SignIn = () => {
   let [gmail, setGmail] = useState("");
    let [password, setPassword] = useState("");
    const navigate = useNavigate()
  
    let signIn = async()=>{
      try {
        await createUserWithEmailAndPassword(auth , gmail, password)
        alert("Congragulation! You are LogIn into MovieFlix")
      } catch (error) {
        console.log(error);
      }

    }
    let signInWithGoogle = async()=>{
      try {
        await signInWithPopup(auth , googleProvider)
        alert("Congragulation! You are LogIn into MovieFlix");
        navigate("/")
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In to MovieFlix</h2>
        <form className="signin-form">
          <div className="form-group">
            <input type="email" placeholder="Email" onChange={(e)=> setGmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required />
          </div>
          <Link to="/"><button type="submit" className="signin-btn" onClick={signIn}>Sign In</button></Link>
        </form>
        <div className="divider">
          <span>or</span>
        </div>
        <button className="google-btn" onClick={signInWithGoogle}>
          <i className="fab fa-google"></i>
          Sign in with Google
        </button>
        <Link to="/" className="back-home">Back to Home</Link>
      </div>
    </div>
  )
}

export default SignIn
