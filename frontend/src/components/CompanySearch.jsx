import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const CompanySearch = ({ searchCompanies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  function handleChange(evt) {
    const { value } = evt.target;
    setSearchTerm(value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    setIsSearching(true);
    setSearchTerm("");
    await searchCompanies(searchTerm);
    setIsSearching(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4
          }}
        >
          <TextField
            label="Search By Name"
            type="text"
            required
            value={searchTerm}
            placeholder="Davis"
            onChange={handleChange}
            color="primary"
            fullWidth
          />
          <Button
            color="primary"
            disabled={isSearching}
            type="submit"
            variant="contained"
          >
            Go!
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default CompanySearch;
