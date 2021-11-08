import { Link, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import { UserContext } from "../App";

const Home = () => {
  const {user} = useContext(UserContext);
  const styleProps = {
    heading: {
      variant: "h3",
      component: "h2",
      color: "primary",
      gutterBottom: true
    },
    paragraph: {
      variant: "body1",
      gutterBottom: true,
      sx: {
        mb: 2
      }
    },
    link: {
      component: RouterLink,
      underline: "hover",
      color: "secondary"
    }
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 1,
        width: "fit-content",
        mx: "auto",
        textAlign: "center"
      }}
    >
      {user
        ? <>
        <Typography {...styleProps.heading}>
          Welcome {user.username}!
        </Typography>
          <Typography {...styleProps.paragraph}>
            So glad that you're here {`${user.firstName} ${user.lastName}`}. Now's the time to check out companies and the many jobs that they have.
          </Typography>
        </>
        : <>
          <Typography {...styleProps.heading}>
            Howdy Stranger!
          </Typography>
          <Typography {...styleProps.paragraph}>
            In order to use the site, you must have an account. Please <Link to="signup" {...styleProps.link}>sign up</Link> or <Link to="login" {...styleProps.link}>login</Link> to continue.
          </Typography>
        </>
      }
    </Paper>
  );
};

export default Home;
