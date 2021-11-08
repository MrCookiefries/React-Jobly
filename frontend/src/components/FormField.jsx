import { TextField } from "@mui/material";

const FormField = ({
  handleChange,
  value,
  name,
  label,
  type = "text",
  required = true
}) => (
  <TextField
    label={label}
    variant="outlined"
    value={value}
    name={name}
    type={type}
    required={required}
    autoComplete={type === "password" ? "on" : "off"}
    onChange={handleChange}
    color="secondary"
    fullWidth
    sx={{
      my: 2
    }}
  />
);

export default FormField;
