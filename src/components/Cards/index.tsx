import React from "react";
import { View } from "react-native";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

interface CardProps {
  title: string;
  type: "up" | "down" | "total";
  value: string;
  lastTransaction: string;
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function Cards({ title, type, value, lastTransaction }: CardProps) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>

        <Icon name={icon[type]} size={24} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{value}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
