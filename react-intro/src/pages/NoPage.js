import { NavLink } from "react-router-dom";

import './nopage.css';

export default function NoPage() {
  return (
    <div className="body">
      <h1 className="nopage-heading">Lost?</h1>
      <div className="text">Find your way back using these links</div>
      <div className="link-container">
        <NavLink className="link" to="/">Home Page</NavLink>
        <br/>
        <NavLink className="link" to="/signin">Sign In</NavLink>
      </div>
    </div>
  );
}
