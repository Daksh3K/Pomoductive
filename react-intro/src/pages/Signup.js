import { useContext, useState } from "react";

import { AuthContext } from "../AuthContext";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { createUser } = useContext(AuthContext);

  const handleUserCreation = (event) => {
    event.preventDefault();
    createUser(email, password);
    
  }
  
  return (
    <div>
      <form onSubmit={handleUserCreation}>
        <input type="email" placeholder="email" onChange={(e) => {setEmail(e.target.value)}}/>
        <input type="password" placeholder="password" onChange={(e) => {setPassword(e.target.value)}}/>
        <input type="submit">Sign Up</input>
      </form>
    </div>
  )
}