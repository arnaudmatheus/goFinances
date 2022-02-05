import React, { useState } from "react";
import { Button } from "../../components/Form/Button";
import { CategorySelect } from "../../components/Form/CategorySelect";
import { Input } from "../../components/Form/Input";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { RegisterHeader } from "../../components/RegisterHeader";

import { Container, Form, Fields, TransactionTypeContainer } from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionType(type: "income" | "outcome") {
    setTransactionType(type);
  }
  return (
    <Container>
      <RegisterHeader />
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="preço" />

          <TransactionTypeContainer>
            <TransactionTypeButton
              title="Income"
              type="income"
              onPress={() => handleTransactionType("income")}
              isSelected={transactionType === "income"}
            />
            <TransactionTypeButton
              title="Outcome"
              type="outcome"
              onPress={() => handleTransactionType("outcome")}
              isSelected={transactionType === "outcome"}
            />
          </TransactionTypeContainer>
          <CategorySelect title="Categorias" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
