import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

import styled, { css } from "styled-components/native";

interface IconProps {
  type: string;
}

interface ContainerProps {
  isSelected: boolean;
  type: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: ${({ isSelected }) => (isSelected ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;

  ${({ isSelected, type }) =>
    isSelected &&
    type === "income" &&
    css`
      background-color: ${({ theme }) => theme.colors.successLight};
      border: 0px;
    `}

  ${({ isSelected, type }) =>
    isSelected &&
    type === "outcome" &&
    css`
      background-color: ${({ theme }) => theme.colors.attentionLight};
      border: 0px;
    `}
`;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === "income" ? theme.colors.success : theme.colors.attention};
`;
