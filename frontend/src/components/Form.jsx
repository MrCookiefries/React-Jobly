import { Button } from "@mui/material";
import { Box } from "@mui/system";
import useFormData from "../hooks/useFormData";
import FormField from "./FormField";

const Form = ({ initialState, submit, submitForm, labels }) => {
  const [formData, handleChange, resetFormData] = useFormData(initialState);

  function getType(name) {
    return name === "password"
      ? "password"
      : name === "email"
        ? "email"
        : "text";
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    resetFormData();
    await submitForm(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {Object.entries(formData).map(([key, value]) => <FormField
          key={key}
          handleChange={handleChange}
          value={value}
          name={key}
          type={getType(key)}
          label={labels[key]}
        />)}
        <Button
          type="submit"
          variant="outlined"
          color="success"
          sx={{
            mt: 2,
            width: "min-content",
            alignSelf: "end"
          }}
        >
          {submit}
        </Button>
      </Box>
    </form>
  );
};

export default Form;
