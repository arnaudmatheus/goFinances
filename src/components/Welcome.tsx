import React from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';

interface Props {
  name: string;
}

export function Welcome({ name }: Props) {
  return (
    <View>
      <Text>Welcome {name}!</Text>
    </View>
  );
}
