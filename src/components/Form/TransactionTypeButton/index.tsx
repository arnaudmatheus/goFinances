import React from "react";
import { View } from "react-native";
import { TouchableOpacityProps } from "react-native";

import { Container, Title, Icon } from "./styles";

const icons = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
};

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string;
  type: "income" | "outcome";
  isSelected: boolean;
}

export function TransactionTypeButton({
  title,
  type,
  isSelected,
  ...rest
}: TransactionTypeButtonProps) {
  return (
    <Container {...rest} isSelected={isSelected} type={type}>
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
