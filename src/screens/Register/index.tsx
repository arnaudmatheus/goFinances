import React from "react";
import { Input } from "../../components/Form/Input";
import { RegisterHeader } from "../../components/RegisterHeader";

import { Container, Form } from "./styles";

export function Register() {
  return (
    <Container>
      <RegisterHeader />
      <Form>
        <Input placeholder="teste" />
        <Input placeholder="preço" />
      </Form>
    </Container>
  );
}
