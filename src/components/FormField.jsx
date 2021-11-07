
const FormField = ({
  handleChange,
  value,
  name,
  label,
  type="text",
  required=true
}) => (
  <label>
    {label}
    <input
      onChange={handleChange}
      value={value}
      name={name}
      type={type}
      required={required}
      autoComplete={type === "password" ? "on": "off"}
    />
  </label>
);

export default FormField;
