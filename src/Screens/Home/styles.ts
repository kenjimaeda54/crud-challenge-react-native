import styled from "@emotion/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const WrapView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray03};
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.inter900};
  max-width: 271px;
  color: ${({ theme }) => theme.colors.gray02};
`;

export const Button = styled.TouchableOpacity`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 20px 24px;
`;
