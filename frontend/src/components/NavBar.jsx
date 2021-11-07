import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {user
        ? <>
          <NavLink to="companies">Companies</NavLink>
          <NavLink to="jobs">Jobs</NavLink>
          <NavLink to="profile">Profile</NavLink>
          <span onClick={logout}>Logout {user.username}</span>
        </>
        : <>
          <NavLink to="signup">Signup</NavLink>
          <NavLink to="login">Login</NavLink>
        </>
      }
    </nav>
  );
};

export default NavBar;
