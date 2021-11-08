import { Card, CardActionArea, CardContent, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const CompanyCard = ({
  info: { handle, name, description, logoUrl, numEmployees }
}) => (
  <Card raised>
    <CardActionArea>
      <Link underline="none" color="secondary" to={handle} component={RouterLink}>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            p: 1
          }}
        >
          {name}
        </Typography>
      </Link>
    </CardActionArea>
    <CardContent>
      {logoUrl && <img src={logoUrl} alt={handle} />}
      <Typography
        variant="body1"
      >
        {description}
      </Typography>
      <ul>
        <li>Employee Count: {numEmployees}</li>
      </ul>
    </CardContent>
  </Card>
);

export default CompanyCard;
