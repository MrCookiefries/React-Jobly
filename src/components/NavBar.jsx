import { NavLink } from "react-router-dom";

const NavBar = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="companies">Companies</NavLink>
    <NavLink to="jobs">Jobs</NavLink>
  </nav>
);

export default NavBar;
