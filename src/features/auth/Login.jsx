import { useState } from "react";
import Container from "../../ui/Container";
import Form from "../../ui/Form";
import Label from "../../ui/Label";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleFormUpdate = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Form>
        <Label labelName={"Email address"}>
          <Input
            value={form.email}
            setValue={handleFormUpdate}
            placeholder={"input your email addresss"}
            name="email"
          />
        </Label>

        <Label labelName="Password">
          <Input
            value={form.password}
            setValue={handleFormUpdate}
            placeholder="Please input your password"
            name="password"
          />
        </Label>

        <Button
          label={"Create Account"}
          className="btn btn-login btn-primary"
        />
      </Form>
    </Container>
  );
}

export default Login;
