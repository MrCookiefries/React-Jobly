import { Modal, Box, Paper, Typography, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import JobCard from "./JobCard";

const CompanyDetails = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await JoblyApi.getCompany(handle);
      setCompany(resp);
    })();
  }, [handle]);

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
    navigate(`..`);
  };

  return (
    <Modal
      disablePortal
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          height: "80vmin", width: "80vmin",
          overflowY: "scroll"
        }}
      >
        <Paper
          elevated={6}
          sx={{
            p: 2
          }}
        >
          {company
            ? <>
              <CompanyCard info={company} />
              <Box>
                <Typography
                  variant="h4"
                  component="h3"
                  color="primary"
                  sx={{
                    my: 4
                  }}
                >
                  Jobs Here
                </Typography>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  {company.jobs.length
                    ? company.jobs.map(j =>
                      <Grid key={j.id} item xs={12} sm={10} md={8} lg={6}>
                        <JobCard info={j} />
                      </Grid>
                    )
                    : <Grid item>
                      <p>{company.name} has no jobs.</p>
                    </Grid>
                  }
                </Grid>
              </Box>
            </>
            : <p>Searching for {handle}</p>
          }
        </Paper>
      </Box>
    </Modal>
  );
};

export default CompanyDetails;
