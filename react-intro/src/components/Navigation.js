import { NavLink } from "react-router-dom";

export default function Navigation() {

  const activeStyle = {
    color: "red",
  }
  
  const activeStyleFunc = ({ isActive }) => {
    if (isActive) return activeStyle;
    else return undefined;
  }

  return (
    <>
      <NavLink to="/" style={activeStyleFunc}>Home</NavLink>
      {" | "}
      <NavLink to="/timer" style={activeStyleFunc}>Timer</NavLink>
      {" | "}
      <NavLink to="/signin" style={activeStyleFunc}>Sign In</NavLink>
      {" | "}
      <NavLink to="/signup" style={activeStyleFunc}>Sign Up</NavLink>
      {" | "}
      <NavLink to="/about" style={activeStyleFunc}>About Us</NavLink>
    </>

  )
}