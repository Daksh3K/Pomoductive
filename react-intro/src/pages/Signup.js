import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../AuthContext";
import "./signin.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, error, updateError } = useContext(AuthContext);

  const handleUserCreation = (event) => {
    event.preventDefault();
    createUser(email, password);
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
      <form className="auth-form" onSubmit={handleUserCreation}>
        <h1 className="auth-title">Sign Up</h1>
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
        <input type="submit" value="Sign Up" />
      </form>
      <p>
        Already have an account?
        <NavLink className="auth-navlink" to="../signin">
          Sign in here
        </NavLink>
      </p>
    </div>
  );
}
