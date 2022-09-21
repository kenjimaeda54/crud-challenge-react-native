import styled from "@emotion/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background-color: ${({ theme }) => theme.colors.gray03};
  border-radius: 8px;
  margin: 7px 0px;
`;

export const FieldName = styled.Text`
  max-width: 270px;
  font-family: ${({ theme }) => theme.fonts.inter400};
  color: ${({ theme }) => theme.colors.gray02};
  font-size: 18px;
  line-height: 23px;
`;
