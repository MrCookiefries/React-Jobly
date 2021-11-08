import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import CompanySearch from "./CompanySearch";
import { Container, Grid, Paper, Typography } from "@mui/material";

const CompanyList = () => {
  const [companies, setCompanies] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await JoblyApi.getCompanies();
      setCompanies(resp);
    })();
  }, []);

  async function searchCompanies(searchTerm) {
    const resp = await JoblyApi.getCompanies({ name: searchTerm });
    setCompanies(resp);
  }

  return (
    <Container maxWidth="xl">
      <Paper
        elevated={4}
        sx={{
          p: 1
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          color="primary"
          gutterBottom
          align="center"
        >
          Companies
        </Typography>
        <Outlet />
        <CompanySearch searchCompanies={searchCompanies} />
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          {companies
            ? companies.length
              ? companies.map(c =>
                <Grid key={c.handle} item xs={12} sm={10} md={6} lg={6} xl={4}>
                  <CompanyCard info={c} />
                </Grid>
              )
              : <Grid item>
                <p>Sorry, No companies were found.</p>
              </Grid>
            : <Grid item>
              <p>Loading companies...</p>
            </Grid>
          }
        </Grid>
      </Paper>
    </Container>
  );
};

export default CompanyList;
