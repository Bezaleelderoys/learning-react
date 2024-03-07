import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, type, placeholder, name } = props;
  return (
    <div className="mb-8">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
