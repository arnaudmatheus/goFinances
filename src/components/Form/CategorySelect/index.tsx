import React from "react";
import { View } from "react-native";

import { Container, Icon, Title } from "./styles";

interface CategorySelectProps {
  title: string;
}

export function CategorySelect({ title }: CategorySelectProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon name="chevron-down" />
    </Container>
  );
}
