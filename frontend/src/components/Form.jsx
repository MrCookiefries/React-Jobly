import useFormData from "../hooks/useFormData";
import FormField from "./FormField";

const Form = ({initialState, submit, submitForm, labels}) => {
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
      {Object.entries(formData).map(([key, value]) => <FormField
        key={key}
        handleChange={handleChange}
        value={value}
        name={key}
        type={getType(key)}
        label={labels[key]}
      />)}
      <button type="submit">{submit}</button>
    </form>
  );
};

export default Form;
