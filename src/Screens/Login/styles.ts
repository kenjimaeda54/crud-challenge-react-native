import styled from "@emotion/native";

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px;
  padding-bottom: 130px;
`;

export const TextLogin = styled.Text`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.gray02};
  font-family: ${({ theme }) => theme.fonts.inter400};
  margin-top: 30px;
  text-align: center;
`;
