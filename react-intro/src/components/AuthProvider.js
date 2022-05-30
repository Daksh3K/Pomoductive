import { useState } from "react";
import { AuthContext } from "../AuthContext";
import axios from 'axios';

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const createUser = (email, password) => {
    axios.post("http://localhost:5000/signup", {
      email: email,
      password: password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((user) => {
      console.log(`${user.data.email} logged in`);
      setUser(user);
      setError(null);
    }).catch((error) => {
      setError(error);
      setUser(null);
    })
  }

  const signInUser = (email, password) => {
    axios.post("http://localhost:5000/signin", {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((user) => {
      console.log(`${user.data.email} logged in`)
      setUser(user);
      setError(null);
    }).catch((error) => {
      setError(error);
      setUser(null);
    })
  }

  const updateError = (error) => {
    setError(error);
  }

  const value = {
    user: user,
    createUser: createUser,
    signInUser: signInUser,
    error: error,
    updateError: updateError,
  }

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )

}
