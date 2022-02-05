import React from "react";
import { View } from "react-native";
import {
  UserWrapper,
  UserInfo,
  User,
  UserGreeting,
  UserName,
  Photo,
  LogoutIcon,
} from "./styles";

export function UserContent() {
  return (
    <UserWrapper>
      <UserInfo>
        <Photo
          source={{
            uri: "https://avatars.githubusercontent.com/u/40127095?v=4",
          }}
        />
        <User>
          <UserGreeting>Olá,</UserGreeting>
          <UserName>Matheus</UserName>
        </User>
      </UserInfo>
      <LogoutIcon name="power" />
    </UserWrapper>
  );
}
