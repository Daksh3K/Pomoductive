import { NavLink } from "react-router-dom";

export default function NoPage() {
  return (
    <div>
      Lost? Go back to the app using these links
      <NavLink to="/">Home Page</NavLink>
    </div>
  )
}