import { NavLink } from "react-router-dom";

import "./navigation.css";

export default function Navigation() {
  const activeStyle = {
    color: "red",
  };

  const activeStyleFunc = ({ isActive }) => {
    if (isActive) return activeStyle;
    else return undefined;
  };

  return (
    <>
      <div className="navigation-container">
        <div className="navigation-home-container">
          <NavLink className="navigation-home-logo" to="/">
            PomoDuctive
          </NavLink>

          <NavLink className="navigation-component" to="/about" style={activeStyleFunc}>
            About Us
          </NavLink>
        </div>
        <div className="navigation-buttons-container">
          <NavLink className="navigation-component" to="/signin" style={activeStyleFunc}>
            Sign In
          </NavLink>
          <NavLink className="navigation-component" to="/signup" style={activeStyleFunc}>
            Sign Up
          </NavLink>
          <NavLink className="navigation-component" to="/timer">
            <button className="navigation-action-button">
                Get Productive
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
