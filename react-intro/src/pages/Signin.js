import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../AuthContext";
import "./signin.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser, error, updateError } = useContext(AuthContext);

  const handleUserSignIn = (event) => {
    event.preventDefault();
    console.log(email, password);
    signInUser(email, password);
  };

  /**
  * This useEffect is run whenever the Signup page is
  * initally loaded and when it is dismounted.
  * This useEffect nullifies any existing error due
  * to sigin or signup errors in AuthProvider
  */
  useEffect(() => {
    return () => {
      updateError(null);
    }
  }, [])

  return (
    <div className="auth-body elevation-1">
      <form className="auth-form" onSubmit={handleUserSignIn}>
        <h1 className="auth-title">Sign In</h1>
        { error ? <div> { error.response.data } </div> : null}
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email-input"
          autoFocus
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password-input">Password</label>
        <input
          type="password"
          id="password-input"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Sign In" />
      </form>
      <p>
        Don't have an account?<NavLink className="auth-navlink" to="../signup">Register here</NavLink>
      </p>
    </div>
  );
}
