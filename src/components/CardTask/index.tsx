import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { useTheme } from "@emotion/react";
import { Feather } from "@expo/vector-icons";
import { Container, FieldName } from "./styles";

interface CardTask extends TouchableOpacityProps {
  description: string;
  handleDelete: () => void;
}

export default function CardTask({
  description,
  handleDelete,
  ...rest
}: CardTask) {
  const { colors } = useTheme();
  return (
    <Container>
      <FieldName>{description}</FieldName>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={handleDelete}>
          <Feather name="trash-2" size={24} color={colors.gray02} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 10,
          }}
          {...rest}
        >
          <Feather name="edit-3" size={24} color={colors.gray02} />
        </TouchableOpacity>
      </View>
    </Container>
  );
}
