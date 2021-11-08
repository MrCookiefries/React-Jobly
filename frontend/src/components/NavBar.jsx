import { AppBar, Box, Button, Link, Toolbar } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const { user, logout } = useContext(UserContext);
  const linkProps = {
    underline: "hover",
    component: NavLink,
    color: "text.primary",
  };
  
  return (
    <AppBar enableColorOnDark color="secondary" component="nav" position="sticky">
      <Toolbar>
        <Box sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          alignItems: "center"
        }}>
          <Link {...linkProps} to="/">Home</Link>
          {user
            ? <>
              <Link {...linkProps} to="companies">Companies</Link>
              <Link {...linkProps} to="jobs">Jobs</Link>
              <Link {...linkProps} to="profile">Profile</Link>
              <Button
                variant="contained"
                onClick={logout}
                color="warning"
              >
                Logout
              </Button>
            </>
            : <>
              <Link {...linkProps} to="signup">Sign Up</Link>
              <Link {...linkProps} to="login">Login</Link>
            </>
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
