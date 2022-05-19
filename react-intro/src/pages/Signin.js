import { useState, useContext } from "react";

import { AuthContext } from "../AuthContext";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser } = useContext(AuthContext);

  const handleUserSignIn = (event) => {
    event.preventDefault();
    console.log(email, password)
    signInUser(email, password)
  };

  return (
    <div>
      <form onSubmit={handleUserSignIn}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}
