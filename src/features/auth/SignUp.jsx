import { useState } from "react";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

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
      <Form handleSubmit={handleSubmit}>
        <Label labelName="Full Name">
          <Input
            value={form.name}
            setValue={handleFormUpdate}
            placeholder="Full name"
            name="name"
          />
        </Label>

        <Label labelName="Email">
          <Input
            value={form.email}
            setValue={handleFormUpdate}
            placeholder="email address"
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

export default SignUp;
