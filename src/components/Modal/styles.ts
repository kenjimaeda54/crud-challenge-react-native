import styled from "@emotion/native";

export const Container = styled.View`
  display: flex;
  height: 250px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter900};
  font-size: 23px;
  color: ${({ theme }) => theme.colors.gray02};
  line-height: 28px;
  margin-bottom: 30px;
`;

export const FieldName = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.inter400};
  color: ${({ theme }) => theme.colors.gray02};
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 18px 0px;
  width: 100%;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter400};
  color: ${({ theme }) => theme.colors.gray02};
  font-size: 18px;
  line-height: 23px;
  text-align: center;
`;
