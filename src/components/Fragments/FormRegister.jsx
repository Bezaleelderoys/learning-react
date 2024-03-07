import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Insert your username here.."
      />
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="*******"
      />
      <InputForm
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="*******"
      />

      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
