import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../App";

const JobCard = ({
  info: { title, salary, equity, id }
}) => {
  const manageUser = useContext(UserContext);
  const { user: { applications } } = manageUser;
  const isApplied = applications.some(a => a === id);

  async function applyJob() {
    await manageUser.applyJob(id);
  }

  return (
    <Card raised>
      <CardContent>
        <Typography
          variant="h4"
          component="h3"
          color="secondary"
        >
          {title}
        </Typography>
        <ul>
          <li>Salary: ${salary}</li>
          <li>Equity: {equity}</li>
        </ul>
      </CardContent>
      <CardActions>
        <Button
          onClick={applyJob}
          disabled={isApplied}
          type="button"
          variant="outlined"
          color="primary"
          sx={{
            mb: 2
          }}
        >
          {isApplied ? "Applied" : "Apply"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
