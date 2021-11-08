import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Layout = () => {

  return (
    <>
      <header>
        <Box
          sx={{
            mt: 2,
            mb: 4
          }}
        >
          <Typography
            align="center"
            variant="h2"
            color="primary"
            component="h1"
          >
            Jobly!
          </Typography>
          <Typography
            align="center"
            variant="subtitle1"
            color="secondary"
            gutterBottom
          >
            A place for jobs.
          </Typography>
        </Box>
      </header>
      <NavBar />
      <main>
        <Box
          sx={{
            mt: 4,
            mx: 2
          }}
        >
          <Outlet />
        </Box>
      </main>
    </>
  );
};

export default Layout;
