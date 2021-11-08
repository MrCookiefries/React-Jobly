import { Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await JoblyApi.getJobs();
      setJobs(resp);
    })();
  }, []);

  return (
    <Container maxWidth="xl">
      <Paper
        elevated={4}
        sx={{
          p: 1
        }}
      >
        <Typography
          color="primary"
          variant="h3"
          component="h2"
          gutterBottom
        >
          Jobs
        </Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          {jobs
            ? jobs.map(j =>
              <Grid key={j.id} item xs={12} sm={8} md={6} lg={4} >
                <JobCard info={j} />
              </Grid>
            )
            : <Grid item>
              <p>Loading the jobs...</p>
            </Grid>
          }
        </Grid>
      </Paper>
    </Container>
  );
};

export default JobList;
