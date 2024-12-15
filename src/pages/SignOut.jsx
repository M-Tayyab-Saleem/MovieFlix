import React from "react";
import { useParams, Link } from "react-router-dom";

const SignOut = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>You have SignOut from MovieFlix</h2>
        <Link to="/" className="back-home">Back to Home</Link>
      </div>
    </div>
  );
};

export default SignOut;
